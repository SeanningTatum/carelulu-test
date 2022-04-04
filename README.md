# How to run the app

1. Make sure you have docker installed
2. `docker-compose up` to start the postgres database
3. Copy the env.example into .env
4. `npm run install` or `yarn install`
5. `npx prisma generate` to generate the client library
6. `npx prisma db push` to push the schema into the postgres table
7. `yarn start`
8. `npx prisma studio` to see the database
9. Stop the app and run `yarn test:e2e:run` to run the e2e tests.

# Motivation for creating the app

I could've easily spent 10 hours and over-engineered the app, but
I felt like it's a more essential skill to show, tailwind-css, postgres integration,
server-side rendering and e2e testing with 2 hours of work instead :)
