export function isPangram(sentence: string): boolean {
  
  const lower = sentence.toLowerCase();


  const letters = new Set<string>();

  
  for (const char of lower) {
    if (char >= 'a' && char <= 'z') {
      letters.add(char);
    }
  }

  
  return letters.size === 26;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog.")); 
// true ✅

console.log(isPangram("Hello world!")); 
// false ❌

console.log(isPangram("Sphinx of black quartz, judge my vow.")); 
// true ✅

