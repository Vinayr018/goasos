import { Injectable } from "@angular/core";
import { v7 as uuidv4 } from 'uuid';

@Injectable()
export class IdentifierService {

    private uuid: string;

    public get identifier(): string {
        return this.uuid;
    }

    constructor() {
        this.uuid = uuidv4();
    }
}