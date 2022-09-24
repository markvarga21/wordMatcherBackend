var eng_words = []
var hung_words = []

function eng_word_block() {
    eng_words = [];
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
    hung_words = [];
    for (var i = 1; i < 5; i++) {
        var parent = document.getElementById('hungarianWordHolder'+i+'Id');
        var childs = parent.firstChild;
        if (childs != null) {
            var hung_w = childs.getAttribute("data-hungarian-word");
            hung_words.push(hung_w);
        }
    }
}
