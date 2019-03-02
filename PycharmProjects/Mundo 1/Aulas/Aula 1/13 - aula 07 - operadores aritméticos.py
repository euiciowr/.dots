## DESAFIO 13 - FAÇA UM ALGORITMO QUE LEIA O SALÁRIO DE UM FUNCIONÁRIO E MOSTRE SEU NOVO SALÁRIO, COM 15% DE AUMENTO
salario = float(input('QUAL É O SEU SALÁRIO EM R$: '))
aumento = salario + (salario * 15 / 100)

print('O SEU SALÁRIO QUE ERA {}, COM 15% DE AUMENTO SERÁ {}!'.format(salario, aumento))