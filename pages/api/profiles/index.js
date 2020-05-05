import { fetcher } from "../../../src/utils/helpers";

const seed = "monde";
const resultsLimit = 10;

export default async (req, res) => {
  const endPoint = `https://randomuser.me/api/?seed=${seed}&results=${resultsLimit}`;
  let people;

  try {
    const resp = await fetcher(endPoint);
    people = resp.results;
  } catch (e) {
    return res.status(500).json({ error: e });
  }

  res.status(200).json(people);
};
