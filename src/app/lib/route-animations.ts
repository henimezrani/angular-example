import {animate, query, style, transition, trigger,} from '@angular/animations';


export const fader =
  trigger('routeAnimations', [
    transition('* => *', [
      query(
        ':enter',
        [style({ opacity: 0 })],
        { optional: true }
      ),
      query(
        ':leave',
        [style({ opacity: 1 }), animate('300ms ease', style({ opacity: 0 }))],
        { optional: true }
      ),
      query(
        ':enter',
        [style({ opacity: 0 }), animate('300ms ease', style({ opacity: 1 }))],
        { optional: true }
      )
    ])
  ]);

