import React, { useState } from "react";
import * as d3 from "d3";

const Draw = ({ data, field, width, height }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const margin = { top: 50, right: 50, bottom: 50, left: 50 },
    width = width - margin.left - margin.right,
    height = height - margin.top - margin.bottom,
    color = "OrangeRed";

  const yMinVal = d3.min(data, (d) => d.value);
  const yMaxVal = d3.max(data, (d) => d.value);

  const getX = d3
    .scaleLinear()
    .domain(d3.extent(data, (d) => d.id))
    .range([0, width]);

  const getY = d3
    .scaleLinear()
    .domain([yMinVal - 1, yMaxVal + 2])
    .range([height, 0]);

  const getXAxis = (ref) => {
    const xAxis = d3.axisBottom(getX);
    d3.select(ref).call(xAxis.ticks(null, "s"));
  };

  const getYAxis = (ref) => {
    const yAxis = d3.axisLeft(getY).tickSize(-width).tickPadding(1);
    d3.select(ref).call(yAxis);
  };

  const Line = d3
    .line()
    .x((d) => getX(d.id))
    .y((d) => getY(d.value))
    .curve(d3.curveMonotoneX)(data);

  const areaPath = d3
    .area()
    .x((d) => getX(d.id))
    .y0((d) => getY(d.value))
    .y1(() => getY(yMinVal - 1))
    .curve(d3.curveMonotoneX)(data);

  const handleMouseMove = (e) => {
    const bisect = d3.bisector((d) => d.id).right,
      x0 = getX.invert(d3.pointer(e, this)[0]),
      index = bisect(data, x0, 1);
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <div className="wrapper">
      <svg
        viewBox={`0 0 ${width + margin.left + margin.right} ${
          height + margin.top + margin.bottom
        }`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <g className="axis" ref={getYAxis} />
        <g
          className="axis xAxis"
          ref={getXAxis}
          transform={`translate(0,${height})`}
        />
        <path fill={color} d={areaPath} opacity={0.3} />
        <path strokeWidth={3} fill="none" stroke={color} d={Line} />
        <text
          transform={"rotate(-90)"}
          x={0 - height / 1.5}
          y={0 - margin.left}
          dy="1.5em"
        >
          {field}
        </text>
        <text x={getX(data.id)} y={height} dx={width / 2} dy="2.5em">
          {"ID"}
        </text>
        <text
          className="title"
          x={width / 2}
          y={0 - margin.top / 2}
          textAnchor="middle"
        >
          {"value vs ID"}
        </text>
        {data.map((item, index) => {
          return (
            <g key={index}>
              <text fill="$666" x={getX(item.id)} y={-5} textAnchor="end">
                {index === activeIndex ? item.id + "(" : ""}
              </text>
              <text fill="$666" x={getX(item.id)} y={-5} textAnchor="start">
                {index === activeIndex ? item.value + ")" : ""}
              </text>
              <circle
                cx={getX(item.id)}
                cy={getY(item.value)}
                r={index === activeIndex ? 3 : 2}
                fill={color}
                strokeWidth={index === activeIndex ? 2 : 0}
                stroke="#fff"
                style={{ transition: "ease-out .1s" }}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default Draw;
