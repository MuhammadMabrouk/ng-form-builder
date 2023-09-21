import {
  trigger,
  transition,
  query,
  style,
  animate,
  animateChild,
} from '@angular/animations';

// routing-fade-in-up trigger
export const routingFadeInUp = trigger('routingFadeInUp', [
  transition('* <=> *', [
    // set default style for the parent
    style({ position: 'relative' }),

    // set default style for entering/leaving elements
    query(':enter, :leave',
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        opacity: 0,
        transform: 'translateY(100px)',
      }),
      { optional: true },
    ),

    // animate the new page in
    query(':enter',
      animate(
        '.4s ease-out',
        style({
          opacity: 1,
          transform: 'translateY(0)',
        }),
      ),
      { optional: true },
    ),

    // trigger children animations
    query('@*', animateChild(), { optional: true }),
  ]),
]);
