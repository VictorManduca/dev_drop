import { Request, Response } from 'express'

class FilesController {
  show (req: Request, res: Response): void {
    res.send('E noix manolo')
  }
}

export default new FilesController()
