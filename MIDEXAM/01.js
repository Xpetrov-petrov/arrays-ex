function burgerBus(array) {
    let countCities = Number(array.shift());
    let cityProfit = 0;
    let totalProfit = 0;

    for(let city = 1; city <= countCities; city++){
        let currentCity = array.shift();
        let income = Number(array.shift());
        let expenses = Number(array.shift());
        if(city % 3 == 0 && city % 5 != 0){
            expenses = expenses + (expenses * 0.5)
        }  
        if(city % 5 == 0){
            income = income * 0.9
        }
        cityProfit = income - expenses;
        totalProfit += cityProfit;
        console.log(`In ${currentCity} Burger Bus earned ${cityProfit.toFixed(2)} leva.`);
    }
    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);
  
}
// console.log(`In ${city} Burger Bus earned ${profit} leva.`);
// console.log(`Burger Bus total profit: ${totalProfit} leva.`);
burgerBus(["3",

    "Sofia",
    "895.67",
    "213.50",

    "Plovdiv",
    "2563.20",
    "890.26",

    "Burgas",
    "2360.55",
    "600.00"]);