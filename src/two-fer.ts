function twoFer(name?: string) : string {
    const trimmedName = name?.trim() ?? "";
    const target = trimmedName === "" ? "you" : trimmedName;
    return `One for ${target}, one for me.`;
}

console.log(twoFer("Alice"));   // One for Alice, one for me.
console.log(twoFer("   "));     // One for you, one for me.
console.log(twoFer());          // One for you, one for me.
console.log(twoFer("Do-yun"));  // One for Do-yun, one for me.