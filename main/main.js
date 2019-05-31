module.exports = function main(inputs) {
  distance = inputs["distance"];
  parkTime = inputs["parkTime"];
  if(distance < 2){
    return Math.round(6 + parkTime * 0.25)
  }
};
