export interface Box {
    img: string;
    alt: string;
    header: string;
    body: string;
    id: string;
}

export interface VideoBox {
    src: string;
    header: string;
    body: string;
    id: string;
    poster: string;
}

export interface Video {
    title: string;
    src: string;
    embed: boolean;
    poster: string;
}