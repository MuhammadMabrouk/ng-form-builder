import {
  trigger,
  transition,
  style,
  animate,
  animation,
  useAnimation,
} from '@angular/animations';

// fade-in animation
export const fadeInAnimation = animation(
  [
    style({ opacity: 0 }),
    animate('{{ duration }} {{ easing }}')
  ],
  {
    params: {
      duration: '.4s',
      easing: 'ease-out',
    },
  }
);

// fade-out animation
export const fadeOutAnimation = animation(
  animate('{{ duration }} {{ easing }}', style({ opacity: 0 })),
  {
    params: {
      duration: '.4s',
      easing: 'ease-in',
    },
  }
);

// fade-in trigger
export const fadeIn = trigger('fadeIn', [
  transition(':enter', useAnimation(fadeInAnimation)),
]);

// fade-out trigger
export const fadeOut = trigger('fadeOut', [
  transition(':leave', useAnimation(fadeOutAnimation)),
]);

// fade trigger
export const fade = trigger('fade', [
  transition(':enter', useAnimation(fadeInAnimation)),
  transition(':leave', useAnimation(fadeOutAnimation)),
]);
