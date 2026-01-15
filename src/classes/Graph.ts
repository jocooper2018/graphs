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
import ValueSet from "./ValueSet";

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
}
