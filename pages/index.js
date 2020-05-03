import Head from "next/head";
import fetch from "node-fetch";

import { globalStyles } from "./../src/styles/global";

import Card from "../../components/presentational/Card";

import {
  CardListItem,
  CardList,
} from "../../components/presentational/card-list/styled";

export default function Home({ people = [] }) {
  // TODO: Dispatch people to people reducer
  return (
    <div className="container">
      <Head>
        <title>Profile Viewer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <CardList>
          {people.length >= 1 &&
            people.map(
              ({
                email = "email@mail.com",
                title = "Missing title",
                imageUrl = "https://images.unsplash.com/photo-1588417487179-55a8b349321e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80",
                description = "lorem ipsum",
              }) => (
                <CardListItem key={email}>
                  <Card
                    title={title}
                    imageUrl={imageUrl}
                    description={description}
                  />
                </CardListItem>
              )
            )}
        </CardList>
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

  const people = await res.json();

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      people: people.results,
    },
  };
}
