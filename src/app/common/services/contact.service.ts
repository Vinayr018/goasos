import { inject, Injectable } from "@angular/core";
import { ContactForm } from "../../main/models";
import { HttpClient } from "@angular/common/http";
import { IdentifierService } from ".";
import { Observer } from "rxjs";
import { MatSnackBar } from "@angular/material/snack-bar";
import { SuccessSnackComponent } from "../components";
import { ContactModel, SnackBarEnum } from "../models";

@Injectable({
    providedIn:'root'
})
export class ContactService {

    constructor(private client: HttpClient, private snack: MatSnackBar) { }

    public SendEmail(form: ContactForm): void {
        this.client.post('/api/contactapi.php', form)
            .subscribe({
                next: (d) => this.ShowDialog(SnackBarEnum.SUCCESS, 'Query sent!!!'),
                error: (e) => this.ShowDialog(SnackBarEnum.ERROR, ''),
                complete: () => this.ShowDialog(SnackBarEnum.SUCCESS, 'Complete')
            });
    }

    public SendEmailNew(form: ContactModel): void {
        this.client.post('/api/contactapi.php', form)
            .subscribe({
                next: (d) => this.ShowDialog(SnackBarEnum.SUCCESS, 'Query sent!!!'),
                error: (e) => this.ShowDialog(SnackBarEnum.ERROR, undefined),
                complete: () => this.ShowDialog(SnackBarEnum.SUCCESS, 'Complete')
            });
    }

    private ShowDialog(type: SnackBarEnum, message: string | undefined) {
        this.snack.openFromComponent(SuccessSnackComponent, {
            horizontalPosition: 'end',
            verticalPosition: 'top',
            panelClass: 'goasos',
            duration: 5000,
            data: {
                type: type,
                message: message
            }
        });
    }
}