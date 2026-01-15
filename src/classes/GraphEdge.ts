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

import type GraphNode from "./GraphNode";

export default class GraphEdge {
  private readonly _node: GraphNode;
  private readonly _distance: number;

  constructor(node: GraphNode, distance: number) {
    this._node = node;
    this._distance = distance;
  }

  public get node(): GraphNode {
    return this._node;
  }

  public get distance(): number {
    return this._distance;
  }

  public toString(): string {
    return `${this.node.value}: ${this.distance}`;
  }
}
