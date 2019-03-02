## Desafio 20 - O professor quer sortear a ordem de apresentação de trabalhos dos alunos. Faça um programa que leia o nome dos quatro alunos e mostre a ordem sorteada
from random import shuffle
al = input('Digite o nome do aluno 1: ')
all = input('Digite o nome do aluno 2: ')
alll = input('Digite o nome do aluno 3: ')
allll = input('Digite o nome do aluno 4: ')

sor = [al, all, alll, allll]
shuffle (sor)
print('A ordem escolhida é: {}'.format(sor))