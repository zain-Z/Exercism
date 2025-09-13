export function hey(message: string): string {
  
  const trimmed = message.trim();

  
  if (trimmed === "") {
    return "Fine. Be that way!";
  }

  const hasLetters = /[a-z]/i.test(trimmed);

  
  const isYelling = hasLetters && trimmed === trimmed.toUpperCase();


  const isQuestion = trimmed.endsWith("?");

  
  if (isYelling && isQuestion) {
    return "Calm down, I know what I'm doing!";
  }
  if (isYelling) {
    return "Whoa, chill out!";
  }
  if (isQuestion) {
    return "Sure.";
  }

  
  return "Whatever.";
}


console.log(hey("How are you?"));              // "Sure."
console.log(hey("HELLO!"));                    // "Whoa, chill out!"
console.log(hey("WHAT ARE YOU DOING?"));       // "Calm down, I know what I'm doing!"
console.log(hey("   "));                       // "Fine. Be that way!"
console.log(hey("Cool story, bro."));          // "Whatever."
