import requests
from bs4 import BeautifulSoup
from urllib.parse import quote

def construct_url(input):
    """filter google search to stackoverflow domain"""
    encoded_query = quote(input)
    site = "stackoverflow.com"
    search_url = f"https://www.google.com/search?q={encoded_query}+site:{site}"
    return search_url

def list_links(user_query):
    """call construct_url function, return list of links on stackoverflow.com"""
    links = []

    # all links from google search
    response = requests.get(construct_url(user_query))
    soup = BeautifulSoup(response.text, "html.parser")
    all = soup.find_all("a", href=True)

    # all links from stackoverflow.com
    for q in all:
        url = q.get('href').strip('/url?q=')
        if url.startswith("https://stackoverflow.com/questions/"):
            links.append(url)
    return links
