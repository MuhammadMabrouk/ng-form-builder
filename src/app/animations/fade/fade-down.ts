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

// fade-in-down animation
export const fadeInDownAnimation = animation(
  group([
    style({ transform: 'translateY(-30px)' }),
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

// fade-out-down animation
export const fadeOutDownAnimation = animation(
  group([
    animate(
      '{{ duration }} {{ easing }}',
      style({ transform: 'translateY(30px)' })
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

// fade-in-down trigger
export const fadeInDown = trigger('fadeInDown', [
  transition(':enter', useAnimation(fadeInDownAnimation)),
]);

// fade-out-down trigger
export const fadeOutDown = trigger('fadeOutDown', [
  transition(':leave', useAnimation(fadeOutDownAnimation)),
]);

// fade-down trigger
export const fadeDown = trigger('fadeDown', [
  transition(':enter', useAnimation(fadeInDownAnimation)),
  transition(':leave', useAnimation(fadeOutDownAnimation)),
]);
