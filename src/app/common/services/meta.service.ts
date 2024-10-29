import { Injectable } from "@angular/core";
import { Meta } from "@angular/platform-browser";

@Injectable()
export class MetaService {

    constructor(private meta: Meta) { }

    public set Description(val: string) {
        this.UpdateTag('description', val);
    }

    public set Keywords(val: string) {
        this.UpdateTag('keywords', val);
    }

    private UpdateTag(key: string, val: string): void {
        this.meta.updateTag({ name: key, content: val })
    }
}