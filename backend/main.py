from flask import Flask, request, jsonify
from data.helpers import list_ids
from data.models import get_answer
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/search', methods=["POST"])
def search():
    data = request.get_json()
    user_query = data.get("query")

    answer_dict = {'p': [], 'a': [], 'code': []}

    ids = list_ids(user_query)
    
    answer_dict = get_answer(ids)

    return jsonify({
        "query": user_query,
        "response": answer_dict
    })

@app.route('/', methods=["GET"])
def read_root():
    return jsonify({"message" : "root route reached"})

if __name__ == '__main__':
    app.run(debug=True, port=os.getenv("PORT", default=5000))