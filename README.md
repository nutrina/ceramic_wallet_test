This is a [Vite](https://vitejs.dev) project bootstrapped with [`create-wagmi`](https://github.com/wevm/wagmi/tree/main/packages/create-wagmi).


pnpm dlx @ceramicnetwork/cli daemon --config composedb.config.json 


pnpm composedb did:generate-private-key

✔ Generating random private key... Done!
402409c762f7edcf478b889b914cf8421f3852472e8176fbf15cce11666d2fb9

pnpm composedb did:from-private-key 402409c762f7edcf478b889b914cf8421f3852472e8176fbf15cce11666d2fb9

✔ Creating DID... Done!
did:key:z6MkrjduSqz8XwW1XsPuhrGjK7pmBJ2Z4zSqxHpa7kuZSk6C


pnpm composedb composite:create src/schemas/my-schema.graphql --output=src/composites/my-composite.json --did-private-key=402409c762f7edcf478b889b914cf8421f3852472e8176fbf15cce11666d2fb9



pnpm composedb composite:deploy src/composites/my-composite.json --ceramic-url=http://localhost:7007 --did-private-key=402409c762f7edcf478b889b914cf8421f3852472e8176fbf15cce11666d2fb9


pnpm composedb composite:compile --ceramic-url=http://localhost:7007 src/composites/my-composite.json src/definitions/my-composite.ts


Run this like: `pnpm dev`