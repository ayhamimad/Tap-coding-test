function isAnagram(str1, str2) {
    const normalize = (str) => str.replace(/[^\w]/g, '').toLowerCase();
    const sortedStr1 = normalize(str1).split('').sort().join('');
    const sortedStr2 = normalize(str2).split('').sort().join('');
    return sortedStr1 === sortedStr2;
  }
  
  function isAnagramInArray(phrase, arr) {
    const anagramsMatched = [];
    for (const anagram of arr) {
      if (isAnagram(phrase, anagram)) {
        anagramsMatched.push(anagram);
      }
    }
    return anagramsMatched;
  }
  
  const anagrams = [
    "oz bilal tochberer",
    "it's razorbill beachcomber",
    "och robe tilblazer",
    "bib chorizo cellarmaster",
    "thor bble carizole",
    "zll borcht aberoie",
    "brzl orche atobile",
    "dame shelburne characterizing",
    "uber englishman characterized",
    "agnes rhumbline characterized",
    "rehab scrutinized charlemagne",
    "dreams zurich interchangeable",
    "bam hamster technocratic",
    "mechatronic masterbatch",
    "bam ratchet mechatronics"
  ];
  
  console.log(isAnagramInArray("Bob Ziroll Teacher", anagrams));
  