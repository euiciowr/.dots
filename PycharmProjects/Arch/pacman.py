# -*- coding: utf-8 -*-
# ------------------------------------------------------
#
#      BY: UNDEADSEC from BRAZIL :)
#      Visit: https://www.youtube.com/c/UndeadSec
#      Github: https://github.com/UndeadSec/EvilURL
# ------------------------------------------------------


from __future__ import print_function
from platform import python_version
from sys import exit
from time import sleep
from os import path
from socket import socket, AF_INET, SOCK_STREAM, gethostbyname, gaierror

version = python_version().startswith('2', 0, len(python_version()))
if version:
    print('Are you using python version {}\n'
          'Please, use version 3.X of python'.format(python_version()))
    exit(1)

from os import system
import subprocess
import os

RED, WHITE, YELLOW, CIANO, GREEN, END = '\033[91m', '\33[46m', '\33[93m', '\33[36m', '\033[1;32m', '\033[0m'

names = ['Cyrillic Small Letter A',
         'Greek Lunate Sigma Symbol',
         'Cyrillic Small Letter Ie',
         'Cyrillic Small Letter O',
         'Cyrillic Small Letter Er',
         'Cyrillic Small Letter Dze',
         'Cyrillic Small Letter Komi De',
         'Cyrillic Small Letter Qa',
         'Cyrillic Small Letter We']

unicodes = ['\u0430', '\u03F2', '\u0435', '\u043E', '\u0440', '\u0455', '\u0501', '\u051B', '\u051D']


def message():
    system('clear')

print('''{0}                                                                   
{1} ██▓███   ▄▄▄      ▄████▄   ███▄ ▄███▓ ▄▄▄      ███▄    █ 
{1}▓██░  ██▒▒████▄   ▒██▀ ▀█  ▓██▒▀█▀ ██▒▒████▄    ██ ▀█   █ 
{1}▓██░ ██▓▒▒██  ▀█▄ ▒▓█    ▄ ▓██    ▓██░▒██  ▀█▄ ▓██  ▀█ ██▒
{1}▒██▄█▓▒ ▒░██▄▄▄▄██▒▓▓▄ ▄██▒▒██    ▒██ ░██▄▄▄▄██▓██▒  ▐▌██▒ 
{0}▒██▒ ░  ░ ▓█   ▓██▒ ▓███▀ ░▒██▒   ░██▒ ▓█   ▓██▒██░   ▓██░
{0}▒▓▒░ ░  ░ ▒▒   ▓▒█░ ░▒ ▒  ░░ ▒░   ░  ░ ▒▒   ▓▒█░ ▒░   ▒ ▒ 
{0}░▒ ░       ▒   ▒▒ ░ ░  ▒   ░  ░      ░  ▒   ▒▒ ░ ░░   ░ ▒░
{0}░░         ░   ▒  ░        ░      ░     ░   ▒     ░   ░ ░ 
{0}               ░  ░ ░             ░         ░  ░        ░ 
{0}                  ░                                       

			 [ PACMAN{1}SCRIPTING{1} ]
-> github.com/ueiciowr

How to use:
 Insert number
'''.format(CIANO, END))

print ('[1] Install:')
print ('[2] Search:')
print ('[3] Remove:')
print ('[4] Remove all:')
print ('[5] Information:')

print('')

command = int(input("Digite uma opção: "))

#while command >= 6:
#    command = int(input('Digite uma opção:'))
#else:


if command == 3:
    os.system()

if command == 4:
    os.system("cat /etc/services")
else:
    print('')

if command == 5:
    print(subprocess.call(['df -h'], shell=True))
else:
    print('')


