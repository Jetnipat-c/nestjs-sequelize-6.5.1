import { Sequelize } from 'sequelize-typescript';
import { A } from 'src/ant/entity/ant.entity';
import { B } from 'src/bird/entity/bird.entity';
import { C } from 'src/cat/entity/cat.entity';
import { Config } from 'src/config/config';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: Config.database.host,
        port: Config.database.port,
        username: Config.database.username,
        password: Config.database.password,
        database: Config.database.database,
        timezone: '+07:00',
      });
      sequelize.addModels([A, B, C]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
