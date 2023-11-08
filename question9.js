function swapCase(string) {
  let result = "";

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (char === char.toLowerCase()) {
      result += char.toUpperCase();
    } else {
      result += char.toLowerCase();
    }
  }

  return result;
}


