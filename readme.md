Documentação da API

Bem-vindo à documentação da API de Produtos! Neste guia, você encontrará instruções sobre como interagir com a API para realizar operações de CRUD (Criar, Ler, Atualizar e Excluir) em uma lista de produtos.

Construi este projeto apenas para estudo. É um projeto simples com uma api restful crud que armazena os dados em um json que simula um banco de dados.

URL Base
Antes de começar, verifique se o servidor está em execução. Todas as requisições devem ser feitas para a seguinte URL base: http://localhost:3000

## Operações Disponíveis

1. Listar Todos os Produtos <br>
**Método:**: GET <br>
**Endpoint:**: /products <br>

Esta operação retorna uma lista de todos os produtos armazenados.

2. Obter Detalhes de um Produto <br>
**Método:**: GET <br>
**Endpoint:**: /products/:index <br>

Substitua :index pelo índice numérico do produto que deseja obter. Esta operação retorna os detalhes do produto com base no índice fornecido.

3. Adicionar Novo Produto <br>
**Método:** POST <br>
**Endpoint:**: /products <br>

Para adicionar um novo produto, envie um objeto JSON contendo as informações do produto no corpo da requisição. Certifique-se de incluir os campos obrigatórios name, price e priceDate.

Exemplo de Corpo da Requisição:

{ <br>
    "name": "Nome do Produto", <br>
    "description": "Descrição do Produto (opcional)", <br>
    "price": 99.99, <br>
    "priceDate": "2023-08-21" <br>
} <br>

4. Atualizar Informações de um Produto <br>
**Método:**: PUT <br>
**Endpoint:**: /products/:index <br>

Substitua :index pelo índice numérico do produto que deseja atualizar. Você pode optar por atualizar um campo específico ou substituir todo o objeto. Para atualizar um campo específico, envie um objeto JSON com fieldToUpdate (campo a ser atualizado) e newValue (novo valor).

Exemplo de Corpo da Requisição (atualizando preço):

{ <br>
    "fieldToUpdate": "price", <br>
    "newValue": 129.99 <br>
} <br>

Se desejar substituir todo o objeto, basta enviar um novo objeto JSON contendo todas as informações do produto.

5. Excluir um Produto <br>
**Método:**: DELETE <br>
**Endpoint:**: /products/:index <br>

Substitua :index pelo índice numérico do produto que deseja excluir. Esta operação remove o produto da lista.

## Respostas da API <br>
A API responde com objetos JSON contendo informações dos produtos. Por exemplo:

{ <br>
    "name": "Nome do Produto", <br>
    "description": "Descrição do Produto (opcional)", <br>
    "price": 99.99, <br>
    "priceDate": "2023-08-21" <br>
} <br>

## Erros <br>
A API retorna códigos de status HTTP e mensagens de erro JSON para solicitações inválidas.

Código 404 (Not Found): O índice do produto não foi encontrado. <br>
Código 400 (Bad Request): A solicitação não está no formato esperado.