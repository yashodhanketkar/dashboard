import * as d3 from "d3";

function BarChart(
  data,
  {
    x = (d, i) => i,
    y = (d) => d,
    title,
    width = 600,
    height = 400,
    marginTop = 50,
    marginRight = 0,
    marginBottom = 50,
    marginLeft = 50,
    xType = d3.scaleBand,
    yType = d3.scaleLinear,
    xDomain,
    xRange = [marginLeft, width - marginRight],
    yDomain,
    yRange = [height - marginBottom, marginTop],
    xPadding = 0.1,
    yFormat,
    yLabel,
    color = "orangered",
    textColor = "gainsboro",
  } = {}
) {
  console.log(data);

  const X = d3.map(data, x);
  const Y = d3.map(data, y);

  if (xDomain === undefined) xDomain = X;
  if (yDomain === undefined) yDomain = [0, d3.max(Y)];
  xDomain = new d3.InternSet(xDomain);

  const I = d3.range(X.length).filter((i) => xDomain.has(X[i]));

  const xScale = xType(xDomain, xRange).padding(xPadding);
  const yScale = yType(yDomain, yRange);
  const xAxis = d3.axisBottom(xScale).tickSizeOuter(0);
  const yAxis = d3.axisLeft(yScale).ticks(height / 40, yFormat);

  if (title === undefined) {
    const formatValue = yScale.tickFormat(100, yFormat);
    title = (i) => `${X[i]}\n${formatValue(Y[i])}`;
  } else {
    const O = d3.map(data, (d) => d);
    const T = title;
    title = (i) => T(O[i], i, data);
  }

  const svg = d3
    .create("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewbox", [0, 0, width, height])
    .attr("style", "max-width: 100%, height: auto, height: intrinsic;");

  svg
    .append("g")
    .attr("transform", `translate(${marginLeft}, 0)`)
    .call(yAxis)
    .call((g) => g.select(".domain").remove())
    .call((g) =>
      g
        .selectAll(".tick line")
        .clone()
        .attr("x2", width - marginLeft - marginRight)
        .attr("stroke-opacity", 0.1)
    )
    .call((g) =>
      g
        .append("text")
        .attr("x", -marginLeft)
        .attr("y", 10)
        .attr("fill", textColor)
        .attr("text-anchor", "start")
        .text(yLabel)
    );

  const bar = svg
    .append("g")
    .attr("fill", color)
    .selectAll("rect")
    .data(I)
    .join("rect")
    .attr("x", (i) => xScale(X[i]))
    .attr("y", (i) => height - marginBottom - (yScale(0) - yScale(Y[i])))
    .attr("height", (i) => yScale(0) - yScale(Y[i]))
    .attr("width", xScale.bandwidth());

  if (title) bar.append("title").text(title);

  svg
    .append("g")
    .attr("transform", `translate(0,${height - marginBottom})`)
    .call(xAxis);

  return svg.node();
}

function Draw({ data, field, width, height }) {
  var chart = BarChart(data, {
    x: (d) => d.id,
    y: (d) => d.value,
    xDomain: d3.groupSort(
      data,
      ([d]) => -d.value,
      (d) => d.id
    ),
    yFormat: ".2f",
    yLabel: field,
    width: width,
    height: height,
    color: "orangered",
  });

  return chart;
}

export default Draw;
