"use strict";

const fs = require("fs");

import Head from "next/head";
import React from "react";
import useSWR from "swr";

import Profiles from "../src/components/containers/profiles";
import { fetcher } from "../src/utils/helpers";
import Layout from "../src/components/presentational/layout";

const seed = "monde";
const resultsLimit = 10;

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
  const endPoint = `https://randomuser.me/api/?seed=${seed}&results=${resultsLimit}`;
  const res = await fetcher(endPoint);

  let data = JSON.stringify(res.results);
  fs.writeFileSync("data/people.json", data);

  return {
    props: {
      initialData: res.results,
    },
  };
}
