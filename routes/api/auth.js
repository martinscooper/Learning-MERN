const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')

const JWT_SECRET = config.get('jwtSecret')

//User Model

const User = require('../../models/User');

// @route POST api/users
// @desc Register Auth user
// @access Public

router.post('/auth', async (req, res) => {
    const { email, password } = req.body;

    // Simple validation
    if (!email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) throw Error('User does not exist.');

        const passwordIsCorrect = await bcrypt.compare(password, user.password);
        if (!passwordIsCorrect) throw Error('Invalid Credentials');

        const token = jwt.sign({ id: user._id }, JWT_SECRET, {
        expiresIn: 3600
        });

        res.status(200).json({
        token,
        user: {
            id: user.id,
            name: user.name,
            email: user.email
        }
        });
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});



module.exports = router;