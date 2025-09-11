"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.score = score;
function score(x, y) {
    const xSquared = x * x;
    const ySquared = y * y;
    const distance = Math.sqrt(xSquared + ySquared);
    if (distance <= 1) {
        return 10; // Bullseye
    }
    else if (distance <= 5) {
        return 5; // Middle circle
    }
    else if (distance <= 10) {
        return 1; // Outer circle
    }
    else {
        return 0; // Miss
    }
}
console.log(score(0, 0));
console.log(score(0.5, 0.5));
console.log(score(3, 4));
console.log(score(8, -6));
console.log(score(11, 0));
