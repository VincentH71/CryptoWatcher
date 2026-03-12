const select = document.querySelector('#cryptoselect');
const container = document.querySelector('#container');

const p = document.createElement('p');
container.appendChild(p);
p.classList.add('crypto');

let intervalId;

const cryptoBTC = () => {
  fetch('https://api.coinbase.com/v2/prices/BTC-EUR/buy')
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      p.innerHTML = `Prix : ${data.data.amount} |  Crypto : ${data.data.base} | Devise : ${data.data.currency}`;
    });
};
const cryptoETH = () => {
  fetch('https://api.coinbase.com/v2/prices/ETH-EUR/buy')
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      p.innerHTML = `Prix : ${data.data.amount} |  Crypto : ${data.data.base} | Devise : ${data.data.currency}`;
    });
};

const cryptoADA = () => {
  fetch('https://api.coinbase.com/v2/prices/ADA-EUR/buy')
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      p.innerHTML = `Prix : ${data.data.amount} |  Crypto : ${data.data.base} | Devise : ${data.data.currency}`;
    });
};

const cryptoDOT = () => {
  fetch('https://api.coinbase.com/v2/prices/DOT-EUR/buy')
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      p.innerHTML = `Prix : ${data.data.amount} |  Crypto : ${data.data.base} | Devise : ${data.data.currency}`;
    });
};

const cryptoCRO = () => {
  fetch('https://api.coinbase.com/v2/prices/CRO-EUR/buy')
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      p.innerHTML = `Prix : ${data.data.amount} |  Crypto : ${data.data.base} | Devise : ${data.data.currency}`;
    });
};

const cryptoMATIC = () => {
  fetch('https://api.coinbase.com/v2/prices/MATIC-EUR/buy')
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      p.innerHTML = `Prix : ${data.data.amount} |  Crypto : ${data.data.base} | Devise : ${data.data.currency}`;
    });
};

select.addEventListener('change', () => {
  clearInterval(intervalId);
  if (select.value === 'BTC') {
    intervalId = setInterval(cryptoBTC, 1000);
    cryptoBTC();
  } else if (select.value === 'ETH') {
    intervalId = setInterval(cryptoETH, 1000);
    cryptoETH();
  } else if (select.value === 'ADA') {
    intervalId = setInterval(cryptoADA, 1000);
    cryptoADA();
  } else if (select.value === 'DOT') {
    intervalId = setInterval(cryptoDOT, 1000);
    cryptoDOT();
  } else if (select.value === 'CRO') {
    intervalId = setInterval(cryptoCRO, 1000);
    cryptoCRO();
  } else if (select.value === 'MATIC') {
    intervalId = setInterval(cryptoMATIC, 1000);
    cryptoMATIC();
  }
});
clearInterval(cryptoBTC);
