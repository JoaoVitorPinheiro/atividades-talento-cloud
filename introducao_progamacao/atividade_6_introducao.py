

def Dias_de_vida():
  while True: 
    
    try:
        DataNasc = int(input('Digite sua ANO de Nascimento:\n'))
        if 1992 <= DataNasc <=2023:
           return DataNasc
        else:
           print('digite um ano valido.')
    except ValueError:
       print('ERRO: Digite um numero valido.')

def  calculo_idade(DataNasc):
   idade = 2023 - DataNasc
   return idade

def main():
   yourname = input('Digite seu nome completo:\n')
   DataNasc = Dias_de_vida()
   idade = calculo_idade(DataNasc)

   print('\nInformações do usuario:')
   print('Nome:',yourname)
   print('Idade em 2023:',idade,'anos')

if __name__ == "__main__":
   main()

    

