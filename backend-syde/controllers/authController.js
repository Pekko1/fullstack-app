const Account = require('../models/Account');
const jwt = require('jsonwebtoken');

const register = (req, res) => {
    Account.create(req.body)
    .then(account => res.status(201).json(account))
    .catch(err => {
        console.error(err);
        res.status(500).json({ error: "Failed to create account" });
    });
};

const login = (req, res) => {
    const { email, password } = req.body;

    Account.findOne({ email: email })
        .then(account => {
            if (!account) {
                return res.status(404).json({ error: "Account not found" });
            }

            if (account.password !== password) {
                return res.status(401).json({ error: "Invalid credentials" });
            }

            const token = jwt.sign({id: account._id, email: account.email, name: account.name}, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.status(200).json({ message: "Login successful", token });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: "An error occurred during login" });
        });
};

module.exports = { register, login };
