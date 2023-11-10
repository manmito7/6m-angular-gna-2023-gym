export class Package {
    id?: string | undefined | null
    serviceName?: string | undefined | null
    packageName?: string | undefined | null
    description?: string | undefined | null
    price?: string | undefined | null
    image?: File | undefined
    status?: string

    constructor(file: File, serviceName: string,packageName: string, status: string,description:string,price:string) {
        this.image = file;
        this.serviceName = serviceName;
        this.packageName = packageName;
        this.status = status;
        this.description=description;
        this.price=price;
    }
}
