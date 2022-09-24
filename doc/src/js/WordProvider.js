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

function getAllWordsFromEndpoint() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "http://127.0.0.1:5000/pairedWords", false ); // false for synchronous request
    xmlHttp.send( null );
    const obj = JSON.parse(xmlHttp.response)
    return obj
}

function getHungarianWords() {
    console.log("Unshuffled hungarian words: " + Object.values(words))
    let shuffled = Object.values(words).sort(function () {
        return Math.random() - 0.5;
    })
    console.log("Shuffled english words: " + shuffled)
    return shuffled
}