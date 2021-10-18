# recipe-book
Recipe book manager	

To run this application you should clone this repository and install the next dependencies


cd Client

npm i

npm install --save react-redux

npm install --save react-router-dom

npm install --save redux-thunk

npm install axios

once installed

npm start


if you don't have mongodb please install it in your computer 

https://www.mongodb.com/try/download/community
if you are a mac User

Select complete and then make sure to check Install MongoDB as a service and Run service as Network Service User

you can avoid install MongoDB Compass if you want


if you are a mac User


brew tap mongodb/brew


brew install mongodb-community@5.0


brew services start mongodb-community@5.0



Server side

npm i

once installed

npm run devStart


create a .env with this information
DATABASE_URL=mongodb://localhost/recipes


with postman you can populate the DB with this

POST http://localhost:8080/recipes

   { "name": "Gnocchi de batata",
    "scores": [1,3],
    "steps": ["pisar batatas","mezclar harina"],
    "ingredients": [{"name": "batata","unitShare": 2}]}


POST http://localhost:8080/recipes

  	{"name": "Arroz con Pollo",
    "scores": [4,2],
		"steps": ["picar cebolla","cortar tomates"],
    "ingredients": [
			{"name": "cebolla","unitShare": 0.125},
      {"name": "tomate","unitShare": 0.25 }
			]}
		
	
POST http://localhost:8080/recipes

    {"name": "Brownie",
    "scores": [4,5],
    "steps": ["calentar horno","mezclar huevos"],
    "ingredients": [{"name": "huevos","unitShare": 0.25}]}
