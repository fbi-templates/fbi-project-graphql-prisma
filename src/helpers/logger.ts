import * as winston from 'winston'
import { configs } from '../configs'

export const logger = winston.createLogger({
  level: configs.winston.level,
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss.SSS'
    }),
    winston.format.printf(info => `[${info.timestamp}] ${info.level}: ${info.message}`)
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: 'logs/error.log',
      level: 'error'
    }),
    new winston.transports.File({
      filename: 'logs/warn.log',
      level: 'warn'
    }),
    new winston.transports.File({
      filename: 'logs/combined.log',
      level: 'info'
    })
  ],
  exceptionHandlers: [
    new winston.transports.File({
      filename: 'logs/exceptions.log'
    })
  ]
})

export const loggerMiddleware = async (
  resolve: any,
  root: any,
  args: any,
  context: any,
  info: any
) => {
  if (root) {
    return resolve(root, args, context, info)
  }

  logger.debug(
    `Request=> ${info.operation.operation} ${info.fieldName}, Args=> ${JSON.stringify(args)}`
  )
  const timeStart = Date.now()
  const result = await resolve(root, args, context, info)

  logger.debug(`Response(${Date.now() - timeStart}ms)=> ${JSON.stringify(result)}`)
  return result
}
