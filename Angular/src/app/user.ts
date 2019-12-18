export class User {
    constructor(
        public id: number,
        public role: string,
        public name: string,
        public email: string,
        public mobileno: number,
        public password: string,
        public address: string
    ) { }
}
