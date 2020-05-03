import Head from "next/head";
import fetch from "node-fetch";

import { globalStyles } from "./../src/styles/global";
import ConnectedProfiles from "../src/containers/profiles";

// import Profiles from "../src/containers/profiles";

export default function Home({ people = [] }) {
  return (
    <div className="container">
      <Head>
        <title>Profile Viewer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ConnectedProfiles initialPeople={people} />
      </main>

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

  // TODO: Send results to reducer
  const people = await res.json();

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      people: people.results,
    },
  };
}
