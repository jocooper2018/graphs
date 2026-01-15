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

/**
 * A node for a graph used by the Dijkstra's algorithm.
 */
export default class DijkstraExplorationGraphNode {
  private readonly _node: GraphNode;
  private readonly _previousNode: DijkstraExplorationGraphNode | null;
  private readonly _totalDistance: number;
  private _explored: boolean;
  private _eliminated: boolean;

  constructor(
    node: GraphNode,
    previousNode: DijkstraExplorationGraphNode | null,
    totalCost: number
  ) {
    this._node = node;
    this._previousNode = previousNode;
    this._totalDistance = totalCost;
    this._explored = false;
    this._eliminated = false;
  }

  /** A node in the graph in which we are searching for a path. */
  public get node(): GraphNode {
    return this._node;
  }

  /** The previous node. Used to find the path at the end of the Dijkstra's algorithm. */
  public get previousNode(): DijkstraExplorationGraphNode | null {
    return this._previousNode;
  }

  /** Total distance to get here. */
  public get totalDistance(): number {
    return this._totalDistance;
  }

  /** Has this node been fully explored? */
  public get explored(): boolean {
    return this._explored;
  }

  public set explored(value: true) {
    this._explored = value;
  }

  /** A node can be eliminated if a shorter path has been found. */
  public get eliminated(): boolean {
    return this._eliminated;
  }

  public set eliminated(value: true) {
    this._eliminated = value;
  }
}
