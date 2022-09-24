import redis

redis_host = 'redis-13833.c293.eu-central-1-1.ec2.cloud.redislabs.com'
redis_port = 13833
redis_username = 'default'
redis_password = 'WKgodsiY9vEE5aYlfIv8VuVu5VKnbgQr'

rf = redis.Redis(host=redis_host, port=redis_port, username=redis_username, password=redis_password, decode_responses=True)

def hungarianWordInUse(hungarian):
    hu_ls = rf.lrange('HUNGARIA_WORDS_LIST', 0, -1)
    return hungarian in hu_ls

def englishWordInUse(english):
    en_ls = rf.lrange('ENGLISH_WORDS_LIST', 0, -1)
    return english in en_ls

def isObscene(word):
    obscene_ls = rf.lrange('FORBIDDEN_OBSCENE_WORDS', 0, -1)
    return word in obscene_ls

def saveWords(magyar, angol):
    rf.lpush('HUNGARIAN_WORDS_LIST', magyar)
    rf.lpush('ENGLISH_WORDS_LIST', angol)
    rf.hset('EN_HUN_PAIRED_HASH', angol, magyar)

def getHungarianWords():
    return rf.hgetall('EN_HUN_PAIRED_HASH')