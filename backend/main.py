from flask import Flask, render_template, request
from data.helpers import list_ids
from data.models import get_answer
import os

app = Flask(__name__, template_folder="templates")

@app.route('/', methods=["GET", "POST"])
def search():
    answer_dict = {'p': [], 'a': [], 'code': []}
    ...
    if request.method == "POST":
        ...
        # get links and question ids from query
        user_query = request.form.get("q")
        if not user_query:
            return render_template("search.html")

        ids = list_ids(user_query)
        
        answer_dict = get_answer(ids)
        print(answer_dict)

        # TODO render template with answer_dict
        return render_template("search.html", query=user_query, dictionary=answer_dict)
    return render_template("search.html")

@app.route('/insights')
def insights():
    ...
    return render_template("insights.html")

if __name__ == '__main__':
    app.run(debug=True, port=os.getenv("PORT", default=5000))