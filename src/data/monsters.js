import m1u4 from 'data/monsters1_4';
import m1u2 from 'data/monsters1_2';
import m1 from 'data/monsters1';
import m2 from 'data/monsters2';
import m3 from 'data/monsters3';

const enrichMob = (challenge, experience) => mob => ({
  challenge,
  experience,
  ...mob,
});

/* eslint-disable no-param-reassign */
export default [
  ...m1u4.map(enrichMob('1/4', 50)),
  ...m1u2.map(enrichMob('1/2', 100)),
  ...m1.map(enrichMob('1', 200)),
  ...m2.map(enrichMob('2', 450)),
  ...m3.map(enrichMob('3', 700)),
];
