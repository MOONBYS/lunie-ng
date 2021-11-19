export default {
  id: 'pan-chain',
  name: 'MOONBYS PAN Testnet',
  description:
    'PAN is the first Moonbys public testnet.',
  logo: `logo.svg`,
  website: 'https://moonbys.com',
  // apiURL: 'http://localhost:8010/proxy',
  apiURL: 'http://139.59.167.214:1317/',
  rpcURL: 'http://139.59.167.214:26657/',
  minBlockHeight: 250000, // actually 5200791, but it has the wrong block time.
  stakingDenom: 'PAN',
  coinLookup: [
    {
      viewDenom: 'PAN',
      chainDenom: 'upan',
      chainToViewConversionFactor: 1e-6,
      icon: `currencies/atom.png`,
    },
  ],
  addressPrefix: 'pan',
  validatorAddressPrefix: 'panvaloper',
  validatorConsensusaddressPrefix: 'panvalcons', // needed to map validators from staking queries to the validator set
  HDPath: `m/44'/118'/0'/0/0`,
  lockUpPeriod: `14 days`,
  fees: {
    default: {
      gasEstimate: 350000,
      feeOptions: [
        {
          denom: 'uPAN',
          amount: 0.001,
        },
      ],
    },
  },
  icon: `https://moonbys.com/favicon.ico`,
  localSigning: true, // this is only to be used as a developer tool - never deployed in production or for mainnet chains
}
