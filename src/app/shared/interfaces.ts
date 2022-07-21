export interface ICustomer {
    id: number;
    name: string;
    city: string;
    orderTotal?: number; // return ? after fixing the bug
    customerSince: any;
}

export interface IOrder {
    customerId: number;
    orderItems: IOrderItem[];
}

export interface IOrderItem {
    id: number;
    productName: string;
    itemCost: number;
}