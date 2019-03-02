# Faça um script que leia um número de - a 9999 e mostre cada dígito separado:
from time import sleep
new = int(input('ESCREVA UM NÚMERO: '))
print('Analisando seu nome, aguarde...')
sleep(2)
n = new // 1 % 10
n2 = new // 10 % 10
n3 = new // 100 % 10
n4 = new // 1000 % 10
print('Unidade: {}'.format(n))
print('Dezena: {}'.format(n2))
print('Centena: {}'.format(n3))
print('Milhar: {}'.format(n4))
