##### Imports #####
import json
import urllib.request

##### Lambda Handler #####
def lambda_handler(event, context):
    user = event['user']
    journal_id = event['journal_id']
    journal_name = event['journal_name']

    # TODO: interface with cognito
    # if not cognito.user_exists(user):
    #    error
    # else:
    #    journals = cognito.get_user(user).get_journals()

    journal_name = journal_name.lower()
    name_id_together = journal_name + ":" + journal_id
    if journals == "":
        journals = name_id_together
    else:
        journals += name_id_together + ","

    # cognito.get_user(user).write_journals()
