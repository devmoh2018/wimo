export class Task {
constructor(
        public id: number,
        public driverName: string,
        public courier: string,
        public status: string,
        public deliveryDate: string,
        public fromLocation: string,
        public toLocation: string
    ){}
}
