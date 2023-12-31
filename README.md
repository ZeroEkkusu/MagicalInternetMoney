# Stealth Chad
Stealth Chad - Exploring [ERC-5564: Stealth Addresses](https://eips.ethereum.org/EIPS/eip-5564)

URL: [https://bokkypoobah.github.io/StealthChad/](https://bokkypoobah.github.io/StealthChad/) WIP

<br />

---

## References

* [ERC-5564: Stealth Addresses](https://eips.ethereum.org/EIPS/eip-5564)
* [ERC-6538: Stealth Meta-Address Registry](https://eips.ethereum.org/EIPS/eip-6538)
* https://github.com/nerolation/stealth-wallet
  * https://stealth-wallet.xyz/
  * https://nerolation.github.io/stealth-utils/ from https://github.com/nerolation/stealth-utils
  * [StealthTransactionHelper on Sepolia](https://sepolia.etherscan.io/address/0x054Aa0E0b4C92142a583fDfa9369FF3558F8dea4#code)
* https://github.com/kassandraoftroy/erc5564-contracts
* [An incomplete guide to stealth addresses](https://vitalik.eth.limo/general/2023/01/20/stealth.html)
* [ERC-5564 Stealth Addresses](https://ethereum-magicians.org/t/erc-5564-stealth-addresses/10614)
* [EIP-5564: Improving Privacy on Ethereum through Stealth Address Wallets](https://medium.com/@toni_w/eip-5564-improving-privacy-on-ethereum-through-stealth-address-wallets-fdf3250e81a1)
* [Ethereum stealth addresses (ERC-5564) library](https://github.com/jsign/zig-stealth-addresses)
* [secp256k1-js](https://github.com/lionello/secp256k1-js)
  * https://unpkg.com/bn.js@4.11.8/lib/bn.js
  * https://unpkg.com/@lionello/secp256k1-js@1.1.0/src/secp256k1.js
* https://github.com/paulmillr/noble-secp256k1/releases/download/2.0.0/noble-secp256k1.min.js
* https://github.com/paulmillr/noble-curves

<br />

---

## Deployments

* [ERC5564Announcer.sol](deployed/ERC5564Announcer_Sepolia_0x4f58404f363f8a3282648e80440e075e5c1e28a1.sol) on Sepolia [0x4f58404f363f8a3282648e80440e075e5c1e28a1](https://sepolia.etherscan.io/address/0x4f58404f363f8a3282648e80440e075e5c1e28a1#code)
* [ERC5564Registry.sol](deployed/ERC5564Registry_v0.8.0_Sepolia_0xC5F111011acAd96860a3cd3d7C50Dd8f56a5684e.sol) on Sepolia [0xC5F111011acAd96860a3cd3d7C50Dd8f56a5684e](https://sepolia.etherscan.io/address/0xC5F111011acAd96860a3cd3d7C50Dd8f56a5684e#code)
* [StealthChad.sol v0.8.0](deployed/StealthChad_v0.8.0_Sepolia_0x3834bcA9093e375893D65975ad765179A149D017.sol) on Sepolia [0x3834bcA9093e375893D65975ad765179A149D017](https://sepolia.etherscan.io/address/0x3834bcA9093e375893D65975ad765179A149D017#code)


<br />

---

### Sample Screens

#### Config Sample Screens

##### Config - Before Scan

<kbd><img src="images/SampleScreen_Config_BeforeScan_20240101.png" /></kbd>

##### Config - After Scan

<kbd><img src="images/SampleScreen_Config_AfterScan_20240101.png" /></kbd>

##### Config - Announcer

<kbd><img src="images/SampleScreen_Config_Announcer_20240101.png" /></kbd>

##### Config - Registry

<kbd><img src="images/SampleScreen_Config_Registry_20240101.png" /></kbd>

##### Config - StealthChad

<kbd><img src="images/SampleScreen_Config_StealthChad_20240101.png" /></kbd>

<br />

---

## Notes

npx hardhat
> 2.19.3

npm install --save-dev @nomicfoundation/hardhat-ethers ethers
