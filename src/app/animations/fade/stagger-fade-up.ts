import {
  trigger,
  transition,
  query,
  stagger,
  style,
  animate,
  animation,
  useAnimation,
  animateChild,
} from '@angular/animations';

// stagger-fade-in-up animation
export const staggerFadeInUpAnimation = animation(
  [
    style({
      opacity: 0,
      transform: 'translateY(30px)',
    }),
    stagger('.1s', animate('{{ duration }} {{ easing }}')),
  ],
  {
    params: {
      duration: '.4s',
      easing: 'ease-out',
    },
  }
);

// stagger-fade-out-up animation
export const staggerFadeOutUpAnimation = animation(
  [
    stagger(
      '.1s',
      animate(
        '{{ duration }} {{ easing }}',
        style({
          opacity: 0,
          transform: 'translateY(-30px)',
        })
      )
    ),
  ],
  {
    params: {
      duration: '.4s',
      easing: 'ease-in',
    },
  }
);

// stagger-fade-in-up-enter trigger (when entering the dom)
export const staggerFadeInUpEnter = trigger('staggerFadeInUpEnter', [
  transition(':enter', [
    query('.staggerFadeInUp', [useAnimation(staggerFadeInUpAnimation)], {
      optional: true,
    }),
  ]),
]);

// stagger-fade-out-up-enter trigger (when leaving the dom)
export const staggerFadeOutUpEnter = trigger('staggerFadeOutUpEnter', [
  transition(':leave', [
    query('.staggerFadeOutUp', [useAnimation(staggerFadeOutUpAnimation)], {
      optional: true,
    }),
  ]),
]);

// stagger-fade-up-enter trigger (when entering/leaving the dom)
export const staggerFadeUpEnter = trigger('staggerFadeUpEnter', [
  transition(':enter', [
    query('.staggerFadeUp', [useAnimation(staggerFadeInUpAnimation)], {
      optional: true,
    }),
  ]),

  transition(':leave', [
    query('.staggerFadeUp', [useAnimation(staggerFadeOutUpAnimation)], {
      optional: true,
    }),
  ]),
]);

// stagger-fade-in-up-bind trigger (when binding to an element)
export const staggerFadeInUpBind = trigger('staggerFadeInUpBind', [
  transition('* => *', [
    query(':enter', [useAnimation(staggerFadeInUpAnimation)], {
      optional: true,
    }),

    query('@*', animateChild(), {
      optional: true,
    }),
  ]),
]);

// stagger-fade-out-up-bind trigger (when binding to an element)
export const staggerFadeOutUpBind = trigger('staggerFadeOutUpBind', [
  transition('* => *', [
    query(':leave', [useAnimation(staggerFadeOutUpAnimation)], {
      optional: true,
    }),
  ]),
]);

// stagger-fade-up-bind trigger (when binding to an element)
export const staggerFadeUpBind = trigger('staggerFadeUpBind', [
  transition('* => *', [
    query(':enter', [useAnimation(staggerFadeInUpAnimation)], {
      optional: true,
    }),

    query(':leave', [useAnimation(staggerFadeOutUpAnimation)], {
      optional: true,
    }),
  ]),
]);
