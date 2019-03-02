## Desafio 16 - Crie um programa que leua um número Real qualquer pelo teclado e mostre na tela a sua porção inteira
import math

def main():
    print('='*30)
    pcc = float(input('Digite um número real: '))
    print(math.floor(pcc))
main()