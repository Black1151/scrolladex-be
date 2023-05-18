import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Employee from 'App/Models/Employee'

export default class EmployeesController {
  public async index ({ response }: HttpContextContract) {
    const employees = await Employee.query().preload('department')
    return response.json(employees)
  }

  public async store ({ request, response }: HttpContextContract) {
    const employeeData = request.only(['title', 'first_name', 'last_name', 'emp_no', 'job_title', 'department_id', 'telephone', 'email', 'profile_picture'])
    const employee = await Employee.create(employeeData)
    return response.json(employee)
  }

  public async show ({ params, response }: HttpContextContract) {
    const employee = await Employee.query().where('id', params.id).preload('department').first()
    return response.json(employee)
  }

  public async update ({ params, request, response }: HttpContextContract) {
    const employeeData = request.only(['title', 'first_name', 'last_name', 'emp_no', 'job_title', 'department_id', 'telephone', 'email', 'profile_picture'])
    const employee = await Employee.find(params.id)
    if (employee) {
      employee.merge(employeeData)
      await employee.save()
    }
    return response.json(employee)
  }

  public async destroy ({ params, response }: HttpContextContract) {
    const employee = await Employee.find(params.id)
    if (employee) {
      await employee.delete()
    }
    return response.json(employee)
  }
}
