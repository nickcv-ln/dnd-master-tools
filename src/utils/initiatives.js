import Roll from 'roll';

const dice = new Roll();

export const getSortedInitiatives = initiatives => (
  Object.keys(initiatives).reduce((total, mob) => {
    total.push({
      name: mob,
      value: initiatives[mob],
      display: Math.trunc(initiatives[mob]),
    });
    return total;
  }, []).sort((a, b) => b.value - a.value)
);

export const rollEncounterInitiatives = encounter => (
  Object.keys(encounter).reduce((total, mob) => ({
    ...total,
    [mob]: dice.roll(`d20+${encounter[mob].initiative || 0}`).result,
  }), {})
);
