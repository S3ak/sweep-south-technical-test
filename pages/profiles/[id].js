import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";

import { fetcher } from "../../src/utils/helpers";
import Layout from "./../../src/components/presentational/layout";
import CardFull from "../../src/components/presentational/card-full";

const seed = "monde";
const resultsLimit = 10;

export default function Profile({ initialData }) {
  const { query } = useRouter();
  const { data, error } = useSWR(
    () => query.id && `/api/profiles/${query.id}`,
    fetcher,
    { initialData }
  );

  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;

  const { name, picture, location, login } = data;

  return (
    <Layout>
      <Head>
        <title>Profile person Viewer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CardFull
        title={`${name.title} ${name.first} ${name.last}`}
        imageUrl={picture.large}
        description={location.city}
        uuid={login.uuid}
      />
    </Layout>
  );
}

export async function getStaticPaths() {
  const endPoint = `https://randomuser.me/api/?seed=${seed}&results=${resultsLimit}`;
  let people;
  let paths = [];

  const resp = await fetcher(endPoint);
  people = resp.results;

  paths = people.map((x) => ({ params: { id: x.login.uuid } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const endPoint = `https://randomuser.me/api/?seed=${seed}&results=${resultsLimit}`;
  let people;

  const resp = await fetcher(endPoint);
  people = resp.results;

  const preson = people.find((p) => p.login.uuid === params.id);

  return {
    props: {
      initialData: preson,
    },
  };
}
