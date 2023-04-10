# Coodesh Affiliates Challenge
Upload and manage digital product sales.


>  This is a challenge by [Coodesh](https://coodesh.com/)


## Project folders structure
- `api`: backend code
- `client`: frontend code

## Backend
### Stack
- NodeJS
- Typescript
- ExpressJS
- Jest
- sqlite3 (used in tests)
- MySQL
- 
### [API Docs](https://documenter.getpostman.com/view/2943788/2s93XsZn7c)

### How to run
#### Dev mode
1. Create a `.env` file
```
SERVER_PORT=3000
MYSQL_ROOT_PASSWORD=
MYSQL_DATABASE=
MYSQL_USER=
MYSQL_PASSWORD=
MYSQL_HOST=
```
2. Install `npm` dependencies
```
npm i
```
3. Run services with `docker-compose`
```bash
docker-compose -f docker-compose.dev.yml build
docker-compose -f docker-compose.dev.yml up
```

#### Prod mode
1. Create a `.env` file
```
SERVER_PORT=3000
MYSQL_ROOT_PASSWORD=
MYSQL_DATABASE=
MYSQL_USER=
MYSQL_PASSWORD=
MYSQL_HOST=
```
2. Run service with `docker-compose`
```bash
docker-compose -f docker-compose.yml build
docker-compose -f docker-compose.yml up
```

## Frontend
### Stack
- VueJS
- Vuetify

### How to run
1. Create a Firebase project with e-mail authentication enabled 
1. Create file `env.js` into `src` folder
```javascript
export const API_URL=
export const FIREBASE_API_KEY=
export const FIREBASE_AUTH_DOMAIN=
export const FIREBASE_PROJECT_ID=
export const FIREBASE_STORAGE_BUCKET=
export const FIREBASE_MESSAGING_SENDER_ID=
export const FIREBASE_APP_ID=
```
3. `npm run serve`