import hyphenate from 'hyphenate';

import m1u8 from 'data/monsters1_8';
import m1u4 from 'data/monsters1_4';
import m1u2 from 'data/monsters1_2';
import m1 from 'data/monsters1';
import m2 from 'data/monsters2';
import m3 from 'data/monsters3';
import m4 from 'data/monsters4';
import m5 from 'data/monsters5';
import m6 from 'data/monsters6';
import m7 from 'data/monsters7';
import m8 from 'data/monsters8';
import m9 from 'data/monsters9';
import m10 from 'data/monsters10';
import m11 from 'data/monsters11';
import m12 from 'data/monsters12';
import m13 from 'data/monsters13';
import m14 from 'data/monsters14';
import m15 from 'data/monsters15';
import m16 from 'data/monsters16';
import m17 from 'data/monsters17';
import m18 from 'data/monsters18';
import m19 from 'data/monsters19';
import m20 from 'data/monsters20';
import m21 from 'data/monsters21';
import m22 from 'data/monsters22';
import m23 from 'data/monsters23';
import m24 from 'data/monsters24';
import m30 from 'data/monsters30';

const enrichMob = (challenge, experience) => mob => ({
  challenge,
  experience,
  id: hyphenate(`${mob.name} ${challenge}`, { lowerCase: true }),
  ...mob,
});

/* eslint-disable no-param-reassign */
export default [
  ...m1u8.map(enrichMob('1/8', 25)),
  ...m1u4.map(enrichMob('1/4', 50)),
  ...m1u2.map(enrichMob('1/2', 100)),
  ...m1.map(enrichMob(1, 200)),
  ...m2.map(enrichMob(2, 450)),
  ...m3.map(enrichMob(3, 700)),
  ...m4.map(enrichMob(4, 1100)),
  ...m5.map(enrichMob(5, 1800)),
  ...m6.map(enrichMob(6, 2300)),
  ...m7.map(enrichMob(7, 2900)),
  ...m8.map(enrichMob(8, 3900)),
  ...m9.map(enrichMob(9, 5000)),
  ...m10.map(enrichMob(10, 5900)),
  ...m11.map(enrichMob(11, 7200)),
  ...m12.map(enrichMob(12, 8400)),
  ...m13.map(enrichMob(13, 10000)),
  ...m14.map(enrichMob(14, 11500)),
  ...m15.map(enrichMob(15, 13000)),
  ...m16.map(enrichMob(16, 15000)),
  ...m17.map(enrichMob(17, 18000)),
  ...m18.map(enrichMob(18, 20000)),
  ...m19.map(enrichMob(19, 22000)),
  ...m20.map(enrichMob(20, 25000)),
  ...m21.map(enrichMob(21, 33000)),
  ...m22.map(enrichMob(22, 41000)),
  ...m23.map(enrichMob(23, 50000)),
  ...m24.map(enrichMob(24, 62000)),
  ...m30.map(enrichMob(30, 155000)),
];
