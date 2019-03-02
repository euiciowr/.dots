# Faça um programa que leia uma frase pelo teclado e mostre quantas vezes aparece a letra "A", em que posição ela aparece a primeira vez e em que posição ela aparece a última vez.

w = str(input('Digite uma palavra ou frase pls: ')).strip().upper()
print('Dentro de {} há {} letras A'.format(w, w.count('A')))
print('Na palavra/frase {} aparece a vogal A pela primeira vez no bloco {}'.format(w, w.find('A')+1))
print('Na palavra/frase {} aparece a vogal A pela última vez no bloco {}'.format(w, w.rfind('A')+1))

