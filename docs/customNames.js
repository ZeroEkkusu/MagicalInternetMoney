const CUSTOMNAMES = {
  "0x0000000000000000000000000000000000000000": ["eoa", "Null:0x0000...0000"],
  "0x4f58404F363f8a3282648E80440e075e5C1E28a1": ["announcer", "ERC5564Announcer on Sepolia"],
  "0xC5F111011acAd96860a3cd3d7C50Dd8f56a5684e": ["registry", "ERC5564Registry v0.8.0 on Sepolia"],
  "0x3834bcA9093e375893D65975ad765179A149D017": ["helper", "StealthChad v0.8.0 on Sepolia"],

  // "0x0000000000000000000000000000000000000001": ["eoa", "Null", "Null:0x0000...0001"],
  // "0x00000000000111AbE46ff893f3B2fdF1F759a8A8": ["nftexchange", "ExecutionDelegate", "Blur:ExecutionDelegate"],
  // "0x000000000022D473030F116dDEE9F6B43aC78BA3": ["ftexchange", "Permit2", "Uniswap:Permit2"],
  // "0x011C77fa577c500dEeDaD364b8af9e8540b808C0": ["erc721", "IPC", "ImmortalPlayerCharacter"],
  // "0x0fc584529a2AEfA997697FAfAcbA5831faC0c22d": ["nftexchange", "NFTXMarketplaceZap", "NFTX:NFTXMarketplaceZap"],
  // "0x1111111254EEB25477B68fb85Ed929f73A960582": ["ftexchange", "1inchV5:AggregationRouterV5", "1inchV5:AggregationRouterV5"],
  // "0x1776e1F26f98b1A5dF9cD347953a26dd3Cb46671": ["erc20", "NMR", "Numeraire"],
  // "0x1E0049783F008A0085193E00003D00cd54003c71": ["nftexchange", "OS:Conduit", "OpenSea:Conduit"],
  // "0x2f18F339620a63e43f0839Eeb18D7de1e1Be4DfB": ["nftexchange", "Blur:Delegate", "Blur:Delegate"],
  // "0x495f947276749Ce646f68AC8c248420045cb7b5e": ["erc1155", "OSSSF", "OpenSea Shared StoreFront"],
  // "0x4feE7B061C97C9c496b01DbcE9CDb10c02f0a0Be": ["nftexchange", "TransferProxy", "Rarible:TransferProxy"],
  // "0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85": ["erc721", "ENS", "Ethereum Name Service"],
  // "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45": ["ftexchange", "UniswapV3:SwapRouter02", "UniswapV3:SwapRouter02"],
  // "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D": ["ftexchange", "UniswapV2:Router02", "UniswapV2:Router02"],
  // "0x941A6d105802CCCaa06DE58a13a6F49ebDCD481C": ["nftexchange", "NFTXMarketplace0xZap", "NFTX:Marketplace0xZap"],
  // "0x9996FCFa25B234e80BcF876d83d2e7F338F9BDA5": ["nftexchange", "EnsSubdomainStorefront_v2", "ENSVision:EnsSubdomainStorefront_v2"],
  // "0x99a58482BD75cbab83b27EC03CA68fF489b5788f": ["ftexchange", "Curve.fi:SwapRouter", "Curve.fi:SwapRouter"],
  // "0xA42f6cADa809Bcf417DeefbdD69C5C5A909249C0": ["nftexchange", "NFT20CasUpgreadableV2", "NFT20:NFT20CasUpgreadableV2"],
  // "0xBA12222222228d8Ba445958a75a0704d566BF2C8": ["ftexchange", "Balancer:Vault", "Balancer:Vault"],
  // "0xB32979486938AA9694BFC898f35DBED459F44424": ["erc1155", "NYAN", "Nyan Cat"],
  // "0xbbc53022Af15Bb973AD906577c84784c47C14371": ["nftexchange", "NFTXMarketplace0xZap", "NFTX:NFTXMarketplace0xZap"],
  // "0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413": ["erc20", "DAO", "TheDAO", 16],
  // "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2": ["erc20", "WETH", "Wrapped Ether", 18],
  // "0xC2C747E0F7004F9E8817Db2ca4997657a7746928": ["erc721", "HM", "Hashmask"],
  // "0xd07dc4262BCDbf85190C01c996b4C06a461d2430": ["erc1155", "RARI", "Rarible:RARI Token 3"],
  // "0xD152f549545093347A162Dce210e7293f1452150": ["ftexchange", "Disperse.app", "Disperse.app"],
  // "0xD4416b13d2b3a9aBae7AcD5D6C2BbDBE25686401": ["erc1155", "NameWrapper", "ENS:NameWrapper"],
  // "0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F": ["ftexchange", "SushiSwap:Router", "SushiSwap:Router"],
  // "0xE592427A0AEce92De3Edee1F18E0157C05861564": ["ftexchange", "UniswapV3:Router", "UniswapV3:Router"],
  // "0xE5c783EE536cf5E63E792988335c4255169be4E1": ["nftexchange", "WyvernTokenTransferProxy", "OpenSea:WyvernTokenTransferProxy"],
  // "0xF0d4c12A5768D806021F80a262B4d39d26C58b8D": ["ftexchange", "CurveRouterV1.0", "CurveRouterV1.0"],
  // "0xf42aa99F011A1fA7CDA90E5E98b277E306BcA83e": ["nftexchange", "TransferManagerERC721", "LooksRare:TransferManagerERC721"],
  // "0xF849de01B080aDC3A814FaBE1E2087475cF2E354": ["nftexchange", "ERC721Delegate", "X2Y2:ERC721Delegate"],
  // "0xFe9231f0e6753a8412a00eC1f0028A24d5220Ba9": ["erc1155", "ZB", "ZombieBabies"],
};
