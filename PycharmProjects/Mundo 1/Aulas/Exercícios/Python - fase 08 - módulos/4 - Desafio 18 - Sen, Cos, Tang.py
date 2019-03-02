## Desafio 18 - Faça um programa que leia um ângulo qualquer e mostre na tela o valor do seno, cosseno e tangente desse ângulo
import math

ang = float(input('Digite o ângulo a ser calculado o seno, cosseno e tângente: '))
ang1 = math.radians(ang)
sen = math.sin(ang1)
cos = math.cos(ang1)
tan = math.tan(ang1)
print('\nSeno do ângulo de {:.0f}ª é {:.2f}ª \nCosseno do ângulo de {:.0f}ª é {:.2f}ª \nTangente do ângulo de {:.0f}ª é {:.2f}ª'.format(ang, sen, ang, cos, ang, tan))
