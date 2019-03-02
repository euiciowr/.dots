'''
Faça um programa que leia um ano qualquer e mostre se ele é bissexto.
'''
import time
import datetime
print('#'*20, "DESAFIO 32", '#'*20)
a = int(input('Digite um ano para saber se ele é bissexto e 0 para saber do ano atual: '))
if a == 0:
    a = datetime.date.today().year
if a % 4 == 0 and a % 100 != 0 or a % 400 == 0:
    print('O ano {} é BISSEXTO'.format(a))
else:
    print('O ano {} não é BISSEXTO'.format(a))

