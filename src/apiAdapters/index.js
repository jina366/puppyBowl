const BASE = "https://fsa-puppy-bowl.herokuapp.com";

const getAllPuppyWithFetch = async () => {
  try {
    const response = await fetch(`${BASE}/api/2301-ftb-et-web-ft/players`);
    const result = await response.json();
    const fixedResult = result.data.players
    return fixedResult
  } catch (err) {
    console.error(err);
  }
};
 
getAllPuppyWithFetch()
module.exports = {
    getAllPuppyWithFetch,
}