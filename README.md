# recipe-book
Recipe book manager	

To run this application you should clone this repository and install the next dependecies


Client side

npm i

npm install --save react-redux

npm install --save react-router-dom

npm install --save redux-thunk

npm install axios

once installed

npm start


if you don't have mongodb please install it in your computer 

https://www.mongodb.com/try/download/community

Select complete and the make sure to check Install MongoDB as a service and Run service as Network Service User

you can avoid install MongoDB Compass if you want


Server side

npm i

npm install express

npm install cors

npm install mongoose

once installed

npm run devStart


with postman you can populate the DB with this

POST http://localhost:8080/recipes

    "name": "Gnocchi de batata",
    "scores": [3],
    "steps": ["pisar batatas","mezclar harina"],
    "ingredients": [{"name": "batata","unitShare": 2}]


POST http://localhost:8080/recipes

  	"name": "Arroz con Pollo",
    "scores": [4.3],
		"steps": ["picar cebolla","cortar tomates"],
    "ingredients": [
			{"name": "cebolla","unitShare": 0.125},
      {"name": "tomate","unitShare": 0.25 }
			]
		
	
POST http://localhost:8080/recipes

    "name": "Brownie",
    "scores": [4.6],
    "steps": ["calentar horno","mezclar huevos"],
    "ingredients": [{"name": "huevos","unitShare": 0.25}]
