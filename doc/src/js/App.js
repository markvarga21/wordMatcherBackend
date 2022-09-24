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
    var emptyElement = document.getElementById(this.id)
    var childCount = emptyElement.childNodes.length
    if (childCount == 0) {
        this.append(elementToAdd)
        this.className = 'empty'
    } else {
        alert("Csak egyet tudsz egy helyre behúzni!")
    }
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

function fillDict(eng, hun) {
    var dict = {}
    for (var i = 0; i < 4; i++) {
        dict[eng[i]] = hun[i]
    }
    return dict
}

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

function checkAlpha(eng, hun) {
    for (let i = 0; i < eng.length; i++) {
        const c = eng[i]
        if (!isCharacterALetter(c)) {
            alert("A " + eng + " helytelen angol szó!")
            return false
        }
    }

    for (let i = 0; i < hun.length; i++) {
        const c = hun[i]
        if (!isCharacterALetter(c)) {
            alert("A " + hun + " helytelen magyar szó!")
            return false
        }
    }

    return true
}

function isCharacterALetter(char) {
    return (/[a-zA-Z]/).test(char)
  }

function newWordButtonClick() {
    window.location = 'add_word.html'
}

function redirectFromNewWord() {
    window.location = 'index.html'
}