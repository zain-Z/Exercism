"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Matrix = void 0;
class Matrix {
    constructor(matrix) {
        this._rows = matrix
            .trim()
            .split('\n')
            .map(row => row
            .trim()
            .split(/\s+/)
            .map(Number));
    }
    get rows() {
        return this._rows;
    }
    get columns() {
        const cols = [];
        const rowCount = this._rows.length;
        const colCount = this._rows[0].length;
        for (let j = 0; j < colCount; j++) {
            const col = [];
            for (let i = 0; i < rowCount; i++) {
                col.push(this._rows[i][j]);
            }
            cols.push(col);
        }
        return cols;
    }
}
exports.Matrix = Matrix;
const m = new Matrix(`9 8 7
5 3 2
6 6 7`);
console.log(m.rows);
// [
//   [9, 8, 7],
//   [5, 3, 2],
//   [6, 6, 7]
// ]
console.log(m.columns);
// [
//   [9, 5, 6],
//   [8, 3, 6],
//   [7, 2, 7]
// ]
