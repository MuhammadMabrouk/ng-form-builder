import {
  trigger,
  transition,
  group,
  style,
  animate,
  useAnimation,
} from '@angular/animations';
import { fadeInAnimation, fadeOutAnimation } from '../fade/fade';

// deleting fade trigger
export const deletingFade = trigger('deletingFade', [
  transition(
    ':enter',
    useAnimation(fadeInAnimation),
  ),

  transition(
    ':leave',
    group([
      style({ backgroundColor: 'red' }),
      animate('.4s'),
      useAnimation(fadeOutAnimation),
    ])
  ),
]);
