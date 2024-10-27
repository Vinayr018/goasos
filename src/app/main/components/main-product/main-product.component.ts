import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-main-product',
  templateUrl: './main-product.component.html',
  styleUrl: './main-product.component.scss'
})
export class MainProductComponent {

  constructor(private meta: Meta, private title: Title) {
    title.setTitle('Products : Goasos');
    meta.updateTag({ name: 'description', content: 'home automation, office building automation and software solutions in indira nagar bangalore, bhubaneswar, cuttack and USA' });
    meta.updateTag({ name: 'keywords', content: 'keyword1, keyword2, keyword3' });
  }

}
