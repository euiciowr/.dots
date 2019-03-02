# 022: Crie um programa que leia o nome completo de uma pessoa e mostre:
# - O nome com todas as letras maiúsculas e minúsculas.
# - Quantas letras ao todoo (sem considerar espaços).
#  - Quantas letras tem o primeiro nome.

import time
new = str(input('ESCREVA O NOME DE UMA PESSOA: ')).strip() #cortar espaços
print('Analisando seu nome, aguarde...')
time.sleep(1)
upperr = new.upper()
lowerr = new.lower()
leen = len(new) - new.count(' ')
findd = new.find(' ')
print('NOME: {}\nNOME: {}\nQUANTIDADE DE CARACTERES DO NOME: {}\nESCREVENDO O PRIMEIRO BLOCO: {}'.format(upperr, lowerr, leen, findd))
