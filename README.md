# __1
trufflesuite.com
https://trufflesuite.com/docs/truffle/getting-started/installation.html

npm install -g truffle

# __2
https://trufflesuite.com/boxes/react/index.html

truffle unbox react

# __3
truffle compile

# ganache on 7545 instead of 8545
truffle migrate

# __4
cd client
npm start

# __5
https://github.com/OpenZeppelin/openzeppelin-contracts

$ npm install @openzeppelin/contracts

# __6
https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol

function _mint(address to, uint256 tokenId) internal virtual {

* __7
SimpleStorage.sol
pragma solidity >=0.4.21 <0.7.0;

Error: Truffle is currently using solc 0.8.11, but one or more of your contracts specify "pragma solidity >=0.4.21 <0.7.0"

truffle compile
truffle migrate
truffle test

https://docs.soliditylang.org/en/latest/using-the-compiler.html#solidity-upgrade

node mudule version
➜  crpunk202261300 solcjs --version
0.8.12+commit.f00d7308.Emscripten.clang

truffle compile
truffle migrate
truffle test
