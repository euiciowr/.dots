'''
Exercício Python 035: Desenvolva um programa que leia o comprimento de
três retas e diga ao usuário se elas podem ou não formar um triângulo.

'''

r1 = float(input('Primeira reta: '))
r2 = float(input('Segunda reta: '))
r3 = float(input('Terceira reta: '))

#a = r1 + r2 + r3 / 3

if r1<r2 + r3 and r2 < r3 + r1 and r3 < r1 + r2:
    print('Os segmentos digitados podem formar um triângulo!')
else:
    print('Os segmentos acima não podem formar um triângulo!')