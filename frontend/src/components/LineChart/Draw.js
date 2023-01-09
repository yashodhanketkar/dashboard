import * as d3 from "d3";

function getTickSpacer(width, len) {
  if (len < 5) {
    return width / 50;
  } else if (len < 100) {
    return width / 50;
  } else {
    return width / 100;
  }
}

function LineChart(
  data,
  {
    x = ([x]) => x,
    y = ([, y]) => y,
    defined,
    curve = d3.curveLinear,
    marginTop = 20,
    marginRight = 30,
    marginBottom = 30,
    marginLeft = 40,
    width = 640,
    height = 400,
    // xType = d3.scaleBand,
    xType = d3.scaleLinear,
    xDomain,
    xRange = [marginLeft, width - marginRight],
    yType = d3.scaleLinear,
    yDomain,
    yRange = [height - marginBottom, marginTop],
    xFormat,
    yFormat,
    yLabel,
    color = "currentColor",
    textColor = "black",
    strokeLinecap = "round",
    strokeLinejoin = "round",
    strokeWidth = 1.5,
    strokeOpacity = 1,
  } = {}
) {
  const X = d3.map(data, x);
  const Y = d3.map(data, y);
  const I = d3.range(X.length);
  if (defined === undefined) defined = (d, i) => !isNaN(X[i]) && !isNaN(Y[i]);
  const D = d3.map(data, defined);

  var TickSpacer = getTickSpacer(width, X.length);

  if (xDomain === undefined) xDomain = d3.extent(X);
  if (yDomain === undefined) yDomain = [0, d3.max(Y)];

  const xScale = xType(xDomain, xRange);
  const yScale = yType(yDomain, yRange);
  const xAxis = d3.axisBottom(xScale).ticks(TickSpacer).tickSizeOuter(0);
  const yAxis = d3.axisLeft(yScale).ticks(height / 50, yFormat);

  const line = d3
    .line()
    .defined((i) => D[i])
    .curve(curve)
    .x((i) => xScale(X[i]))
    .y((i) => yScale(Y[i]));

  const svg = d3
    .create("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [0, 0, width, height])
    .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

  svg
    .append("g")
    .attr("transform", `translate(0,${height - marginBottom})`)
    .call(xAxis);

  svg
    .append("g")
    .attr("transform", `translate(${marginLeft},0)`)
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
        .attr("x", marginLeft / 3)
        .attr("y", 10)
        .attr("fill", textColor)
        .attr("text-anchor", "end")
        .text(yLabel)
    );

  svg
    .append("path")
    .attr("fill", "none")
    .attr("stroke", color)
    .attr("stroke-width", strokeWidth)
    .attr("stroke-linecap", strokeLinecap)
    .attr("stroke-linejoin", strokeLinejoin)
    .attr("stroke-opacity", strokeOpacity)
    .attr("d", line(I));

  return svg.node();
}

export default function Draw({ data, field, width, height }) {
  const chart = LineChart(data, {
    x: (d) => d.id,
    y: (d) => d.value,
    yLabel: field,
    width: width,
    height: height,
    color: "orangered",
  });

  return chart;
}
