const AdminTbl = require('../models/AdminTbl');
const postTbl = require('../models/postsTbl')
const jwt = require('jsonwebtoken')

const register = async (req,res)=> {
    try {
        const{name,email,password,role} = req.body;
        let userData = await AdminTbl.create({
            name : name,
            email : email,
            password : password,
            role : role
        })
        if(userData){
            res.json({ message : "User added successfully", status : 1});
        }else{
            res.json({ message : "User not added", status : 0});
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

const viewRegister = async (req,res) => {
    try{
        let registerData = await AdminTbl.find({});
        if(registerData){
            res.json({ Data : registerData, status : 1});
        }else{
            res.json({ message : "No data found", status : 0});
        }
    }catch(err){
        console.log(err);
        return false;
    }
}

const deleteUser = async (req,res) => {
    try {
        let id = req.body.id;
        let delUser = await AdminTbl.findByIdAndDelete(id);
        if(delUser){
            res.json({ message : "User deleted", status : 1});
        }else{
            res.json({ message : "User not deleted", status : 0});
        }
    } catch (err) {
       console.log(err);
       return false; 
    }
}

const updateUser = async (req,res) => {
    try {
        const{name,email,password,role} = req.body;
        let id = req.body.id;
        let updateData = await AdminTbl.findByIdAndUpdate(id,{
            name : name,
            email : email,
            password : password,
            role : role
        })
        if(updateData){
            res.json({ message : "User updated", status : 1});
        }else{
            res.json({ message : "User not updated", status : 0});
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

const login = async (req,res) => {
    try {
        const{email,password} = req.body;
        let loginData = await AdminTbl.findOne({email : email});
        if(!loginData || loginData.password != password){
            return res.json({message : "Invalid email or password", status : 0});
        }else{
            const Token = jwt.sign({payload : loginData},'rudra',{expiresIn : '1hr'});
            return res.json({token : Token});
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

const post = async (req,res)=> {
    try {
        const{title,body,createdby,active,geolocation} = req.body;
        let postData = await postTbl.create({
            title : title,
            body : body,
            createdby : createdby,
            active : active,
            geolocation: geolocation
        })
        if(postData){
            res.json({ message : "Post added successfully", status : 1});
        }else{
            res.json({ message : "Post not added", status : 0});
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

const viewPost = async (req,res) => {
    try{
        let postData = await postTbl.find({});
        if(postData){
            res.json({ Data : postData, status : 1});
        }else{
            res.json({ message : "No data found", status : 0});
        }
    }catch(err){
        console.log(err);
        return false;
    }
}

module.exports = {
    register,
    viewRegister,
    deleteUser,
    updateUser,
    login,
    post,
    viewPost
}