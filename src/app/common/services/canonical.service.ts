import { Injectable } from "@angular/core";
import { Meta } from "@angular/platform-browser";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { filter, map } from "rxjs";

@Injectable()
export class CanonicalService {

    constructor(private router: Router,
        private activatedRoute: ActivatedRoute,
        private meta: Meta) { }

    public AddLink(): void {
        this.router.events
            .pipe(
                filter(event => event instanceof NavigationEnd),
                map(() => this.activatedRoute),
                map(route => {
                    while (route.firstChild) {
                        route = route.firstChild;
                    }
                    return route;
                }),
                filter(route => route.outlet === 'primary')
            )
            .subscribe(() => {
                this.AddCanonicalUrl(`https://goasos.com${this.router.url}`);
            });
    }

    private AddCanonicalUrl(url: string) {
        let link: HTMLLinkElement | null = document.querySelector("link[rel='canonical']");
        if (!link) {
            link = document.createElement('link');
            link.setAttribute('rel', 'canonical');
            document.head.appendChild(link);
        }
        link.setAttribute('href', url);
    }
}