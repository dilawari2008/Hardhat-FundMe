import { developmentChains, networkConfig } from "../helper-hardhat-config"
import verify from "../utils/verify"

const deployFundMe = async (hre) => { // OR: const deployFundMe = async ({getNamedAccounts, deployments})
  const { getNamedAccounts, deployments, network } = hre
  const { deploy, log, get } = deployments
  const { deployer } = await getNamedAccounts()
  const chainId = network.config.chainId
  let ethUsdPriceFeedAddress: string
  log(`network.name: ${network.name}`)
  log(`chainId: ${chainId}`)
  if (developmentChains.includes(network.name)) {
    const ethUsdAggregator = await get("MockV3Aggregator")
    ethUsdPriceFeedAddress = ethUsdAggregator.address
  } else {
    ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeedAddress"]
  }
  log("----------------------------------------------------")
  log("Deploying FundMe and waiting for confirmations...")
  const args = [ethUsdPriceFeedAddress]
  const fundMe = await deploy("FundMe", {
    from: deployer,
    args,
    log: true,
    // we need to wait if on a live network so we can verify properly
    waitConfirmations: networkConfig[chainId].blockConfirmations || 0,
  })
  log(`FundMe deployed at ${fundMe.address}`)




  if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
    await verify(fundMe.address, args)
  }

  log("----------------------------------------------------")
}

deployFundMe.tags = ["all", "fundMe"]
export default deployFundMe