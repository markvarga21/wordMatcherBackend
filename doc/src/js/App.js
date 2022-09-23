var currentWordClassName = '';

var englishWords = [
    document.querySelector('.englishWord1'),
    document.querySelector('.englishWord2'),
    document.querySelector('.englishWord3'),
    document.querySelector('.englishWord4')
];
var hungarianWords = [
    document.querySelector('.hungarianWord1'),
    document.querySelector('.hungarianWord2'),
    document.querySelector('.hungarianWord3'),
    document.querySelector('.hungarianWord4')
];


var empties = document.querySelectorAll('.empty');

for (const empty of empties) {
    empty.addEventListener("dragover", dragOver);
    empty.addEventListener("dragenter", dragEnter);
    empty.addEventListener('drop', dragDrop);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
}

var englishWordsToInsert = getEnglishWords();
var hungarianWordsToInsert = getHungarianWords();
for (var i = 0; i < 4; i++) {
    englishWords[i].addEventListener('dragstart', dragStart);
    englishWords[i].addEventListener('dragend', dragEnd);
    englishWords[i].setAttribute("data-english-word", englishWordsToInsert[i]);

    hungarianWords[i].addEventListener('dragstart', dragStart);
    hungarianWords[i].addEventListener('dragend', dragEnd);
    hungarianWords[i].setAttribute("data-hungarian-word", hungarianWordsToInsert[i]);
}

function dragEnd() {
    var element = document.getElementById(currentWordClassName + "Id");
    element.className = currentWordClassName;
}

function dragStart() {
    currentWordClassName = this.className
    setTimeout(() => (this.className = 'invisible'), 0);
    console.log("Drag started on element: " + currentWordClassName)
}

function dragDrop() {
    var elementToAdd = document.getElementById(currentWordClassName + "Id");
    this.append(elementToAdd);
    this.className = 'empty'
}

function dragLeave() {
    this.className = 'empty';
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
}

function handleDoneClick() {
    eng_word_block();
    hung_word_block();
    var sc = validator();
    alert(sc);
}

var eng_words = []
var hung_words = []

function eng_word_block() {
    for (var i = 1; i < 5; i++) {
        var parent = document.getElementById('englishWordHolder'+i+'Id');
        var childs = parent.firstChild;
        if (childs != null) { 
            var eng_w = childs.getAttribute("data-english-word");
            eng_words.push(eng_w);
        }
    }
}

function hung_word_block() {
    for (var i = 1; i < 5; i++) {
        var parent = document.getElementById('hungarianWordHolder'+i+'Id');
        var childs = parent.firstChild;
        var hung_w = childs.getAttribute("data-hungarian-word");
        hung_words.push(hung_w);
    }
}

function validator() {
    score = 0;
    var eng = getEnglishWords();
    var hun = getHungarianWords();
    for (var i = 0; i < 4; i++) {
        for (var k = 0; k < 4; k++){
            if (eng[i] == eng_words[k]) {
                if (hun[i] == hung_words[k])
                score++;
            }
        }
    }
    return score;
}

var save_english_word = "";
var save_english_word = "";
var delete_hun_word = "";
var delete_eng_word = "";

function handleSaveClick() {
    save_english_word = document.getElementById('s_eng_word').value;
    save_hungarian_word = document.getElementById('s_hun_word').value;
    console.log(save_english_word);
    console.log(save_hungarian_word);
    document.getElementById('s_eng_word').value = "";
    document.getElementById('s_hun_word').value = "";
}

function handleDeleteClick() {
    delete_english_word = document.getElementById('d_eng_word').value;
    delete_hungarian_word = document.getElementById('d_hun_word').value;
    console.log(delete_english_word);
    console.log(delete_hungarian_word);
    document.getElementById('d_eng_word').value;
    document.getElementById('d_hun_word').value;
}