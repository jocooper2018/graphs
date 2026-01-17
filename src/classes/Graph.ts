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

import type { PathType } from "../types";
import DijkstraExplorationGraph from "./DijkstraExplorationGraph";
import DijkstraExplorationGraphNode from "./DijkstraExplorationGraphNode";
import type GraphEdge from "./GraphEdge";
import GraphNode from "./GraphNode";
import ValueSet from "./ValueSet";
import * as d3 from "d3";

export default class Graph {
  private readonly _name: string;
  private readonly _nodes: ValueSet<GraphNode>;

  constructor(name: string) {
    this._name = name;
    this._nodes = new ValueSet<GraphNode>();
  }

  /** The name of the graph. */
  public get name(): string {
    return this._name;
  }

  /** A set containing every nodes in the graph. */
  public get nodes(): ValueSet<GraphNode> {
    return this._nodes;
  }

  public toString(): string {
    let result: string = `${this.name}:`;
    for (const node of this.nodes) {
      result += `\n${node}`;
    }
    return result;
  }

  /**
   * Check if a node is in the graph.
   * @param node The node whose presence in the graph must be verified.
   * @returns `true` if the node is in the graph, `false` otherwise.
   */
  public contains(node: GraphNode): boolean {
    for (const node_ of this.nodes) {
      if (node.equals(node_)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Add a node to the graph.
   * @param node Node to add.
   */
  public addNode(node: GraphNode): void {
    this.nodes.add(node);
  }

  /**
   * Remove a node from the graph.
   * @param node Node to remove.
   */
  public removeNode(node: GraphNode): void {
    this.nodes.delete(node);
  }

  /**
   * Connect 2 nodes of the graph in 1 direction.
   * @param from Node at the start of the connection to create.
   * @param to Node at the end of the connection to create.
   * @param distance Distance between the nodes.
   */
  public connect(from: GraphNode, to: GraphNode, distance: number): void {
    if (!this.nodes.has(from)) {
      throw new Error(`Node ${from} not in graph ${this.name}`);
    }
    if (!this.nodes.has(to)) {
      throw new Error(`Node ${from} not in graph ${this.name}`);
    }
    from.addNeighbor(to, distance);
  }

  /**
   * Disconnect 2 nodes of the graph in 1 direction.
   * @param from Node at the start of the connection to remove.
   * @param to Node at the end of the connection to remove.
   */
  public disconnect(from: GraphNode, to: GraphNode): void {
    if (!this.nodes.has(from)) {
      throw new Error(`Node ${from} not in graph ${this.name}`);
    }
    if (!this.nodes.has(to)) {
      throw new Error(`Node ${from} not in graph ${this.name}`);
    }
    from.removeNeighbor(to);
  }

  /**
   * Search a node in the graph by its value. Return `null` if the node was not found.
   * @param value Value of the wanted node.
   * @returns The node of the graph whose value is `value`, and `null` if no node of the graph has the wanted value.
   */
  public getNodeByValue(value: string): GraphNode | null {
    for (const node of this.nodes) {
      if (node.value === value) {
        return node;
      }
    }
    return null;
  }

  /**
   * Draw the graph in a svg using d3.js.
   * @param svg The d3 selection of a svg in which draw the graph.
   */
  public drawGraph(
    svg: d3.Selection<SVGSVGElement, unknown, HTMLElement, any>,
  ): void {
    // Add lines
    const linesG = svg.append("g");
    for (const node of this.nodes) {
      linesG
        .append("g")
        .selectAll("line")
        .data(node.neighbors)
        .join("line")
        .attr("x1", node.position.x)
        .attr("y1", node.position.y)
        .attr("x2", (neighbor: GraphEdge) => neighbor.node.position.x)
        .attr("y2", (neighbor: GraphEdge) => neighbor.node.position.y);
    }

    // Add nodes
    svg
      .append("g")
      .selectAll("text")
      .data(this.nodes)
      .join("ellipse")
      .attr("cx", (node: GraphNode) => node.position.x)
      .attr("cy", (node: GraphNode) => node.position.y)
      .attr("rx", (node: GraphNode) => (node.value.length - 1) * 5 + 20)
      .attr("ry", 20);

    // Add texts
    svg
      .append("g")
      .selectAll("text")
      .data(this.nodes)
      .join("text")
      .text((node: GraphNode) => node.value)
      .attr("x", (node: GraphNode) => node.position.x)
      .attr("y", (node: GraphNode) => node.position.y)
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "middle");
  }

  /**
   * Find the shortest path and its distance using the Dijkstra's algorithm.
   * If no path exist, `null` is returned.
   * @param start Starting node.
   * @param destination Destination node.
   * @returns The shortest path between `start` and `destination` its length if it exist, `null` otherwise.
   */
  public dijkstra(start: GraphNode, destination: GraphNode): PathType | null {
    const explorationGraph = new DijkstraExplorationGraph();
    let currentNode: DijkstraExplorationGraphNode | null;
    let pathFound: boolean = false;

    currentNode = new DijkstraExplorationGraphNode(start, null, 0);
    explorationGraph.addNode(currentNode);

    while (!pathFound && currentNode !== null) {
      // 1. Exploration
      for (const neighbor of currentNode.node.neighbors) {
        if (neighbor.node === currentNode.previousNode?.node) {
          continue;
        }
        explorationGraph.addNode(
          new DijkstraExplorationGraphNode(
            neighbor.node,
            currentNode,
            currentNode.totalDistance + neighbor.distance,
          ),
        );
      }
      currentNode.explored = true;

      // 2. Selection
      explorationGraph.eliminateDuplicates();
      currentNode = explorationGraph.getClosestUnexploredDijkstraNode();

      pathFound = currentNode?.node === destination;
    }

    if (currentNode === null) {
      // No path found
      return null;
    }

    const distance: number = currentNode.totalDistance;
    const solution: GraphNode[] = [];
    while (currentNode !== null) {
      solution.unshift(currentNode.node);
      currentNode = currentNode.previousNode;
    }

    return { path: solution, distance: distance };
  }
}
