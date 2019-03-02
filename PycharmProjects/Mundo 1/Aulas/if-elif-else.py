'''

 Estrutura condicional if-else

'''

'''
if = estrutura de condição que permite avaliar uma expressão e, de acordo com o resultado
executar uma determinação:

idade = 18
if idade < 20:
    print('Você é jovem ainda!')

'''

'''
else = condição que executa se if for diferente do resultado

idade = 18
if idade >= 18:
    print('maior de idade')
else:
    print('menor de idade')
'''

'''
Se existir mais de uma condição alternativa que precisa ser verificada, deve se utilizar elif

idade = int(input('Qual a sua idade?'))
if idade < 12:
    print('criança')
elif idade < 18:
    print('adolescente')
elif idade < 60:
    print('adulto')
else:
    print('idoso')
'''