export function getGCode(code) {
  if (code.indexOf("@") >= 0) {
    return code.split("@")[2];
  } else {
    return gcodes[code];
  }
}

const gcodes = {
  MNL: "0195pd",
  PEK: "01914",
  //Oceania
  SYD: "06y57",
  CBR: "0dp90",
  MEL: "0chgzm",
  BNE: "01b8jj",
  HBA: "07cfx",
  SUV: "0bsl6",
  HNL: "02hrh0_",
  KOA: "0r_g0",
  OGG: "0s0gz",
  LIH: "0jbsn",
  AKL: "012ts",
  WLG: "0853g",
  CHC: "02yc5b",
  ZQN: "017cf7",

  //Africa
  CAI: "01w2v",
  RBA: "0fs44",
  TNR: "0fm_1",
  NBO: "05d49",
  JNB: "0g284",
  CPT: "01yj2",
  //Caribean
  ANU: "0l3h",
  AUA: "0j11",
  NAS: "05hcy",
  BGI: "0fn5r",
  BDA: "0165b",
  GCM: "02h775",
  SNU: "05s0pf",
  HAV: "0d6hn",
  VRA: "01cxyk",
  SDQ: "0fthl",
  PUJ: "05sc7g",
  GND: "09jq0",
  PAP: "0fs1v",
  KIN: "09b8m",
  MBJ: "023d7v",
  SJU: "0fw4v",
  POS: "0fs29",
  STT: "028y82"
};
