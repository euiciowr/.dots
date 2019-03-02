# Crie um programa que leia um número inteiro e mostre na tela se ele é PAR ou ÍMPAR.

w = int(input('Digite um número inteiro para saber se é impar ou par: '))
x = w % 2
if x == 0:
    print('O número {} é PAR'.format(w))
else:
    print('O número {} é IMPAR'.format(w))
