# cigalpay-crypto-card

The `cigalpay-crypto-card` for **CigalPay** is a lightweight, CDN-hosted HTML, CSS, and JavaScript library designed for easy integration of cryptocurrency selection cards into payment interfaces. It allows users to choose from various cryptocurrencies in a visually appealing and user-friendly way.

## **Key Features:**

- 📦 **Lightweight:** Minimal CSS and JavaScript for fast performance.
- 🎨 **Beautiful Design:** Bootstrap 4 styled cards with logos, coin names, and prices.
- 🔗 **CDN Integration:** Simple to include via a single CDN link.
- 🪙 **Crypto Selection:** Interactive cards for selecting cryptocurrencies.
- 📱 **Responsive:** Works seamlessly on all screen sizes.

### **Use Case for CigalPay:**

- Selectable cryptocurrency cards for payment gateways.
- Designed for seamless integration into the **CigalPay** payment platform.
- Provides a professional UI for crypto-based transactions.

---

## Supported Cryptocurrencies

- **Bitcoin (BTC)**
- **Ethereum (ETH)**
- **Litecoin (LTC)**
- **Dogecoin (DOGE)**
- **Dash (DASH)**
- **Solana (SOL)**
- **Polygon (MATIC)**

---

## How to Integrate

### Step 1: Add the Library to Your Project

You can include the `cigalpay-crypto-card` in your project either by linking directly to the CDN-hosted version or by downloading the files and hosting them yourself.

#### **Option 1: Using CDN**

Simply include the following links in your HTML file.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/cigalpay/cigalpay-crypto-card/css/crypto-card.css">
<script src="https://cdn.jsdelivr.net/gh/cigalpay/cigalpay-crypto-card/js/crypto-card.js" defer></script>
```

#### **Option 2: Download and Host Locally**

1. Download the repository and extract the files to your project directory.
2. Link the `css` and `js` files as shown below:

```html
<link rel="stylesheet" href="path/to/cigalpay-crypto-card/css/crypto-card.css">
<script src="path/to/cigalpay-crypto-card/js/crypto-card.js" defer></script>
```

### Step 2: Add the HTML Structure

To render the cryptocurrency selection cards, use the following HTML structure in your page:

```html
<div class="container mt-5">
    <h2 class="mb-4 text-center font-weight-bold">Select a Cryptocurrency for Payment</h2>
    <div class="row justify-content-center" id="crypto-container"></div>

    <p class="mt-4 text-center fs-5">Selected Coin: <strong id="selectedCoin">None</strong></p>
</div>
```

The `id="crypto-container"` is where the cards will be dynamically rendered.

### Step 3: Customize and Render Cards

Add the following JavaScript to render the cards dynamically and handle the user's selection. You can also provide a custom handler function that will be called when a coin is selected.

```html
<script>
    // Custom handler function that will be called when a user selects a coin
    function customCoinSelectedHandler(data) {
        alert(`You selected ${data.coinName} with price: $${data.price}`);
        // Implement any custom logic you need here
    }

    // Render the crypto cards and pass the custom handler function
    document.addEventListener("DOMContentLoaded", function() {
        renderCryptoCards('crypto-container',5,customCoinSelectedHandler);
    });
</script>
```

### Step 4: Explanation of the Code

1. **HTML Structure**
   - The `crypto-container` `div` will hold the rendered cryptocurrency cards.
   - The `<strong id="selectedCoin">None</strong>` element will display the name of the selected cryptocurrency.

2. **Dynamic Price Fetching**
   - The `renderCryptoCards` function fetches live cryptocurrency prices from the CoinGecko API and renders the cards with the updated prices.
   - The prices are dynamically calculated based on the article price (set to `$2` by default) and the current price of the selected coin.

3. **Custom Handler**
   - The `customCoinSelectedHandler` function is a callback that is triggered when a user clicks on a card. It provides the `coinName` and `price` of the selected coin as an object, allowing you to implement your custom logic (e.g., updating your payment gateway or processing the payment).

4. **Coins Supported**
   - The library supports **Bitcoin (BTC)**, **Ethereum (ETH)**, **Litecoin (LTC)**, **Dogecoin (DOGE)**, **Dash (DASH)**, **Solana (SOL)**, and **Polygon (MATIC)**.
   - You can modify the list of supported coins by editing the `cryptoCoins` array in the JavaScript file.

---

## API Reference

### `fetchCryptoPrices()`

- **Description**: Fetches live prices from CoinGecko API for supported cryptocurrencies.
- **Returns**: An object containing the prices for each cryptocurrency (BTC, ETH, LTC, DOGE, DASH, SOL, MATIC) in USD.

### `renderCryptoCards(containerId, customHandler)`

- **Description**: Renders the cryptocurrency cards inside a container element.
- **Parameters**:
  - `containerId`: The ID of the container element where the cards will be rendered.
  - `customHandler`: A custom function that will be called when a user selects a cryptocurrency. This function will receive the `coinName` and `price` as parameters.
- **Example Usage**:

  ```javascript
  renderCryptoCards('crypto-container',5,customCoinSelectedHandler);
  ```

### `selectCrypto(cardElement, coinName, price, customHandler)`

- **Description**: Handles the selection of a cryptocurrency card and updates the selected coin in the UI.
- **Parameters**:
  - `cardElement`: The card element that was clicked.
  - `coinName`: The name of the selected cryptocurrency.
  - `price`: The price of the selected cryptocurrency.
  - `customHandler`: The custom handler function to execute when the card is selected.

---

## Example of Full Integration

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CigalPay Crypto Card</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/cigalpay/cigalpay-crypto-card/css/crypto-card.css">
    <script src="https://cdn.jsdelivr.net/gh/cigalpay/cigalpay-crypto-card/js/crypto-card.js" defer></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">
</head>
<body>
    <div class="container mt-5">
        <h2 class="mb-4 text-center font-weight-bold">Select a Cryptocurrency for Payment</h2>
        <div class="row justify-content-center" id="crypto-container"></div>

        <p class="mt-4 text-center fs-5">Selected Coin: <strong id="selectedCoin">None</strong></p>
    </div>

    <script>
        function customCoinSelectedHandler(data) {
            alert(`You selected ${data.coinName} with price: $${data.price}`);
        }

        document.addEventListener("DOMContentLoaded", function() {
            renderCryptoCards('crypto-container',5,customCoinSelectedHandler);
        });
    </script>
</body>
</html>
```

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests for improvements.

---
