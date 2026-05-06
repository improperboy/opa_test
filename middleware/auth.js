const axios = require("axios");

module.exports = async (req, res, next) => {
  try {
    // Simulated user (replace with JWT later if needed)
    const user = {
      role: req.headers.role || "user"
    };

    const response = await axios.post(process.env.OPA_URL, {
      input: { user }
    });

    if (response.data.result === true) {
      next();
    } else {
      return res.status(403).json({ message: "Access Denied" });
    }

  } catch (err) {
    return res.status(500).json({ message: "OPA Error", error: err.message });
  }
};