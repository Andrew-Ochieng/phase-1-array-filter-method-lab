// Code your solution here
// findMatching
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

// function findMatching(drivers, 'Bobby') {
//     return drivers
// }

// findMatching()

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
];


// find Matching
function findMatching(drivers, name) {
    return drivers.filter(function (driver) {
        return driver.toLowerCase() === name.toLowerCase()

    });
};


// fuzzyMatch
function fuzzyMatch(drivers, nameLetter) {
    return drivers.filter(function(driver){
        return driver.slice(0, nameLetter.length).toLowerCase() === nameLetter.toLowerCase()

    });
};


// matchName
function matchName(drivers, driverDetails) {
    return drivers.filter(function(driver){
        return driver.name.toLowerCase() === driverDetails.toLowerCase()
    });
};




