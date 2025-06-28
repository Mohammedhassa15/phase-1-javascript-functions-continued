// code your solution here
// 1. Function declaration for saturdayFun
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

// 2. Function expression for mondayWork
const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

// 3. Function that returns another function (function factory)
function wrapAdjective(wrapper = "*") {
  return function(adjective = "special") {
    return `You are ${wrapper}${adjective}${wrapper}!`;
  };
}
