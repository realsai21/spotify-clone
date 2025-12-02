let choice = prompt("Enter the Products you wanna buy without gaps or comma");
let numchoice = prompt("Enter the num of Products you wanna buy with comma");
let price = prompt("Enter the price of Products you wanna buy without gaps or comma");

// let objectarr = {}
let objectarr = choice.split(",");
let numchoicearr = numchoice.split(",");
let pricearr = price.split(",");

function calculatetotal(total) {

    for (let i = 0; i < total.length; i++) {
        totalcost = 0;
        totalcost = totalcost + numchoicearr[i]*pricearr[i]
    }

    console.log("Total price of your products are", totalcost);
}

calculatetotal(objectarr);
