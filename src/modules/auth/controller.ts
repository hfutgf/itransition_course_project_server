import { Users } from '@prisma/client';
import { Request, Response } from 'express';
import { AuthQuery } from './query.js';
import Joi, { ref } from 'joi';

export class AuthController {
    REFRESH_TOKEN = 'refreshToken';
    authQuery: AuthQuery;
    constructor() {
        this.authQuery = new AuthQuery();
    }
    register = async (req: Request, res: Response): Promise<any> => {
        try {
            const { error } = this.validateUser(req.body as Users);
            if (error) {
                return res
                    .status(400)
                    .json({ message: error.details[0].message });
            }
            const body = req.body as Users;
            const { refreshToken, ...data } =
                await this.authQuery.register(body);
            res.cookie(this.REFRESH_TOKEN, refreshToken, {
                httpOnly: true,
                maxAge: 3 * 86400,
            });
            return res.status(201).json(data);
        } catch (error) {
            const e = error as Error;
            return res.status(500).json({ message: e.message });
        }
    };

    login = async (req: Request, res: Response): Promise<any> => {
        try {
            const body = req.body;
            const { refreshToken, ...data } = await this.authQuery.login(body);
            res.cookie(this.REFRESH_TOKEN, refreshToken, {
                httpOnly: true,
                maxAge: 3 * 86400,
            });
            return res.status(200).json(data);
        } catch (error) {
            const e = error as Error;
            return res.status(500).json({ message: e.message });
        }
    };

    private validateUser = (data: Users) => {
        const schema = Joi.object({
            fullName: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string()
                .min(6)
                .message('Minimum password length is 6!')
                .required(),
        });
        return schema.validate(data);
    };

    getAccessToken = (req: Request, res: Response): any => {
        try {
            const body = req.body as { refreshToken: string };
            const { accessToken, refreshToken } = this.authQuery.getAccessToken(
                body.refreshToken
            );
            res.cookie(this.REFRESH_TOKEN, refreshToken, {
                httpOnly: true,
                maxAge: 3 * 86400,
            });
            return res.status(200).json({ accessToken });
        } catch (error) {
            const e = error as Error;
            return res.status(400).json({ message: e.message });
        }
    };
}