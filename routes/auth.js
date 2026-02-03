const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get(
  "/login",
  passport.authenticate("github", { scope: ["user:email"] }),
);

router.get(
  "/auth/github/callback",
  passport.authenticate("github", {
    failureRedirect: "/api-docs",
    session: true,
  }),
  (req, res) => {
    req.session.user = req.user;
    res.redirect("/");
  },
);

router.get("/test", (req, res) => {
  res.send("AUTH ROUTER IS WORKING");
});

router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    res.redirect("/");
  });
});

module.exports = router;
