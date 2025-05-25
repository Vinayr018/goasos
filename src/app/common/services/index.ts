import { Injectable } from '@angular/core';
import { BaseLocationService } from './base-location.service';
import { IdentifierService } from './identifier.service';
export { BaseLocationService, IdentifierService }

@Injectable()
export class HelperService {
    public GetFileName(text: string): string {
        return text.split(' ') // split it at spaces
            .map(t => t.toLowerCase().replaceAll('/','')) // make it all lowercase
            .reduce((prev: string, current: string) =>
                !!prev ? `${prev}-${current}` : `${current}`, ''); // combine all with '-'
    }
}