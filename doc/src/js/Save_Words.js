var save_english_word = "";
var save_english_word = "";

function handleSaveClick() {
    save_english_word = document.getElementById('s_eng_word').value;
    save_hungarian_word = document.getElementById('s_hun_word').value;

    const isAlphaWord = checkAlpha(save_english_word, save_hungarian_word)

    if (isAlphaWord) {
        saveWordsToDatabase(save_english_word, save_hungarian_word)
        console.log(save_english_word);
        console.log(save_hungarian_word);
        document.getElementById('s_eng_word').value = "";
        document.getElementById('s_hun_word').value = "";   
    } else {
        alert("A mentés nem sikerült!")
    }
}


function saveWordsToDatabase(enWord, hunWord) {
    var data = JSON.stringify({'magyar_szo': hunWord, 'angol_szo': enWord})

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://127.0.0.1:5000/addWord");

    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(data);
    xhr.onload = () => alert(xhr.responseText);
}