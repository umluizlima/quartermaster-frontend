# Quartermaster (frontend)
> Uma aplicação administrativa para o laboratório CDG Hub do Inatel.

![Skyfall - 007 and Quartermaster at museum](https://user-images.githubusercontent.com/9170476/57023571-cc061680-6c08-11e9-8a56-c64f2b9bd9a5.PNG)

Este repositório contém a aplicação web de frontend para a solução Quartermaster,
desenvolvida durante uma Iniciação Científica.

As instruções a seguir, tanto de desenvolvimento quanto de publicação, contam com que você tenha feito um fork deste repositório para seu perfil no Github (clicando no botão destacado na imagem abaixo).

![github-fork](https://user-images.githubusercontent.com/9170476/54882968-8bafbd80-4e3e-11e9-8a12-4c5097dffa92.PNG)

## Desenvolvimento local

Os seguintes comandos preparam o ambiente para desenvolvimento local (necessário [NodeJS](https://nodejs.org/en/)):
```sh
git clone https://github.com/<seu-nome-de-usuario-no-github>/quartermaster-frontend.git
cd quartermaster-frontend
npm install
```

Para rodar a aplicação de forma local com hot-reload:
```sh
npm run serve
```

## Publicação

Esta aplicação de frontend é hospedada de forma gratuita no Github Pages, podendo ser acessada pelo endereço no seguinte padrão: `https://<seu-nome-de-usuario-no-github>.github.io/quartermaster-frontend/`.

Para publicá-la em seu fork do repositório é preciso seguir as seguintes instruções:

1. No seu editor de texto favorito, acesse o arquivo `src/utils/api.js` deste projeto e altere o campo `baseURL` de forma que aponte para sua aplicação de backend (caso não a tenha publicado no Heroku ainda, faça-o agora seguindo as instruções disponíveis no [repositório](https://github.com/umluizlima/quartermaster-backend)). Ele deve ficar na forma: `baseURL: 'https://<sua-aplicação-de-backend-no-heroku>.herokuapp.com/api/',`

2. Verifique o funcionamento acessando de forma local a aplicação no endereço http://localhost:8080/quartermaster-frontend (precisa estar rodando em sua máquina `npm run serve`)

3. Compile a aplicação para produção:

  ```sh
npm run build
```

4. Salve as alterações e faça um push para o github:

  ```sh
git add .
git commit -m "Altera endereço da API"
git push
```

5. Publique a versão de produção na branch `gh-pages` do seu fork:

  ```sh
npm run deploy
```

6. Pronto! Agora o frontend da aplicação Quartermaster, que se comunica com sua própria instância de backend, deve estar disponível para acesso no endereço `https://<seu-nome-de-usuario-no-github>.github.io/quartermaster-frontend/`

## Utilização

### Login

Ao acessar o endereço da aplicação de frontend a tela de login é apresentada. **\*** Utilize as informações de login de administrador criadas na publicação do backend caso este seja o primeiro acesso a sua instância.

### Ações rápidas

Após o login você será redirecionado para a tela principal, que oferece um menu simplificado de quatro ações rápidas, pensadas para situações em que um terceiro esteja dependendo do atendimento e possa ser satisfeito rapidamente.

- O primeiro botão lhe permite realizar o cadastro de um terceiro (ou o terceiro pode se cadastrar através do link disponibilizado abaixo do botão principal na tela de login);
- A segunda opção leva a tela de registro simplificado de empréstimo, onde você pode escolher apenas qual item será emprestado e para quem por meio de menus dropdown, com as informações de data de início e data de devolução preenchidas automaticamente com o instante atual e sete dias no futuro, respectivamente;
- A terceira opção disponível é a de devolver um item já emprestado. Nesta tela você precisa apenas selecionar um dos empréstimos que esteja em aberto e confirmar a devolução. O registro da entrega é atualizado automaticamente no banco;
- O último recurso presente no menu de ações rápidas é o de reservar a sala de treinamentos do CDG Hub. Ao clicar no botão você abre um formulário de reserva com alguns campos pré definidos de forma a agilizar o preenchimento em situações corriqueiras.

### Menu Principal

O menu principal, acessível no canto superior direito quando visto em dispositivos móveis, oferece opções de navegação entre a tela inicial já apresentada, as telas de edição completa, pelo dropdown Visualizar de registros e as opções de conta do usuário logado, pelo dropdown com seu nome.

### Telas de edição

Através da aba Visualizar estão disponíveis para acesso telas de edição completa para as entidades  Categorias, Itens, Empréstimos, Reservas, Terceiros e Usuários, que são mapeadas no banco de dados. Todas consistem da mesma estrutura geral: uma tabela que lista os registros, um botão que expõe um formulário vazio para a criação de um novo registro e um para recarregar os dados apresentados. Além disso há uma barra de pesquisa que filtra os resultados de forma dinâmica e mecanismos de paginação para listagens mais longas. Por fim, cada ocorrência na tabela possui seus próprios botões para que o registro possa ser alterado e deletado.
Uma outra funcionalidade que é implementada apenas em situações pertinentes é a de filtros de seleção pré estabelecidos. Como exemplo, a listagem de itens pode mostrar apenas os que não estão atualmente emprestados ou então realmente todos os existentes.

Ao clicar no botão Adicionar um formulário vazio composto pelos atributos da entidade correspondente é apresentado. Quando é devidamente preenchido e enviado um novo registro daquela entidade é criado, o formulário se fecha e a listagem é atualizada automaticamente para conter esta nova entrada.

Já quando você clica em um botão Editar, disponível separadamente para cada registro, um formulário composto dos mesmos atributos é apresentado. Porém, desta vez ele vem preenchido com os dados atuais daquela entidade, para que possa ter apenas os campos desejados rapidamente alterados e então submetido. Também neste caso os botões do formulário mudam para uma confirmação de envio acompanhada de um botão de limpeza rápida de todos os campos.

A opção de deletar apresenta a interface mais simples quando comparada aos recursos acima. Clicando no botão Apagar de um determinado registro uma tela de confirmação aparece para garantir suas intenções.

### Registro de usuários

A última tabela de dados da aba Visualizar é a de Usuários, que só pode ser acessada por quem possua privilégios de administrador do sistema. É nela que novos usuários devem ser adicionados e ter seu nível de acesso definido entre Usuário e Administrador, assim como suas outras informações editadas ou até mesmo seu registro apagado.

Todo usuário adicionado ao sistema possui uma senha padrão que deve ser alterada assim que possível para garantir sua segurança e privacidade de acesso ao sistema. Isto pode ser feito através da opção Minha Conta, na última aba do menu principal. Nesta tela o usuário precisa apenas inserir sua senha atual e a que deseja definir.

**\*** Caso você esteja acessando a plataforma com as informações de login criadas durante a publicação do backend, crie um usuário com suas informações pessoais e privilégios administrativos. Depois entre em sua própria conta e apague o perfil original, por motivos de segurança.
