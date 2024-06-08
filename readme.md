
## Setup typeScript Node js Peoject


setup project 

```sh
npm init -y
```
install dependencies 

```sh
npm i express
```
install dev dependencies ( only used in devlopment )

```sh
npm i -D typescript
```

create a file in src directory index.ts

```js
import express from 'express';

const app = express();
const port = 3000;

app.listen(port,()=>{
    console.log(`server is listeing on port : ${port}`);
})


```


Now to get type defination of the express we need to install its type defenations ``Note : every pakage has similar prefix to install its type definations ``

```sh 
npm i -D @types/express

```

Now to compile the typescript and configure typescript with project run command in terminal

```sh
npx tsc --init
```

``it will create tsconfig.ts file``

Now uncomment only necessory settings such as :

- target
- module : "commanjs"
- rootdir : "./src"
- outdir : "./dist"
- strictNullCheaks : "true"
- "NoImplicitylyAny" : "true"


```ts

```

### Lets transpile typescript to javascript

```sh
npx tsx --build
```
it wil create that dist folder which contains all javascript code converted from typescript

``dist\index.js
``
Now lets run this javascript file

```sh
node ./dist/index.js
```
and it will run sucessfully.


### Now lets set up run command with nodemon

install nodemon as dev dependencies

```sh 
npm i -D nodemon ts-node
```

```json
"scripts" : {
    "build" : "tsc --build",
    "start" : "node ./dist/index.js",
    "start:dev" : "nodemon ./src/index.ts"
}

```





