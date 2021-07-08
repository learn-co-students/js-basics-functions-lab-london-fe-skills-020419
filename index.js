// Code your solution in this file!

const hq = 42

function distanceFromHqInBlocks(pickup) {
  return Math.abs(hq - pickup); 
}

function distanceFromHqInFeet(feet) {
  return distanceFromHqInBlocks(feet)*264;
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs((start - destination)*264);
}

function calculatesFarePrice(start, destination) {
  var fare = distanceTravelledInFeet(start, destination)
  if (fare < 400 && fare < 2000) {
    return 0;
  }
  else if (fare > 400 && fare < 2000) {
    return (fare - 400)*.02;
  }
  else if (fare > 2000 && fare < 2500) {
    return 25;
  }
  else if (fare > 2500) {
    return "cannot travel that far";
  }
}