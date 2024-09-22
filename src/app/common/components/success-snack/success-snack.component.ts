import { Component, Inject } from '@angular/core';
import { SnackBarEnum, SnakBarInput } from '../../models';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-success-snack',
  templateUrl: './success-snack.component.html',
  styleUrl: './success-snack.component.scss'
})
export class SuccessSnackComponent {
  private msg: string;

  public type: SnackBarEnum;

  public get message(): string {
    return !!this.msg ?
      this.msg :
      (this.type === SnackBarEnum.SUCCESS ?
        'Success!!' : 'Something went wrong, please try again later');
  }

  constructor(@Inject(MAT_SNACK_BAR_DATA) private data: SnakBarInput) {
    this.msg = data.message;
    this.type = data.type;
  }
}
