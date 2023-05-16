import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Department from './Department'

export default class Employee extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public firstName: string

  @column()
  public lastName: string

  @column()
  public empNo: string

  @column()
  public jobTitle: string

  @column()
  public departmentId: number

  @belongsTo(() => Department, {
    foreignKey: 'departmentId',
  })
  public department: BelongsTo<typeof Department>

  @column()
  public telephone: string

  @column()
  public email: string

  @column()
  public profilePicture: string | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
