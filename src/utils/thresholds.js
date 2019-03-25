const thresholds = {
  easy: 0,
  medium: 0,
  hard: 0,
  deadly: 0,
};

const resetThresholds = () => {
  thresholds.easy = 0;
  thresholds.medium = 0;
  thresholds.hard = 0;
  thresholds.deadly = 0;
};

const referenceTable = {
  1: {
    easy: 25,
    medium: 50,
    hard: 75,
    deadly: 100,
  },
  2: {
    easy: 50,
    medium: 100,
    hard: 150,
    deadly: 200,
  },
  3: {
    easy: 75,
    medium: 150,
    hard: 225,
    deadly: 400,
  },
  4: {
    easy: 125,
    medium: 250,
    hard: 375,
    deadly: 500,
  },
  5: {
    easy: 250,
    medium: 500,
    hard: 750,
    deadly: 1100,
  },
  6: {
    easy: 300,
    medium: 600,
    hard: 900,
    deadly: 1400,
  },
  7: {
    easy: 350,
    medium: 750,
    hard: 1100,
    deadly: 1700,
  },
  8: {
    easy: 450,
    medium: 900,
    hard: 1400,
    deadly: 2100,
  },
  9: {
    easy: 550,
    medium: 1100,
    hard: 1600,
    deadly: 2400,
  },
  10: {
    easy: 600,
    medium: 1200,
    hard: 1900,
    deadly: 2800,
  },
  11: {
    easy: 800,
    medium: 1600,
    hard: 2400,
    deadly: 3600,
  },
  12: {
    easy: 1000,
    medium: 2000,
    hard: 3000,
    deadly: 4500,
  },
  13: {
    easy: 1100,
    medium: 2200,
    hard: 3400,
    deadly: 5100,
  },
  14: {
    easy: 1250,
    medium: 2500,
    hard: 3800,
    deadly: 5700,
  },
  15: {
    easy: 1400,
    medium: 2800,
    hard: 4300,
    deadly: 6400,
  },
  16: {
    easy: 1600,
    medium: 3200,
    hard: 4800,
    deadly: 7200,
  },
  17: {
    easy: 2000,
    medium: 3900,
    hard: 5900,
    deadly: 8800,
  },
  18: {
    easy: 2100,
    medium: 4200,
    hard: 6300,
    deadly: 9500,
  },
  19: {
    easy: 2400,
    medium: 4900,
    hard: 7300,
    deadly: 10900,
  },
  20: {
    easy: 2800,
    medium: 5700,
    hard: 8500,
    deadly: 12700,
  },
};

const challenges = [
  { challenge: '-1', value: 10 },
  { challenge: 0.125, value: 25 },
  { challenge: 0.25, value: 50 },
  { challenge: 0.5, value: 100 },
  { challenge: 1, value: 200 },
  { challenge: 2, value: 450 },
  { challenge: 3, value: 700 },
  { challenge: 4, value: 1100 },
  { challenge: 5, value: 1800 },
  { challenge: 6, value: 2300 },
  { challenge: 7, value: 2900 },
  { challenge: 8, value: 3900 },
  { challenge: 9, value: 5000 },
  { challenge: 10, value: 5900 },
  { challenge: 11, value: 7200 },
  { challenge: 12, value: 8400 },
  { challenge: 13, value: 10000 },
  { challenge: 14, value: 11500 },
  { challenge: 15, value: 13000 },
  { challenge: 16, value: 15000 },
  { challenge: 17, value: 18000 },
  { challenge: 18, value: 20000 },
  { challenge: 19, value: 22000 },
  { challenge: 20, value: 25000 },
  { challenge: 21, value: 33000 },
  { challenge: 22, value: 41000 },
  { challenge: 23, value: 50000 },
  { challenge: 24, value: 62000 },
  { challenge: 30, value: 155000 },
];

const addThresholdForLevel = (level) => {
  thresholds.easy += referenceTable[level].easy;
  thresholds.medium += referenceTable[level].medium;
  thresholds.hard += referenceTable[level].hard;
  thresholds.deadly += referenceTable[level].deadly;
};

export const getPartyThresholds = (party) => {
  resetThresholds();

  if (party && party.members) {
    Object.values(party.members).forEach(({ level }) => {
      if (level) {
        addThresholdForLevel(level > 20 ?
          20 :
          level < 1 ?
            1 :
            level);
      }
    });
  }

  return thresholds;
};

export const getChallengeForThreshold = (value, matchLower = false, matchHigher = false) => {
  let returnValue = 0;
  let matchedHigher = false;

  challenges.forEach((threshold) => {
    if (matchLower && threshold.value < value) {
      returnValue = threshold.challenge;
    }
    // eslint-disable-next-line
    if (threshold.value == value) {
      returnValue = threshold.challenge;
    }

    if (matchHigher && !matchedHigher && threshold.value > value) {
      returnValue = threshold.challenge;
      matchedHigher = true;
    }
  });

  return returnValue;
};

const getMultiplier = (numberOfMonsters) => {
  if (numberOfMonsters === 1) {
    return 1;
  } else if (numberOfMonsters === 2) {
    return 1.5;
  } else if (numberOfMonsters <= 6) {
    return 2;
  } else if (numberOfMonsters <= 10) {
    return 2.5;
  } else if (numberOfMonsters <= 14) {
    return 3;
  }

  return 4;
};

export const getEncounterValue = (monsters) => {
  let totalExperience = 0;
  let totalMonsters = 0;
  Object.keys(monsters).forEach((key) => {
    totalMonsters += monsters[key].number;
    totalExperience += monsters[key].experience * monsters[key].number;
  });

  return totalExperience * getMultiplier(totalMonsters);
};
