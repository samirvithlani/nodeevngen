
const cartSchema = require('../model/CartModel');
exports.createCart = (req, res) => {
    const cart = new cartSchema(req.body);

    cart.save().then((data)=>{
        res.status(201).json({
            message:"Cart created successfully",
            cart:data
        })
    }).catch((err)=>{
        res.status(500).json({
            message:"error occured",
            error:err
        })
    })

}
exports.removeProductFromCart = (req, res) => {

    const cartId = req.params.cartId;
    const productId = req.body.productId;
    cartSchema.findByIdAndUpdate(cartId,{$pull:{products:productId}}).then((data)=>{
        res.status(200).json({
            message:"product removed from cart",
            cart:data
        })
    }).catch((err)=>{
        res.status(500).json({
            message:"error occured",
            error:err
        })
    })

}
exports.findAllCart = (req, res) => {
    cartSchema.find().populate("user").populate("products").populate({
        path:"user",
        populate:{
            path:"role",
            model:"Role"
        }
    }).then((carts)=>{
        res.status(200).json({
            message:"carts fetched",
            carts:carts
        })
    }).catch((err)=>{
        res.status(500).json({
            message:"error occured",
            error:err
        })
    })
    
}