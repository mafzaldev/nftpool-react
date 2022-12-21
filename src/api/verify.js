

import { v4 as uuidv4 } from "uuid";
import { withSession, contractAddress, pinataApiKey, pinataSecretApiKey } from "./utils";
import axios from "axios";


export const getVerify = async () => {
  try {
    const message = { contractAddress, id: uuidv4() };
    req.session.set("message-session", message);
    await req.session.save();

    return message;
  } catch {
    return { message: "Cannot generate a message!" };
  }
}

export const postVerify = async (nft) => {
  try {

    if (!nft.name || !nft.description) {
      return { message: "Some of the form data are missing!" };
    }

    const jsonRes = await axios.post("https://api.pinata.cloud/pinning/pinJSONToIPFS", {
      pinataMetadata: {
        name: uuidv4()
      },
      pinataContent: nft
    }, {
      headers: {
        pinata_api_key: pinataApiKey,
        pinata_secret_api_key: pinataSecretApiKey
      }
    });

    return jsonRes.data;
  } catch {
    return { message: "Cannot create JSON" };
  }
}