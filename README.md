# Minitube ( A clone of youtube )

A mini youtube with pretty much all important features that a video-sharing platform should have.

### Philosophy of the project

- Minimal Code.
- Easy to understand.
- Easy to maintain.
- Production-ready

### Requirements

- Node.js LTS (v20+)
- Pnpm or Yarn or Npm
- Redis
- Postgresql Server

### Getting Started

I assume that you already installed postgresql and redis, if not then download [postgresql](https://www.postgresql.org/) and [redis](https://redis.io/) here.

Okay, let's get into configurating the project so that you can run it.

First of all, we have to install dependencies:

```sh
npm install
# OR
pnpm install # I use pnpm so if you want seamless integration, use pnpm.
# OR
yarn install
```

Then we should configure the connection of postgresql and redis into `.env`

```sh
REDIS_HOST=0000

REDIS_PORT=6379

POSTGRES_URL=EXAMPLE.COM
```

With all of it done, you can start the server now with these 3 main commands:

```sh
pnpm --filter client run dev # For running the client-side

pnpm --filter server run start:dev # For running the server-side

pnpm run dev # For running both side.
```

### Contributions

Everyone is welcome to contribute to this project. Feel free to open an issue if you have question or found a bug.
