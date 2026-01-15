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

import GraphNode from "./GraphNode";

export default class Graph {
  private readonly _name: string;
  private readonly _nodes: Set<GraphNode>;

  constructor(name: string) {
    this._name = name;
    this._nodes = new Set<GraphNode>();
  }

  public get name(): string {
    return this._name;
  }

  public get nodes(): Set<GraphNode> {
    return this._nodes;
  }

  public toString(): string {
    let result: string = `${this.name}:`;
    for (const node of this.nodes) {
      result += `\n${node}`;
    }
    return result;
  }

  public addNode(node: GraphNode): void {
    this.nodes.add(node);
  }

  public removeNode(node: GraphNode): void {
    this.nodes.delete(node);
  }

  public connect(from: GraphNode, to: GraphNode, distance: number): void {
    if (!this.nodes.has(from)) {
      throw new Error(`Node ${from} not in graph ${this.name}`);
    }
    if (!this.nodes.has(to)) {
      throw new Error(`Node ${from} not in graph ${this.name}`);
    }
    from.addNeighbor(to, distance);
  }

  public disconnect(from: GraphNode, to: GraphNode): void {
    if (!this.nodes.has(from)) {
      throw new Error(`Node ${from} not in graph ${this.name}`);
    }
    if (!this.nodes.has(to)) {
      throw new Error(`Node ${from} not in graph ${this.name}`);
    }
    from.removeNeighbor(to);
  }
}
