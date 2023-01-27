import {userType} from "../models/types";
import {ObjectId} from "mongodb";
import jwt from 'jsonwebtoken'
import {settings} from "../settings";
import {expiredTokenRepository} from "../repositories/tokensRepository";

export const jwtService = {
    async createJWT(user: userType) {
        const token = jwt.sign({userId: user._id}, settings.JWT_SECRET, {expiresIn: '10s'})
        return token
    },

    async createJWTRefresh(user: userType)  {
    const newRefreshedToken = jwt.sign({userId: user._id}, settings.JWT_SECRET, {expiresIn: '20s'})
    return newRefreshedToken
    },

    async updateJWTRefresh(userId: ObjectId, refreshToken: string)  {
        await expiredTokenRepository.addTokenToRepo(userId, refreshToken)
        const newRefreshedToken = jwt.sign({userId: userId}, settings.JWT_SECRET, {expiresIn: '20s'})
        return newRefreshedToken
    },

    async getUserIdFromRefreshToken(token: string) {
        try {
            const result: any = jwt.verify(token, settings.JWT_SECRET)
            console.log(typeof result.userId)
            return result.userId
        }
        catch (error){
            return null
        }
    },

    async addTokenToRepo(userId: ObjectId, refreshToken: string){
        await expiredTokenRepository.addTokenToRepo(userId, refreshToken)
        return
    },




}