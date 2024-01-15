'''
Precisamos imprimir um número para cada andar de um hotel de 20 andares. Porém, o dono do hotel 
é supersticioso e optou por não ter um 13ro andar.
Escreva um código que imprima todos os números exceto o número 13
'''
# numero_andares = 0
# for contador in range(20):
#     numero_andares = numero_andares + 1 
#     if (numero_andares == 13):
#          continue
#     if (numero_andares == 21):
#         break
#     print(numero_andares)

# '''
# Precisamos imprimir um número para cada andar de um hotel de 20 andares. Porém, o dono do hotel é 
# supersticioso e optou por não ter um 13ro andar.

# Escreva mais um código que resolva o mesmo problema, mas dessa vez usando o laço de repetição 'while'.

# '''
# numero_andares = 0
# while (numero_andares < 21):
#    numero_andares = numero_andares + 1 
#    if numero_andares == 13 :
#       continue
#    if numero_andares == 21:
#       break
#    print(numero_andares)

'''
Precisamos imprimir um número para cada andar de um hotel de 20 andares. Porém, o dono do hotel é supersticioso e optou por não ter um 13ro andar.

Escreva um código que imprima todos os números exceto o número 13.
Escreva mais um código que resolva o mesmo problema, mas dessa vez usando o laço de repetição 'while'.

Como desafio, imprima eles em ordem decrescente (20, 19, 18...)
'''
numero_andares = 21
for contador in range(20):
    numero_andares = numero_andares - 1 
    if (numero_andares == 13):
         continue
    if (numero_andares == 21):
        break
    print(numero_andares)

numero_andares = 21
while (numero_andares <= 21):
   numero_andares = numero_andares -1
   if numero_andares == 13 :
      continue
   if numero_andares == 0:
      break
   print(numero_andares)