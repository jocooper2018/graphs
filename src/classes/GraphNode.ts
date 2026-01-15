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

import GraphEdge from "./GraphEdge";

export default class GraphNode {
  private readonly _value: string;
  private readonly _neighbors: Set<GraphEdge>;

  constructor(value: string) {
    this._value = value;
    this._neighbors = new Set<GraphEdge>();
  }

  public get value(): string {
    return this._value;
  }

  public get neighbors(): Set<GraphEdge> {
    return this._neighbors;
  }

  public toString(): string {
    let neighborsString: string = "";
    for (const neighbor of this.neighbors) {
      neighborsString += `${neighbor.node.value}: ${neighbor.distance}, `;
    }
    return `${this.value}: [${neighborsString.slice(0, -2)}]`;
  }

  public addNeighbor(node: GraphNode, distance: number): void {
    this.neighbors.add(new GraphEdge(node, distance));
  }

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
