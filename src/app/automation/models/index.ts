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