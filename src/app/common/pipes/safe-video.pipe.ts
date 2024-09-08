import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
    name: 'video',
})
export class SafeVideoPipe implements PipeTransform {
    constructor(private sanitize: DomSanitizer) { }
    transform(value: any, ...args: any[]) {
        const final = `https://www.youtube-nocookie.com/embed/${value}`;
        return this.sanitize.bypassSecurityTrustResourceUrl(final);
    }
}