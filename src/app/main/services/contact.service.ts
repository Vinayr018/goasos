import { inject, Injectable } from "@angular/core";
import { ContactForm } from "../models";
import { HttpClient } from "@angular/common/http";
import { IdentifierService } from "../../common/services";
import { Observer } from "rxjs";
import { MatSnackBar } from "@angular/material/snack-bar";
import { SuccessSnackComponent } from "../../common/components";
import { SnackBarEnum } from "../../common/models";

@Injectable()
export class ContactService {

    constructor(private client: HttpClient, private snack: MatSnackBar) { }

    public SendEmail(form: ContactForm): void {
        this.client.post('/api/contactapi.php', form)
            .subscribe({
                next: (d) => {
                    console.log('success', d);
                    this.snack.openFromComponent(SuccessSnackComponent, {
                        horizontalPosition: 'end',
                        verticalPosition: 'top',
                        panelClass: 'goasos',
                        duration: 5000,
                        data: {
                            type: SnackBarEnum.SUCCESS,
                            message: 'success'
                        }
                    });
                },
                error: (e) => {
                    this.snack.openFromComponent(SuccessSnackComponent, {
                        horizontalPosition: 'end',
                        verticalPosition: 'top',
                        panelClass: 'goasos',
                        duration: 5000,
                        data: {
                            type: SnackBarEnum.ERROR,
                            message: undefined
                        }
                    });
                },
                complete: () => {
                    console.log('complete');
                    this.snack.openFromComponent(SuccessSnackComponent, {
                        horizontalPosition: 'end',
                        verticalPosition: 'top',
                        panelClass: 'goasos',
                        duration: 5000,
                        data: {
                            type: SnackBarEnum.SUCCESS,
                            message: 'complete'
                        }
                    });
                }
            });
    }

}