export class Book {

    sku : string | undefined;
    name!: string;
    description!: string;
    unitPrice!: number;
    imageUrl!: string;;
    active!: boolean;
    unitsInStock!: number;
    createOn!: Date; 
    updateOn!: Date;
}
