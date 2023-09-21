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

// stagger-fade-in animation
export const staggerFadeInAnimation = animation(
  [
    style({ opacity: 0 }),
    stagger('.1s', animate('{{ duration }} {{ easing }}')),
  ],
  {
    params: {
      duration: '.4s',
      easing: 'ease-out',
    },
  }
);

// stagger-fade-out animation
export const staggerFadeOutAnimation = animation(
  [
    stagger(
      '.1s',
      animate('{{ duration }} {{ easing }}', style({ opacity: 0 }))
    ),
  ],
  {
    params: {
      duration: '.4s',
      easing: 'ease-in',
    },
  }
);

// stagger-fade-in-enter trigger (when entering the dom)
export const staggerFadeInEnter = trigger('staggerFadeInEnter', [
  transition(':enter', [
    query('.staggerFadeIn', [useAnimation(staggerFadeInAnimation)], {
      optional: true,
    }),
  ]),
]);

// stagger-fade-out-enter trigger (when leaving the dom)
export const staggerFadeOutEnter = trigger('staggerFadeOutEnter', [
  transition(':leave', [
    query('.staggerFadeOut', [useAnimation(staggerFadeOutAnimation)], {
      optional: true,
    }),
  ]),
]);

// stagger-fade-enter trigger (when entering/leaving the dom)
export const staggerFadeEnter = trigger('staggerFadeEnter', [
  transition(':enter', [
    query('.staggerFade', [useAnimation(staggerFadeInAnimation)], {
      optional: true,
    }),
  ]),

  transition(':leave', [
    query('.staggerFade', [useAnimation(staggerFadeOutAnimation)], {
      optional: true,
    }),
  ]),
]);

// stagger-fade-in-bind trigger (when binding to an element)
export const staggerFadeInBind = trigger('staggerFadeInBind', [
  transition('* => *', [
    query(':enter', [useAnimation(staggerFadeInAnimation)], {
      optional: true,
    }),

    query('@*', animateChild(), {
      optional: true,
    }),
  ]),
]);

// stagger-fade-out-bind trigger (when binding to an element)
export const staggerFadeOutBind = trigger('staggerFadeOutBind', [
  transition('* => *', [
    query(':leave', [useAnimation(staggerFadeOutAnimation)], {
      optional: true,
    }),
  ]),
]);

// stagger-fade-bind trigger (when binding to an element)
export const staggerFadeBind = trigger('staggerFadeBind', [
  transition('* => *', [
    query(':enter', [useAnimation(staggerFadeInAnimation)], {
      optional: true
    }),

    query(':leave', [useAnimation(staggerFadeOutAnimation)], {
      optional: true,
    }),
  ]),
]);
