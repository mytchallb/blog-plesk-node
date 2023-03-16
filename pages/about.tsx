import Head from "next/head";
import Nav from "../components/nav";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About this site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="bg-gray-600 h-screen text-gray-400">
        <div className="max-w-screen-sm mx-auto py-20">
          <h1 className="font-bold text-2xl mb-4">About</h1>
          <p className="mb-2">
            This Next.js app is built and deployed on Plesk with
            server-rendering capabilities and without storing the node_modules
            folder.
          </p>
          <p>
            The tutorial is{" "}
            <a
              href="https://mytchall.dev/setting-up-a-next-js-app-on-plesk-control-panel-with-git-auto-deploy/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              here
            </a>
            !
          </p>
        </div>
      </main>
    </>
  );
}
