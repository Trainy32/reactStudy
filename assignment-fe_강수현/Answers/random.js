const get_1_or_0 = () => Math.round(Math.random());

const get_random = (n) => {
  const typeValidity = typeof n === "number"
  const rangeValidity = n > 0 && n % 1 === 0

  if (typeValidity && rangeValidity) {
    const randomNum = parseInt(require('crypto').randomBytes(n.toString().length).toString('hex'), 16)
    const rangedRandom = (randomNum*n).toString().substring(0,((randomNum*n).toString().length)-(randomNum.toString().length))*1
    for (i = rangedRandom; i <= n; i++) {
      if (get_1_or_0() || i == n) {
        return i;
        break;
      }
    }
  }
};

module.exports = get_random

for (j=0; j<100; j++) {
  console.log(get_random(100))
}