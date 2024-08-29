document.addEventListener("DOMContentLoaded", () => {
    const currencyList = ["USD", "EUR", "GBP", "INR", "AUD", "CAD", "SGD", "JPY", "CNY", "ZAR"];
    const fromCurrency = document.getElementById("from-currency");
    const toCurrency = document.getElementById("to-currency");
    const amountInput = document.getElementById("amount");
    const convertBtn = document.getElementById("convert-btn");
    const resultBox = document.getElementById("result");

    // Populate currency options
    currencyList.forEach(currency => {
        const option1 = document.createElement("option");
        option1.value = currency;
        option1.text = currency;
        fromCurrency.appendChild(option1);

        const option2 = document.createElement("option");
        option2.value = currency;
        option2.text = currency;
        toCurrency.appendChild(option2);
    });

    // Set default values
    fromCurrency.value = "USD";
    toCurrency.value = "INR";

    // Convert currency
    convertBtn.addEventListener("click", () => {
        const amount = parseFloat(amountInput.value);
        const from = fromCurrency.value;
        const to = toCurrency.value;

        if (isNaN(amount) || amount <= 0) {
            resultBox.textContent = "Please enter a valid amount.";
            return;
        }

        // Call the backend API or use an external API for conversion
        fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)
            .then(response => response.json())
            .then(data => {
                const rate = data.rates[to];
                const convertedAmount = (amount * rate).toFixed(2);
                resultBox.textContent = `${amount} ${from} = ${convertedAmount} ${to}`;
            })
            .catch(error => {
                console.error("Error fetching exchange rate data:", error);
                resultBox.textContent = "An error occurred while converting.";
            });
    });
});

