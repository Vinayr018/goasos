import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';

const matModules: any[] = [
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatMenuModule,
    MatBottomSheetModule,
    MatListModule
];

@NgModule({
    imports: [matModules],
    exports: [matModules]
})
export class GoasasMatModule { }