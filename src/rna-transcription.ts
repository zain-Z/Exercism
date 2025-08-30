export function toRna(dna: string): string {
  const mapping: Record<string, string> = {
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
