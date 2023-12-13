def mostrar_estoque(estoque):
    print("LISTA ATUAL DE PRODUTOS EM ESTOQUE\n")
    for lista in range(len(estoque)):
      indice = [lista]
      print(f'Temos em estoque o produto {estoque[lista]} que está no índice {indice}') # Lista de itens atual

def alterar_produto(estoque):
    mostrar_estoque(estoque)

    try:
        indice = int(input("\nDigite o número do produto que deseja alterar: ")) - 1
        if 0 <= indice < len(estoque):
            alt_produto = input("Digite o novo produto: ")
            estoque[indice] = alt_produto
            print("Produto alterado com sucesso!")
        else:
            print("Índice inválido. Tente novamente.")
    except ValueError:
        print("Caracter inválido. Digite um número válido.")

estoque = ['máscaras faciais','perfumes', 'hidratantes', 'shampus', 'sabonetes', 'delineadores', 'condicionador', 'desodorantes']

def adicionar_produto(estoque):
  mostrar_estoque(estoque)

  produto_novo = str(input("Digite o produto que deseja adicionar: "))
  if produto_novo not in estoque:
    estoque.append(produto_novo)
    print("Produto adicionado com sucesso!")
  else:
    print("Produto já existe no estoque")



while True:
    print("\n========== Opções: ==========")
    print("1. Mostrar produtos em estoque")
    print("2. Alterar produto")
    print("3. Adicionar produto")
    print("4. Sair")

    opcao = input("Escolha uma opção (1, 2, 3 ou 4): \n")

    if opcao == '1':
        mostrar_estoque(estoque)
    elif opcao == '2':
        alterar_produto(estoque)
    elif opcao == '3':
        adicionar_produto(estoque)
    elif opcao == '4':
        print("Saindo do programa !")
        break
    else:
        print("Opção inválida. Tente novamente.")