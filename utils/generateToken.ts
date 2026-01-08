import crypto from 'crypto'

export const generateToken = (): string => {
    return crypto.randomBytes(30).toString('hex')
}