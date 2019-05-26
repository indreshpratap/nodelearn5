const api = require('express').Router();

const adminRoutes = require('./admin/admin.routes');
const userRoutes = require('./user/user.routes');

module.exports = function mountRoutes(app) {

    // api modules binding
    api.use("/admin", adminRoutes);
    api.use("/user", userRoutes);

    // api url binding to main express app
    app.use("/api", api);
}