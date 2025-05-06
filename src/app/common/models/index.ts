import { Box, Video, VideoBox } from "./box";
import { ProductVideo } from "./product-video";
import { SlideBox, slideImage } from "./slide-box";
import { SnackBarEnum, SnakBarInput } from './snack.enum';

export {
    Box, ProductVideo, Video, VideoBox, SlideBox, slideImage,
    SnackBarEnum, SnakBarInput
}

export class CustomSelectOption {
    key: string;
    value: string;

    constructor(k: string, v: string) {
        this.key = k;
        this.value = v;
    }
}