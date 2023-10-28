from flask import Flask, request, jsonify
import os
from flask_cors import CORS
from data.ai_models import generate_response

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
    response = ''

    response = generate_response(query, model)    
    
    return jsonify({"response": response})


if __name__ == '__main__':
    app.run(debug=True, port=os.getenv("PORT", default=5000))