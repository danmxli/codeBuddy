import requests
from urllib.parse import quote

def construct_url(input):
    """filter google search to stackoverflow domain"""
    encoded_query = quote(input)
    site = "stackoverflow.com"
    search_url = f"https://www.google.com/search?q={encoded_query}+site:{site}"
    # print(search_url)
    return search_url

def list_links(user_query):
    """call construct_url function, return list of links on stackoverflow.com"""
    response = requests.get(construct_url(user_query))
    # print(response)

