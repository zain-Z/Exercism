"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toRna = toRna;
const mapping = {
    G: "C",
    C: "G",
    T: "A",
    A: "U",
};
function toRna(dna) {
    return dna
        .split("")
        .map((nucleotide) => {
        if (!Object.prototype.hasOwnProperty.call(mapping, nucleotide)) {
            throw new Error("Invalid input DNA.");
        }
        return mapping[nucleotide];
    })
        .join("");
}
console.log(toRna("ACGT"));
// Output: "UGCA"
