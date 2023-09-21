import {
  trigger,
  transition,
  animate,
  animation,
  useAnimation,
  group,
  style,
} from '@angular/animations';
import { fadeInAnimation, fadeOutAnimation } from './fade';

// fade-in-up animation
export const fadeInUpAnimation = animation(
  group([
    style({ transform: 'translateY(30px)' }),
    animate('{{ duration }} {{ easing }}'),
    useAnimation(fadeInAnimation),
  ]),
  {
    params: {
      duration: '.4s',
      easing: 'ease-out',
    },
  }
);

// fade-out-up animation
export const fadeOutUpAnimation = animation(
  group([
    animate(
      '{{ duration }} {{ easing }}',
      style({ transform: 'translateY(-30px)' })
    ),
    useAnimation(fadeOutAnimation),
  ]),
  {
    params: {
      duration: '.4s',
      easing: 'ease-in',
    },
  }
);

// fade-in-up trigger
export const fadeInUp = trigger('fadeInUp', [
  transition(':enter', useAnimation(fadeInUpAnimation)),
]);

// fade-out-up trigger
export const fadeOutUp = trigger('fadeOutUp', [
  transition(':leave', useAnimation(fadeOutUpAnimation)),
]);

// fade-up trigger
export const fadeUp = trigger('fadeUp', [
  transition(':enter', useAnimation(fadeInUpAnimation)),
  transition(':leave', useAnimation(fadeOutUpAnimation)),
]);
