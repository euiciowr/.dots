# import biblioteca # importa a biblioteca toda
# from biblioteca import sqrt, floor # importa apenas o módulo

## fase 8 - utilizando modulos
import math
import emoji

from math import sqrt

num = float(input('Digite um número: '))
raiz = math.sqrt(num)

print('A raiz de {} é igual a {}'.format(num, raiz))
print(emoji.emojize(':smiling_imp:', use_aliases=True))