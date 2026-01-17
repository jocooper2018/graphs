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

/**
 * In mathematics, the Pythagorean theorem or Pythagoras's theorem is a fundamental
 * relation in Euclidean geometry between the three sides of a right triangle.
 * It states that the area of the square whose side is the hypotenuse
 * (the side opposite the right angle) is equal to the sum of the areas of the
 * squares on the other two sides.
 *
 * The theorem can be written as an equation relating the lengths of the sides 
 * a, b and the hypotenuse c, sometimes called the Pythagorean equation: a^2 + b^2 = c^2.
 *
 * @param a The length of one of the sides adjacent to the right angle in a right triangle.
 * @param b The length of the other side adjacent to the right angle in a right triangle.
 * @returns The hypotenuse length.
 * @see https://en.wikipedia.org/wiki/Pythagorean_theorem
 */
export const pythagoras = (a: number, b: number): number => {
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
};
