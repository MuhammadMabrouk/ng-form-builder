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

// stagger-fade-in-down animation
export const staggerFadeInDownAnimation = animation(
  [
    style({
      opacity: 0,
      transform: 'translateY(-30px)',
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

// stagger-fade-out-down animation
export const staggerFadeOutDownAnimation = animation(
  [
    stagger(
      '.1s',
      animate(
        '{{ duration }} {{ easing }}',
        style({
          opacity: 0,
          transform: 'translateY(30px)',
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

// stagger-fade-in-down-enter trigger (when entering the dom)
export const staggerFadeInDownEnter = trigger('staggerFadeInDownEnter', [
  transition(':enter', [
    query('.staggerFadeInDown', [useAnimation(staggerFadeInDownAnimation)], {
      optional: true,
    }),
  ]),
]);

// stagger-fade-out-down-enter trigger (when leaving the dom)
export const staggerFadeOutDownEnter = trigger('staggerFadeOutDownEnter', [
  transition(':leave', [
    query('.staggerFadeOutDown', [useAnimation(staggerFadeOutDownAnimation)], {
      optional: true,
    }),
  ]),
]);

// stagger-fade-down-enter trigger (when entering/leaving the dom)
export const staggerFadeDownEnter = trigger('staggerFadeDownEnter', [
  transition(':enter', [
    query('.staggerFadeDown', [useAnimation(staggerFadeInDownAnimation)], {
      optional: true,
    }),
  ]),

  transition(':leave', [
    query('.staggerFadeDown', [useAnimation(staggerFadeOutDownAnimation)], {
      optional: true,
    }),
  ]),
]);

// stagger-fade-in-down-bind trigger (when binding to an element)
export const staggerFadeInDownBind = trigger('staggerFadeInDownBind', [
  transition('* => *', [
    query(':enter', [useAnimation(staggerFadeInDownAnimation)], {
      optional: true,
    }),

    query('@*', animateChild(), {
      optional: true,
    }),
  ]),
]);

// stagger-fade-out-down-bind trigger (when binding to an element)
export const staggerFadeOutDownBind = trigger('staggerFadeOutDownBind', [
  transition('* => *', [
    query(':leave', [useAnimation(staggerFadeOutDownAnimation)], {
      optional: true,
    }),
  ]),
]);

// stagger-fade-down-bind trigger (when binding to an element)
export const staggerFadeDownBind = trigger('staggerFadeDownBind', [
  transition('* => *', [
    query(':enter', [useAnimation(staggerFadeInDownAnimation)], {
      optional: true,
    }),

    query(':leave', [useAnimation(staggerFadeOutDownAnimation)], {
      optional: true,
    }),
  ]),
]);
