import contract from "../../public/contracts/NftMarketplace.json";



const abi = contract.abi;
const targetNetwork = import.meta.env.VITE_PUBLIC_NETWORK_ID;

export const contractAddress = contract["networks"][targetNetwork]["address"];
export const pinataApiKey = import.meta.env.VITE_PINATA_API_KEY;
export const pinataSecretApiKey = import.meta.env.VITE_PINATA_SECRET_API_KEY;
export const nftStorageSecretApiKey = import.meta.env.VITE_NFTSTORAGE_API_KEY;



