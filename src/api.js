

export const fakeCurrencyApi = {
    fetchCurrency: () => {
        return {
            'USD': {
                value: 1,
            },
            'EUR': {
                value: 0.93,
            },
            'GBP': {
                value: 0.82,
            },
            'RUB': {
                value: 70.3375
            }
        }
    }
}