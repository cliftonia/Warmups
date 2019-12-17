var friends = {
  bill: 20,
  ted: 15,
  sam: 10
};

var splitTheBill = group => {
  var groupToPay = {};
  var amoutOwed = [];

  var sum = Object.values(group).reduce(
    (previous, current) => (current += previous)
  );

  let bill = sum / Object.values(group).length;

  Object.values(group).map(friend => amoutOwed.push(friend - bill));

  groupToPay["A"] = amoutOwed[0];
  groupToPay["B"] = amoutOwed[1];
  groupToPay["C"] = amoutOwed[2];

  return groupToPay;
};

var sum = Object.values(group).reduce(
  (previous, current) => (current += previous)
);

let avg = sum / Object.values(group).length;
