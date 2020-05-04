import fetch from "isomorphic-unfetch";

export const getUUID = () => {
  return "not-actually-unique";
};

export const fetcher = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }

  return data;
};
