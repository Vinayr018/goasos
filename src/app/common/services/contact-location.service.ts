import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ContactLocationService {
    public PopulateContactLocation(): string {
        return `${window.location.pathname}#contact-section`
    }
}