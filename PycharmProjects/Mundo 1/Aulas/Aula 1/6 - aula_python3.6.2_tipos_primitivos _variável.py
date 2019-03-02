#!/bin/bash/python

n1 = input("DIGITE UM VALOR: ")
print('O tipo primitivo do valor {} é: {} '.format(n1, type(n1)))

print('"{}" é apenas um número? {}'.format(n1, n1.isnumeric()))
print('"{}" é apenas um alfabeto? {}'.format(n1, n1.isalpha()))
print('"{}" é um decimal? {}'.format(n1, n1.isdecimal()))
print('"{}" tem espaço? {}'.format(n1, n1.isspace()))
print('"{}" está apenas em minúsculo? {}'.format(n1, n1.islower()))
print('"{}" está apenas em maiúsculo? {}'.format(n1, n1.isupper()))

print('')
print('')

n = input('DIGITE UM VALOR: ')
print('O valor é apenas um número: {}\n'
      'O valor é apenas alpha numérico: {}\n'
      'O valor é apenas alpha: {}\n'
      'O valor é classificado apenas por letras maisúculas: {}\n'
      'O valor é classificado apenas por letras minúsulas: {}\n'
      'O valor está capitalizado: {}'
      .format(n.isnumeric(),n.isalpha(),n.isalnum(),n.isupper(),n.islower(),n.istitle())
      )
