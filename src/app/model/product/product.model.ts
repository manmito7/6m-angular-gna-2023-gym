export class Product {
    id?: string | undefined | null
    categoryName?: string | undefined | null
    productName?: string | undefined | null
    description?: string | undefined | null
    price?: string | undefined | null
    image?: File | undefined
    status?: string

    constructor(file: File, categoryName: string,productName: string, status: string,description:string,price:string) {
        this.image = file;
        this.categoryName = categoryName;
        this.productName = productName;
        this.status = status;
        this.description=description;
        this.price=price;
    }

}
