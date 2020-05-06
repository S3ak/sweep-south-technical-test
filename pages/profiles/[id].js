import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";

import { fetchAllProfilesFromFs } from "../../lib/api";
import { fetcher } from "../../src/utils/helpers";
import Layout from "./../../src/components/presentational/layout";
import CardFull from "../../src/components/presentational/card-full";

export default function Profile({ initialData }) {
  const { query } = useRouter();
  const { data, error } = useSWR(
    () => query.id && `/api/profiles/${query.id}`,
    fetcher,
    { initialData }
  );

  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;

  const { name, picture, location } = data;

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
      />
    </Layout>
  );
}

export async function getStaticPaths() {
  const allProfiles = await fetchAllProfilesFromFs();
  const paths = allProfiles.map((p) => ({ params: { id: p.login.uuid } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const allProfiles = await fetchAllProfilesFromFs();
  const person = allProfiles.find((p) => p.login.uuid === params.id);
  return {
    props: {
      initialData: person,
    },
  };
}
