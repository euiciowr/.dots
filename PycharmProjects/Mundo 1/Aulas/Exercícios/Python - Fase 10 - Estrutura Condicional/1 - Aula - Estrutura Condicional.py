''' Estrutura sequencial:
 Acontece em sequência de cima para baixo
def main(): # acontece sempre os itens colados, chama-se de indentação
    #n = input('') # acontece quando a função main for chamada

#Se if for true
então else: será false
logo o será executado a opção true
Isto é, deve haver um bloco if e em baixo um bloco else

tempo = int(input('Quantos anos tem seu carro? '))
if tempo <= 3:
    print('Caro novo')
#else:
    print('Caro velho')
print('--- FIM ---'

Condição simples == if
Condição composta == if e else
'''
a = float(input('Escreve sua primeira nota: '))
b = float(input('Escreva sua segunda nota: '))
c = (a + b) / 2
if c >= 6.0:
    print('Sua média é {}, logo sua média foi boa. PARABÉNS'.format(c))
else:
    print('Sua média foi {}, infelizmente você ficou com uma nota baixa :('.format(c))
