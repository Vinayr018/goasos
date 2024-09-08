import { Component, Input } from '@angular/core';
import { Video } from '../../models';

@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrl: './product-gallery.component.scss'
})
export class ProductGalleryComponent {
  @Input({ required: true }) public videos!: Video[]
}
