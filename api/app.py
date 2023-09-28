from flask import Flask, render_template, request
from data.helpers import construct_url, list_links

app = Flask(__name__, template_folder="templates")

@app.route('/', methods=["GET", "POST"])
def search():
    ...
    if request.method == "POST":
        ...
        # get query
        user_query = request.form.get("q")
        list_links(user_query)

        return render_template("search.html")
    return render_template("search.html")

@app.route('/insights')
def insights():
    ...
    return render_template("insights.html")
