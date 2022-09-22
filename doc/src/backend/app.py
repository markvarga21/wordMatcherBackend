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
        return f'A {magyar_szo} es a {angol_szo} mar szerepelnek az adatbazisban!'

    service.saveWords(magyar_szo, angol_szo)

    print(magyar_szo, angol_szo)
    return f"A {magyar_szo} es a {angol_szo} szavak hozza lettek adva az adatbazishoz!"

if __name__ == "__main__":
    app.run(debug=True)
