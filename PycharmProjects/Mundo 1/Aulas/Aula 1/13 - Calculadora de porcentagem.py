
'''
DESAFIO 12 - FAÇA UM ALGORITMO QUE LEIA O PREÇO DE UM PRODUTO E MOSTRE SEU NOVO PREÇO COM 5% DE DESCONTO
'''

prod = float(input('DIGITE O PREÇO DO PRODUTO A SER ADICIONADO UM DESCONTO EM R$: '))
porc = float(input('DIGITE QUANTOS % VALE O DESCONTO EM %: '))

desc = prod - (prod * porc / 100)

print('O PRODUTO QUE CUSTAVA R${}, NA PROMOÇÃO COM {:.0f}% DE DESCONTO ESTARÁ R${}'.format(prod, porc, desc))


# ====================================================================================================================#

print('')

# ====================================================================================================================#


## DESAFIO 13 - FAÇA UM ALGORITMO QUE LEIA O SALÁRIO DE UM FUNCIONÁRIO E MOSTRE SEU NOVO SALÁRIO, COM 15% DE AUMENTO
print('='*30, "Desafio 13", '='*30)
salario = float(input('QUAL É O SALÁRIO DO FUNCIONÁRIO EM R$: '))
porcentagem = float(input('QUANTOS % DE AUMENTO O SALÁRIO TERÁ? '))

aumento = salario + (salario * porcentagem / 100)

print('O SEU SALÁRIO QUE ERA {}, COM 15% DE AUMENTO SERÁ {}!'.format(salario, aumento))