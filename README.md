# Weather Challenge

Aplicativo para consulta da previsão do tempo com base na localização atual do usuário.

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
cp env.example .env
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