# recipe-book
Recipe book manager


To run this application you should clone this repository and then:


##
Server side

##
Prerequisites
#### if you don't have mongodb please install it in your computer 

1. go to https://www.mongodb.com/try/download/community
1. Select complete and then make sure to check Install MongoDB as a service and Run service as Network Service User

 you can avoid install MongoDB Compass if you want

##### if you are a mac User you may want to use brew to install mongoDB
1. brew tap mongodb/brew
1. brew install mongodb-community@5.0
2. brew services start mongodb-community@5.0

1. in a new console go to cd Server
1. create a .env (in /Server folder) with this information: DATABASE_URL=mongodb://localhost/recipes
1. install: npm i
1. once installed: npm run devStart

##

###### Populate your local database 

1. with postman you can populate the DB with this info

POST http://localhost:8080/recipes

   
   	{"name": "Gnocchi de batata",
    	"scores": [1,3],
    	"steps": ["pisar batatas","mezclar harina"],
  	"ingredients": [{"name": "batata","unitShare": 2}]}
    


POST http://localhost:8080/recipes

  	{
	"name": "Arroz con Pollo",
    "scores": [4,2],
		"steps": ["picar cebolla","cortar tomates"],
    "ingredients": [
			{"name": "cebolla","unitShare": 0.125},
      {"name": "tomate","unitShare": 0.25 }
			]
			}
		
	
POST http://localhost:8080/recipes

    {
    "name": "Brownie",
    "scores": [4,5],
    "steps": ["calentar horno","mezclar huevos"],
    "ingredients": [{"name": "huevos","unitShare": 0.25}]
    }


##
Client Side



1. go to cd Client
1. install: npm i
1. once installed: run npm start




