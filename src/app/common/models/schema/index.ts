interface PostalAddress {
    "@type": "PostalAddress";
    streetAddress: string;
    addressLocality: 'Bengaluru' | 'Bhubaneswar' | 'Cuttack';
    addressRegion: 'Karnataka' | 'Odisha';
    postalCode: '560008' | '751019' | '753014';
    addressCountry: 'IN';
}

interface ContactPoint {
    "@type": "ContactPoint";
    telephone: '+918249003143' | '+919845812673';
    contactType: 'Customer Support';
    areaServed: 'IN';
    availableLanguage: ['English', 'Hindi', 'Kannada'] | ['English', 'Hindi', 'Odia'];
    name: 'Bengaluru Office' | 'Bhubaneswar Office' | 'Cuttack Office';
}

interface Place {
    "@type": "Place";
    name: string;
}

const contactPoints: ContactPoint[] = [
    {
        "@type": 'ContactPoint',
        telephone: '+919845812673',
        contactType: 'Customer Support',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi', 'Kannada'],
        name: 'Bengaluru Office'
    },
    {
        "@type": 'ContactPoint',
        telephone: '+919845812673',
        contactType: 'Customer Support',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi', 'Odia'],
        name: 'Bhubaneswar Office'
    },
    {
        "@type": 'ContactPoint',
        telephone: '+919845812673',
        contactType: 'Customer Support',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi', 'Odia'],
        name: 'Cuttack Office'
    }
];

const places: Place[] = [
    { "@type": 'Place', name: 'Bengaluru, Karnataka, India' },
    { "@type": 'Place', name: 'Bhubaneswar, Odisha, India' },
    { "@type": 'Place', name: 'Cuttack, Odisha, India' }
];

const placeAddresses: PostalAddress[] = [
    {
        "@type": 'PostalAddress',
        streetAddress: 'Ashiana Garden, 103 Plot-56/2, Doopanahalli, Indiranagar',
        addressLocality: 'Bengaluru',
        addressRegion: 'Karnataka',
        addressCountry: 'IN',
        postalCode: '560008'
    },
    {
        "@type": 'PostalAddress',
        streetAddress: 'A/4, 282, Kalyani Nagar, Patrapada',
        addressLocality: 'Bhubaneswar',
        addressRegion: 'Odisha',
        addressCountry: 'IN',
        postalCode: '751019'
    },
    {
        "@type": 'PostalAddress',
        streetAddress: 'Plot:437/C, Sector - 6, Markat Nagar',
        addressLocality: 'Cuttack',
        addressRegion: 'Odisha',
        addressCountry: 'IN',
        postalCode: '753014'
    }
];

const rootUrl = `${window.location.protocol}//${window.location.host}`;

export class HomeSchema {
    "@context": 'https://schema.org';
    "@type": "Organization";
    name: string;
    alternateName: 'GOAS';
    url: string;
    logo: string;
    description: string;
    sameAs: string[];
    areaServed: Place[];
    address: PostalAddress[];

    constructor() {
        this["@context"] = 'https://schema.org';
        this["@type"] = 'Organization';
        this.name = 'Generation Of Automation Solutions';
        this.alternateName = 'GOAS';
        this.url = rootUrl;
        this.logo = `${rootUrl}/images/logo.jpg`;
        this.description = 'At GOAS, we deliver end-to-end automation solutions for homes, offices, industries, and security systems including CCTV surveillance—available in Bangalore, Bhubaneswar & Cuttack.';
        this.sameAs = [];//TODO: get back with the fb,insta, linkedIn youtube links
        this.areaServed = places;
        this.address = placeAddresses;
    }
}

export class ContactSchema {
    "@context": 'https://schema.org';
    "@type": "ContactPage";
    name: string;
    url: string;
    contactPoint: ContactPoint[];
    address: PostalAddress[];

    constructor() {
        this['@context'] = 'https://schema.org';
        this['@type'] = 'ContactPage';
        this.name = 'Contact Us - Generation Of Automation Solutions'
        this.url = `${rootUrl}/contact-us`;
        this.contactPoint = contactPoints;
        this.address = placeAddresses;
    }
}

export type Schema = HomeSchema | ContactSchema;

export interface Service {
    "@context"?: string;
    "@type": "Service";
    serviceType: string;
    provider: HomeSchema;
    areaServed: Place[];
    hasOfferCatalog: OfferCatalog;
    description: string;
    url: string;
}

export interface OfferCatalog {
    "@type": "OfferCatalog";
    name: string;
    itemListElement: Offer[];
}

export interface Offer {
    "@type": "Offer";
    itemOffered: {
        "@type": "Service";
        name: string;
    };
}
