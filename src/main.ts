/*
 * A website for visualizing graphs.
 * Copyright (C) 2026  Matthieu LE BOUT
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import "./style.css";
import Graph from "./classes/Graph";
import type GraphNode from "./classes/GraphNode";
import { createGraph, getBretagne } from "./utils/testsGraphs";
import * as d3 from "d3";
import { SCALE } from "./consts";

const view = {
  cx: 1425,
  cy: 1000,
  scale: SCALE / 1,
};

const svg = d3.select<SVGSVGElement, unknown>("#graph-svg");

const setSvgView = () => {
  const width: number = window.innerWidth * view.scale;
  const height: number = window.innerHeight * view.scale;
  const x: number = view.cx - width / 2;
  const y: number = view.cy - height / 2;
  svg.attr("width", window.innerWidth);
  svg.attr("height", window.innerHeight);
  svg.attr("viewBox", `${x} ${y} ${width} ${height}`);
};

setSvgView();

window.addEventListener("resize", setSvgView);

const shortestPath = (
  graph: Graph,
  startName: string,
  destinationName: string,
): void => {
  const startNode: GraphNode | null = graph.getNodeByValue(startName);
  const destinationNode: GraphNode | null =
    graph.getNodeByValue(destinationName);
  if (!startNode) {
    throw new Error(`${startName} not in graph ${graph.name}`);
  }
  if (!destinationNode) {
    throw new Error(`${destinationName} not in graph ${graph.name}`);
  }
  const path = graph.dijkstra(startNode, destinationNode);
  if (path === null) {
    console.log(
      `Dijkstra: No path found between ${startNode.value} and ${destinationNode.value}.`,
    );
  } else {
    let solutionString: string = "";
    for (const node of path.path) {
      solutionString += `${node.value} → `;
    }
    solutionString = `[${solutionString.slice(0, -3)}]`;

    console.log(
      `Shortest path between ${startNode.value} and ${destinationNode.value}: ` +
        `${solutionString} with a distance of ${Math.round(path.distance)}`,
    );
  }
};

const graph: Graph = createGraph();
shortestPath(graph, "A", "B");

const bretagne: Graph = getBretagne();
console.log(bretagne.toString());
shortestPath(bretagne, "Lorient", "Lannion");
shortestPath(bretagne, "Brest", "Rennes");

bretagne.drawGraph(svg);
