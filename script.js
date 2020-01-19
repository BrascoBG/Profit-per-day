function profitIvan(){
  let days = document.getElementById('days').value;
  let profit = document.getElementById('money').value;
  let monthSalary = days * profit;
  let yearSalaryBonus = (monthSalary * 12) + (monthSalary * 2.5);
  let usdBgn = document.getElementById('exchange').value; 
  let taxes = yearSalaryBonus * 0.25;
  let salaryNetUsd = yearSalaryBonus - taxes;
  let salaryNetBgn = salaryNetUsd * usdBgn;
  

  document.getElementById('demo').style.display = "block";
  document.getElementById('demo').innerHTML = 'You make average ' + (salaryNetBgn / 365).toFixed(2) + ' Leva per day!';
}

