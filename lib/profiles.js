import { fetcher } from "../src/utils/helpers";

const seed = "monde";
const resultsLimit = 10;

export const getProfilesIds = async () => {
  const endPoint = `https://randomuser.me/api/?seed=${seed}&results=${resultsLimit}`;
  let people;

  try {
    const resp = await fetcher(endPoint);
    people = resp.results;
  } catch (e) {
    res.status(500).json({ error: e });
  }

  return people.map((x) => ({ params: { id: x.login.uuid } }));
};

export const getProfileData = async (id) => {
  const endPoint = `https://randomuser.me/api/?seed=${seed}&results=${resultsLimit}`;
  let people;

  try {
    const resp = await fetcher(endPoint);
    people = resp.results;
  } catch (e) {
    res.status(500).json({ error: e });
  }

  const preson = people.find((p) => p.login.uuid === id);

  return {
    id,
    ...preson,
  };
};
