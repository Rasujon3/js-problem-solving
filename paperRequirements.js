function paperRequirements(
  firstBookQuantity,
  secondBookQuantity,
  thirdBookQuantity
) {
  let firstBookPage = 100;
  let secondBookPage = 200;
  let thirdBookPage = 300;
  let totalBookPages = 0;

  let updatedFirstBookPages = firstBookPage * firstBookQuantity;
  let updatedSecondBookPages = secondBookPage * secondBookQuantity;
  let updatedThirdBookPages = thirdBookPage * thirdBookQuantity;
  totalBookPages = updatedFirstBookPages + updatedSecondBookPages + updatedThirdBookPages;
  return totalBookPages;
}

const result = paperRequirements(2,2,2);
console.log(result);