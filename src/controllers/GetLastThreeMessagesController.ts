import { Request, Response } from 'express'
import { GetLastThreeMessagesService } from '../services/GetLastThreeMessages'

export class GetLastThreeMessagesController {
  async handle(req: Request, res: Response) {
    const services = new GetLastThreeMessagesService()

    const result = await services.execute()

    return res.json(result) 
  }
}