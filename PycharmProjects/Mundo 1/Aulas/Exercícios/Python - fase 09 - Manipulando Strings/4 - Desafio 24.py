# Crie um programa que leia o nome de uma cidade diga se ela começa ou não com o nome "SANTO".
name = str(input('Diga o nome de uma cidade que comece com SANTO: ').strip())
print(name[:5].upper() == 'SANTO')
