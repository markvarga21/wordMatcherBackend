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
