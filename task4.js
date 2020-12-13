const countTotalSalary = function(employees) {
    const salaries = Object.values(employees);
    let totalSalary = 0;

    for (const salary of salaries) {
        totalSalary+=salary;
    }
    console.log(totalSalary);
    return totalSalary; 
  };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  countTotalSalary({}); // 0
  

    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80,
    }); // 330
  

    countTotalSalary({
      kiwi: 200,
      lux: 50,
      chelsy: 150,
    }); // 400