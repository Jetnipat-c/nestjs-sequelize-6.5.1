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
  tableName: 'A',
  timestamps: false,
  paranoid: false,
})
export class A extends Model<A> {
  @AllowNull(false)
  @AutoIncrement
  @PrimaryKey
  @Column
  a_id: number;

  @Column
  a_name: string;
}
