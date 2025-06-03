# Sistema de Gestãob Estoque de Vestidos 👗

## 📖 Descrição

Este sistema tem como objetivo realizar o cadastro, listagem, edição e exclusão de vestidos, facilitando a organização e controle de estoque para lojas ou eventos.

O sistema foi desenvolvido como parte da avaliação da disciplina de "front-end" utilizando **Angular**.

---

## ✅ Requisitos Funcionais

- ✅ Cadastro de vestidos com nome, tamanho, cor e quantidade.
- ✅ Listagem de todos os vestidos cadastrados.
- ✅ Edição de informações dos vestidos.
- ✅ Exclusão de vestidos.
- ✅ Visualização de perfil do usuário logado.
- ✅ Sistema de navegação entre páginas: Home, Cadastro, Listagem e Perfil.
- ✅ Botão de voltar em todas as páginas.
- ✅ Sistema de autenticação fictícia com login.

---

## ✅ Instruções de Instalação e Uso

1️⃣ **Pré-requisitos:**

- Node.js e npm instalados.
- Angular CLI instalado.

```bash
npm install -g @angular/cli
2️⃣ Clonar o repositório:

bash
Copiar
Editar
git clone <https://github.com/Danubiaaa/estoque-vestidos.git>
3️⃣ Instalar as dependências:

bash
Copiar
Editar
cd estoque-vestidos
npm install
4️⃣ Executar o sistema:

bash
Copiar
Editar
ng serve
Acesse no navegador:
➡️ http://localhost:4200

5️⃣ Como usar:

Na tela de Login, insira nome e e-mail fictícios e clique em Entrar.

Acesse o Home e navegue entre:

Cadastro de Vestidos, incluir novos vestidos

Listagem de Vestidos, para ver os vestidos que tem

Perfil

Cada página possui um botão de Voltar para facilitar a navegação.

✅ Tecnologias Utilizadas
Angular

TypeScript

HTML5 e CSS3

Bootstrap (opcional, caso usado)

✅ Projeto feito por aluno(a)
Nome Danúbia Pascoal Da Silva

✅ Status do Projeto
✅ Concluído.

✅ Autor
Prof. Leonardo Lucena
Disciplina: front end

evoluçao do projeto para os 70%: da atividade
Funcionalidades Implementadas
✅ 1. tres novas telas significativas:
Histórico de Movimentações:
Tela que exibe, de forma organizada, todas as movimentações realizadas, com data, hora e informações detalhadas, consumindo dados do estado gerenciado pelo NgRx.

Dashboard de Estatísticas:
Tela que apresenta um painel com informações resumidas sobre os vestidos, como total cadastrado e distribuição por categorias. Inclui gráficos gerados dinamicamente a partir dos dados do estado, agregando valor ao sistema com visualizações intuitivas.

Notificaçao de estoque Baixo

tela que volta com informaçao de que o estoque esta abaixo ou zerado, informaçao dada assim q a aba e acionada com mensagem rapida.

✅ 2. Gerenciamento de Estado com NgRx:
Store configurada com reducers e actions.

Selectores criados para extrair dados do estado (selectAllVestidos, selectVestidosPorCategoria, selectLoading e selectError).

Actions: implementadas ações de loadVestidos, loadVestidosSuccess, loadVestidosFailure.

Reducer: controla loading, sucesso e erro.

Effects (se utilizados): integração assíncrona com backend.

✅ 3. Roteamento entre páginas:
Configuração de rotas utilizando RouterModule.

Navegação entre Login, Home, Histórico, Dashboard e outras telas.

Possibilidade de adicionar Route Guards para proteger áreas restritas.

✅ 4. Serviços com Injeção de Dependência:
AuthService: controle de autenticação.

VestidoService: integração com backend para CRUD de vestidos.

Todos os serviços criados como @Injectable e consumidos via constructor.

✅ 5. Validação de Formulários:
Implementadas validações utilizando ngModel com atributos required, minlength e pattern.

Exibição de mensagens de erro conforme o estado de validação dos inputs.

✅ 6. Estilização:
Utilização de CSS por componente, promovendo encapsulamento e organização.

Aplicação de cores e efeitos visuais.

  como CSS puro




