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

import Graph from "../classes/Graph";
import GraphNode from "../classes/GraphNode";

/**
 * Example graph from the french Wikipedia page on Dijkstra's algorithm.
 * https://fr.wikipedia.org/wiki/Algorithme_de_Dijkstra#Distance_entre_la_ville_A_et_la_ville_J
 */
export const createGraph = () => {
  const graph: Graph = new Graph(
    "Example graph from the french Wikipedia page on Dijkstra's algorithm"
  );

  const node_a: GraphNode = new GraphNode("A");
  const node_b: GraphNode = new GraphNode("B");
  const node_c: GraphNode = new GraphNode("C");
  const node_d: GraphNode = new GraphNode("D");
  const node_e: GraphNode = new GraphNode("E");
  const node_f: GraphNode = new GraphNode("F");
  const node_g: GraphNode = new GraphNode("G");
  const node_h: GraphNode = new GraphNode("H");
  const node_i: GraphNode = new GraphNode("I");
  const node_j: GraphNode = new GraphNode("J");

  graph.addNode(node_a);
  graph.addNode(node_b);
  graph.addNode(node_c);
  graph.addNode(node_d);
  graph.addNode(node_e);
  graph.addNode(node_f);
  graph.addNode(node_g);
  graph.addNode(node_h);
  graph.addNode(node_i);
  graph.addNode(node_j);

  graph.connect(node_a, node_b, 85);
  graph.connect(node_a, node_c, 217);
  graph.connect(node_a, node_e, 173);

  graph.connect(node_b, node_a, 85);
  graph.connect(node_b, node_f, 80);

  graph.connect(node_c, node_a, 217);
  graph.connect(node_c, node_g, 186);
  graph.connect(node_c, node_h, 103);

  graph.connect(node_d, node_h, 183);

  graph.connect(node_e, node_a, 173);
  graph.connect(node_e, node_j, 502);

  graph.connect(node_f, node_b, 80);
  graph.connect(node_f, node_i, 250);

  graph.connect(node_g, node_c, 186);

  graph.connect(node_h, node_c, 103);
  graph.connect(node_h, node_d, 183);
  graph.connect(node_h, node_j, 167);

  graph.connect(node_i, node_f, 250);
  graph.connect(node_i, node_j, 84);

  graph.connect(node_j, node_e, 502);
  graph.connect(node_j, node_h, 167);
  graph.connect(node_j, node_i, 84);

  return graph;
};
