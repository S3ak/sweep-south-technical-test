import Head from "next/head";
import fetch from "node-fetch";

import { globalStyles } from "./../src/styles/global";

export default function Home({ people = [] }) {
  // TODO: Dispatch people to people reducer
  return (
    <div className="container">
      <Head>
        <title>Profile Viewer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{/* TODO: Insert list */}</main>

      <footer>Built with ❤ by Monde Sineke.</footer>

      <style jsx global>
        {globalStyles}
      </style>
    </div>
  );
}

// NOTE: This is called at build time
export async function getStaticProps() {
  const endPoint = "https://randomuser.me/api/?results=10";

  // TODO: try catch this section
  const res = await fetch(endPoint);

  const people = await res.json();

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      people: people.results,
    },
  };
}
