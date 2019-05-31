module.exports = function main(inputs) {
  distance = inputs["distance"];
  parkTime = inputs["parkTime"];
  return Math.round(6 + Math.min(6 * 0.8, Math.max(0, distance - 2) * 0.8) + Math.max(0, distance - 8) * 1.2 + parkTime * 0.25);
};
