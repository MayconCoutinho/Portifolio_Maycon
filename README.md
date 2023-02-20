<p align="center">
  <img src="https://user-images.githubusercontent.com/60453269/220133933-f8678ec0-0851-44e4-b3ba-555a06e5b058.png" alt="Logo" width="200" height="150" />
</p>

<h1 align="center"> Portifolio </h1>

<p align="center">
  <b> CRUD Simples de uma Api </b></br>
  <sub> A api teve como finalidade a criação de um crud para um teste técnico backend, a api de modo geral é bem simples e tem como objetivo gerenciar produtos cadastrados
  <sub>
</p>


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)

<p align="center">
  <a href="#Introdução"> 🧩 Introdução </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Resultados"> 🚀 Resultados</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Dependências"> 🧪 Dependências</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Ideias">💡 Possíveis Melhorias </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Creditos"> 🏆 Créditos </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

<br/>

<a id="Introdução"></a>
## 🧩 Introdução 

  ***⠀⠀⠀⠀Portifolio com todos projetos***

<br/>

<a id="Resultados"></a>
## 🚀 Resultados 
  > Todos os resultados foram alcançados com sucesso. De modo geral são esses os resultados de cada requisição. 

<br/> 
  
### 🎯 PEGAR TODOS OS PRODUTOS CADASTRADO NO BANCO DE DADOS.
  
### ```GET``` 
```URL
 http://localhost:3003/products
```
  
```JSON
  {
    "id": "e5a9a1af-c23e-4e10-98fd-ae914f7f6424",
    "name": "macbook",
    "category": "laptop",
    "status": "ACTIVE",
    "quantity": 10,
    "created_at": 0,
    "updated_at": 0,
    "deleted_at": 0
  }
```
  
<br /> 
  
### 🎯  CRIAR UM PRODUTO ATRAVEZ DO NOME, CATEGORIA E QUANTIDADE.
  
### ```POST```  
  
```URL
  http://localhost:3003/products/cadastro
```
  
```JSON
{
  "name": "macbook",
  "category": "laptop",
  "quantity": 10
}
```

<br /> 
  
### 🎯  MUDA O VALOR OU O NOME DE ALGUM PRODUTO ATRÁVES DA URL 
  
### ```PUT```  
  
```URL
  http://localhost:3003/products/:idProduto/category/video-game
```
  
```JSON
{
  "message": "Um produto da tabela = category, foi mudado  para o valor = video-game com sucesso"
}
```

<br/> 
  
### 🎯  DELETA O O PRODUTO ATRÁVES DA URL 
  
### ```DELETE```  
  
```URL
 http://localhost:3003/products/:idProduto
```
  
```JSON
{
  "message": "O produto com id = bc3ad746-67be-4216-831d-eb8087306592 foi deletado."
}
```

<br /> 

<a id="Dependências"></a>
## 🧪 Dependências
> Requisitos para rotar o codigo...
  

## `📖 Dependencies` 

```JSON
  "dependencies": {
        "cors": "^2.8.5",
        "dotenv": "^16.0.3",
        "express": "^4.18.2",
        "knex": "^2.4.0",
        "mysql": "^2.18.1",
        "uuid": "^9.0.0"
      }

```

<br /> 

## `📖 devDependencies` 


```JSON
      "devDependencies": {
        "@types/cors": "^2.8.13",
        "@types/express": "^4.17.15",
        "@types/knex": "^0.16.1",
        "@types/node": "^18.11.18",
        "@types/uuid": "^9.0.0",
        "ts-node-dev": "^2.0.0",
        "typescript": "^4.9.4"
      }

```


<a id="Ideias"></a>
## 💡 Possíveis Melhoras
> Possíveis melhorias no código e no projeto, caso queira voltar e melhorá lo.

<br /> 

- [ ] ***- Testa todo o código.*** 
- [ ] ***- Criar token de confirmação para cada requisição.***
- [ ] ***- Na parte do deletar produto, além de deletar o produto, criar um log de qual produto foi deletado e quando.***
- [ ] ***- Quando deletar o produto, deixar ele fora do ar, no entando deixar ele em um backap que só vai ser deletado depois de alguns meses ou dias.***

<br /> 

<a id="Creditos"></a>
## 🏆 Créditos

<br /> 

<div > 

| [<img src="https://user-images.githubusercontent.com/60453269/217899761-dc2d4e4b-3336-419d-9076-79304290aa0a.png" width=300><br><sub> Maycon Coutinho </sub>](https://www.linkedin.com/in/maycon-coutinho/) | ***Hello 😃 Se você chegou até aqui, acredito que gostou do meu projeto, nesse caso temos algo em comum, sendo assim que tal conversamos um pouco? Meu chama no linkedin 😁*** | 
|---|---|




</div> 
