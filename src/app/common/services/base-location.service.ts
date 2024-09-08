import { APP_BASE_HREF } from "@angular/common";
import { Inject, Injectable } from "@angular/core";

@Injectable()
export class BaseLocationService {
    constructor(@Inject(APP_BASE_HREF) private base: string) {
    }

    public AppendPath(path: string): string {
        if (this.base !== '/') {
            return path.startsWith('/') ? `${this.base}${this.removeSlash(path)}`
                : `${this.base}${path}`;
        }
        return path;
    }

    private removeSlash(url: string): string {
        return url.substring(1);
    }
}