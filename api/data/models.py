from stackapi import StackAPI
from bs4 import BeautifulSoup
import json

def get_answer(ids):
    """fetch all answer body by question id, sort by highest vote score"""
    site = StackAPI('stackoverflow')
    answer_dict = {'p': [], 'a': [], 'code': []}

    # TODO fetch data for each id
    question_id = ids[0]
    data = site.fetch('questions/{ids}/answers', ids=[question_id], filter='withbody', sort='votes')

    answers = data['items']
    # TODO get answers from data
    if answers:
        main_answer = data['items'][0]['body']
        answer_dict = extract_content(main_answer)
        
    return answer_dict

def extract_content(input_html):
    # initialize dictionary to store tag content as lists
    answer_dict = {'p': [], 'a': [], 'code': []}

    # Parse the HTML using BeautifulSoup
    soup = BeautifulSoup(input_html, 'html.parser')

    for p_tag in soup.find_all('p'):
        answer_dict['p'].append(p_tag.get_text())

    for a_tag in soup.find_all('a'):
        answer_dict['a'].append(a_tag.get('href'))

    for code_tag in soup.find_all('code'):
        answer_dict['code'].append(code_tag.get_text())

    return answer_dict
