const { User } = require('../../src/app/models');
const bcrypt = require('bcryptjs');
const truncate = require('../utils/truncate');

describe('User', () => {
    beforeEach(async () => {
        await truncate();
    })

    it('deve encriptar a senha do usuario', async () => {
        const user = await User.create({
            name: 'Kenaa',
            email: 'kenaa@example.com',
            password: '123456'
        });

        const compareHash = await bcrypt.compare('123456', user.password_hash);

        expect(compareHash).toBe(true);

    })
})