import {
    Table,
    Column,
    Model,
    PrimaryKey,
    AutoIncrement,
    AllowNull,
    DataType,
    ForeignKey,
    HasMany,
    Unique,
    BelongsTo,
  } from 'sequelize-typescript';
  @Table({
    tableName: 'c',
    timestamps: false,
    paranoid: false,
  })
  export class C extends Model<C> {
    @AllowNull(false)
    @AutoIncrement
    @PrimaryKey
    @Column
    c_id: number;
  
    @Column
    c_name: string;
  }  