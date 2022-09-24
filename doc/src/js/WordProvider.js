const words = getAllWordsFromEndpoint()

function getUnshuffledEnglishWords() {
    return Object.keys(words);
}

function getUnshuffledHungarianWords() {
    return Object.values(words);
}