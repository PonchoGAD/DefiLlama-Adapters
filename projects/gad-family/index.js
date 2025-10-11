const GAD = '0x858bab88a5b8d7f29a40380c5f2d8d0b8812fe62'.toLowerCase()

const STAKE_LP_EARN_GAD = '0x5c5c0b9ee66cc106f90d7b1a3727dc126c4ef188'.toLowerCase()   // GADMaster (Stake LP Earn GAD)
const STAKE_GAD_EARN_GAD = '0x0271167c2b1b1513434ece38f024434654781594'.toLowerCase()   // GADSingleStakingV2 (Stake GAD Earn GAD)

const AIRDROP_V1 = '0x022ce9320ea1ab7e03f14d8c0dbd14903a940f79'.toLowerCase()
const GAD_ZAP = '0x15acdc7636fb0214aefa755377ce5ab3a9cc99bc'.toLowerCase()

const { sumTokensExport } = require('../helper/unwrapLPs')

const staking = sumTokensExport({
  chain: 'bsc',
  owners: [STAKE_LP_EARN_GAD, STAKE_GAD_EARN_GAD],
  tokens: [GAD],
})

async function tvl() {
  return {}
}

module.exports = {
  methodology:
    'Staking represents the total GAD tokens held in staking contracts (GADMaster and GADSingleStakingV2). ' +
    'TVL is set to 0 to avoid including the project’s own token as TVL. ' +
    'Additional contracts (Airdrop v1 and GADZap) are documented but excluded from calculations for clarity.',
  bsc: {
    tvl,
    staking,
  },
  timetravel: true,
}
