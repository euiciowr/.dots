# Desenvolva um programa que pergunte a distância de uma viagem em Km. Calcule o preço da passagem, cobrando R$0,50 por Km para viagens de até 200Km e R$0,45 parta viagens mais longas.
print('#'*20, "DESAFIO 30", '#'*20)
from time import sleep
W = float(input('QUAL A DISTÂNCIA EM KM A SER PERCORRIDO? '))
X = 0.50*W
Z = 0.45*W
print('analizando, aguarde...')
print('Você deseja fazer uma viagem de {:.0f}Km'.format(W))
sleep(3)
if W <= 200:
    print('O valor da passagem é R${:.2f} com custo de R$0,50 por km'.format(X))
if W > 200:
    print('O valor da passagem é R${:.2f} com custo de R$0,45 por km'.format(Z))
