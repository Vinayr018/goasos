import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
    name: 'safevideo',
})
export class SafeVideoPipe implements PipeTransform {
    constructor(private sanitize: DomSanitizer) { }
    transform(value: any, ...args: any[]) {
        console.log('safe pipe', value);
        const final = `https://www.youtube.com/embed/${value}&autoplay=1`;
        return this.sanitize.bypassSecurityTrustResourceUrl(final);
    }
}