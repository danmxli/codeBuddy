from stackapi import StackAPI
import json

def get_answer():
    """fetch all answer body by question id"""

    site = StackAPI('stackoverflow')
    question_id = '22281661'
    data = site.fetch('questions/{ids}/answers', ids=[question_id], filter='withbody')

    # get answers
    answers = data['items']
    constructed_answer = ""

    for answer in answers:
        print(answer['body'])
        constructed_answer += answer['body'] + "\n\n"


get_answer()
# TODO use question id from list of links from helper func
# TODO convert constructed answer into dictonary structure to display on frontend
