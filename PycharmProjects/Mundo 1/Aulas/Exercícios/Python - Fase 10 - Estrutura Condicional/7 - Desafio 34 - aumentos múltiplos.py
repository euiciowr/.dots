'''

Escreva um programa que pergunte o salário de um funcionário e calcule o valor do seu aumento.
Para salários superiores a R$1250,00, calcule um aumento de 10%. Para os
inferiores ou iguais, o aumento é de 15%.

'''
a = int(input('Digite o salário do funcionário: '))

if a <= 1250:
    b = (a*15/100)
    print('O salário do funcionário com 15% de aumento será R${}'.format(a+b))

if a > 1250:
    c = (a*10/100)
    print('O salário do funcionário com 10% de aumento será R${}'.format(a+c))
