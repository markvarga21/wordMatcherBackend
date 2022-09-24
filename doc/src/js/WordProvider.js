const words = getAllWordsFromEndpoint()

function getUnshuffledEnglishWords() {
    return Object.keys(words);
}

function getUnshuffledHungarianWords() {
    return Object.values(words);
}

function getEnglishWords() {
    console.log("Unshuffled english words: " + Object.keys(words))
    let shuffled = Object.keys(words).sort(function () {
        return Math.random() - 0.5;
    })
    console.log("Shuffled english words: " + shuffled)
    return shuffled
}