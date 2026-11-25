type Customer = {
    id: number;
    name?: string;
};

let customer: Customer = {
    id: 1
};

console.log(customer.name?.toUpperCase());