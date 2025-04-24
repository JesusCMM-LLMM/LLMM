function max(a, b) {
    return (a > b) ? a : b;
  }

  function maxResult() {
    const a = parseFloat(document.getElementById("maxA").value);
    const b = parseFloat(document.getElementById("maxB").value);
    document.getElementById("maxOut").innerHTML = "El mayor es " + max(a, b);
  }

  function maxOfThree(a, b, c) {
    return max(max(a, b), c);
  }

  function maxOfThreeResult() {
    const a = parseFloat(document.getElementById("max3A").value);
    const b = parseFloat(document.getElementById("max3B").value);
    const c = parseFloat(document.getElementById("max3C").value);
    document.getElementById("max3Out").innerHTML = "El mayor es " + maxOfThree(a, b, c);
  }

  function isVowel(ch) {
    return "aeiouAEIOU".includes(ch);
  }

  function isVowelResult() {
    const char = document.getElementById("vowelChar").value;
    document.getElementById("vowelOut").innerHTML = isVowel(char) ? "Sí es una vocal" : "No es una vocal";
  }

  function translate(text) {
    return text.split("").map(char => {
      if (!isVowel(char) && /[a-zA-Z]/.test(char)) {
        return char + "o" + char;
      } else {
        return char;
      }
    }).join("");
  }

  function translateResult() {
    const text = document.getElementById("rovarInput").value;
    document.getElementById("rovarOut").innerHTML = translate(text);
  }

  function sum(arr) {
    return arr.reduce((a, b) => a + b, 0);
  }

  function multiply(arr) {
    return arr.reduce((a, b) => a * b, 1);
  }

  function sumAndMultiply() {
    const arr = document.getElementById("arrayInput").value.split(' ').map(Number);
    document.getElementById("sumMultiplyOut").innerHTML = 
      "Suma: " + sum(arr) + "<br>Multiplicación: " + multiply(arr);
  }

  function reverse(str) {
    return str.split("").reverse().join("");
  }

  function reverseResult() {
    const text = document.getElementById("reverseInput").value;
    document.getElementById("reverseOut").innerHTML = reverse(text);
  }

  function sortWords() {
    const words = document.getElementById("sortInput").value.split(' ').map(w => w.trim());
    words.sort();
    document.getElementById("sortOut").innerHTML = words.join(', ');
  }

  function findLongestWord(words) {
    return words.reduce((longest, word) => Math.max(longest, word.length), 0);
  }

  function findLongest() {
    const words = document.getElementById("longestInput").value.split(' ').map(w => w.trim());
    document.getElementById("longestOut").innerHTML = "La palabra más larga es " + findLongestWord(words);
  }

  function filterLongWords(words, i) {
    return words.filter(word => word.length > i);
  }

  function filterWordsFunc() {
    const words = document.getElementById("filterWords").value.split(' ').map(w => w.trim());
    const i = parseInt(document.getElementById("filterLen").value);
    document.getElementById("filterOut").innerHTML = filterLongWords(words, i).join(', ');
  }

  function charFreq(str) {
    const freq = {};
    for (let char of str) {
      freq[char] = (freq[char] || 0) + 1;
    }
    return freq;
  }

  function charFrequency() {
    const str = document.getElementById("freqInput").value;
    const freq = charFreq(str);
    document.getElementById("freqOut").innerHTML = JSON.stringify(freq);
  }