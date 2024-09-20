const home = async (req, res) => {
    try {
        res.json({
            user: req.user.name,
            message: "Welcome to the protected route, " + req.user.name,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "An error occurred" });
    }
};

module.exports = { home };
