export const networkConfig = {
  11155111: {
    name: "sepolia",
    ethUsdPriceFeedAddress: "0x694AA1769357215DE4FAC081bf1f309aDC325306",
    blockConfirmations: 6
  },
  137: {
    name: "polygon",
    ethUsdPriceFeedAddress: "0xF9680D99D6C9589e2a93a78A04A279e509205945",
    blockConfirmations: 6
  },
  // 31337
};

export const developmentChains = ["hardhat", "localhost"]
export const DECIMALS = "18"
export const INITIAL_PRICE = "2000000000000000000000" // 2000