import * as d3 from "d3";

function getFontSize({ radius }) {
  const calculatedSize = radius / 30;
  if (calculatedSize < 8) {
    return "8px";
  } else if (calculatedSize > 16) {
    return "16px";
  } else {
    return `${calculatedSize}px`;
  }
}

export default function Draw({ data, start, limit, field, width, height }) {
  const radius = Math.min(width, height);
  const fontSize = getFontSize({ radius });

  var colorScale = d3
    .scaleSequential(d3.interpolate("orange", "red"))
    .domain([start, limit]);

  d3.select("#pie-chart")
    .append("g")
    .attr("transform", `translate(${radius / 2},${radius / 2})`);

  d3.select("#pie-chart")
    .append("g")
    .append("text")
    .attr("transform", `translate(${radius / 2},${radius / 2 + 5})`)
    .attr("text-anchor", "middle")
    .text(field)
    .attr("class", "title");

  var angleGen = d3
    .pie()
    .value((d) => d.value)
    .sortValues((a, b) => (a < b ? 1 : -1));

  var adata = angleGen(data);

  var arcGen = d3
    .arc()
    .innerRadius(radius / 6)
    .outerRadius(radius / 3);

  d3.select("#pie-chart g")
    .selectAll("path")
    .data(adata)
    .enter()
    .append("path")
    .attr("d", arcGen)
    .attr("fill", (d) => colorScale(d.value))
    .attr("stroke", "gray")
    .attr("stroke-width", 1);

  d3.select("#pie-chart")
    .selectAll("newText")
    .data(adata)
    .enter()
    .append("text")
    .attr(
      "x",
      (d) =>
        d3.pointRadial(
          (d.startAngle + d.endAngle) / 2,
          (radius / 5 + radius / 3) / 2
        )[0]
    )
    .attr(
      "y",
      (d) =>
        d3.pointRadial(
          (d.startAngle + d.endAngle) / 2,
          (radius / 5 + radius / 3) / 2
        )[1]
    )
    .attr("text-anchor", "middle")
    .text((d) => `${d.data.value}`)
    .attr("font-size", fontSize)
    .attr("transform", `translate(${radius / 2},${radius / 2})`);

  return <svg id="pie-chart" width={width} height={height} />;
}
