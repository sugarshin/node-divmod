/*!
 * @license node-divmod
 * (c) sugarshin
 * License: MIT
 */

"use strict";

export default function divmod(value, lambda) {
  if (typeof value !== 'number' || typeof lambda !== 'number') {
    throw new Error('Specify the type number.');
  }
  if (lambda === 0) {
    throw new Error('Cannot divide by zero.');
  }

  return [Math.floor(value / lambda), value % lambda];
}
