<p align="center">
  <img src="https://github.com/charles-futDevFloripa/destinoCerto/blob/develop/public/destinoCerto.png" alt="Logo do Destino Certo">
</p>

# Destino Certo - API

**Destino Certo - API** foi desenvolvido como projeto final, individual, do módulo 02 da formação **FuturoDev** do **Floripa Mais Tec**, coordenado pelo **Lab365** em parceria com o **SESI** e **SENAC**.

**Destino Certo**  é uma plataforma que facilita o gerenciamento de resíduos e o acesso a pontos de coleta de materiais recicláveis. Usuários podem cadastrar novos pontos de coleta, encontrar pontos próximos em um mapa interativo ou em uma listagem, visualizar informações sobre os materiais aceitos em cada ponto e registrar suas próprias contribuições para a reciclagem. Confira a versão para o frontend desenvolvida para o módulo 1 [DestinoCerto](https://github.com/charlesbiveu/destinoCerto)

**Destino Certo - API** é o projeto de backend que futuramente irá se conectar com o projeto de FrontEnd. **Destino Certo - API** adota uma arquitetura inspirada no modelo MVC, aplicando-se como REST API. O sistema é desenvolvido utilizando Node.js, PostgreSQL e diversas dependências amplamente utilizadas no mercado, proporcionando uma base sólida e escalável para o gerenciamento de dados e operações. Além disso, valoriza as boas práticas de segurança no desenvolvimento de software implementando medidas de proteção contra ameaças como injeção de SQL, cross-site scripting (XSS) e ataques de negação de serviço (DDoS).

Este projeto visa incentivar o descarte correto do lixo, auxiliando a localizar o ponto de coleta correto na sua região.


## Roteiro da Aplicação

O roteiro da aplicação pode ser conferido no Trello

- [Trello](https://trello.com/b/goHFnQ89/destino-certo-api)


## Diagrama ERD (Entity-Relationship Diagram)

O Diagrama Entidade-Relacionamento pode ser visualizado do DrawSql.

- Um User pode ter muitos CollectionPoints.
- Um CollectionPoint pode ter muitos RecycleTypes associados através da tabela de relacionamento CollectionPointRecycleType.

`User (1) --- (N) CollectionPoint (N) --- (N) CollectionPointRecycleType --- (N) RecycleType`

- [DrawSql](https://drawsql.app/teams/gp-13/diagrams/destino-certo)

## Instalação

- Para usar o **Destino Certo - API**, clone ou faça download do repositório:

```bash
git clone https://github.com/charlesbiveu/destinoCerto-API.git
```

- Depois execute a instalação das dependências

```bash
npm install
```

- Renomeie o arquivo `.env.example` para `.env` e cofigure conforme suas váriaves de ambiente

- Confira se você tem o Postgres instalado então crie a base de dados

```bash
npx sequelize-cli db:create
```

- Após a instalação concluída rode o servidor

 - para desenvolvimento
```bash
npm run start:dev
```
- para produção
```bash
npm run start:prod
```





<!-- 
<p align="center">
  <img src="https://github.com/charles-futDevFloripa/destinoCerto/blob/develop/public/prints/globalMap.jpg?raw=true" alt="destinoCerto">
</p> -->

## Regras de Negócio (para o exercício)

#### Tecnologias Utilizadas
- Node.js
- PostgreSQL
- Sequelize

#### Estrutura e Execução
- Siga o roteiro da aplicação para desenvolvimento.
- Crie um README.md com a estrutura do projeto, instruções de execução local e outras informações relevantes.
- Forneça documentação Swagger para descrever os endpoints da API.

#### Banco de Dados
- Integração com PostgreSQL utilizando Sequelize.
- Criação de migrations para cada tabela utilizada.

#### Versionamento
- Utilize GitHub como sistema de versionamento de código.

#### Apresentação
- Grave um vídeo de apresentação do sistema.

### Funcionalidades e Regras

#### Usuários
- Carregar lista de usuários cadastrados ao iniciar o sistema.
- Endpoints para login e cadastro de novos usuários.
- Informações necessárias: nome, sexo, CPF, endereço, e-mail, senha, data de nascimento.
- Implementar validações para evitar cadastro de usuários com CPF ou e-mail duplicados.

#### Coleta de Resíduos
- Cada usuário pode cadastrar um ou mais locais de coleta de resíduos.
- Informações necessárias: nome do local, descrição, localidade, coordenadas geográficas.
- Usuários devem poder resgatar o link do Google Maps para o local cadastrado.
- Não permitir deleção de usuários com locais associados.

### Autenticação e Validação
- Implementar autenticação JWT.
- Todas as rotas, exceto login e cadastro, devem ser privadas e requerem um token válido.
- Implementar validações nas rotas para garantir o cumprimento das regras de negócio (utilizar lógica de negócio ou middleware, como Yup).

### Variáveis de Ambiente
- Armazenar informações críticas em variáveis de ambiente.
- Incluir um arquivo de exemplo listando as variáveis utilizadas no sistema ou na documentação.


 ## Tecnologias e Dependências Utilizadas
[![Node](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![postgresSql](https://img.shields.io/badge/pg-336760?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![nodemon](https://img.shields.io/badge/nodemon-76D04B?style=for-the-badge&logo=nodemon&logoColor=white)](https://nodemon.io/)
[![axios](https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/)
[![bcryptjs](https://img.shields.io/badge/bcryptjs-4B4B4B?style=for-the-badge&logo=javascript&logoColor=white)](https://github.com/dcodeIO/bcrypt.js)
[![cors](https://img.shields.io/badge/cors-00AFFF?style=for-the-badge&logo=javascript&logoColor=white)](https://github.com/expressjs/cors)
[![dotenv](https://img.shields.io/badge/dotenv-ECD53F?style=for-the-badge&logo=dotenv&logoColor=black)](https://github.com/motdotla/dotenv)
[![express](https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![jsonwebtoken](https://img.shields.io/badge/jsonwebtoken-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white)](https://jwt.io/)
[![pg](https://img.shields.io/badge/pg-336791?style=for-the-badge&logo=nodepgsql&logoColor=white)](https://node-postgres.com/)
[![sequelize](https://img.shields.io/badge/sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white)](https://sequelize.org/)
[![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)](https://swagger.io/)
[![Trello](https://img.shields.io/badge/Trello-5E4955?style=for-the-badge&logo=Trello&logoColor=white)](https://trello.com/b/goHFnQ89/destino-certo-api)

O projeto **Destino Certo - API** adota uma arquitetura inspirada no modelo MVC, aplicando-se como REST API. O sistema é desenvolvido utilizando Node.js, PostgreSQL e Sequelize, proporcionando uma base sólida e escalável para o gerenciamento de dados e operações.

 ### Componentes e Bibliotecas

- **Node.js**: Plataforma de desenvolvimento utilizada para construir a API.
- **nodemon**: Ferramenta que reinicia automaticamente o servidor Node.js sempre que detecta alterações nos arquivos, facilitando o desenvolvimento.
- **axios**: Biblioteca para realizar requisições HTTP, permitindo comunicação entre a API e outros serviços.
- **bcryptjs**: Biblioteca para hashing de senhas, garantindo a segurança dos dados de autenticação dos usuários.
- **cors**: Middleware para habilitar o CORS (Cross-Origin Resource Sharing) nas requisições HTTP.
- **dotenv**: Carrega variáveis de ambiente de um arquivo .env para a aplicação, permitindo a configuração de ambientes de forma segura.
- **express**:  Framework web para Node.js, utilizado para gerenciamento de rotas, middlewares, requests e responses para API.
- **jsonwebtoken**: Biblioteca para gerar e verificar tokens JWT (JSON Web Tokens), implementando autenticação segura.
- **pg**:  Cliente PostgreSQL para Node.js, utilizado para conectar e interagir com o banco de dados.
- **sequelize**: ORM (Object-Relational Mapping) para Node.js, facilitando a interação com o banco de dados PostgreSQL através de modelos JavaScript.
- **Swagger**: Ferramenta para documentar a API, fornecendo uma interface interativa para explorar os endpoints disponíveis.
<!--### Estado e Gerenciamento

Foi utilizado Context API para gerenciar os estados globais da aplicação, divididos em dois contextos principais:

- **UserContext**: Gerencia funcionalidades relacionadas aos usuários.
- **CollectPlaceContext**: Controla as operações relacionadas aos pontos de coleta.

### Integrações Externas

- **ViaCEP API**: Integrada para obter detalhes de endereços a partir do CEP, utilizada nos formulários de cadastro e edição de usuários e pontos de coleta.

### Responsividade

Destino Certo foi desenvolvido para suportar diferentes resoluções de tela. O desenvolvimento parte
do conceito mobile-first para depois abranger telas maiores.

https://github.com/charles-futDevFloripa/destinoCerto/assets/164348201/8957decf-54b0-48ae-ae7b-3f973d97ffd5

### Área administrativa

Ao realizar o login como administrador é habilitado o menu **Admin** nele é possível:

- **Listar todos usuários**: Foi desenvolvido para suportar diferentes resoluções de tela.
- **Deletar usuários**: Deletar usuários que **NÃO** tenham pontos de coleta cadastrados.
- **Editar usuários**: Editar os usuários cadastrados e promover para administradores.

Usuários admnistradores também podem:

- **Editar pontos de coleta**: Editar os pontos de coleta cadastrados de outros usuários.
- **Deletar pontos de coleta**: Deletar os pontos de coleta cadastrados por outros usuários.

## Instalação

Para usar o **Destino Certo**, clone ou faça download do repositório:

```bash
git clone https://github.com/charles-futDevFloripa/destinoCerto.git
```

Depois no terminal execute a instalação

```bash
npm install
```

Após a instalação concluída execute o json-server

```bash
npm run server
```

Com o json-server em execução, inicie o Vite - React

```bash
npm run dev
```

## Melhorias Futuras

### Geolocalização Aprimorada:

Implementar a funcionalidade de obter a latitude e longitude diretamente no mapa ao selecionar um ponto, facilitando o cadastro de novos pontos de coleta com maior precisão geográfica.

### Regionalização da Interface:

Criar um contexto para expressões regionais, permitindo que a aplicação se adapte ao linguajar local de diferentes regiões. Atualmente, a aplicação utiliza expressões típicas de Florianópolis (o "dialeto manezês"). A ideia é expandir essa funcionalidade para incluir outras variantes regionais, permitindo aos usuários escolher o "sotaque" da interface de acordo com suas preferências ou localidade.

### Enriquecimento de Conteúdo:

Ampliar o conteúdo informativo disponível na aplicação incluindo textos e vídeos educativos sobre a importância do descarte correto de resíduos. Isso reforçaria o caráter educativo do **Destino Certo** e aumentaria a conscientização sobre reciclagem e gestão de resíduos.

Essas melhorias não só aumentariam a utilidade e a relevância da aplicação , mas também ajudariam a engajar ainda mais os usuários na causa ambiental.

## Bugs Conhecidos

### Problema com `react-input-mask`

- **Descrição do Problema**: Ao utilizar a biblioteca `react-input-mask` para adicionar máscaras de entrada aos campos de formulário, foi identificado um aviso no console:
  _Warning: findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: [React docs on refs](https://reactjs.org/docs/refs-and-the-dom.html)._

Este aviso é gerado devido ao uso de `findDOMNode`, que é considerado obsoleto e será removido em futuras versões do React.

- **Impacto**: O aviso não afeta a funcionalidade atual do aplicativo, mas indica a necessidade de atualização para garantir a compatibilidade com futuras versões do React.

- **Plano de Ação**: Estou monitorando o repositório da `react-input-mask` para uma atualização que resolve esse problema. Existe um pull request aberto que promete corrigir essa questão, e assim que for integrado e disponibilizado, planejo atualizar a dependência em nosso projeto para eliminar este aviso. -->

## Créditos

<!-- Bibliotecas / Componentes:

- [json-server](https://github.com/typicode/json-server)
- [react-router-dom](https://reactrouter.com/en/main)
- [react-hook-form](https://react-hook-form.com/)
- [react-input-mask](https://github.com/sanniassin/react-input-mask)
- [react-icons](https://react-icons.github.io/react-icons/)
- [react-leaflet](https://react-leaflet.js.org/) -->

Sites

- Gerar pessoas: [4Devs](https://www.4devs.com.br/gerador_de_pessoas)
- Roteiro da aplicação: [ Trello ](https://trello.com/)
- Gerar Diagramas ER: [DrawSql](https://drawsql.io)
- Destino Certo FrontEnd: [DestinoCerto](https://github.com/charlesbiveu/destinoCerto)


