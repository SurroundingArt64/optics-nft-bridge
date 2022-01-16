# Advanced Sample Hardhat Project

Project Structure:

```
..
|-- optics-monorepo   : https://github.com/celo-org/optics-monorepo/
|-- optics-nft-bridge : https://github.com/SurroundingArt64/optics-nft-bridge

```

How the bridge works:

Bridge expects that a token has already been deployed on any one of the chains. (native)

Bridge asks token Owner to deploy an NFT contract on remote chain from same wallet or have same owner. (non-native)

Then, owner/governance of Router can map a token from local to remote and vice-versa if native and non-native deployed from same wallet(manual verification).

The mapping exists such that no-one can mint on non-native chain except the router on that chain.



```shell
npx hardhat compile
npx hardhat test
```
