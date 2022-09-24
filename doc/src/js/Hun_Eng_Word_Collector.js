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