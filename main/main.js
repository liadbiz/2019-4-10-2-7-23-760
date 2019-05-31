module.exports = function main(inputs) {
  distance = inputs["distance"];
  parkTime = inputs["parkTime"];
  if(distance <= 2){
    return Math.round(6 + parkTime * 0.25);
  }else if(distance <= 8){
    return Math.round(6 + (distance - 2) * 0.8 + parkTime * 0.25);
  }else{
    return Math.round(6 + 6 * 0.8 + (distance - 8) * 1.2 + parkTime * 0.25);
  }
};
