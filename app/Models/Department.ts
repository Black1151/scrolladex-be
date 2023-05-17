import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Department extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public departmentName: string

  @column()
  public addressLineOne: string

  @column()
  public addressLineTwo: string

  @column()
  public town: string

  @column()
  public county: string

  @column()
  public postcode: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
