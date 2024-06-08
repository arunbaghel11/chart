import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const D3Chart = ({ data }) => {
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current)
      .attr('width', 800)
      .attr('height', 400);

    // Clear previous content
    svg.selectAll('*').remove();

    // Define the scales
    const xScale = d3.scaleBand()
      .domain(data.map((d, i) => i))
      .range([0, 800])
      .padding(0.1);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.intensity) * 10])
      .nice()
      .range([400, 0]);

    // Create the bars
    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => xScale(i))
      .attr('y', d => yScale(d.intensity * 10))
      .attr('width', xScale.bandwidth())
      .attr('height', d => 400 - yScale(d.intensity * 10))
      .attr('fill', 'blue');

    // Add x-axis
    svg.append('g')
      .attr('transform', 'translate(0,400)')
      .call(d3.axisBottom(xScale).tickFormat(i => data[i].topic).tickSizeOuter(0));

    // Add y-axis
    svg.append('g')
      .call(d3.axisLeft(yScale));

  }, [data]);

  return <svg ref={ref}></svg>;
};

export default D3Chart;
