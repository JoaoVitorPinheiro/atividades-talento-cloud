# tecla = input('digite uma letra')
# while tecla:
#     if tecla == '':

#         print (f'letra digitada foi {tecla}')
# else:
# tecla == 'f'
# break
#     print ('fim do laço')


tecla = input('Digite uma letra: ')

while tecla:
    if tecla == '':
        print(f'A letra digitada foi {tecla}')
    else:
        if tecla == 'f':
            break
        print('Fim do laço')

    # Atualiza a variável `tecla` dentro do loop para evitar um loop infinito
    tecla = input('Digite uma letra: ')
