## Desafio 19 - Um professor quer sortear um dos seus quatro alunos para apagar o quadro. Faça um programa que ajuda ele lendo o nome deles e escrevendo o nome escolhido
from random import shuffle
import random

var = input('Digite o nome do primeiro aluno: ')
var1 = input('Digite o nome do segundo aluno: ')
var2 = input('Digite o nome do terçeiro aluno: ')
var3 = input('Digite o nome do quarto aluno: ')

ran = (var, var1, var2, var3)

print('O aluno escolhido para apagar o quadro é:', random.choice(ran))


##########################################################################

alunos = []
x = 1
while x <= 4:
    alunos.append(input('Escolha um aluno para apagar o quadro: '))
    x += 1
print('Escolhido: {}'.format(random.choice(alunos)))