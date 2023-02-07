from flask import Flask, jsonify, request, Response
from flask_cors import CORS;
import json, datetime, random
from faker import Faker
fake = Faker('it_IT')


app = Flask(__name__)
CORS(app);

counter = int(0)

def getSingleRecord():
    global counter
    counter  += 1
    now= datetime.datetime.now()
    timeString = now.strftime("%H:%M:%S")
    data = {
      "id": counter,
      "date": timeString,
      "description": fake.address(),
      "measurementValue" : str(counter * 1000 + random.random())
      }
    return data

'''test rest-api'''
@app.route('/api/test')
#@auth.login_required()
def test_api():
    data = []
    for x in range(1000):
        data.append(  getSingleRecord() )
    return jsonify( data )



#---------------------------- main -------------------------------#
'''run server'''
if __name__== '__main__':
    app.run(debug=False, port=80, host='0.0.0.0')

