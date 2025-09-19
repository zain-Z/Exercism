export class Matrix {
  private _rows: number[][];

  constructor(matrix: string) {
    
    this._rows = matrix
      .trim()                         
      .split('\n')                    
      .map(row =>
        row
          .trim()
          .split(/\s+/)
          .map(Number)
      );
  }

  
  get rows(): number[][] {
    return this._rows;
  }


  get columns(): number[][] {
    const cols: number[][] = [];
    const rowCount = this._rows.length;
    const colCount = this._rows[0].length;

    for (let j = 0; j < colCount; j++) {
      const col: number[] = [];
      for (let i = 0; i < rowCount; i++) {
        col.push(this._rows[i][j]);
      }
      cols.push(col);
    }
    return cols;
  }
}


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
