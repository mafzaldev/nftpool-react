// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NftMarketplace is ERC721URIStorage { 
    using Counters for Counters.Counter;
    struct NftItem 
    {
    uint tokenId;
    uint price;
    address creator;
    bool isListed;
    }
    constructor() ERC721("ArtNFT", "ANFT") {
    
    
    }
 }