export interface IndustrySubContent {
    h4: string;
    points: string[];
}

export interface IndustryContent {
    h3: string;
    p: string;
    points: IndustrySubContent[];
}

export interface SecurityTypes {
    title: string;
    points: string[];
}

export interface SpaceHomes {
    h3: string;
    p: string;
}