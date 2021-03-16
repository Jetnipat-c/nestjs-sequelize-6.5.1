import { C } from './cat.entity';

export const cProviders = [
  {
    provide: 'C_REPOSITORY',
    useValue: C,
  },
];
