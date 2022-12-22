import { ethers } from "ethers";
import { useCallback } from "react";
import { toast } from "react-toastify";
import useSWR from "swr";

export const hookFactory = ({contract}) => () => {
  const getNfts = async () => {
      const nfts = [];
      const coreNfts = await contract?.getAllNftsOnSale();
      for (let i = 0; i < coreNfts.length; i++) {
        const item = coreNfts[i];
        const tokenURI = await contract?.tokenURI(item.tokenId);
        const metaRes = await fetch(tokenURI);
        const meta = await metaRes.json();

        nfts.push({
          price: parseFloat(ethers.utils.formatEther(item.price)),
          tokenId: item.tokenId.toNumber(),
          creator: item.creator,
          isListed: item.isListed,
          meta
        })
      }
      return nfts;
    }

  const _contract = contract;
  const buyNft = useCallback(async (tokenId, value) => {
    try {
      const result = await _contract?.buyNft(
        tokenId, {
          value: ethers.utils.parseEther(value.toString())
        }
      )

      await toast.promise(
        result?.wait(), {
          pending: "Processing transaction",
          success: "Nft is yours! Go to Profile page",
          error: "Processing error"
        }
      );
    } catch (e) {
      console.error(e.message);
    }
  }, [_contract])


  return {
    getNfts,
    buyNft,
    contract
  };
}
