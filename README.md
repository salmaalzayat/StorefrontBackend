## Store front backend

Imagine that you are a web developer at a small company. The company stakeholders have decided they want to set up an online store to make their great product ideas available for purchase -- and they want you and your co-worker to build it.

### Setup And running

To deploy this project run

- install packages

```bash
- npm i
```

- open the psql shell on your machine and apply its default configurations, create your user with superuser privileges and create the two databases for development and testing purposes

```bash
- CREATE USER PG_USER WITH PASSWORD 'PG_PWD';
```

- run db-migrate to setup your database on port 5432 as declared in .env

```bash
- db-migrate up
```

- to run project will be running on localhost port 3000

```bash
- npm run start
```

## Create User

- CREATE USER PG_USER WITH PASSWORD 'PG_PWD'


## Create Databases for dev and testing

- CREATE DATABASE PG_DB
- CREATE DATABASE PG_DB_TE

## Environment Variables .env

- TOKEN_SECRET=secret444
- PORT = 3000
- ENV = dev
- PS_HOST = 127.0.0.1
- PS_DB = PG_DB
- PS_TEST_DB = PG_DB_TE
- PS_USER = PG_USER
- PS_PASSWORD = PG_PWD
- BCRYPT_PASSWORD= random
- SALT_ROUNDS = 44

## Scripts:

-"build": "npx tsc"

-"start": "nodemon src/server.ts"

-"jasmine": "jasmine"

-"test": "db-migrate reset -e test && db-migrate up -e test && tsc && cross-env ENV=test jasmine && db-migrate reset -
e test"

-"prettier": "prettier --config .prettierrc \"dist/\*_/_.js\" --write"

-"lint": "eslint . --ext .js --fix"

-"watch": "tsc-watch --esModuleInterop src/server.ts --outDir ./dist --onSuccess \"node ./dist/server.js\""

## Ports

-PORT USED FOR BACKEND IS 3000

-PORT USED FOR DATABASE IS DEFAULT PORT 5432
