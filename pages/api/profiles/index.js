import { fetchAllProfiles } from "./../../../lib/api";

export default async (req, res) => {
  const { seed, limit } = req;

  try {
    const people = await fetchAllProfiles(seed, limit);
    return res.status(200).json(people);
  } catch (e) {
    return res.status(500).json({ error: e });
  }
};
