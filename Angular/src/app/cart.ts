export class Cart {
    constructor(
        public cartId: number,
        public id: number,
        public email: string,
        public productId: number,
        public productName: string,
        public productPrice: number,
        public productCategory: string,
        public productDescription: string,
        public productQuantity: number
    ) { }
}
