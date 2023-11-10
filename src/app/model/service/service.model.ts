export class Service {
    id?: string | undefined | null
    serviceName?: string | undefined | null
    fileName?: File | undefined
    status?: string

    constructor(file: File, serviceName: string, status: string) {
        this.fileName = file;
        this.serviceName = serviceName;
        this.status = status;
    }
}
