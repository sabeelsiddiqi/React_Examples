#!/usr/local/bin/python
import RPi.GPIO as GPIO
import time
from datetime import datetime
import requests

import twilio
from twilio.rest import Client

account_sid = 'ACf32a6c51dce615ac12a2c50cbcbacd40'
auth_token = '96e970609a4499b510ebcf76fd037293'
client = Client(account_sid, auth_token)

GPIO.setmode(GPIO.BOARD)

#define the pin that goes to the circuit
pin_to_circuit = 7

def rc_time (pin_to_circuit):
    count = 0
  
    #Output on the pin for 
    GPIO.setup(pin_to_circuit, GPIO.OUT)
    GPIO.output(pin_to_circuit, GPIO.LOW)
    time.sleep(0.1)

    #Change the pin back to input
    GPIO.setup(pin_to_circuit, GPIO.IN)
  
    #Count until the pin goes high
    while (GPIO.input(pin_to_circuit) == GPIO.LOW):
        count += 1

    return count

#Grab Length of Data
def dataLength():
    request = requests.get('http://localhost:3001/api/getData')
    r = request.json();    
    return len(r["data"])

def sendText():
    message = client.messages \
        .create(
            body="RANDY NEEDS HIS APOQUEL!",
            from_='+17706374235',
            to='+14044340815'
        )
    print(message.sid);

#Catch when script is interupted, cleanup correctly
limit = 100000;
bottleState = True;

currentDate = datetime.date(datetime.now());
currentTime = datetime.time(datetime.now());
currentHour = currentTime.hour;

medicationTime = 17;

lastGivenDate = None;
medicationGiven=False;
textStatus=False;

try:
    # Main loop
    while True:
        sensorValue = rc_time(pin_to_circuit)
        print(sensorValue);

        if(lastGivenDate!=currentDate):
            #reset
            bottleState = True;
            medicationGiven = False;
            textStatus = False;
            
            print("SET GREEN LED");
            print("POST ALLOWED TO HAPPEN");
            
        if(currentHour >= medicationTime and medicationGiven==False and textStatus==False):            
            print("SEND REMINDER TEXT");
            sendText();
            textStatus=True;
            
        if(sensorValue < limit and bottleState==True and lastGivenDate!=currentDate):
            
            # Set bottleOff
            print("BOTTLE IS OFF");            
            bottleState = False;
      
            print("APOQUEL HAS BEEN GIVEN!");
            medicationGiven = True;
            
            print("SENT POST Message");
            idLength = dataLength();
            msg = "Given";
            requests.post('http://localhost:3001/api/putData',json={'id':idLength,'message':msg});
            
            # Turn on Red LED and Don't Allow Post to Happen on Same Day
            print("RED LED IS ON");
            lastGivenDate = currentDate;

            
        elif(sensorValue>limit and bottleState==False):
            #Set bottleOn
            print("BOTTLE IS BACK ON!");
            bottleState = True;
            
            print("TURN ALARM OFF");
            
        elif(sensorValue<limit and bottleState==True and lastGivenDate==currentDate):
            bottleState = False;
            print("BUZZ ALARM");
            
except KeyboardInterrupt:
    pass
finally:
    GPIO.cleanup()
