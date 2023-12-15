def produtos (lista_produtos):
      print('========= LISTA DE PRODUTOS LOJA =========')
      print(f'lista loja{lista_produtos}')

      

def tchau_produto(lista_produtos):
    produtos(lista_produtos) 
    try:
        elimi_produto = str(input('Digite o nome do produto para excluir:\n'))
        lista_produtos.remove(elimi_produto)
        print(f'produto "{elimi_produto}"eliminado com sucesso!')

    except ValueError:
        print('==== voce digitou o nome de um produto invalido, por favor tente novamente: ===')
     
def novo_produto(lista_produtos):
    produtos(lista_produtos)
    add_produtos = str(input('Digite o nome do produto para adicionar:\n'))
    lista_produtos.append(add_produtos)
    print(f'Produto "{add_produtos}" adicionado com sucesso!')


lista_produtos = ['máscaras faciais', 'batons', 'esmaltes', 'perfumes', 'loções', 'xampus', 'sabonetes', 'delineadores'] 

while True:
    print('\n======== menu loja ========')
    print('1.Remover um item')
    print('2.Adicionar item')
    print('3.Mostrar produtos')
    print('4.Sair do programa')

    Escolha = str(input('Escolha uma opçao: (1,2,3 ou 4)\n'))

    if Escolha == '1':
        tchau_produto(lista_produtos)
    elif Escolha == '2':
        novo_produto(lista_produtos)
    elif Escolha == '3':
        produtos(lista_produtos)
    elif Escolha == '4':
        print('Saindo do programa...')
        break
    else:
        print('Opção invalida, tente novamente')
