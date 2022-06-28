module.exports = (category) => {
    return [
        { content: 'Crypto Wallet', value: 'crypto-wallet' },
        { content: 'Credit Card', value: 'credit-card' },
        { content: 'Debit Card', value: 'debit-card' },
        { content: 'PayPal', value: 'paypal' },
    ].map((x, i) => (x.value === category ? { ...x, selected: 'selected' } : x));
}