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
import Vector2 from "../classes/Vector2";
import { SCALE } from "../consts";

/**
 * Example graph from the french Wikipedia page on Dijkstra's algorithm.
 * https://fr.wikipedia.org/wiki/Algorithme_de_Dijkstra#Distance_entre_la_ville_A_et_la_ville_J
 */
export const createGraph = () => {
  const graph: Graph = new Graph(
    "Example graph from the french Wikipedia page on Dijkstra's algorithm",
  );

  const node_a: GraphNode = new GraphNode("A", new Vector2(201, 23));
  const node_b: GraphNode = new GraphNode("B", new Vector2(62, 111));
  const node_c: GraphNode = new GraphNode("C", new Vector2(201, 111));
  const node_d: GraphNode = new GraphNode("D", new Vector2(330, 111));
  const node_e: GraphNode = new GraphNode("E", new Vector2(438, 111));
  const node_f: GraphNode = new GraphNode("F", new Vector2(60, 219));
  const node_g: GraphNode = new GraphNode("G", new Vector2(175, 219));
  const node_h: GraphNode = new GraphNode("H", new Vector2(310, 219));
  const node_i: GraphNode = new GraphNode("I", new Vector2(180, 307));
  const node_j: GraphNode = new GraphNode("J", new Vector2(310, 395));

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

export const getBretagne = () => {
  
  const bretagne = new Graph("Bretagne");

  const quiberon = new GraphNode("Quiberon", new Vector2(634, 772).multiply(SCALE));
  const chateaulin = new GraphNode("Châteaulin", new Vector2(308, 400).multiply(SCALE));
  const ploermel = new GraphNode("Ploërmel", new Vector2(886, 545).multiply(SCALE));
  const locmine = new GraphNode("Locminé", new Vector2(737, 566).multiply(SCALE));
  const carhaix = new GraphNode("Carhaix", new Vector2(485, 363).multiply(SCALE));
  const loudeac = new GraphNode("Loudéac", new Vector2(765, 418).multiply(SCALE));
  const pontivy = new GraphNode("Pontivy", new Vector2(691, 474).multiply(SCALE));
  const lamballe = new GraphNode("Lamballe", new Vector2(846, 269).multiply(SCALE));
  const quimperle = new GraphNode("Quimperlé", new Vector2(490, 570).multiply(SCALE));
  const guingamp = new GraphNode("Guingamp", new Vector2(631, 219).multiply(SCALE));
  const auray = new GraphNode("Auray", new Vector2(681, 677).multiply(SCALE));
  const redon = new GraphNode("Redon", new Vector2(993, 688).multiply(SCALE));
  const morlaix = new GraphNode("Morlaix", new Vector2(402, 206).multiply(SCALE));
  const saintMalo = new GraphNode("Saint-Malo", new Vector2(1015, 175).multiply(SCALE));
  const lannion = new GraphNode("Lannion", new Vector2(528, 130).multiply(SCALE));
  const quimper = new GraphNode("Quimper", new Vector2(303, 501).multiply(SCALE));
  const vannes = new GraphNode("Vannes", new Vector2(760, 683).multiply(SCALE));
  const saintBrieuc = new GraphNode("Saint-Brieuc", new Vector2(762, 245).multiply(SCALE));
  const lorient = new GraphNode("Lorient", new Vector2(550, 634).multiply(SCALE));
  const brest = new GraphNode("Brest", new Vector2(177, 297).multiply(SCALE));
  const rennes = new GraphNode("Rennes", new Vector2(1134, 448).multiply(SCALE));

  bretagne.addNode(quiberon); // 4 876
  bretagne.addNode(chateaulin); // 5 605
  bretagne.addNode(ploermel); // 10 847
  bretagne.addNode(locmine); // 13 500
  bretagne.addNode(carhaix); // 14 136
  bretagne.addNode(loudeac); // 14 365
  bretagne.addNode(pontivy); // 14 640
  bretagne.addNode(lamballe); // 18 226
  bretagne.addNode(quimperle); // 19 377
  bretagne.addNode(guingamp); // 21 870
  bretagne.addNode(auray); // 23 266
  bretagne.addNode(redon); // 23 340
  bretagne.addNode(morlaix); // 26 161
  bretagne.addNode(saintMalo); // 47 439
  bretagne.addNode(lannion); // 47 688
  bretagne.addNode(quimper); // 75 636
  bretagne.addNode(vannes); // 84 176
  bretagne.addNode(saintBrieuc); // 96 553
  bretagne.addNode(lorient); // 125 079
  bretagne.addNode(brest); // 207 010
  bretagne.addNode(rennes); // 381 156

  bretagne.connect(rennes, saintMalo);
  bretagne.connect(rennes, lamballe);
  bretagne.connect(rennes, loudeac);
  bretagne.connect(rennes, ploermel);
  bretagne.connect(rennes, redon);

  bretagne.connect(brest, morlaix);
  bretagne.connect(brest, chateaulin);

  bretagne.connect(lorient, quimperle);
  bretagne.connect(lorient, carhaix);
  bretagne.connect(lorient, locmine);
  bretagne.connect(lorient, auray);

  bretagne.connect(saintBrieuc, guingamp);
  bretagne.connect(saintBrieuc, loudeac);
  bretagne.connect(saintBrieuc, lamballe);

  bretagne.connect(vannes, auray);
  bretagne.connect(vannes, locmine);
  bretagne.connect(vannes, ploermel);
  bretagne.connect(vannes, redon);

  bretagne.connect(quimper, chateaulin);
  bretagne.connect(quimper, quimperle);

  bretagne.connect(lannion, guingamp);

  bretagne.connect(saintMalo, rennes);

  bretagne.connect(morlaix, brest);
  bretagne.connect(morlaix, guingamp);

  bretagne.connect(redon, rennes);
  bretagne.connect(redon, vannes);

  bretagne.connect(auray, lorient);
  bretagne.connect(auray, vannes);
  bretagne.connect(auray, quiberon);

  bretagne.connect(guingamp, morlaix);
  bretagne.connect(guingamp, lannion);
  bretagne.connect(guingamp, saintBrieuc);
  bretagne.connect(guingamp, carhaix);

  bretagne.connect(quimperle, quimper);
  bretagne.connect(quimperle, lorient);

  bretagne.connect(lamballe, saintBrieuc);
  bretagne.connect(lamballe, rennes);

  bretagne.connect(pontivy, loudeac);
  bretagne.connect(pontivy, locmine);

  bretagne.connect(loudeac, saintBrieuc);
  bretagne.connect(loudeac, carhaix);
  bretagne.connect(loudeac, rennes);
  bretagne.connect(loudeac, pontivy);

  bretagne.connect(carhaix, guingamp);
  bretagne.connect(carhaix, chateaulin);
  bretagne.connect(carhaix, loudeac);
  bretagne.connect(carhaix, lorient);

  bretagne.connect(locmine, pontivy);
  bretagne.connect(locmine, ploermel);
  bretagne.connect(locmine, lorient);
  bretagne.connect(locmine, vannes);

  bretagne.connect(ploermel, rennes);
  bretagne.connect(ploermel, vannes);
  bretagne.connect(ploermel, locmine);

  bretagne.connect(chateaulin, brest);
  bretagne.connect(chateaulin, quimper);
  bretagne.connect(chateaulin, carhaix);

  bretagne.connect(quiberon, auray);

  return bretagne;
};
