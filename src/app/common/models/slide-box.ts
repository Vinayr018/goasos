export interface SlideBox {
    header: string;
    body: string;
    imgs: slideImage[];
}

export interface slideImage {
    src: string;
    alt: string;
}