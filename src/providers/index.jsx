import { useEffect } from "react"
import { ethers } from "ethers";
import { useSelector, useDispatch } from "react-redux";
import { initWeb3State } from "../store/web3";

const pageReload = () => { window.location.reload(); }

const handleAccount = (ethereum) => async () => {
    const isLocked = !(await ethereum._metamask.isUnlocked());
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


const Web3Provider = ({ children }) => {
    const web3Api = useSelector(state => state.web3Api);
    const dispatch = useDispatch();
    const testNftInfo = async () => {
        const { contract } = web3Api
        console.log(await contract.name())
        console.log(await contract.symbol())
    }
    if(web3Api.contract){
        testNftInfo()
    }
    useEffect(() => {
        async function initWeb3() {
            try {
                dispatch(initWeb3State("NftMarketplace"));
                setTimeout(() => setGlobalListeners(window.ethereum), 500);
            } catch (e) {
                alert("Please, install web3 wallet");
            }
        }
        initWeb3();
        return () => removeGlobalListeners(window.ethereum);
    }, [])

    return (
        <>
            {children}
        </>
    )
}

export default Web3Provider;









