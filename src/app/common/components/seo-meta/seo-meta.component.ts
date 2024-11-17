import { Component } from '@angular/core';

@Component({
  selector: 'app-seo-meta',
  template: `<script type="application/ld+json">
  {
    "@context": "http://schema.org",
    "@type": "product",
    "headline": "Products : Goasos",
    "author": "goasos dev team",
    "description": "Home and office automation in bangalore, bhubaneswar, cuttack and USA",
    "url": "https://goasos.com/product",
    "name":"Home and Office Automation products",
    review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": 4,
        "bestRating": 5
      },
      "author": {
        "@type": "Team",
        "name": "Goasos dev team"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 4.4,
      "reviewCount": 89
    }
  }
</script>`,
})
export class SeoMetaComponent {

}
