print('Aplicativo para calcular a média dos participantes que fizeram o ENEM!')
print('')
var0 = input('Qual é o seu nome? ')
print('')
var1 = float(input('Nota do aluno em ciências humanas: '))
var2 = float(input('Nota do aluno em ciências da natureza: '))
var3 = float(input('Nota do aluno em matemática: '))
var4 = float(input("Quarta nota do aluno em linguagens: "))
var5 = float(input("Nota do aluno em redação: "))

cal = (var1 + var2 + var3 + var4 + var5) / 5

print ('O {} tirou notas de {:.1f} em CH, {:.1f} em CN, {:1f} em MAT, {:.1f} em LING e {:.1f} em RED e sua média ficou: {:1f}'
       .format(var0, var1, var2, var3, var4, var5, cal)
       )
