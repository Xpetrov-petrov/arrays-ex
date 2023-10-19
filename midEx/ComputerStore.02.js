function computerStore(arr) {
    let priceNoTax = 0;
    let command = arr.shift();
    let tax = 0;
    let priceWhitTax = 0;

    while (command != "regular" && command != "special") {
        let price = Number(command);

        if (price <= 0) {
            console.log("Invalid price");
            command = arr.shift();
            continue;
        }
        priceNoTax += price;

        command = arr.shift();
    }
    if(priceNoTax == 0){
        console.log("Invalid price");
      }else{
        tax += 0.20 * priceNoTax;
        priceWhitTax += priceNoTax + tax;
        if(command == "special"){
            priceWhitTax *= 0.90;
          }
      }
      console.log(`Congratulations you\'ve just bought a new computer!`);
      console.log(`Price without taxes: ${priceNoTax.toFixed(2)}$`);
      console.log(`Taxes: ${tax.toFixed(2)}$`);
      console.log('------------');
      console.log(`Total price: ${priceWhitTax.toFixed(2)}`);
      
}
computerStore([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30', 'regular'
]);