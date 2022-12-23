/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Switch } from "@headlessui/react";
import axios from "axios";
import { useWeb3 } from "../../providers/web3";
import { ethers } from "ethers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNetwork } from "../../hooks/web3";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { NFTStorage } from "nft.storage";
import { nftStorageSecretApiKey, contractAddress } from "../../api/utils";
import { useNavigate } from "react-router-dom";

const ALLOWED_FIELDS = [
  "name",
  "description",
  "imageLink",
  "image",
  "createdAt",
];

const CreateNFT = () => {
  const { ethereum, contract } = useWeb3();
  const { network } = useNetwork();
  const [nftURI, setNftURI] = useState("");
  const [price, setPrice] = useState("");
  const [hasURI, setHasURI] = useState(false);
  const [nftMeta, setNftMeta] = useState({
    name: "",
    description: "",
    imageLink: "",
    image: null,
    createdAt: "",
  });
  const client = new NFTStorage({ token: nftStorageSecretApiKey });
  const navigate = useNavigate();
  const getSignedData = async () => {
    const messageToSign = { contractAddress, id: uuidv4() };
    const accounts = await ethereum?.request({ method: "eth_requestAccounts" });
    const account = accounts[0];

    const signedData = await ethereum?.request({
      method: "personal_sign",
      params: [JSON.stringify(messageToSign), account, messageToSign.id],
    });

    return { signedData, account };
  };

  const handleImage = async (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      console.error("Select a file");
      return;
    }
    await getSignedData();
    const file = e.target.files[0];
    const ipfsHash = await client.storeBlob(file);
    setNftMeta({
      ...nftMeta,
      imageLink: `https://${ipfsHash}.ipfs.nftstorage.link`,
      image: file,
      createdAt: new Date().getTime()
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNftMeta({ ...nftMeta, [name]: value });
  };

  const uploadMetadata = async () => {
    try {
      const metadata = client.store(nftMeta);

      const data = await toast.promise(metadata, {
        pending: "Uploading metadata",
        success: "Metadata uploaded",
        error: "Metadata upload error",
      });

      setNftURI(`https://nftstorage.link/ipfs/${data.ipnft}/metadata.json`);
    } catch (e) {
      console.error(e.message);
    }
  };

  const createNft = async () => {
    try {
      const nftRes = await axios.get(nftURI);
      const content = nftRes.data;

      Object.keys(content).forEach((key) => {
        if (!ALLOWED_FIELDS.includes(key)) {
          throw new Error("Invalid Json structure");
        }
      });

      const tx = await contract?.mintToken(
        nftURI,
        ethers.utils.parseEther(price)
      );

      await toast.promise(tx?.wait(), {
        pending: "Minting Nft Token",
        success: "Nft has ben created",
        error: "Minting error",
      });
      navigate("/marketplace");
    } catch (e) {
      console.error(e.message);
    }
  };

  if (!network.isConnectedToNetwork) {
    return (
      <div className="rounded-md bg-yellow-50 p-4 mt-10">
        <div className="flex">
          <div className="flex-shrink-0"></div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-yellow-800">
              Attention needed
            </h3>
            <div className="mt-2 text-sm text-yellow-700">
              <p>
                {network.isLoading
                  ? "Loading..."
                  : `Connect to ${network.targetNetwork}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="p2-4">
        {!nftURI && (
          <div className="flex">
            <div className="mr-2 font-bold underline">
              Do you have meta data already?
            </div>
            <Switch
              checked={hasURI}
              onChange={() => setHasURI(!hasURI)}
              className={`${hasURI ? "bg-indigo-900" : "bg-indigo-700"}
                  relative inline-flex flex-shrink-0 h-[28px] w-[64px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={`${hasURI ? "translate-x-9" : "translate-x-0"}
                    pointer-events-none inline-block h-[24px] w-[24px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
              />
            </Switch>
          </div>
        )}
      </div>
      {nftURI || hasURI ? (
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                List NFT
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                {hasURI && (
                  <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <div>
                      <label
                        htmlFor="uri"
                        className="block text-sm font-medium text-gray-700"
                      >
                        URI Link
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          onChange={(e) => setNftURI(e.target.value)}
                          type="text"
                          name="uri"
                          id="uri"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 color: black"
                          placeholder="http://link.com/data.json"
                        />
                      </div>
                    </div>
                  </div>
                )}
                {nftURI && (
                  <div className="mb-4 p-4">
                    <div className="font-bold">Your metadata: </div>
                    <div>
                      <NavLink href={nftURI}>
                        <a className="underline text-indigo-600">{nftURI}</a>
                      </NavLink>
                    </div>
                  </div>
                )}
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div>
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Price (ETH)
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        type="number"
                        name="price"
                        id="price"
                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 font-medium text-gray-700"
                        placeholder="0.8"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    onClick={createNft}
                    type="button"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    List
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Create NFT Metadata
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        value={nftMeta.name}
                        onChange={handleChange}
                        type="text"
                        name="name"
                        id="name"
                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 text-gray-700"
                        placeholder="My Nice NFT"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Description
                    </label>
                    <div className="mt-1">
                      <textarea
                        value={nftMeta.description}
                        onChange={handleChange}
                        id="description"
                        name="description"
                        rows={3}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md text-gray-700"
                        placeholder="Some nft description..."
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Brief description of NFT
                    </p>
                  </div>
                  {/* Has Image? */}
                  {nftMeta.imageLink ? (
                    <img src={nftMeta.imageLink} alt="" className="h-40" />
                  ) : (
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Image
                      </label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="flex text-sm text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                            >
                              <span>Upload a file</span>
                              <input
                                onChange={handleImage}
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                className="sr-only text-gray-700"
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    onClick={uploadMetadata}
                    type="button"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    List
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateNFT;
