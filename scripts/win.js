// add the game address here and update the contract name if necessary
const gameAddr = "0x610178dA211FEF7D417bC0e6FeD39F05609AD788";
const contractName = "Game5";

async function main() {
  // attach to the game
  const game = await hre.ethers.getContractAt(contractName, gameAddr);

  // FOR GAME 2 uncomment the bellow functions
  // await game.setX(25);
  // await game.setY(25);

  // FOR GAME 3 uncomment the bellow function
  // const tx = await game.win(45);

  // FOR GAME 4 uncomment the bellow functions
  // const tx = await game.win(56);

  // FOR GAME 5 uncomment the bellow functions
  // await game.giveMeAllowance(20000);
  // await game.mint(20000);

  // do whatever you need to do to win the game here:
  const tx = await game.win();

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
