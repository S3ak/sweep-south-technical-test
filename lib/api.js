import { fetcher } from "../src/utils/helpers";
import { RANDOM_USER_SEED, RESULTS_LIMIT } from "./constants";
import { storeData, loadData } from "./fs";

export const fetchAllProfiles = async (
  seed = RANDOM_USER_SEED,
  limit = RESULTS_LIMIT
) => {
  // TODO: use env var
  const endPoint = `https://randomuser.me/api/?seed=${seed}&results=${limit}`;
  let profiles;

  try {
    const resp = await fetcher(endPoint);
    profiles = resp.results;

    storeData(profiles, "data/profiles.json");
  } catch (e) {
    return { error: e };
  }

  return profiles;
};

export const fetchProfileById = async (
  id,
  seed = RANDOM_USER_SEED,
  limit = RESULTS_LIMIT
) => {
  let allProfiles = [];
  try {
    allProfiles = await fetchAllProfiles(seed, limit);
  } catch (e) {
    return { error: e };
  }

  const profile = allProfiles.find((p) => p.login.uuid == id);
  return {
    id,
    ...profile,
  };
};

export const fetchProfileByIdFromFs = async (id) => {
  const allProfiles = JSON.parse(loadData("data/profiles.json")) || [];

  const profile = allProfiles.find((p) => p.login.uuid === id);

  return {
    id,
    ...profile,
  };
};

export const fetchAllProfilesFromFs = async () =>
  JSON.parse(loadData("data/profiles.json")) || [];
