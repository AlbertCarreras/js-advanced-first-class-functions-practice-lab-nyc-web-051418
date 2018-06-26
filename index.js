// Code your solution in this file!

function logDriverNames(array) {
  array.forEach(function (el) {
    console.log(el.name);
  });
};

function logDriversByHometown(array, location) {
  array.forEach(function (el) {
    if (el.hometown === location) {
    console.log(el.name);
    }
  });
};

function driversByRevenue(array) {
  const newArray = [...array];
  return newArray.sort(function (el1, el2) {
    return el1.revenue - el2.revenue;
  } );
}


function driversByName(array) {
  const newArray = [...array];
  return newArray.sort(function (el1, el2) {
    return el1.name.localeCompare(el2.name);;
  } );
}

const addRevenue = function (agg, el) {
  return agg + el.revenue;
}

function totalRevenue(array) {
  return array.reduce(addRevenue, 0);
}

function averageRevenue(array) {
  return array.reduce(addRevenue, 0)/array.length;
}
