# GBAStore Contract

This contract shows how blockchain is able to help with transparency in cases where online stores claim they donate x% from each sale.

The contract splits the amount received between the store and the Ukraine donation address: https://etherscan.io/address/0x165CD37b4C644C2921454429E7F9358d18A45e14

Two state variables are publicly available:
- Items Sold
- Total Donated (in wei)

A sample contract is deployed at Matic Mumbai: https://mumbai.polygonscan.com/address/0xb933c15c9137a22dc70cbd6c263d7daa870d7f9c#code




## Deployment

Head to `scripts/deploy.ts` and edit the percentage of each sale which should be donated.

To deploy the contract, run:

```bash
  npx hardhat run scripts/deploy.ts --network <network>
```


## Running Tests

To run tests, run the following command

```bash
   npx hardhat test --network <network>
```


## Authors

- [@kryptopaul](https://github.com/kryptopaul)

