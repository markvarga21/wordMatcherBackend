function validator() {
    score = 0;
    if (eng_words.length < 4 || hung_words.length < 4) {
        return "Vannak még nem helyrerakott csempék, kérlek előbb rakd a helyére az összeset!"
    }
    var eng = getUnshuffledEnglishWords();
    var hun = getUnshuffledHungarianWords();

    var dictionary = fillDict(eng, hun)

    for (var i = 0; i < 4; i++) {
        console.log("Eng: " + eng_words[i] + ", hun: " + hung_words[i])
        const englishWordToCheck = eng_words[i]
        const hungarianWordToCheck = hung_words[i]
        if (dictionary[englishWordToCheck] == hungarianWordToCheck) {
            score++
        }
    }
    return "Szerzett pontszám: " + score;
}