import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Injectable()
export class GoasosTitleService {
    constructor(private title: Title) { }

    public set UpdateTitle(val: string) {
        this.title.setTitle(`${val} : Goasos`);
    }
}