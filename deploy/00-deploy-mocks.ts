import { developmentChains, DECIMALS, INITIAL_PRICE } from "../helper-hardhat-config"

const deployMocks = async (hre) => {
  const { getNamedAccounts, deployments, network } = hre
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()
  const chainId = network.config.chainId
  
  if (developmentChains.includes(network.name)) {
    log(`Local network detected: ${network.name}! Deploying Mocks...`)
    await deploy("MockV3Aggregator", {
      contract: "MockV3Aggregator",
      from: deployer,
      log: true,
      args: [DECIMALS, INITIAL_PRICE],
    })
    log("Mocks Deployed!")
    log("----------------------------------")
    log(
      "You are deploying to a local network, you'll need a local network running to interact"
    )
    log(
      "Please run `yarn hardhat console` to interact with the deployed smart contracts!"
    )
    log("----------------------------------")
  }

}

deployMocks.tags = ["all", "mocks"]
export default deployMocks
