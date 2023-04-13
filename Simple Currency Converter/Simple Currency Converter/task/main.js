const input = require('sync-input');


function oneInUsd(coin)
{
    switch (coin)
    {
        case "USD":
            return 1 / 1;

        case "JPY":
            return 1 / 113.5;

        case "EUR":
            return 1 /  0.89;

        case "RUB":
            return 1 / 74.36;

        case "GBP":
            return 1 / 0.75;
    }
}


function nameToNumber(name)
{
    switch (name)
    {
        case "USD":
            return 1;

        case "JPY":
            return 113.5;

        case "EUR":
            return 0.89;

        case "RUB":
            return 74.36;

        case "GBP":
            return 0.75;
    }
}


function getAns(from, to, amount)
{
    from = oneInUsd(from);
    to = nameToNumber(to);
    let oneToInFrom = to * from;
    let ans = oneToInFrom * amount;
    return ans.toFixed(4);
}


let coins = ["USD", "JPY", "EUR", "RUB", "GBP"];

console.log(`Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP`);
do {
    console.log(`What do you want to do?\n1-Convert currencies 2-Exit program`);
    let choice = parseInt(input());
    if (choice === 1) {
        console.log(`What do you want to convert?`);
        let from = input("From: ").toUpperCase();
        if (!coins.includes(from)) {
            console.log("Unknown currency");
            continue;
        }
        let to = input("To: ").toUpperCase();
        if (!coins.includes(to)) {
            console.log("Unknown currency");
            continue;
        }
        let amount = parseInt(input("Amount: "));

        if (amount < 1) {
            console.log("The amount cannot be less than 1");
            continue;
        } else if (isNaN(amount)) {
            console.log("The amount has to be a number");
            continue;
        }

        console.log(`Result: ${amount} ${from} equals ${getAns(from, to, amount)} ${to}`);
    } else if (choice === 2)
    {
        console.log("Have a nice day!");
        break;
    } else
    {
        console.log("Unknown input");
    }
} while (true);