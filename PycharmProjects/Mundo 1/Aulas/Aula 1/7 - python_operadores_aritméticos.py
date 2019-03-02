#!/bin/bash/python

# int (números inteiros) = 7 -4 0 9875
# float (números reais ou pontos flutuantes) = 4.5 0.0076 -15.223 7.0
# bool (valores lógicos ou boleanos) True or False
# str (caracteres ou strings) 'Olá' '7.5' '' tudo entre aspas é string

print('='*30, "Desafio 03", '='*30)
n1 = int(input('Digite o primeiro número para calcular: '))
n2 = int(input('Digite o segundo número para calcular: '))
print ('='*60)
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



print ('A adição entre {} e {} é igual a: {}'.format(n1, n2, adicao))
print ('A subtração entre {} e {} é igual a: {}'.format(n1, n2, subtracao))
print ('A divisão entre {} e {} é igual a: {:.3f}'.format(n1, n2, divisao))
print ('A multiplicação entre {} e {} é igual a: {}'.format(n1, n2, multiplicacao))
print ('A potência entre {} e {} é igual a: {}'.format(n1,n2,potencia))
print('A divisão inteira entre {} e {} é igual a: {}'.format(n1,n2,divisaointeira))
print('O resto da divisão entre {} e {} é igual a: {}'.format(n1,n2,modrestodivisao))
print ('='*60)


# ====================================================================================================================#

print('')

# ====================================================================================================================#


print('A soma entre {} e {} vale: {}'.format(n1, n2, n1+n2)), # end=(' ') continua a linha


# ====================================================================================================================#

print('')

# ====================================================================================================================#


## Desafio 05 - Faça um programa que leia um número inteiro e mostre na tela o seu sucessor e seu antecessor.
print('='*30, "Desafio 05", '='*30)
var = int(input('DIGITE UM NÚMERO PARA VER SEU ANTECESSOR E SUCESSOR: '))

n1 = var + 1
n2 = var - 1

print('O sucessor de {} é {} e o antecessor de {} é {}'.format(var, n1, var, n2))


# ====================================================================================================================#

print('')

# ====================================================================================================================#


## Desafio 6 - Crie um algoritmo que leia um número e mostre o seu dobro, triplo e raiz quadrada.
print('='*30, "Desafio 06", '='*30)
var1 = int(input('DIGITE UM NÚMERO PARA VER O DOBRO O TRIPLO E A RAIZ QUADRADA: '))

dobro = var1*2
triplo = var1*3
raiz = var1**(1/2)

print('')

print(
    'O dobro de {} é: {}\n'
    'O triplo de {} é: {}\n'
    'A raiz de {} é: {:.2f}\n'
    .format(var1, dobro, var1, triplo, var1, raiz)
)


# ====================================================================================================================#

print('')

# ====================================================================================================================#


## Desafio 7 - Desenvolva um programa que leia as duas notas de uma aluno, calcule e mostre sua média
print('='*30, "Desafio 07", '='*30)
print('Aplicativo para calcular a média dos participantes que fizeram o ENEM!')
print('')
var0 = input('Qual é o seu nome? ')
print('')
var1 = float(input('Nota do aluno em ciências humanas: '))
var2 = float(input('Nota do aluno em ciências da natureza: '))
var3 = float(input('Nota do aluno em matemática: '))
var4 = float(input("Quarta nota do aluno em linguagens: "))
var5 = float(input("Nota do aluno em redação: "))

cal = (var1 + var2 + var3 + var4 + var5) / 5

print ('O {} tirou notas de {:.1f} em CH, {:.1f} em CN, {:1f} em MAT, {:.1f} em LING e {:.1f} em RED e sua média ficou: {:1f}'
       .format(var0, var1, var2, var3, var4, var5, cal)
       )


# ====================================================================================================================#

print('')

# ====================================================================================================================#


## DESAFIO 08 - ESCREVA UM PROGRAMA QUE LEIA UM VALOR EM METROS E O EXIBA CONVERTIDO EM CENTIMETROS E MELIMETROS
print('='*30, "Desafio 08", '='*30)
m1 = int(input('DIGITE UM VALOR EM METROS: '))
cen = m1 * 100
mel = m1 * 1000

print('O valor de {} metros em: \nCentímetros é: {:.3f} \nMelímetros é: {:.3f} '.format(m1, cen, mel))


# ====================================================================================================================#

print('')

# ====================================================================================================================#


## DESAFIO 09 - FAÇA UM PROGRAMA QUE LEIA UM NÚMERO INTEIRO QUALQUER E SUA TABUADA
print('='*30, "Desafio 09", '='*30)
tab = int(input('DIGITE UM NÚMERO PARA SABER A SUA TÁBUADA: '))


print('O resuldade de {}x1 = {}\n'
      'O resuldade de {}x2 = {}\n'
      'O resuldade de {}x3 = {}\n'
      'O resuldade de {}x4 = {}\n'
      'O resuldade de {}x5 = {}\n'
      'O resuldade de {}x6 = {}\n'
      'O resuldade de {}x7 = {}\n'
      'O resuldade de {}x8 = {}\n'
      'O resuldade de {}x9 = {}\n'
      'O resuldade de {}x10 = {}\n'
      .format(tab, tab*1, tab, tab*2, tab, tab*3, tab, tab*4, tab, tab*5, tab, tab*6, tab, tab*7, tab, tab*8, tab, tab*9, tab, tab*10)
      )


# ====================================================================================================================#

print('')

# ====================================================================================================================#


## DESAFIO 10 - CRIE UM PROGRAMA QUE LEIA QUANTO UMA PESSOA TEM NA CARTEIRA E MOSTRE QUANTOS DÓLARES ELA PODE COMPRAR.
print('='*30, "Desafio 10", '='*30)
coins = float(input('QUAL A QUANTIA EM REAIS VOCÊ DESEJA TROCAR EM DOLAR? '))

dol = coins/3.65

print('Você poderá comprar {} DOLAR com {} REAIS'.format(dol, coins))


# ====================================================================================================================#

print('')

# ====================================================================================================================#


## DESAFIO 11 - FAÇA UM PROGRAMA QUE LEIA A LARGURA E A ALTURA DE UMA PAREDE EM METROS,
## CALCULE A SUA ÁREA E A QUANTIDADE DE TINTA NECESSÁRIA PARA PINTÁ-LA, SABENDO QUE CADA
## LITRO DE TINTA PINTA UMA ÁREA DE 2m²
print('='*30, "Desafio 11", '='*30)
larg = float(input('QUAL A LARGURA DA PAREDE EM METROS? '))
alt = float(input('QUAL A ALTURA DA PAREDE EM METROS? '))

lamb = larg * alt
x = lamb / 2

print('Sua parede tem dimensões de {}x{}\nA parede tem {}m² \nÉ necessário {} litros de tinta para pintá-la'
      .format(larg, alt, lamb, x)
      )


# ====================================================================================================================#

print('')

# ====================================================================================================================#


## DESAFIO 12 - FAÇA UM ALGORITMO QUE LEIA O PREÇO DE UM PRODUTO E MOSTRE SEU NOVO PREÇO COM 5% DE DESCONTO
print('='*30, "Desafio 12", '='*30)
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