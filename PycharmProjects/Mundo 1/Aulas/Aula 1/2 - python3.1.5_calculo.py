#!/bin/bash/python

# int (números inteiros) = 7 -4 0 9875
# float (números reais ou pontos flutuantes) = 4.5 0.0076 -15.223 7.0
# bool (valores lógicos ou boleanos) True or False
# str (caracteres ou strings) 'Olá' '7.5' '' tudo entre aspas é string
print('='*30, "Desafio 03", '='*30)
n1 = int(input('Digite o primeiro número: '))
n2 = int(input('Digite o segundo número: '))

adicao = n1 + n2
subtracao = n1 - n2
divisao = n1 / n2
multiplicacao = n1 * n2
potencia = n1 ** n2 #Multiplicação ao quadrado/cubo etc...
divisaointeira = n1 // n2 #Divisao sem usar vírgula, encerra ao não conseguir mais dividir o número
modrestodivisao = n1 % n2 #é o que sobra da divisão inteira

## ORDEM DE PROCEDÊNCIA
# 1- faz-se a conta entre ()
# 2- exponenciação de potência **
# 3- multiplicação * ::: Divisão / ::: Divisão inteira // ::: resto da divisão %
# 4- adição + ;;; subtração -


print ('\n')

print ('A adição entre {} e {} é igual a: {}'.format(n1, n2, adicao))
print ('A subtração entre {} e {} é igual a: {}'.format(n1, n2, subtracao))
print ('A divisão entre {} e {} é igual a: {}'.format(n1, n2, divisao))
print ('A multiplicação entre {} e {} é igual a: {}'.format(n1, n2, multiplicacao))
print ('A potência entre {} e {} é igual a: {}'.format(n1,n2,potencia))
print('A divisão inteira entre {} e {} é igual a: {}'.format(n1,n2,divisaointeira))
print('O resto da divisão entre {} e {} é igual a: {}'.format(n1,n2,modrestodivisao))