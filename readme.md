Documentação da API

Bem-vindo à documentação da API de Produtos! Neste guia, você encontrará instruções sobre como interagir com a API para realizar operações de CRUD (Criar, Ler, Atualizar e Excluir) em uma lista de produtos.

Construi este projeto apenas para estudo. É um projeto simples com uma api restful crud que armazena os dados em um json que simula um banco de dados.

URL Base
Antes de começar, verifique se o servidor está em execução. Todas as requisições devem ser feitas para a seguinte URL base: http://localhost:3000

Operações Disponíveis
1. Listar Todos os Produtos
Método: GET
Endpoint: /products

Esta operação retorna uma lista de todos os produtos armazenados.

2. Obter Detalhes de um Produto
Método: GET
Endpoint: /products/:index

Substitua :index pelo índice numérico do produto que deseja obter. Esta operação retorna os detalhes do produto com base no índice fornecido.

3. Adicionar Novo Produto
Método: POST
Endpoint: /products

Para adicionar um novo produto, envie um objeto JSON contendo as informações do produto no corpo da requisição. Certifique-se de incluir os campos obrigatórios name, price e priceDate.

Exemplo de Corpo da Requisição:

{
    "name": "Nome do Produto",
    "description": "Descrição do Produto (opcional)",
    "price": 99.99,
    "priceDate": "2023-08-21"
}

4. Atualizar Informações de um Produto
Método: PUT
Endpoint: /products/:index

Substitua :index pelo índice numérico do produto que deseja atualizar. Você pode optar por atualizar um campo específico ou substituir todo o objeto. Para atualizar um campo específico, envie um objeto JSON com fieldToUpdate (campo a ser atualizado) e newValue (novo valor).

Exemplo de Corpo da Requisição (atualizando preço):

{
    "fieldToUpdate": "price",
    "newValue": 129.99
}

Se desejar substituir todo o objeto, basta enviar um novo objeto JSON contendo todas as informações do produto.

5. Excluir um Produto
Método: DELETE
Endpoint: /products/:index

Substitua :index pelo índice numérico do produto que deseja excluir. Esta operação remove o produto da lista.

Respostas da API
A API responde com objetos JSON contendo informações dos produtos. Por exemplo:

{
    "name": "Nome do Produto",
    "description": "Descrição do Produto (opcional)",
    "price": 99.99,
    "priceDate": "2023-08-21"
}

Erros
A API retorna códigos de status HTTP e mensagens de erro JSON para solicitações inválidas.

Código 404 (Not Found): O índice do produto não foi encontrado.
Código 400 (Bad Request): A solicitação não está no formato esperado.