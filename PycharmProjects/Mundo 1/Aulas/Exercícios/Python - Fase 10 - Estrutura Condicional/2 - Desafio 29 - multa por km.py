# Escreva um programa que leia a velocidade de um carro. Se ele ultrapassar 80Km/h, mostre uma mensagem dizendo que ele foi multado. A multa vai custar R$7,00 por cada Km acima do limite.
from time import sleep
v = float(input('Digite a velocidade do carro: '))
print('Analisando, aguarde...')
sleep(3)
r = (v - 80)*7
if v > 80:
    print('Você foi multado, o valor da multa é R$7,00 por cada km acima do limite 80km, logo você terá que pagar: {}'.format(r))
else:
    print('Você não ultrapassou a velocidade máxima da pista, portanto não foi multado!')
