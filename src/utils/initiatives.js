import Roll from 'roll';

const dice = new Roll();

const hasCollusions = (initiatives, creature, value) => !!Object.keys(initiatives).filter(
  mob => creature !== mob && initiatives[mob].value === value,
).length;

const getEnrichedList = initiatives => Object.keys(initiatives).reduce((total, mob) => {
  total.push({
    name: mob,
    value: initiatives[mob].value,
    display: Math.trunc(initiatives[mob].value),
    isPartyMember: initiatives[mob].isPartyMember,
    hasCollusions: hasCollusions(initiatives, mob, initiatives[mob].value),
  });
  return total;
}, []);

export const getSortedInitiatives = initiatives => (
  getEnrichedList(initiatives).sort((a, b) => b.value - a.value)
);

export const rollEncounterInitiatives = encounter => (
  Object.keys(encounter).reduce((total, mob) => ({
    ...total,
    [mob]: dice.roll(`d20+${encounter[mob].initiative || 0}`).result,
  }), {})
);

export const generatePartyDefaultInitiatives = partyMembers => (
  Object.keys(partyMembers).reduce((total, name) => ({
    ...total,
    [name]: 0,
  }), {})
);
