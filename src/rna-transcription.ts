type DNA = "G" | "C" | "T" | "A";


type RNA = "C" | "G" | "A" | "U";


const mapping: Record<DNA, RNA> = {
  G: "C",
  C: "G",
  T: "A",
  A: "U",
};

export function toRna(dna: string): string {
  return dna
    .split("")
    .map((nucleotide) => {
      if (!Object.prototype.hasOwnProperty.call(mapping, nucleotide)) {
        throw new Error("Invalid input DNA.");
      }
      return mapping[nucleotide as DNA];
    })
    .join("");
}


console.log(toRna("ACGT")); 
// Output: "UGCA"
