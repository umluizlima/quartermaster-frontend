# Quartermaster (frontend)
> Uma aplicação administrativa para o laboratório CDG Hub do Inatel.

Este repositório contém a aplicação web de frontend para a solução Quartermaster,
desenvolvida durante uma Iniciação Científica.

As instruções a seguir, tanto de desenvolvimento quanto de publicação, contam com que você tenha feito um fork deste repositório para seu perfil no Github (clicando no botão destacado na imagem abaixo).

![github-fork](https://user-images.githubusercontent.com/9170476/54882968-8bafbd80-4e3e-11e9-8a12-4c5097dffa92.PNG)

## Desenvolvimento local

Os seguintes comandos preparam o ambiente para desenvolvimento local (necessário NodeJS):
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
