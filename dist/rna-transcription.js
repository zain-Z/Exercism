"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toRna = toRna;
function toRna(dna) {
    const mapping = {
        G: "C",
        C: "G",
        T: "A",
        A: "U",
    };
    return dna
        .split("")
        .map((nucleotide) => {
        if (!mapping[nucleotide]) {
            throw new Error(`Invalid input: ${nucleotide}`);
        }
        return mapping[nucleotide];
    })
        .join("");
}
console.log(toRna("ACGT"));
// Output: "UGCA"
