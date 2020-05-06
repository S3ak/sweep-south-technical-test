import { fetchProfileById } from "./../../../lib/api";

export default async (req, res) => {
  const {
    query: { id },
  } = req;

  try {
    const person = await fetchProfileById(id);
    return res.status(200).json(person);
  } catch (e) {
    return res.status(500).json({ error: e });
  }
};
