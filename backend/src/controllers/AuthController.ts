import { sign } from 'jsonwebtoken';

import User from '@models/user';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '@src/constants';

const bcrypt = require('bcrypt');

class AuthController {
    async registerUser(email: string, password: string, nickName: string) {
        try {
            const saltRounds = 10;

            return new Promise((resolve, reject) => {
                bcrypt.hash(password, saltRounds, async (err, hash) => {
                    const createdUser = new User({ email, password: hash, nickName });
    
                    await createdUser.save().catch(err => reject(err));

                    resolve('Пользователь успешно создан');
                });
            });
        } catch (err) {
            return err;
        }
    }

    async signInUser(email: string, password: string, res: any) {
        try {
            const user: any = await User.findOne({ email });

            if (!user) return 'Пользователь не найден';

            const { password: userHash, _id } = user;

            const isAuthSuccess = bcrypt.compareSync(password, userHash);

            if (isAuthSuccess) {
                const accessToken = sign({ userId: _id }, ACCESS_TOKEN_KEY, {
                    expiresIn: '30m',
                });

                const refreshToken = sign({ userId: _id }, REFRESH_TOKEN_KEY, {
                    expiresIn: '60d',
                });

                const expireAccessTokenTime = 3600000 / 2;
                const expireRefreshTokenTime = 3600000 * 24 * 60

                res.cookie('access-token', accessToken, { expires: new Date(Date.now() + expireAccessTokenTime) });
                res.cookie('refresh-token', refreshToken, { expires: new Date(Date.now() + expireRefreshTokenTime) });

                return 'Успешная авторизация';
            }

            return 'Введён неверный пароль';
        } catch (err) {
            console.log(err);
            return 'Неизвестная ошибка при попытке авторизации';
        }
    }

    async getMe(userId: string) {
        try {
            const user = await User.findById(userId);

            return user;
        } catch (err) {
            return err;
        }
    }
}

export default new AuthController();