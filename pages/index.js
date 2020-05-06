import Head from "next/head";
import React from "react";
import useSWR from "swr";

import Profiles from "../src/components/containers/profiles";
import { fetcher } from "../src/utils/helpers";
import Layout from "../src/components/presentational/layout";

import { fetchAllProfiles } from "../lib/api";

export default function Home({ initialData = [] }) {
  // TODO: Dispatch data to people reducer
  const { data, error } = useSWR("/api/profiles", fetcher, { initialData });

  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Layout>
      <Head>
        <title>Profile Viewer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Profiles initialPeople={data} />
    </Layout>
  );
}

export async function getStaticProps() {
  const allProfiles = await fetchAllProfiles();

  return {
    props: {
      initialData: allProfiles,
    },
  };
}
