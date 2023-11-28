# # tabuata 
# num_tabuada =  int(input('Digite qual tabuada deseja saber !\n'))
# print(f'============ TABUADA DO {num_tabuada} ============')
# for tabuada in range(0,11):
#     print(f'{num_tabuada} x {tabuada} = {num_tabuada * tabuada}')
num1 = int(input('Digite o numero 1 !'))
num2 = int(input('Digite o  numero 2  !'))
soma = input('Digite qual tipo de conta que fazer')


def escrever_multiplicacao (num1, num2, soma ):
    # resultado = str(num1) + ' x ' + str(num2) + ' = ' + str(num1*num2)
    resultado = str(num1) +  str(soma) + str(num2) + ' = ' + num1,soma,num2

    return resultado

resposta = escrever_multiplicacao  (num1, num2, soma)
print(resposta)