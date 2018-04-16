# D&D Master Tools

this simple standalone application includes some tools useful for the Dungeon Master.

The application is built in `react` and to run it you will need to install [node and npm](https://nodejs.org/en/).

The project was developed using `node 9.11` and `npm 5.6.0`.

If you do have npm installed just run `npm install` and `npm start` on your terminal.

Closing the terminal will terminate the app.

## Data
All the data is stored within the `localStorage` of your browser.
You can clear the data using the dev tools.

## Tools

### Encounter Challenge Calculator

This tool automatically calculates the thresholds for the given party and suggests monsters from the `Monsters Manual` that fall under said threshold.

It calculates in realtime the total challenge of the encounter against the threshold, following the formulas explained in the `Dungeon Master Guide`
