import {
  trigger,
  transition,
  style,
  animate,
  animation,
  useAnimation,
} from '@angular/animations';

// slide-in-left animation
export const slideInLeftAnimation = animation(
  [
    style({
      opacity: '0',
      transform: 'translateX(100%)',
    }),
    animate('{{ duration }} {{ easing }}'),
  ],
  {
    params: {
      duration: '.4s',
      easing: 'ease-out',
    },
  }
);

// slide-out-left animation
export const slideOutLeftAnimation = animation(
  animate(
    '{{ duration }} {{ easing }}',
    style({
      opacity: '0',
      transform: 'translateX(-100%)',
    })
  ),
  {
    params: {
      duration: '.4s',
      easing: 'ease-in',
    },
  }
);

// slide-in-left trigger
export const slideInLeft = trigger('slideInLeft', [
  transition(':enter', useAnimation(slideInLeftAnimation)),
]);

// slide-out-left trigger
export const slideOutLeft = trigger('slideOutLeft', [
  transition(':leave', useAnimation(slideOutLeftAnimation)),
]);

// slide-left trigger
export const slideLeft = trigger('slideLeft', [
  transition(':enter', useAnimation(slideInLeftAnimation)),
  transition(':leave', useAnimation(slideOutLeftAnimation)),
]);
