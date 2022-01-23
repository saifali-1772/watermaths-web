const express = require('express')
const route = express.Router()

route.get('/',(req,res)=>{
    res.render('index',{title:"Watermaths"})
})

route.get('/about',(req,res)=>{
    res.render('about',{title:"About"})
})

route.get('/contact',(req,res)=>{
    res.render('contact',{title:"Contact"})
})

route.get('/services',(req,res)=>{
    res.render('services',{title:"Services"})
})

route.get('/service-details',(req,res)=>{
    res.render('service-details',{title:"Service Details"})
})

route.get('/portfolio',(req,res)=>{
    res.render('portfolio',{title:"Portfolio"})
})

route.get('/portfolio-details',(req,res)=>{
    res.render('portfolio-details',{title:"Portfolio Details"})
})

route.get('/blog',(req,res)=>{
    res.render('blog',{title:"Blog"})
})

route.get('/blog-details',(req,res)=>{
    res.render('blog-details',{title:"Blog Details"})
})

route.get('/customer-info',(req,res)=>{
    res.render('customer',{title:"Customer Info"})
})

route.get('*',(req,res)=>{
    res.render('page-not-found',{title:"404 Error"}) 
})

module.exports = route