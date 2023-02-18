const express = require("express");
const jwt = require("jsonwebtoken");
const users = require("../models/register-login");
const { StatusCodes } = require("http-status-codes");

const auth = async (req, res, next) => {
  const authheader = req.headers.authorization;

  if(!authheader || !authheader.startsWith('Bearer')){

    res.status(StatusCodes.UNAUTHORIZED).json({msg:'invalid person!'})
  }

  const token = authheader.split(' ')[1]

  try{

    const verification = jwt.verify(token, process.env.jwt_secret)
    req.user ={userId:verification.userId, name:verification.name}

    next()
  }

  catch(error){

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:'Something went wrong'})


  }

};

module.exports = auth;
