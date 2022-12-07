# Setting up a node app on Plesk

Install next 13
`npx create-next-app@latest --typescript`

Test
`npm run dev`

Add tailwind
<https://tailwindcss.com/docs/guides/nextjs>

`npm install -D tailwindcss postcss autoprefixer`
`npx tailwindcss init -p`


tailwind.config.js file
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Replace everything in styles/globals.css with:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```


Delete files
Delete 'styles/Home.module.css'
In pages/index.tsx, replace file with:
```
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-blue-700">Next.JS app</h1>
        <p>This a test to make sure it's working!</p>
      </main>
    </>
  );
}
```
Notice classname.

As a test, go to `http://localhost:3000/api/hello`
You should see response 
```
{
"name": "John Doe"
}
```

Apostrephe was caught by linter, so added rule:
eslintrc.json
```
{
  "extends": "next/core-web-vitals",
  "rules": { "react/no-unescaped-entities": 0 }

}

```



Add to git.

## Plesk
On the Domains page, click Add Domain. Chooose the template 'Node.JS application'.
Click Temporary domain name and node the username/password down:
User: gallant-keldysh_atxun8il0es
Pass: _cVGN0n01k

On Node page, click Enable Node.js and choose which settings you want.


# Connect GIT to plesk

On Git copy the SSH link:
`git@github.com:mytchallb/blog-plesk-node.git`

Copy 'SSH public key content' from plesk into Git repo Settings, Deploy keys

# Finish Node setup

Run `npm install`.

Click 'Run script' and run the `build` script (don't need to add 'npm run')

This will create a '.next' folder in our project directory (If you don't already have one from doing a test build on your local machine)

Update Node settings like screenshot.

## SSH
Go to Hosting & DNS, click 'Web Hosting Access', and change 'Access to the server over SSH' to '/bin/bash'
Now on our main domain page we can click under 'Dev Tools', SSH Terminal.
```
cd httpdocs
ls
cd node_modules/.bin
vi next


```
scroll down until you see `const defaultCommand = "dev"`
Press 'i' to enter Vim's editing mode, replace "dev" with "start".
Press escape to get out of editing mode and type ":wq" to write your changes and exit the file.

# Will this file change?
If node_modules are deleted then need to do again
If next is updated?


# To restart app
After SSH changes, ran build and clicked restart app

Note: nginx reverse proxy  configured automatically

Navigate to `/api/hello` to make sure API is working


# Getting this to work automatically
go to domain, git repo settings, under Deployment settings click 'Enable additional deployment actions' and paste in:

```
rm -rf tmp
(PATH=/opt/plesk/node/18/bin/:$PATH;  npm install && npm run build &> npm-install.log) 
mkdir tmp
touch tmp/restart.txt
```

Note you'll have to change the node version from 18 depending on what you're using, also the build command.
Making a tempory file maked plesk restart the app.


# Getting a mysql database connected
Could use postgres








---------
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
