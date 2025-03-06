<h1 align="center">⚡VitePlus Monorepo Template</h1>
Already configured Nodejs + React monorepo with turbo

#### Client
`Vite` `TS` `React` `Vitest` `Tailwind` `tabler` <br>
`Eslint (Common)` <br>
`Prettier (With tailwind pluggin)`

#### Api
`Nodejs`
`Express`
`cors`

#### Create the project.

```shell
pnpm dlx degit pa-ku/viteplus-monorepo-template.git .
```

#### Install dependencies.

```shell
pnpm install
```

#### Run the development

```shell
pnpm run dev

```
#### Or run just one
```shell
pnpm run dev:client
pnpm run dev:api
```

<br></br>

## 🌐 Relative Paths

Relative paths allow importing files without using long and repetitive routes (../../components/Button), making code organization easier.

### How to Use Them

```js
import Header from "@components/Header"
```

### Dynamic Paths Added

`@src`
`@assets`
`@components`
`@hooks`
`@pages`
`@utils`
`@context`
`@data`
<br></br>

> [!IMPORTANT]
> In this project, aliases are configured in client/ tsconfig.app.json and vite.config.json, allowing them to be used in both TypeScript and Node.
