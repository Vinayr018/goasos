import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from '@angular/material/card';

const matModules: any[] = [
    MatButtonModule,
    MatIconModule,
    MatCardModule
];

@NgModule({
    imports: [matModules],
    exports: [matModules]
})
export class GoasasMatModule { }