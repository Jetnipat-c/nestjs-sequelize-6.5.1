import { A } from './ant.entity';

export const aProviders = [
  {
    provide: 'A_REPOSITORY',
    useValue: A,
  },
];
