# Getting started
My env: node:v21.1.0, pnpm:8.7.1

1. Install the packages

```bash
pnpm install
```
or
```bash
npm install
```

2. Copy **.env.example** file to **.env** everything is already inside you don't need to make changes to make it work

3. Push and seed the database with default values you can change the default password from **src/server/db/seed.ts** file
```bash
pnpm db:push
pnpm db:seed
```

4. Run the dev server
```bash
pnpm dev
```

5. Since this is a personal site i didn't add any buttons to login. In order to login goto **/admin/login** or just **/admin** and it will redirect.

6. Login using default email/password from **src/server/db/seed.ts** file