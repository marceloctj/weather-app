# Weather Challenge

Aplicativo para consulta da previsão do tempo com base na localização atual do usuário.

![Home do App](https://i.ibb.co/0KGKz44/Simulator-Screen-Shot-i-Phone-13-2022-08-08-at-00-25-41-1.png|width=100)

## Tabela de Conteúdos

* [Começando](#começando)
	* [Pré-Requisitos](#pré-requisitos)
	* [Instalação](#instalação)
* [Executando o Projeto](#executando-o-projeto)
* [Testes](#testes)

## Começando

### Pré-Requisitos

Esse projeto necessita que esteja previamente instalado:

* [NodeJS - Versão 14 ou Superior](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/en/docs/install)
* [React Native](https://reactnative.dev/docs/environment-setup)
* [CocoaPods](https://cocoapods.org/)

###### Obs: Para executar o projeto, todo o ambiente deverá estar configurado previamente para Android e/ou iOS.

### Instalação

1. Clone o repositório
````sh
git clone https://github.com/marceloctj/weather-app.git
````

2. Instale as dependências do projeto
````sh
yarn
````

3. Copie o arquivo env.json.example para env.json
````sh
cp .env.example .env
````

4. Adicione a key do open wather map na variavel:
````sh
OPENWEATHERMAP_KEY=...
````

5. Instale os Pods do projeto iOS (Somente iOS):
````sh
yarn pod
````

## Executando o Projeto

Após realizar todos os passos de instalação, execute o comando:

#### Para iOS
````sh
yarn ios
````

#### Para Android
````sh
yarn android
````

## Testes

Para execução dos testes, foi usado o `jest` com a biblioteca `@testing-library/react-native`.

#### Para executar os testes
````sh
yarn test
````
#### Para executar os testes com a cobertura de teste
````sh
yarn test:coverage
````