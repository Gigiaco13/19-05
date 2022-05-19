module.exports = (app)=>{
    //abrir o arquivo Login.js
    app.get('/login',(req,res)=>{
        res.render('login.ejs')
    })
}