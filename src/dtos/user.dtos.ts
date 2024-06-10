// dtos used for typesafety while data transfer

import { Document } from "mongoose"

export interface user extends Document{
    id ?: string
    email : string
    refeshToken : string
    avatar : string
    password : string
    isCorrectPassword(password: string): Promise<boolean>
    generateAcessToken(): string
    generateRefreshToken(): string
}