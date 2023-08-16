const zod = require('zod');

const studentValidationSchema = zod.object({
    body: zod.object({
        name: zod.string().min(3).max(50),
        age: zod.number().min(18).max(100),
        phone: zod.string().regex(/^[6-9]{1}[0-9]{9}$/),
        email: zod.string().email(),
        password: zod.string().min(8).max(100),

    })
})

module.exports = studentValidationSchema;