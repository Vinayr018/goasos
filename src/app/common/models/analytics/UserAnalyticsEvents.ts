import { Injectable } from "@angular/core";
import { Views } from "./Views";

@Injectable()
export class UserAnalyticsEvents {
    private BUTTON_CLICKED: string = '[view]_[feature]_button_clicked';

    public Buttonclicked(currentView: Views, feature: string): string {
        return this.BUTTON_CLICKED
            .replace('[view]', currentView)
            .replace('[feature]', feature);
    }
}
