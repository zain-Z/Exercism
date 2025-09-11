"use strict";
const EARTH_YEAR_SECONDS = 31557600;
const ORBITAL_PERIODS = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1.0,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
};
function ageOnPlanet(seconds, planet) {
    const period = ORBITAL_PERIODS[planet];
    const age = seconds / (EARTH_YEAR_SECONDS * period);
    return parseFloat(age.toFixed(2));
}
const seconds = 1000000000;
console.log(`Age on Earth: ${ageOnPlanet(seconds, "earth")} years`);
console.log(`Age on Mercury: ${ageOnPlanet(seconds, "mercury")} years`);
console.log(`Age on Venus: ${ageOnPlanet(seconds, "venus")} years`);
console.log(`Age on Mars: ${ageOnPlanet(seconds, "mars")} years`);
console.log(`Age on Jupiter: ${ageOnPlanet(seconds, "jupiter")} years`);
console.log(`Age on Saturn: ${ageOnPlanet(seconds, "saturn")} years`);
console.log(`Age on Uranus: ${ageOnPlanet(seconds, "uranus")} years`);
console.log(`Age on Neptune: ${ageOnPlanet(seconds, "neptune")} years`);
