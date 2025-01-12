// Default crypto coins structure (without prices)

const cryptoCoins = [
    { name: "Bitcoin", symbol: "BTC", logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png" },
    { name: "Litecoin", symbol: "LTC", logo: "https://cryptologos.cc/logos/litecoin-ltc-logo.png" },
    { name: "Ethereum", symbol: "ETH", logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png" },
    { name: "Dogecoin", symbol: "DOGE", logo: "https://cryptologos.cc/logos/dogecoin-doge-logo.png" },
    { name: "Dash", symbol: "DASH", logo: "https://cryptologos.cc/logos/dash-dash-logo.png" },
    { name: "Solana", symbol: "SOL", logo: "https://cryptologos.cc/logos/solana-sol-logo.png" },
    { name: "Polygon", symbol: "MATIC", logo: "https://cryptologos.cc/logos/polygon-matic-logo.png" }
];

// Fixed price of the article/service (in USD)
const articlePriceUSD = 2.00;

// Function to fetch live prices from CoinGecko API
async function fetchCryptoPrices() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin,dogecoin,dash,solana,matic-network&vs_currencies=usd');
        const data = await response.json();
        console.log(data)
        return {
            BTC: data.bitcoin.usd,
            ETH: data.ethereum.usd,
            LTC: data.litecoin.usd,
            DOGE: data.dogecoin.usd,
            DASH: data.dash.usd,
            SOL: data.solana.usd,
            MATIC: data['matic-network'].usd
        };
    } catch (error) {
        console.error("Error fetching crypto prices: ", error);
        return {};
    }
}

// Function to render cards with live prices and dynamic calculation
async function renderCryptoCards(containerId,articlePrice,customHandler) {
    const container = document.getElementById(containerId);
    container.innerHTML = ""; // Clear any existing content

    const prices = await fetchCryptoPrices();

    cryptoCoins.forEach(coin => {
        let priceInCoin = prices[coin.symbol] ? (articlePrice / prices[coin.symbol]).toFixed(6) : 'Loading...';

        // priceInCoin = Math.round(priceInCoin * 100) / 100;
        // Create the column div with col-8 mb-3
        const col = document.createElement('div');
        col.className = 'col-8 mb-3';

        // Create the card structure
        const card = document.createElement('div');
        card.className = 'crypto-card';
        card.setAttribute('onclick', `selectCrypto(this, '${coin.name} (${coin.symbol})', ${priceInCoin}, ${customHandler})`);

        // Card content
        card.innerHTML = `
            <img src="${coin.logo}" alt="${coin.name}">
            <div>
                <p class="crypto-name mb-0">${coin.name} (${coin.symbol})</p>
                <p class="crypto-price mb-0">$${priceInCoin}</p>
            </div>
        `;

        // Append the card to the column
        col.appendChild(card);

        // Append the column to the container
        container.appendChild(col);
    });
}

// Function to handle the click event when a user selects a crypto
function selectCrypto(cardElement, coinName, price,customHandler) {
    // Update the selected coin in the UI
    document.querySelectorAll('.crypto-card').forEach(card => {
        card.classList.remove('selected');
    });
    cardElement.classList.add('selected');
   // If a custom handler function is provided, call it with the coin data
    if (customHandler && typeof customHandler === 'function') {
        customHandler({ coinName, price });
    }
    // document.getElementById('selectedCoin').textContent = `${coinName} (${price} ${coinName.split(' ')[1]})`;
}


