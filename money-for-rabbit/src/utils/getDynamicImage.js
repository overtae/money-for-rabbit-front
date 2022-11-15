const getHours = () => {
  const now = new Date();
  const hours = now.getHours();
  return hours;
};

const getBackgroundImage = () => {
  const hours = getHours();
  // 07 ~ 16 : afternoon
  // 17 ~ 18 : dusk
  // 19 ~ 06 : night

  if (7 <= hours && hours <= 16) {
    return '/images/Background:Afternoon.jpeg';
  } else if (17 <= hours && hours <= 18) {
    return '/images/Background:Dusk.jpeg';
  } else {
    return '/images/Background:Night.jpeg';
  }
};

const rabbits = {
  0: 'Default1',
  1: 'under1000',
  2: 'under1000',
  3: 'under1000',
  4: 'Default2',
  5: 'Default2',
  6: 'over100000',
  7: 'over1000000',
  9: 'LotsOfMoney',
};

const getRabbitImage = (money) => {
  // 0 : Rabbit_NoBackground_Default1.png
  // 1000 < : Rabbit_NoBackground_under1000.png
  // 1000 ~ 100000 : Rabbit_NoBackground_Default2.png
  // 100000 ~ 1000000 : Rabbit_NoBackground_over100000.png
  // 1000000 ~ 10000000 : Rabbit_NoBackground_over1000000.png
  // 10000000 ~ : Rabbit_NoBackground_LotsOfMoney.png

  let moneyLength;

  if (money === 0) {
    moneyLength = 0;
  } else if (money >= 10000000) {
    moneyLength = 9;
  } else {
    moneyLength = money.toString().length;
  }

  const rabbit = rabbits[moneyLength];
  const imagePath = `/images/Rabbit_NoBackground_${rabbit}.png`;

  return imagePath;
};

export { getBackgroundImage, getRabbitImage };
