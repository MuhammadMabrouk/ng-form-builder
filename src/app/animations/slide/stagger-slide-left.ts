import {
  trigger,
  transition,
  query,
  stagger,
  style,
  animate,
  animation,
  useAnimation,
} from '@angular/animations';

// stagger-slide-in-left animation
export const staggerSlideInLeftAnimation = animation(
  [
    style({
      opacity: '0',
      transform: 'translateX(100%)',
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

// stagger-slide-out-left animation
export const staggerSlideOutLeftAnimation = animation(
  [
    stagger(
      '.1s',
      animate(
        '{{ duration }} {{ easing }}',
        style({
          opacity: '0',
          transform: 'translateX(-100%)',
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

// stagger-slide-left-enter trigger (when entering/leaving the dom)
export const staggerSlideLeftEnter = trigger('staggerSlideLeftEnter', [
  transition(':enter', [
    query('.staggerSlideLeft', [useAnimation(staggerSlideInLeftAnimation)], {
      optional: true,
    }),
  ]),

  transition(':leave', [
    query('.staggerSlideLeft', [useAnimation(staggerSlideOutLeftAnimation)], {
      optional: true,
    }),
  ]),
]);

// stagger-slide-left-bind trigger (when binding to an element)
export const staggerSlideLeftBind = trigger('staggerSlideLeftBind', [
  transition('* => *', [
    query(':enter', [useAnimation(staggerSlideInLeftAnimation)], {
      optional: true,
    }),

    query(':leave', [useAnimation(staggerSlideOutLeftAnimation)], {
      optional: true,
    }),
  ]),
]);
