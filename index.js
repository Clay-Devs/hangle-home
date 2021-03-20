const app = require('express')()
app.use((req,res) => {
    if (req.path === '/') {
        res.sendFile(__dirname + '/index.html')
    }
    else {
        res.send('not found')
        res.status(404)
    }
})
app.listen(3000, () => {
    console.log('Ready')
})