import useSWR from "swr";

const NETWORKS = {
  1: "Ethereum Main Network",
  3: "Ropsten Test Network",
  4: "Rinkeby Test Network",
  5: "Goerli Test Network",
  42: "Kovan Test Network",
  56: "Binance Smart Chain",
  1337: "Ganache",
}

const targetId = import.meta.env.VITE_PUBLIC_TARGET_CHAIN_ID;
const targetNetwork = NETWORKS[targetId];


export const hookFactory = ({provider, isLoading}) => () => {
  const {data, isValidating, ...swr} = useSWR(
    provider ? "web3/useNetwork" : null,
    async () => {
      const chainId = (await provider?.getNetwork()).chainId;

      if (!chainId) {
        throw "Cannot retreive network. Please, refresh browser or connect to other one."
      }

      return NETWORKS[chainId];
    }, {
      revalidateOnFocus: false
    }
  )

  const isSupported = data === targetNetwork;

  return {
    ...swr,
    data,
    isValidating,
    targetNetwork,
    isSupported,
    isConnectedToNetwork: !isLoading && isSupported,
    isLoading: isLoading,
  };
}
