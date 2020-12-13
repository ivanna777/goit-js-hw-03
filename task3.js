const findBestEmployee = function(employees) {
    const quantityTasks = Object.values(employees);
    // console.log(quantityTasks);
    const allEmployees = Object.keys(employees);
    // console.log(allEmployees);

    let largestQuantityTasks = quantityTasks[0];
    let bestEmployee = allEmployees[0];

for (let i=0; i<quantityTasks.length; i+=1) {
    if (quantityTasks[i] > largestQuantityTasks) {
      largestQuantityTasks = quantityTasks[i];
      bestEmployee = allEmployees[i];
    }

  }
  // console.log(largestQuantityTasks);
  console.log(bestEmployee);
  return bestEmployee;
}


  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    }); // lorence
  
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    }); // mango
  
    findBestEmployee({
      lux: 146,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    }); // lux