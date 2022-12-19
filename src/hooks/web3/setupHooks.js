
import { hookFactory as createAccountHook } from "./useAccount";
import { hookFactory as createNetworkHook } from "./useNetwork";
import { hookFactory as createListedNftsHook } from "./useListedNfts";
import { hookFactory as createOwnedNftsHook } from "./useOwnedNfts";

export const setupHooks = (deps) => {
  return {
    useAccount: createAccountHook(deps),
    useNetwork: createNetworkHook(deps),
    useListedNfts: createListedNftsHook(deps),
    useOwnedNfts: createOwnedNftsHook(deps),
  }
}
