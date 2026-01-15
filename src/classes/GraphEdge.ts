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
import GraphNode from "./GraphNode";

export default class GraphEdge implements Comparable<GraphEdge> {
  public static equals(a: GraphEdge, b: GraphEdge): boolean {
    return GraphNode.equals(a.node, b.node) && a.distance === b.distance;
  }

  private readonly _node: GraphNode;
  private readonly _distance: number;

  constructor(node: GraphNode, distance: number) {
    this._node = node;
    this._distance = distance;
  }

  /** The node where the edge is pointing to. */
  public get node(): GraphNode {
    return this._node;
  }

  /** The distance of the node. */
  public get distance(): number {
    return this._distance;
  }

  public toString(): string {
    return `${this.node.value}: ${this.distance}`;
  }

  public equals(other: GraphEdge): boolean {
    return GraphEdge.equals(this, other);
  }
}
