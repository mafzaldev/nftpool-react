import { createContext, useContext, useEffect, useState } from "react"
import { createDefaultState, createWeb3State, loadContract } from "./utils";
import { ethers } from "ethers";
import { auth } from "../../../firebase";

const pageReload = () => { window.location.reload(); }

const handleAccount = (ethereum) => async () => {
  const isLocked =  !(await ethereum._metamask.isUnlocked());
  if (isLocked) { pageReload(); }
}

const setGlobalListeners = (ethereum) => {
  ethereum.on("chainChanged", pageReload);
  ethereum.on("accountsChanged", handleAccount(ethereum));
}

const removeGlobalListeners = (ethereum) => {
  ethereum?.removeListener("chainChanged", pageReload);
  ethereum?.removeListener("accountsChanged", handleAccount);
}

const Web3Context = createContext(createDefaultState());

const Web3Provider = ({children}) => {
  const [web3Api, setWeb3Api] = useState(createDefaultState());

  useEffect(() => {
    async function initWeb3() {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract =  await loadContract("NftMarketplace", provider);
        const signer = provider.getSigner();
        const signedContract = contract.connect(signer);

        setTimeout(() => setGlobalListeners(window.ethereum), 500);
        setWeb3Api(createWeb3State({
          ethereum: window.ethereum,
          provider,
          contract: signedContract,
          isLoading: false
        }))
      } catch(e) {
        console.error(e);
        setWeb3Api((api) => createWeb3State({
          ...api,
          isLoading: false,
        }))
      }
    }

    initWeb3();
    console.log("GG")
    return () => removeGlobalListeners(window.ethereum);
  }, [auth])

  return (
    <Web3Context.Provider value={web3Api}>
      {children}
    </Web3Context.Provider>
  )
}

export function useWeb3() {
  return useContext(Web3Context);
}

export function useHooks() {
  const { hooks } = useWeb3();
  return hooks;
}

export default Web3Provider;









