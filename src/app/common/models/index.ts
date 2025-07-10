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

export interface Interest {
    h3: string;
    p: string;
    cta: string;
    link: string;
}

export type DialogVideoLinkIndex = 1 | 2;

export class DialogVideoDetails {
    src: string;
    duration: number;
    thumbnail: string;
    alt: string;

    constructor(
        src: string,
        dur: number,
        thumbnail: string,
        alt: string) {
        this.src = src;
        this.duration = dur;
        this.thumbnail = thumbnail;
        this.alt = alt;
    }

    public ToThumbnail(): DialogVideoThumbnail {
        return {
            src: this.thumbnail,
            alt: this.alt,
            title: this.alt
        };
    }

    public static get HomeAutomation(): DialogVideoDetails {
        return new DialogVideoDetails('dEvbNL6nMfo?si=8cYUFRAKwp13Hae1',
            102, '/images/home-automation-video-thumbnail.jpg',
            'Home Automation');
    }

    public static get SpaceAutomation(): DialogVideoDetails {
        return new DialogVideoDetails('e4f_tQ-sLkE?si=RnOcEdsVH3yo0ACE',
            114, '/images/space-saving-automation-video-thumbnail.jpg',
            'Space Saving Automation');
    }

    public static get All(): DialogVideoDetails[] {
        return [
            this.HomeAutomation,
            this.SpaceAutomation
        ]
    }
}

export class VideoMap {
    public route: string;
    public video: DialogVideoDetails[];

    constructor(route: string, video: DialogVideoDetails[]) {
        this.route = route;
        this.video = video;
    }

    public static get All(): VideoMap[] {
        return [
            new VideoMap('/smart-home-automation-solutions', [DialogVideoDetails.HomeAutomation]),
            new VideoMap('/space-saving-furniture-solutions', [DialogVideoDetails.SpaceAutomation]),
            new VideoMap('/', DialogVideoDetails.All),
        ];
    }
}

export interface DialogVideoThumbnail {
    src: string;
    alt: string;
    title: string;
}