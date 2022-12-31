// add the game address here and update the contract name if necessary
const gameAddr = "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6";
const contractName = "Game4";

async function main() {
  // attach to the game
  const game = await hre.ethers.getContractAt(contractName, gameAddr);

  // This is a tricky one....But from the contract we see that all variables are in Uint8...meaning it has a limit of 255, so get the value to be equal to 10 above 255 which is 266 then it will correspond to 10 in uint8
  // do whatever you need to do to win the game here:
  const tx = await game.win(56);

  // did you win? Check the transaction receipt!
  // if you did, it will be in both the logs and events array
  const receipt = await tx.wait();
  console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

// Use the following command to run
// npx hardhat run scripts/game4.js
