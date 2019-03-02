## Desafio 17 - Faça um programa que leia o comprimento do cateto oposto e do cateto adjacente de um triângulo retângulo, calcule e mostre o comprimento da hipotenusa
from math import hypot
dr = float(input('Comprimento do cateto oposto: '))
de = float(input('Comprimento do cateto adjacente: '))
dc = hypot(dr, de)
print('A hipotenusa é {:.2f}'.format(dc))
