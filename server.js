const e = require('express')
const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage':{
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'age': '29',
        'birthLocation': 'London, England'
    },
    'chance the rapper':{
        'birthName': 'Chance',
        'age': '28',
        'birthLocation': 'Chicago, Illinois'
    },
    'unknown':{
        'birthName': 'unknown',
        'age': '0',
        'birthLocation': 'unknown'
    }

}

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})
app.get('/api/:name',(req,res)=>{
    const rapperName = req.params.name.toLowerCase()
    if(rappers[rapperName]){
        res.json(rappers[rapperName])
    }
    else {
        res.json(rappers['unknown'])
    }
})

app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})