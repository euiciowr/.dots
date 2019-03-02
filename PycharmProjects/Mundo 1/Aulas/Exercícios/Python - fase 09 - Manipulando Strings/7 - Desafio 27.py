# Faça um programa que leia o nome completo de uma pessoa, mostrando em seguida o primeiro e o último nome separadamente.
a = str(input('Digite seu nome completo:'))
b = a.split()
c = a.rsplit()
print("Seu nome é {}".format(b[0]))
print('Seu último nome é: {}'.format(b[len(b)-1]))

