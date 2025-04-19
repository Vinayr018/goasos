import { Injectable } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs";
import { UserAnalyticsEvents, Views } from "../models/analytics";

declare let gtag: Function;

@Injectable()
export class AnalyticsService {
    private measurementId = 'G-R1TME9SCR8'; // Replace with your GA4 Measurement ID

    constructor(private router: Router, private helper: UserAnalyticsEvents) {
        this.trackPageViews(); // Track SPA route changes
    }

    private trackPageViews(): void {
        this.router.events
            .pipe(filter((event) => event instanceof NavigationEnd))
            .subscribe((event: NavigationEnd) => {
                gtag('config', this.measurementId, {
                    page_path: event.urlAfterRedirects,
                });
            });
    }

    public sendEvent(eventName: string, params: { [key: string]: any } = {}): void {
        gtag('event', eventName, params);
    }

    public HomeCtaEvent(feature: string): void {
        this.sendEvent(Views.HOME, {
            'cta': this.helper.Buttonclicked(Views.HOME, feature)
        });
    }
}