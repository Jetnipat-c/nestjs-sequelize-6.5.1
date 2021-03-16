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
    tableName: 'b',
    timestamps: false,
    paranoid: false,
  })
  export class B extends Model<B> {
    @AllowNull(false)
    @AutoIncrement
    @PrimaryKey
    @Column
    b_id: number;
  
    @Column
    b_name: string;
  }  