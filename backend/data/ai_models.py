import os
import cohere
from dotenv import load_dotenv
load_dotenv('.env')


co = cohere.Client(os.getenv('COHERE_KEY'))

# return response
def generate_response(query, model):
    ...
    if model == 'code_explain':
        return code_explain(query)
    elif model == 'bug_fix':
        return bug_fix(query)
    elif model == 'pseudo_to_lang':
        return pseudo_to_lang(query)
    elif model == 'calc_complexity':
        return calc_complexity(query)
    else:
        return('')

# helper functions, each takes in query and returns response
def code_explain(userinput):
    response_dict = {"text": "", "links": []}
    history = [
        {
            "role": "USER", "message": "I need you to explain my code."
        },
        {
            "role": "CHATBOT", "message": "Sure, provide me with a piece of code, and my task is to explain it in a concise way."
        }
    ]

    response = co.chat(
        model="command-nightly",
        chat_history=history,
        message=f"Can you explain my code: {userinput}",
        connectors=[{"id": "web-search"}],
        temperature=0
    )
    response_dict['text'] = response.text

    for doc in response.documents:
        if doc['title'] is not None and doc['url'] is not None:
            response_dict['links'].append({
                'title': doc['title'],
                'url': doc['url']
            })

    return(response_dict)
    # return("wip")

def bug_fix(userinput):
    response_dict = {"text": "", "links": []}
    history = [
        {
            "role": "USER", "message": "I need you to find and fix bugs in my code."
        },
        {
            "role": "CHATBOT", "message": "Sure, provide me with a piece of code, and my task is to find and fix bugs in it."
        }
    ]
    response = co.chat(
        model="command-nightly",
        chat_history=history,
        message=f"Can you tell me how to optimize my code: {userinput}",
        temperature=0
    )
    response_dict['text'] = response.text
    
    return(response_dict)

def pseudo_to_lang(userinput):
    return("wip")

def calc_complexity(userinput):
    return("wip")