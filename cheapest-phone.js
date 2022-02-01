const phones = [
    {
        name: 'samsung s5',
        price: 45000,
        camera: 10,
        storage: 32
    },
    {
        name: 'walton m32',
        price: 15000,
        camera: 8,
        storage: 8
    },
    {
        name: 'shaomi s5',
        price: 12000,
        camera: 16,
        storage: 32
    },
    {
        name: 'oppo m32',
        price: 17000,
        camera: 32,
        storage: 8
    },
    {
        name: 'nokia s5',
        price: 8000,
        camera: 4,
        storage: 32
    },
    {
        name: 'htc m32',
        price: 25000,
        camera: 16,
        storage: 8
    }
];

let cheapest = phones[0];
for (const phone of phones) {
    // compare price only
    if (phone.price < cheapest.price) {
        cheapest = phone;
    }
}
console.log(cheapest.name);