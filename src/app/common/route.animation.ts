import { trigger, transition, style, animate } from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
    transition('* <=> *', [
        style({ opacity: 0, transform: 'translateX(50%)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0%)' })),
    ]),
]);
