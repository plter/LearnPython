from time import sleep

import numpy, threading
import wiringpi, char_lib

wiringpi.wiringPiSetup()
wiringpi.wiringPiSPISetup(0, 500000)
data = bytearray(4)

red = True
green = False
blue = False
matrix = char_lib.matrix_t


def render():
    while True:
        for i in range(0, 8):
            value = ~matrix[i]
            data[0] = numpy.uint8(value) if red else 255
            data[2] = numpy.uint8(value) if green else 255
            data[1] = numpy.uint8(value) if blue else 255
            data[3] = 0x01 << i
            wiringpi.wiringPiSPIDataRW(0, bytes(data))


render_t = threading.Thread(target=render)
render_t.start()

matrix = char_lib.matrix_n
red = False
green = False
blue = True

while True:
    matrix = char_lib.matrix_t
    sleep(1)
    matrix = char_lib.matrix_o
    sleep(1)
    matrix = char_lib.matrix_p
    sleep(1)
    matrix = char_lib.matrix_y
    sleep(1)
    matrix = char_lib.matrix_u
    sleep(1)
    matrix = char_lib.matrix_n
    sleep(1)
    matrix = char_lib.matrix_p
    sleep(1)
