######################### Cadeia de caracteres #########################

'''
// Fatiamento de strings
frase (string) = ('Aprendendo python (cadeia de caracteres')
A p r e n d e n d o      P y t h o n
1 2 3 4 5 6 7 8 9 10   11 12 13 14 15 16

frase [9]
frase [9:13] (o python vai escolher o número 9 e 13 que contém as letras dy, deixando fora o 13)
frase [15:] (printa do 15 até o final)
frase [9::3] (printa do 9 até o final pulando 3 carácteres por vez)

print('='*20, "função de fatiamento  (fatia qualquer bloco e caractere)", '='*20)
frase = input('Digite algo: ')
print(frase[3]) # Escreve a 4 letra  do bloco 3
print(frase[3:13]) # Escreve da letra 3 bloco 4 até a letra 12 bloco 13
'''
#########################  Print texto total #########################

print("""

""")


######################### Análise de String #########################

# // len
print('='*20, "função len (comprimento de caracteres)", '='*20)
vars = input('Diga algo: ')
print('Dentro da frase {} há {} carácteres.'.format(vars, len(vars)))
# len(frase) - determina a quantidade do comprimento de carácteres
print('')

# // Count
print('='*20, "função count (determina a quantidade de carácteres com uma letra em um bloco)", '='*20)
# frase.count('o') - determina a quantidade de letras 'o' dentro da frase
# fatiamento do 0 ao 6 mostrando quantos 'i' tem dentro de 0 e 6
var = str(input('Diga um nome: '))
print(('Dentro da palavra {} há {} carácteres com a letra i de 0 há 6 blocos').format(var, var.count('i', 0, 6)))
print('')

# // find
# Informa quantos carácteres há na var.. uma frase inexistente passa um valor -1
print('='*20, "função find (procura um caracter dentro de um bloco)", '='*20)
find1 = input('Digite uma palavra: ')
print(('Dentro da palavra "{}" há carácteres {} antes de ri').format(var, var.find('ri')))
print('')


# // in
print('='*20, "função in (determina um valor dentro de um variável, true or false)", '='*20)
in1 = input('Digite uma palavra: ')
print('Dentro de {} existe a palavra Egito? {}'.format(in1, 'Egito' in in1))
print('')




########################### Transformações ##########################

# // replace
print('='*20, "função replace (procura um caracter e troca por outro)", '='*20)
replace1 = input('Digite uma palavra: ')
replace1 = (replace1.replace('Python', 'Android'))
print(replace1)

# // upper
print('='*20, "função upper (Coloca todos os carácteres em maiúsculo)", '='*20)
upper1 = input('Digite algo: ')
print(upper1.upper())
print('')

# // lower
print('='*20, "função lower (Coloca todos os carácteres em minúsculo)", '='*20)
lower1 = input('Digite algo: ')
print(lower1.lower())
print('')

# // capitalize
print('='*20, "função capitalize (Coloca todos os caracteres em minúsculo e o primeiro em maiúsculo)", '='*20)
capitalize1 = input('Digite algo: ')
print(capitalize1.capitalize())
print('')

# // title
print('='*20, "função title (Coloca maiúsculo em todas as palavras depois de espaço)", '='*20)
title1 = input('Digite algo: ')
print(title1.title())
print('')

# // strip
print('='*20, "função strip, rstrip, lstrip", '='*20,'\nStrip: remove espaços vazios do início e do fim\nRstrip: remove apenas os espaços do lado direito\nLstrip: remove apenas espaços do lado esquerdo')
strip1 = input('Digite algo: ')
print(strip1.strip())
print('')



########################### Divisão ##########################

# // split
print('='*20, "função split, divisão das palavras considerando espaços, cada espaço é criada um novo bloco de carácteres", '='*20)
split1 = input('Digite algo: ')
dividido = split1.split()
print(dividido[1]) # condição [1] mostra apenas a primeira tábela. [1] [2] mostra a 2 letra da 1 tábela
print('')



########################### Junção ##########################

# //  Join
print('='*20, "função join, Junta as frases com um elemento", '='*20)
join1 = str(input('Digite algo: '))
'-'.join


