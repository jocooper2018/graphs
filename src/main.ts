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

import Graph from "./classes/Graph";
import type GraphNode from "./classes/GraphNode";
import { createGraph } from "./utils/testsGraphs";

const graph: Graph = createGraph();

console.log(graph.toString());

const nodeA: GraphNode | null = graph.getNodeByValue("A");
const nodeJ: GraphNode | null = graph.getNodeByValue("J");

if (!nodeA || !nodeJ) {
  throw new Error("A or J is null");
}

console.log(nodeA.toString());
console.log(nodeJ.toString());

const pathAJ = graph.dijkstra(nodeA, nodeJ);

if (pathAJ === null) {
  console.log(
    `Dijkstra: No path found between ${nodeA.value} and ${nodeJ.value}.`
  );
} else {
  let solutionString: string = "";
  for (const node of pathAJ.path) {
    solutionString += `${node.value} → `;
  }
  solutionString = `[${solutionString.slice(0, -3)}]`;

  console.log(
    `Shortest path between ${nodeA.value} and ${nodeJ.value}: ` +
      `${solutionString} with a distance of ${pathAJ.distance}`
  );
}
