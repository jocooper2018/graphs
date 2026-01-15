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

/**
 * A set that compare object by value with the `equals()` method of the `Comparable` interface.
 * @see Comparable
 */
export default class ValueSet<T extends Comparable<T>> implements Set<T> {
  private _array: T[];

  constructor() {
    this._array = [];
  }

  private get array(): T[] {
    return this._array;
  }

  private set array(value: T[]) {
    this._array = value;
  }

  public get size(): number {
    return this.array.length;
  }

  public has(value: T): boolean {
    for (const element of this.array) {
      if (element.equals(value)) {
        return true;
      }
    }
    return false;
  }

  public add(value: T): this {
    if (!this.has(value)) {
      this.array.push(value);
    }
    return this;
  }

  public delete(value: T): boolean {
    const sizeBefore: number = this.size;
    this.array = this.array.filter((v: T) => v.equals(value));
    const sizeAfter: number = this.size;
    return sizeBefore > sizeAfter;
  }

  public clear(): void {
    this.array = [];
  }

  public forEach(
    callbackfn: (value: T, value2: T, set: Set<T>) => void,
    thisArg?: any
  ): void {
    for (const v of this.array) {
      callbackfn.call(thisArg, v, v, this);
    }
  }

  public *values(): IterableIterator<T> {
    for (const v of this.array) {
      yield v;
    }
  }

  public *keys(): IterableIterator<T> {
    for (const v of this.array) {
      yield v;
    }
  }

  public *entries(): IterableIterator<[T, T]> {
    for (const v of this.array) {
      yield [v, v];
    }
  }

  public [Symbol.iterator](): IterableIterator<T> {
    return this.values();
  }

  public get [Symbol.toStringTag](): string {
    return "ValueSet";
  }
}
