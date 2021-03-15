from picamera import PiCamera
from time import sleep
from datetime import datetime
import RPi.GPIO as GPIO

camera = PiCamera()
pinNum = 8
i = 0
allClear = 1
runNum = 1

GPIO.setwarnings(True)
GPIO.setmode(GPIO.BOARD)
GPIO.setup(pinNum, GPIO.IN)

while allClear == 1:
    i=GPIO.input(pinNum)
    #i = 1
    if i == 0:
        print("No Intruders",i)
        allClear = 1
    elif i == 1:
        dateTimeObj = datetime.now()
        print("Intruder detected",i)
        camera.start_preview()
        sleep(5)
        camera.capture('/home/pi/theRedFlag/' + str(dateTimeObj) + '-runNumber-' + str(runNum) + '.jpg')
        runNum = runNum + 1
        usrInput = input("Is Everything okay? [y/n] ")
        if usrInput == 'y':
            allClear = 1
        elif usrInput == 'n':
            break

"""
camera.start_preview()

sleep(5)
print("1")
sleep(1)
print("2")
sleep(1)
print("3")
sleep(1)
print("4")
sleep(1)
print("5")
sleep(1)

camera.start_recording('/home/pi/Desktop/piCameraTestvid.h264')
sleep(1)
camera.stop_recording()
camera.stop_preview()


"""
