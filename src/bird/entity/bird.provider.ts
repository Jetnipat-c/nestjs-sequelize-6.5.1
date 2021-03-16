import { B } from './bird.entity';

export const bProviders = [
  {
    provide: 'B_REPOSITORY',
    useValue: B,
  },
];
