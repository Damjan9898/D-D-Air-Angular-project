# This files contains your custom actions which can be used to run
# custom Python code.
#
# See this guide on how to implement these action:
# https://rasa.com/docs/rasa/custom-actions


# This is a simple example for a custom action which utters "Hello World!"

from typing import Any, Text, Dict, List
import random

from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher

#Za API
from urllib.request import urlopen
import json

    
array = []


class ActionCities(Action):

    def name(self) -> Text:
        return "action_cities"
        

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        
        user_choice_from = tracker.get_slot("from")

        user_choice_from=user_choice_from.replace(" ", "%20")

        array.append(user_choice_from)
        

        user_choice_to = tracker.get_slot("to")

        user_choice_to=user_choice_to.replace(" ", "%20")
        
        array.append(user_choice_to)
        

        dispatcher.utter_message(text="Enter a planed departure date(dd/mm/yyyy):")
        
        return []

class ActionDate(Action):

    def name(self) -> Text:
        return "action_date"
        

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        
        user_choice_date = tracker.get_slot("date")

        if user_choice_date == "20/01/2023":
            array.append(1674169200000)

        dispatcher.utter_message(text="Which airline do you prefer?")

        
        return []

class ActionAirlines(Action):

    def name(self) -> Text:
        return "action_airlines"
        

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        
        user_choice_airline = tracker.get_slot("airline")

        user_choice_airline=user_choice_airline.replace(" ", "%20")

        array.append(user_choice_airline)
        

        dispatcher.utter_message(text="How many seats do you need?")

        return []

class ActionSeats(Action):

    def name(self) -> Text:
        return "action_seats"
        

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        
        user_choice_seat = tracker.get_slot("seat")

        array.append(user_choice_seat)
        

        dispatcher.utter_message(text="Which flight class do you prefer?")

        return []

class ActionClassflights(Action):

    def name(self) -> Text:
        return "action_classflights"
        

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        
        user_choice_classflight = tracker.get_slot("classflight")

        user_choice_classflight=user_choice_classflight.replace(" ", "%20")
        array.append(user_choice_classflight)

        

        locationstart=array[0]
        locationend=array[1]
        flightstart=array[2]
        airline=array[3]
        seat=array[4]
        classflight=array[5]

        url=f'http://localhost/API/getFilteredFlights.php?airline={airline}&locationstart={locationstart}&locationend={locationend}&classflight={classflight}&flightstart={flightstart}'

        url1=f'http://localhost/API/getActiveUser.php'


        response = urlopen(url)
        response1 = urlopen(url1)

        data_json = json.loads(response.read())
        data_json1 = json.loads(response1.read())

        #Dodavanje vrednosti u Carousel
        niz = []
        for x in range(len(data_json)):
            niz.append(
                {
                    "title": f"{data_json[x]['locationstart']} - {data_json[x]['locationend']}",
                    "subtitle": f"{data_json[x]['airline']}",
                    "image_url": f"{data_json[x]['image']}",
                    "buttons": [
                        {
                            "title":"Flight Details", #Details -> kao dugme
                            "url":f"/flightDetails/{data_json[x]['id']}",
                            "type":"web_url"
                        },
                        {
                            "title":"Book Now", #Dugme buy now
                            "url":f"http://localhost/API/rasaBookFlight.php?flight_id={data_json[x]['id']}&seats_booked={seat}&user_id={data_json1['user_id']}",
                            "type":"web_url"
                        }
                    ]

                }
            )

        new_carousel = {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": niz

            }

        }


        dispatcher.utter_message(text="Our flights", attachment=new_carousel)

        dispatcher.utter_message(text="Do you want to book another flight?")



        array.pop(0)
        array.pop(0)
        array.pop(0)
        array.pop(0)
        array.pop(0)
        array.pop(0)
        

        return []