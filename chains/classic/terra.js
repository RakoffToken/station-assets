module.exports = {
  chainID: 'columbus-5',
  lcd: 'https://terra-classic-lcd.publicnode.com',
  gasAdjustment: 5,
  gasPrices: {
    uluna: 28.325,
    usdr: 0.52469,
    uusd: 0.75,
    ukrw: 850.0,
    umnt: 2142.855,
    ueur: 0.625,
    ucny: 4.9,
    ujpy: 81.85,
    ugbp: 0.55,
    uinr: 54.4,
    ucad: 0.95,
    uchf: 0.7,
    uaud: 0.95,
    usgd: 1.0,
    uthb: 23.1,
    usek: 6.25,
    unok: 6.25,
    udkk: 4.5,
    uidr: 10900.0,
    uphp: 38.0,
    uhkd: 5.85,
    umyr: 3.0,
    utwd: 20.0,
  },
  prefix: 'terra',
  coinType: '330',
  baseAsset: 'uluna',
  name: 'Terra Classic',
  icon: 'https://assets.terra.money/icon/svg/TerraClassic.svg',
  isClassic: true,
  explorer: {
    address: "https://finder.terra.money/classic/address/{}",
    tx: "https://finder.terra.money/classic/tx/{}",
    validator: "https://finder.terra.money/classic/validator/{}",
    block: "https://finder.terra.money/classic/block/{}",
  }
}
