# Full Cycle Rocks!! - Desafio Nginx como Proxy Reverso

Este repositório contém a solução para o desafio de configurar o Nginx como um proxy reverso para uma aplicação Node.js que interage com um banco de dados MySQL. A aplicação Node.js cadastra nomes na tabela `people` e retorna uma mensagem juntamente com a lista de nomes cadastrados.

## Descrição

O objetivo do desafio é criar uma configuração onde o Nginx atua como proxy reverso para uma aplicação Node.js. Quando o Nginx é acessado, ele faz uma chamada à aplicação Node.js, que por sua vez adiciona um nome ao banco de dados MySQL e retorna a seguinte resposta:

```html
<h1>Full Cycle Rocks!</h1>
```

- Seguido por uma lista dos nomes cadastrados no banco de dados.

## Estrutura do Projeto

- **`nginx/`**: Contém o arquivo de configuração do Nginx (`nginx.conf`).
- **`node/`**: Contém a aplicação Node.js (`server.js`) que interage com o banco de dados MySQL.
- **`docker-compose.yml`**: Arquivo de configuração para orquestrar os contêineres.

## Como Executar

### Requisitos

- Docker e Docker Compose instalados em sua máquina.

### Passos

1. **Clonar o Repositório**:
   ```bash
   git clone https://github.com/KelvinSilvaDev/fc-node-challenge.git
   cd fc-node-challenge
   ```

2. **Rodar o Docker Compose**:
   - Execute o comando abaixo para subir os contêineres:
     ```bash
     docker-compose up -d
     ```
   - Isso irá iniciar três contêineres: Nginx, Node.js, e MySQL.

3. **Acessar a Aplicação**:
   - Abra seu navegador e acesse `http://localhost:8080`.
   - Você deverá ver a mensagem **"Full Cycle Rocks!"** seguida pela lista de nomes cadastrados.

## Arquivos Principais

- **`nginx/nginx.conf`**:
  - Configura o Nginx como proxy reverso, direcionando as requisições para a aplicação Node.js.

- **`node/server.js`**:
  - Servidor Node.js que se conecta ao banco MySQL, insere um nome na tabela `people`, e retorna a resposta.

- **`docker-compose.yml`**:
  - Configura o Nginx, Node.js, e MySQL. Inclui um volume para o diretório da aplicação Node.js para facilitar o desenvolvimento.

## Volumes

- A aplicação Node.js está configurada com um volume que mapeia o código-fonte local para dentro do contêiner, permitindo o desenvolvimento sem necessidade de reconstruir a imagem a cada mudança:
  ```yaml
  volumes:
    - ./node:/usr/src/app
  ```

## Considerações

- A aplicação está disponível na porta **8080**.
- Qualquer alteração no código da aplicação Node.js reflete imediatamente devido ao volume configurado.
- A tabela `people` no banco de dados MySQL armazena os nomes que são exibidos na página retornada.

## Autor

Desenvolvido por [Kelvin Silva](https://github.com/KelvinSilvaDev).
