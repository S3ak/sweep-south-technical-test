export default async (req, res) => {
  const {
    query: { id },
  } = req;

  const seed = "monde";
  const resultsLimit = 10;

  const endPoint = `https://randomuser.me/api/?seed=${seed}&results=${resultsLimit}`;

  let people = [];

  try {
    const resp = await fetcher(endPoint);
    people = resp.results;
  } catch (e) {
    return res.status(500).json({ error: e });
  }

  const person = people.find((p) => p.login.uuid === id);

  res.status(200).json(person);
};
