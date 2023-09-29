import requests
from bs4 import BeautifulSoup
from urllib.parse import quote

def construct_url(input):
    """filter google search to stackoverflow domain"""
    encoded_query = quote(input)
    site = "stackoverflow.com"
    search_url = f"https://www.google.com/search?q={encoded_query}+site:{site}"
    return search_url

def list_ids(user_query):
    """call construct_url function, return list of question ids on stackoverflow.com"""
    ids = []

    # all links from google search
    response = requests.get(construct_url(user_query))
    soup = BeautifulSoup(response.text, "html.parser")
    all = soup.find_all("a", href=True)

    # all question ids from stackoverflow.com
    for q in all:
        url = q.get('href').strip('/url?q=')

        if url.startswith("https://stackoverflow.com/questions/"):
            url = url.strip("https://stackoverflow.com/questions/")
            id = url.split('/')[0]
            ids.append(id)
    return ids

