

rep = 1

while rep == 1:
    soma = int(input('Escolha a operação (1 - Soma, 2 - Subtração, 3 - Multiplicação, 4 - Divisão): '))
    num1 = int(input('Digite o número 1: '))
    num2 = int(input('Digite o número 2: '))
    
    def calculadora(num1, num2, operacao):
            if operacao == 1:
                return num1 + num2
            elif operacao == 2:
                return num1 - num2
            elif operacao == 3:
                return num1 * num2
            elif operacao == 4:
                if num2 != 0:
                    return num1 / num2
            else:
                print("Erro: Divisão por zero.")
            return 0
        # else: 
        # print("Operação não reconhecida. Escolha uma operação válida (1 a 4).")
        # return 0

    def escrever_operacao(num1, num2, operacao):
            if operacao == 1:
                return str(num1) + ' + ' + str(num2) + ' = ' + str(calculadora(num1, num2, operacao))
            elif operacao == 2:
                return str(num1) + ' - ' + str(num2) + ' = ' + str(calculadora(num1, num2, operacao))
            elif operacao == 3:
                return str(num1) + ' * ' + str(num2) + ' = ' + str(calculadora(num1, num2, operacao))
            elif operacao == 4:
                return str(num1) + ' / ' + str(num2) + ' = ' + str(calculadora(num1, num2, operacao))
            else:
                return "Operação não reconhecida. Escolha uma operação válida (1 a 4)."

    resultado = escrever_operacao(num1, num2, soma)
    print(resultado)
    
    
    
    rep =  int (input('deseja continuar calcular? digire [1]continuar, [2]para sair\n'))
    if rep == 2:
        print('fim do laço')
        break    
    else:
         rep = 1