# Explore Mars! API to control a robot on Mars through HTTP protocol.

This is a small project to test my backend skills.
I also created a frontend webapp to interact with this API: https://github.com/loulage/robot-frontend

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Create a database on your favorite DB manager (I used PGadmin4)
4. Run `npm start` command
5. See full API documentantion on route: http://localhost:3333/api-docs/

* If you recive a {swaggerOption} error on NPM START, you can quicly fix doing:
  1) open node_modueles -> robot-back/node_modules/@types/swagger-jsdoc/index.d.ts
  2) add a '?' in front of 'version' key in Interface Information {..} and save
  3) ![image](https://user-images.githubusercontent.com/46572129/156004527-a6fe78cd-cfc0-456b-9098-4fca05326ad2.png)
