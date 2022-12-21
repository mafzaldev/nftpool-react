import { v4 as uuidv4 } from "uuid";
import { pinataApiKey, pinataSecretApiKey } from "./utils";
import FormData from "form-data";
import axios from "axios";

export const verifyImage = async (bytes, fileName, contentType) => {

  if (!bytes || !fileName || !contentType) {
    return { message: "Image data are missing" };
  }

  const buffer = Buffer.from(Object.values(bytes));
  const formData = new FormData();

  formData.append(
    "file",
    buffer, {
    contentType,
    filename: fileName + "-" + uuidv4()
  }
  );

  const fileRes = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
    maxBodyLength: Infinity,
    headers: {
      "Content-Type": `multipart/form-data; boundary=${formData.getBoundary()}`,
      pinata_api_key: pinataApiKey,
      pinata_secret_api_key: pinataSecretApiKey
    }
  });

  return fileRes.data;
}