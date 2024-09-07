const home = (req, res) => {
    res.json({ message: "Welcome to the protected route, " + req.user.name });
};

module.exports = { home };
