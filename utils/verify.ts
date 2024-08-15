import { run } from "hardhat"

/**
 * verifies the contract on etherscan
 */
async function verify(contractAddress: string, args: any[]) {
  // args will be wmpty since the SimpleStorage Contract does not have a constructor
  console.log("Verifying contract...")
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    })
  } catch (e: any) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already verified!")
    } else {
      console.log(e)
    }
  }
}

export default  verify