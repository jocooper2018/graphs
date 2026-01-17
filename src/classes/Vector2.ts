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

import { pythagoras } from "../utils/maths";

export default class Vector2 {
  // #region static properties

  public static get ZERO(): Vector2 {
    return new Vector2(0, 0);
  }
  public static get TOP(): Vector2 {
    return new Vector2(0, -1);
  }
  public static get BOTTOM(): Vector2 {
    return new Vector2(0, 1);
  }
  public static get LEFT(): Vector2 {
    return new Vector2(-1, 0);
  }
  public static get RIGHT(): Vector2 {
    return new Vector2(1, 0);
  }
  public static get TOP_LEFT(): Vector2 {
    return new Vector2(-1, -1).normalized;
  }
  public static get TOP_RIGHT(): Vector2 {
    return new Vector2(1, -1).normalized;
  }
  public static get BOTTOM_LEFT(): Vector2 {
    return new Vector2(-1, 1).normalized;
  }
  public static get BOTTOM_RIGHT(): Vector2 {
    return new Vector2(1, 1).normalized;
  }

  // #endregion
  // #region static methods

  /**
   * Compute the sum between 2 `Vector2`.
   * @param a A `Vector2`.
   * @param b An other `Vector2`.
   * @returns A new `Vector2` that is the sum of the 2 `Vector2`.
   */
  public static sum(a: Vector2, b: Vector2): Vector2 {
    return new Vector2(a.x + b.x, a.y + b.y);
  }

  /**
   * Check if 2 `Vector2` are equals.
   * @param a A `Vector2`.
   * @param b An other `Vector2`.
   * @returns `true` if the 2 `Vector2` are equal, `false` otherwise.
   */
  public static equals(a: Vector2, b: Vector2): boolean {
    return a.x === b.x && a.y === b.y;
  }

  /**
   * Generate a `Vector2` with a random direction and a random norm between 0 and 1.
   * @returns A new `Vector2` with a random direction and a random norm between 0 and 1.
   */
  public static random(): Vector2 {
    return new Vector2((Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2);
  }

  /**
   * Compute the distance between 2 `Vector2` using the Pythagorean theorem.
   * @param a A `Vector2`.
   * @param b An other `Vector2`.
   * @returns The distance between the 2 `Vector2`.
   */
  public static distanceBetween(a: Vector2, b: Vector2) {
    return pythagoras(b.x - a.x, b.y - a.y);
  }

  // #endregion
  // #region properties & constructor

  private readonly _x: number;
  private readonly _y: number;

  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  // #endregion
  // #region getters setters

  /** The x coordinate of the vector. */
  public get x(): number {
    return this._x;
  }

  /** The y coordinate of the vector. */
  public get y(): number {
    return this._y;
  }

  /** The norm is the length of the vector */
  public get norm(): number {
    return pythagoras(this.x, this.y);
  }

  /** The same vector but with a norm of 1. */
  public get normalized(): Vector2 {
    if (this.norm === 0) {
      return Vector2.ZERO;
    }
    return this.divide(this.norm);
  }

  // #endregion
  // #region methods

  /**
   * Compute and return the sum of this `Vector2` and an other `Vector2`.
   * @param other The other `Vector2` to add with.
   * @returns A new `Vector2` that is the sum of this `Vector2` and the `other` `Vector2`.
   */
  public add(other: Vector2): Vector2 {
    return Vector2.sum(this, other);
  }

  /**
   * Multiply this `Vector2` by a scalar.
   * @param scalar The scalar to multiply this `Vector2` with.
   * @returns A new `Vector2` that is this `Vector2` multiplied by `scalar`.
   */
  public multiply(scalar: number): Vector2 {
    return new Vector2(this.x * scalar, this.y * scalar);
  }

  /**
   * Divide this `Vector2` by a scalar.
   * @param scalar The scalar to divide this `Vector2` with.
   * @returns A new `Vector2` that is this `Vector2` divided by `scalar`.
   */
  public divide(scalar: number): Vector2 {
    if (scalar === 0) {
      throw new Error("Division by zero");
    }
    return new Vector2(this.x / scalar, this.y / scalar);
  }

  /**
   * Compute and return the opposite of this `Vector2`.
   * @returns A new `Vector2`, opposite of this `Vector2`.
   */
  public opposite(): Vector2 {
    return new Vector2(-this.x, -this.y);
  }

  /**
   * Check if this `Vector2` is equal to an other `Vector2`.
   * @param other The other `Vector2` to compare with.
   * @returns `true` if this `Vector2` is equal to the `other` `Vector2`, `false` otherwise.
   */
  public equals(other: Vector2): boolean {
    return Vector2.equals(this, other);
  }

  /**
   * Rotate this `Vector2` by an angle.
   * @param angle Rotation angle in radian.
   * @returns A new `Vector2` that is this `Vector2` but rotated by `angle` rad.
   */
  public rotate(angle: number): Vector2 {
    return new Vector2(
      this.x * Math.cos(angle) - this.y * Math.sin(angle),
      this.x * Math.sin(angle) + this.y * Math.cos(angle),
    );
  }

  /**
   * Compute the distance between this `Vector2` and an other `Vector2`.
   * @param other An other `Vector2`.
   * @returns The distance between this `Vector2` and the other `Vector2`.
   */
  public distanceTo(other: Vector2): number {
    return Vector2.distanceBetween(this, other);
  }

  // endregion
}
