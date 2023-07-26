
const roleSchema = require('../model/RoleModel');
exports.createRole = (req, res) => {
    const role = new roleSchema(req.body);

    role.save().then((role1) => {
        res.status(200).json({
            message: "role added",
            role: role1
        })
    }).catch((err) => {
        res.status(500).json({
            message: "error occured",
            error: err
        })
    })
}