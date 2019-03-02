# Escreva um programa que faça o computador "pensar" em um número inteiro entre 0 e 5 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. O programa deverá escrever na tela se o usuário venceu ou perdeu

import random # random números
from time import sleep # tempo
print('EU VOU SORTEAR UM NÚMERO ENTRE 0 E 100!')
b = int(input('DIGITE UM NÚMERO DE 0 A 100: '))
a = random.randint(0, 100) # programa vai randomizar número de 0 a 100
print('PROCESSANDO, AGUARDE...')
sleep(3)
if b == a:
    print('Você acertou, o número que o computador escolheu foi {}'.format(a))
else:
    print('Você errou, o número que o computador escolheu foi {}'.format(a))
