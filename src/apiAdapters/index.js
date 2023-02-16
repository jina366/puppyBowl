const BASE = "https://fsa-puppy-bowl.herokuapp.com";

const getAllPuppyWithFetch = async () => {
  try {
    const response = await fetch(`${BASE}/api/2301-ftb-et-web-ft/players`);
    const result = await response.json();
    console.log(result);

  } catch (err) {
    console.error(err);
  }
};
 
getAllPuppyWithFetch()
module.exports = {
    getAllPuppyWithFetch,
}