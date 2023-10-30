from flask import Flask, request, jsonify
import os
from flask_cors import CORS
from data.ai_models import generate_response
import time

app = Flask(__name__)
CORS(app)

@app.route('/', methods=["GET"])
def read_root():
    return jsonify({"message" : "root route reached"})


# generate models: code_explain, bug_fix pseudo_to_lang, calc_complexity
@app.route('/generate', methods=["POST"])
def generate():
    data = request.get_json()
    query = data.get("query")
    model = data.get("model")
    programming_language = data.get("programming_language")
    response = ''

    response = generate_response(query, model, programming_language)    
    
    return jsonify({"response": response})

# testing route
@app.route('/dummy', methods=["POST"])
def dummy():
    data = request.get_json()
    dummy_response = {"text": "dummy response", "links": []}
    time.sleep(5)
    return jsonify({"response": dummy_response})

if __name__ == '__main__':
    app.run(debug=True, port=os.getenv("PORT", default=5000))