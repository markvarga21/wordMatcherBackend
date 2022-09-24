import repository
import random

def getHungarianWords():
    paired_words_all = repository.getHungarianWords()
    randomed_four = dict()
    for i in range(1, 5):
        randomed_tuple = random.choice(list(paired_words_all.items()))
        en = randomed_tuple[0]
        hun = randomed_tuple[1]
        randomed_four[en] = hun
    return randomed_four