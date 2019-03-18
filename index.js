// Code your solution in this file!
const hqBlock=42;

function distanceFromHqInBlocks(block) {
return Math.abs(block-hqBlock);
}
function distanceFromHqInFeet(feet) {
  return distanceFromHqInBlocks(feet)*264;
}
function distanceTravelledInFeet(a,b) {
  return Math.abs(a-b)*264;
}
function calculatesFarePrice(start,destination) {
  var distance = distanceTravelledInFeet(start,destination)
  if (distance >=2500) {
    return 'cannot travel that far';
  }
 else if (distance>=2000) {
    return 25;
  }
  else if (distance <=400) {
    return 0;
  }
  else {
    return (distance-400)*0.02;
  }
}