import { Request, Response } from 'express'

import StatusResponse from '../resources/responses'

class FilesController {
  index (req: Request, res: Response): void {
    StatusResponse.emptyOk(res)
  }

  show (req: Request, res: Response): void {
    StatusResponse.emptyOk(res)
  }

  store (req: Request, res: Response): void {
    StatusResponse.emptyOk(res)
  }

  update (req: Request, res: Response): void {
    StatusResponse.emptyOk(res)
  }

  destroy (req: Request, res: Response): void {
    StatusResponse.emptyOk(res)
  }
}

export default new FilesController()
