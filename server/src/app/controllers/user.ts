import { Request, Response } from 'express'

import Usuario from '../resources/services/user'
import StatusResponse from '../resources/utils/responses'

class UserController {
  index(req: Request, res: Response): void {
    StatusResponse.emptyOk(res)
  }

  show(req: Request, res: Response): void {
    StatusResponse.emptyOk(res)
  }

  store(req: Request, res: Response): Promise<any> {
    const body = {
      ...req.body
    }

    return Usuario.createUser(body).then((createdUser) => {
      console.info({ createdUser })
      return StatusResponse.emptyOk(res)
    })
  }

  update(req: Request, res: Response): void {
    StatusResponse.emptyOk(res)
  }

  destroy(req: Request, res: Response): void {
    StatusResponse.emptyOk(res)
  }
}

export default new UserController()
