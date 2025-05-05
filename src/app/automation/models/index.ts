export interface IndustrySubContent {
    h4: string;
    points: string[];
}

export interface IndustryContent {
    h3: string;
    p: string;
    points: IndustrySubContent[];
    icon: string;
    alt: string;
}

export interface SecurityTypes {
    title: string;
    imgSrc: string;
    imgalt: string;
    points: string[];
}

export interface SpaceHomes {
    h3: string;
    p: string;
}