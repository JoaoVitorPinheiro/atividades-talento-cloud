def mostrar_numero():
    numero_valido = False
    print('escreva um numero menor ou igual a 100:')
    while(numero_valido == False):
     try: 
        num = int(input('Digite o numero:'))
        if num <= 100:
            print(f'voce escolheu o numero :{num}')
            numero_valido = True

        else:
            print('numero precisa ser menor que 100!')

     except:
        print('valor inserido deve ser inteiro')



mostrar_numero()