import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-seo-meta',
  template: ``,
})
export class SeoMetaComponent implements OnInit, OnDestroy {

  private script: any = null;

  constructor(@Inject(DOCUMENT) private doc: Document,
    private render: Renderer2) { }

  ngOnDestroy(): void {
    this.render.removeChild(this.doc.head, this.script);
  }

  ngOnInit(): void {
    this.script = this.render.createElement('script');
    this.script.type = `application/ld+json`;
    this.script.text = `
    {
      "@context": "http://schema.org",
      "@type": "product",
      "headline": "Products : Goasos",
      "author": "goasos dev team",
      "description": "Home and office automation in bangalore, bhubaneswar, cuttack and USA",
      "url": "https://goasos.com/product",
      "name":"Home and Office Automation products",
      "review": {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 4,
          "bestRating": 5
        },
        "author": {
          "@type": "Person",
          "name": "Goasos dev team"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": 4.4,
        "reviewCount": 89
      }
    }
    `;

    this.render.appendChild(this.doc.head, this.script);
  }
}
