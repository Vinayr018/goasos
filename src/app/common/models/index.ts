import { FormGroup } from "@angular/forms";
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

export class ContactModel {
    name: string;
    email: string;
    phone: string;
    interestedIn: string[];
    location: string[];
    message: string;
    constructor(form: any, countryCode: CustomSelectOption) {
        this.name = form.name;
        this.email = form.email;
        this.phone = this.FullFormatPhoneNumber(form.phone, countryCode);
        this.interestedIn = (form.interest as CustomSelectOption[]).map(k => k.key);
        this.location = (form.location as CustomSelectOption[]).map(k => k.key);
        this.message = form.message;
    }

    private FullFormatPhoneNumber(numb: string, code: CustomSelectOption): string {
        let isds: Record<string, string> = {
            IN: '+91',
            US: '+1'
        };
        return `${isds[code.key]} ${numb}`;
    }
}