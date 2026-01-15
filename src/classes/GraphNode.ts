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

import type Comparable from "../interfaces/Comparable";
import GraphEdge from "./GraphEdge";
import ValueSet from "./ValueSet";

export default class GraphNode implements Comparable<GraphNode> {
  /**
   * Check if two nodes are equal.
   * @param a A node.
   * @param b An other node.
   * @returns `true` if the values of the two nodes are equal, `false` otherwise.
   */
  public static equals(a: GraphNode, b: GraphNode): boolean {
    return a.value === b.value;
  }

  private readonly _value: string;
  private readonly _neighbors: ValueSet<GraphEdge>;

  constructor(value: string) {
    this._value = value;
    this._neighbors = new ValueSet<GraphEdge>();
  }

  /** Value of the node. */
  public get value(): string {
    return this._value;
  }

  /** A set of neighbors nodes and their distance. */
  public get neighbors(): ValueSet<GraphEdge> {
    return this._neighbors;
  }

  public toString(): string {
    let neighborsString: string = "";
    for (const neighbor of this.neighbors) {
      neighborsString += `${neighbor.node.value}: ${neighbor.distance}, `;
    }
    return `${this.value}: [${neighborsString.slice(0, -2)}]`;
  }

  /**
   * Check if this node is equal to an other node.
   * @param otherNode The node to compare with.
   * @returns `true` if the values of the two nodes are equal, `false` otherwise.
   */
  public equals(otherNode: GraphNode): boolean {
    return GraphNode.equals(this, otherNode);
  }

  /**
   * Add a new neighbor node at a certain distance from this node.
   * @param node The new neighbor node.
   * @param distance Distance between this node and the new neighbor node.
   */
  public addNeighbor(node: GraphNode, distance: number): void {
    this.neighbors.add(new GraphEdge(node, distance));
  }

  /**
   * Remove a node from the neighbors.
   * @param node Node to remove from the neighbors.
   */
  public removeNeighbor(node: GraphNode): void {
    let edgeToDelete: GraphEdge | null = null;
    for (const neighbor of this.neighbors) {
      if (neighbor.node === node) {
        edgeToDelete = neighbor;
      }
    }
    if (!edgeToDelete) {
      throw new Error(`Node ${node} not found in node ${this} neighbors`);
    }
    this.neighbors.delete(edgeToDelete);
  }
}
