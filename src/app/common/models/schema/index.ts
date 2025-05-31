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



class ServiceBaseSchema {
    "@context": 'https://schema.org';
    "@type": "Service";
    serviceType: string;
    provider: HomeSchema;
    areaServed: Place[];
    hasOfferCatalog: OfferCatalog;
    description: string;
    url: string;

    constructor(name: string, desc: string, types: string[]) {
        this["@context"] = 'https://schema.org';
        this["@type"] = 'Service';
        this.serviceType = name;
        this.provider = new HomeSchema();
        this.areaServed = places;
        this.description = desc;
        this.url = window.location.href;
        this.hasOfferCatalog = {
            "@type": 'OfferCatalog',
            name: name,
            itemListElement: types.map(t => {
                return {
                    "@type": 'Offer',
                    itemOffered: {
                        "@type": 'Service',
                        name: t
                    }
                }
            })
        };
    }
}

export class HomeAutomationSchema extends ServiceBaseSchema {
    constructor() {
        super('Home Automation Solutions',
            'GOAS offers advanced Home Automation solutions including Home Security & Surveillance, Smart Gate Automation, Smart Door Locks & Video Doorbell Integration, Smart Lighting Automation, and Automated Curtain & Blinds. Serving Bengaluru, Bhubaneswar, and Cuttack.',
            [
                'Smart Lighting Automation',
                'Home Security & Surveillance',
                'Automated Curtains & Blinds',
                'Smart Gate Automation'
            ]
        );
    }
}

export class OfficeAutomationSchema extends ServiceBaseSchema {
    constructor() {
        super('Office Automation Solutions',
            'GOAS offers advanced Office Automation solutions including Timesheet automation, Access control systems, office security systems and Video Surveillance systems. Serving Bengaluru, Bhubaneswar, and Cuttack.',
            [
                'Timesheet Automation',
                'Access Control Systems',
                'Office Security Systems',
                'Video Surveillance Systems'
            ]
        );
    }
}

export class IndustryAutomationSchema extends ServiceBaseSchema {
    constructor() {
        super('Industrial Automation Systems',
            'Transform your manufacturing with our advanced industrial automation solutions. From machine automation solutions to cloud-based solutions, we deliver customized systems that boost efficiency and reduce costs—available in Bangalore, Bhubaneswar & Cuttack.',
            [
                'Fleet Management Systems',
                'Machine Automation',
                'Cold Storage Monitoring',
                'Asset Tracking & Geo-fencing',
                'Panic Button/SOS/Emergency Response Systems',
                'Power Substation Monitoring & Control',
                'Solar Farm Remote Monitoring'
            ]
        );
    }
}

export class SecurityAutomationSchema extends ServiceBaseSchema {
    constructor() {
        super('Security Cameras & Centralized Surveillance',
            'Secure your spaces with solar-powered CCTV camera systems and centralized video surveillance. Expert installation across Bangalore, Bhubaneswar and Cuttack. Trusted security for homes, offices & industries. Contact us today!',
            [
                'IP Security Cameras',
                'Solar-Powered CCTV Cameras',
                'Smart Surveillance Technology',
                'App-Controlled Surveillance',
                'Centralized Video Management',
            ]
        );
    }
}

export class SpaceAutomationSchema extends ServiceBaseSchema {
    constructor() {
        super('Space-Saving Multi-Functional Furniture',
            'Discover compact, modular, and multi-functional furniture for homes & offices in Bangalore, Bhubaneswar & Cuttack. Explore foldable beds, smart desks & innovative storage solutions. Upgrade your home today!',
            [
                'Bed with Storage and iDesk Combination',
                'Multi-Functional Bed with Storage',
                'Bed with Storage and Sofa Combination',
            ]
        );
    }
}

export class EnergyAutomationSchema extends ServiceBaseSchema {
    constructor() {
        super('Solar Energy Solutions',
            'Harness the power of solar and smart energy automation with GOAS. We offer end-to-end solar panel installation and smart energy management systems for homes, offices, and industrial sites in Bangalore, Bhubaneswar and Cuttack. Save energy, reduce costs, and go green today!',
            [
                'Solar Panel Installation'
            ]
        );
    }
}

export class SoftwareSchema extends ServiceBaseSchema {
    constructor() {
        super('Software Consulting Services',
            'Elevate your business with our expert software consulting services in Bangalore, Bhubaneswar, and Cuttack. Specialized in Banking & Financial Services, Capital Markets Solutions, and Data & AI Services.',
            [
                'Banking & Financial Services Consulting',
                'Capital Markets & Wealth Management Solutions',
                'Data & AI Services'
            ]
        );
    }
}

export type Schema = HomeSchema | ContactSchema
    | HomeAutomationSchema | OfficeAutomationSchema
    | IndustryAutomationSchema | SecurityAutomationSchema
    | SpaceAutomationSchema | EnergyAutomationSchema
    | SoftwareSchema;

interface Service {
    "@context": 'https://schema.org';
    "@type": "Service";
    serviceType: string;
    provider: HomeSchema;
    areaServed: Place[];
    hasOfferCatalog: OfferCatalog;
    description: string;
    url: string;
}

interface OfferCatalog {
    "@type": "OfferCatalog";
    name: string;
    itemListElement: Offer[];
}

interface Offer {
    "@type": "Offer";
    itemOffered: {
        "@type": "Service";
        name: string;
    };
}
