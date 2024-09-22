export class ContactForm {
    public phoneNumber: string;
    public email: string;
    public category: string;
    public query: string;
    public id: string;

    constructor({ category, email,
        phone, query }: any, id: string) {
        this.id = id;
        this.phoneNumber = phone;
        this.email = email;
        this.query = query;
        const raw: string = category.reduce((a: number, b: number) => `${a}${b},`, '');
        this.category = raw.substring(0, raw.length - 1);
    }
}