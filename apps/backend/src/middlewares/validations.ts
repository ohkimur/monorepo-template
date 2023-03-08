import { NextFunction, Request, Response } from 'express'

import { AnyZodObject, ZodEffects } from 'zod'

export const validate =
  (schema: AnyZodObject | ZodEffects<AnyZodObject>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const parsedSchema = await schema.safeParseAsync(req.body)
      if (!parsedSchema.success) {
        return res.status(400).json({ ...parsedSchema.error.format() })
      }
      return next()
    } catch (error) {
      return res.status(400).json(error)
    }
  }

export const invalidRoute = (_req: Request, res: Response) => {
  res.status(404).json({ message: 'Invalid route' })
}
