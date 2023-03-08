import { UserSchema } from '@monorepo/shared'
import { Request } from 'express'

declare global {
  namespace Express {
    export interface Request {
      user: UserSchema
    }
  }
}

export interface ICustomRequest<T> extends Request {
  body: T
}
