#!/bin/bash/python3

'''
Variáveis: toda variável é um objeto para o python
Simbolo '=' significa recebe
Números não precisam de aspas
'''

#nome = 'hxxp'
#idade = 19
#peso = 75.8

#print (nome, idade, peso)



## Print: escreve
## Input: Leia
print('='*30, "Desafio 00", '='*30)
nome = input('Qual o seu nome ? ')
idade = input('Qual a sua idade ? ')
peso = input('Qual é o seu peso ? ')
altura = input('Qual é a sua altura ? ')

print('')

print ('Seu nome é', nome)
print ('Sua idade é', idade)
print ('Seu peso é', peso)
print ('Sua altura é', altura)

print('')

## Desafio 01
print('='*30, "Desafio 01", '='*30)
nome = input ('What is your name ?\n')
print('Hello {}, welcome to my world'.format(nome))

print('')

## Desafio 02
print('='*30, "Desafio 02", '='*30)
nome = input('Qual é o seu nome ? \n')
print ('Olá {}, prazer em te conhecer!\n'.format(nome))

dia = input('Em qual dia você nasceu? ')
mes = input('Qual o mês do seu nascimento? ')
ano = input('Qual o ano do seu nascimento? ')

print('Legal {}, você nasceu no dia {} de {} do ano de {}'.format(nome, dia, mes, ano))
