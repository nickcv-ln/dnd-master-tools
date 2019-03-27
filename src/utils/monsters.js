import { normalizeChallenge } from 'utils/thresholds';

// eslint-disable-next-line import/prefer-default-export
export const filter = (monster, minChallenge, maxChallenge, searchFilter = '') => {
  const challenge = normalizeChallenge(monster.challenge);

  if (challenge > maxChallenge) {
    return null;
  }
  if (challenge < minChallenge) {
    return null;
  }
  if (searchFilter.length && !monster.name.toLowerCase().includes(searchFilter.toLowerCase())) {
    return null;
  }

  return monster;
};
