from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import service

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/pairedWords', methods=['GET'])
@cross_origin()
def getMagyarSzavak():
    return jsonify(service.getHungarianWords())

@app.route('/addWord', methods=['POST'])
@cross_origin()
def addWord():
    magyar_szo = request.json['magyar_szo']
    angol_szo = request.json['angol_szo']

    if service.alreadyExistingPair(magyar_szo, angol_szo):
        return f'A(z) {magyar_szo} és a(z) {angol_szo} már szerepelnek az adatbázisban!'

    if service.obsceneWord(magyar_szo, angol_szo):
        return f'Az egyik beírt szó obszcén, ezért nem lehet bevinni az adatbázisba!'

    service.saveWords(magyar_szo, angol_szo)

    print(magyar_szo, angol_szo)
    return f"A(z) {magyar_szo} és a(z) {angol_szo} szavak hozzá lettek adva az adatbázishoz!"