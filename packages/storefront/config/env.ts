import { z } from 'zod'
import { consola } from 'consola'

function defaultsTo<T>(def: T) {
  return (ctx: { input: T; error: z.ZodError }) => {
    const { path, message } = ctx.error.errors[0]
    path.forEach(p => consola.warn(`\`${p}\`: ${message}`))

    return def
  }
}

const PublicEnvSchema = z.object({
  NODE_ENV: z.string(),
  DOMAIN: z.string().url().catch(defaultsTo('')),
}).transform(env => ({
  isDev: env.NODE_ENV === 'development',
  domain: env.DOMAIN,
}))

export const publicEnv = PublicEnvSchema.parse(process.env)
