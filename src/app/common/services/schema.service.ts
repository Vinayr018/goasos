import { Inject, Injectable } from "@angular/core";
import { Schema } from '../models/schema';
import { DOCUMENT } from "@angular/common";

@Injectable()
export class SchemaService {

    private script: HTMLScriptElement | undefined;

    constructor(@Inject(DOCUMENT) private doc: Document) { }

    public UpdateSchema(schema: Schema): void {
        this.script = this.doc.createElement('script');
        this.script.type = 'application/ld+json';
        this.script.text = JSON.stringify(schema);
        this.doc.head.appendChild(this.script);
    }

    public RemoveSchema(): void {
        if (!this.script) return;
        this.doc.head.removeChild(this.script);
    }
}
