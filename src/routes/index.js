const express = require('express')
const route = express.Router()

route.get('/',(req,res)=>{
    res.render('index')
})

route.get('/about',(req,res)=>{
    res.render('about')
})

route.get('/contact',(req,res)=>{
    res.render('contact')
})

route.get('/services',(req,res)=>{
    res.render('services')
})

route.get('/service-details',(req,res)=>{
    res.render('service-details')
})

route.get('/portfolio',(req,res)=>{
    res.render('portfolio')
})

route.get('/portfolio-details',(req,res)=>{
    res.render('portfolio-details')
})

route.get('/blog',(req,res)=>{
    res.render('blog')
})

route.get('/blog-details',(req,res)=>{
    res.render('blog-details')
})

route.get('/customer-info',(req,res)=>{
    res.render('customer')
})

route.get('*',(req,res)=>{
    res.render('page-not-found') 
})

module.exports = route