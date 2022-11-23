const User = require('../models/users')

module.exports = {
    // Get All User
    index: async (req, res) => {
        try{
            const users = await User.find()
            if(users.length > 0){
                res.status(200).json({
                    status: true,
                    data: users,
                    method: req.method,
                    url: req.url
                })
            }
            else{
                res.json({
                    status: false,
                    message: "Data Masih Kosong"
                })
            }
        }
        catch (error){
            res.status(400).json({
                sucess: false
            })
        }
       
    },

    // Get User By Id
    show: async (req, res) => {
        try {
            const users = await User.findById(req.params.id)
            res.json({
                status: true,
                data: users,
                method: req.method,
                url: req.url,
                message: "Data berhasil didapatkan"
            })
        } 
        catch (error) {
            res.status(400).json({
                sucess: false
            })  
        }
        
    },

    store: async (req, res) => {
        try {
            const users = await User.create(req.body)
            res.status(200).json({
                status: true,
                data: users,
                method: req.method,
                url: req.url,
                message: "Data berhasil ditambahkan"
            })
        } 
        catch (error) {
            res.status(400).json({
                sucess: false
            })
        }
       
    },
    update: async (req, res) => {
        try {
            const users = await User.findByIdAndUpdate(req.params.id, req.body,
            {
                new: true,
                runValidators: true
            })
            res.json({
                status: true,
                data: users,
                method: req.method,
                url: req.url,
                message: "Data berhasil diupdate"
            })
        } 
        catch (error) {
            res.status(400).json({
                sucess: false
            })  
        }
        
    },
    delete: async (req, res) => {
        try {
            await User.findByIdAndDelete(req.params.id)
            res.json({
                status: true,
                method: req.method,
                url: req.url,
                message: "Data berhasil dihapus"
            })
        } 
        catch (error) {
            res.status(400).json({
                sucess: false
            })
        }
    }
}