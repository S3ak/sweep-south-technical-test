import Head from "next/head";

import { globalStyles } from "./../src/styles/global";

import CardListItem from "../src/components/presentational/card-list-item/CardListItem";
import Card from "../src/components/presentational/card/Card";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Profile Viewer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {cards.map((i) => (
          <CardListItem key={id}>
            <Card />
          </CardListItem>
        ))}
      </main>

      <footer>Built with ❤ by Monde Sineke.</footer>

      <style jsx global>
        {globalStyles}
      </style>
    </div>
  );
}
