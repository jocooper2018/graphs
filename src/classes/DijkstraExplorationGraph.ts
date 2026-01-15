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

import DijkstraExplorationGraphNode from "./DijkstraExplorationGraphNode";
import GraphNode from "./GraphNode";

/**
 * An exploration graph used by the Dijkstra's algorithm.
 */
export default class DijkstraExplorationGraph {
  private readonly _nodes: DijkstraExplorationGraphNode[];

  constructor() {
    this._nodes = [];
  }

  /** The list of every nodes in the graph. */
  public get nodes(): DijkstraExplorationGraphNode[] {
    return this._nodes;
  }

  /**
   * Add a node to the graph.
   * @param node The node to add to the graph.
   */
  public addNode(node: DijkstraExplorationGraphNode) {
    this.nodes.push(node);
  }

  /**
   * Check if a node is in the graph.
   * @param node The node whose presence in the graph must be verified.
   * @returns `true` if the node is in the graph, `false` otherwise.
   */
  public contains(node: GraphNode): boolean {
    for (const dNode of this.nodes) {
      if (GraphNode.equals(node, dNode.node)) {
        return true;
      }
    }
    return false;
  }

  /**
   * @returns The closest unexplored and not eliminated node if it exist, `null` otherwise.
   */
  public getClosestUnexploredDijkstraNode(): DijkstraExplorationGraphNode | null {
    let closestUnexploredDNode: DijkstraExplorationGraphNode | null = null;
    for (const dNode of this.nodes) {
      if (dNode.explored || dNode.eliminated) {
        continue;
      }
      if (
        closestUnexploredDNode === null ||
        dNode.totalDistance < closestUnexploredDNode.totalDistance
      ) {
        closestUnexploredDNode = dNode;
      }
    }
    return closestUnexploredDNode;
  }

  /**
   * When a nodes is in the graph multiple times, this method mark all of them as eliminated,
   * except for the one with the smallest total distance.
   */
  public eliminateDuplicates(): void {
    // TODO Check if this method can be deleted.
    for (const dNode of this.nodes) {
      if (dNode.eliminated) {
        continue;
      }
      for (const dNode2 of this.nodes) {
        if (
          dNode === dNode2 ||
          dNode2.eliminated ||
          !dNode.node.equals(dNode2.node)
        ) {
          continue;
        }
        if (dNode.totalDistance < dNode2.totalDistance) {
          dNode2.eliminated = true;
        } else {
          /* if (dNode.totalDistance > dNode2.totalDistance) */
          dNode.eliminated = true;
          break;
        }
      }
    }
  }
}
