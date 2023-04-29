import axios from "axios";
const niceList = require("../utils/niceList.json");

const serverUrl = "http://localhost:1225";

export default async function main(name = "", tree) {
  // TODO: how do we prove to the server we're on the nice list?
  let index;
  for (let i = 0; i < niceList.length; i++) {
    if (niceList[i] == name) index = i;
  }

  let root = tree.getRoot();
  let proof = tree.getProof(index);

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    // TODO: add request body parameters here!
    proof,
    leaf: name,
    root,
  });

  if (gift == "You got a toy robot!") return true;
  else return false;
}

// main();
