import { APP_BASE_HREF } from "@angular/common";
import { Inject, Injectable } from "@angular/core";

@Injectable()
export class BaseLocationService {
    constructor(@Inject(APP_BASE_HREF) private base: string) {
        console.log('basehref', base);
    }
}