const mongoose = require("mongoose")

const router = express.Router()

router.get('/', (req, res) => {
    res.ison({
        mssg:
            'GET tests'
    })
})
 
router.get('/:id', (reg, res) => {
    res.json({ mssg: 'GET test' })
})

router.post('/', (reg, res) => {
    res.ison({ mssg: 'POST test' })
})

router.delete('/:id', (req, res) => {
    res.json({ mssg: 'DELETE test' })
})

app.use((reg, res, next) => {
    console.log(req.path, req.method)
    next()
})

mongoose.connect("mongodb+srv://<Mongojan>:<KSkHE6bbN1GMryd8>@<Cluster0>/<techradar>?retryWrites=true&w=majority")
    .then(() => {
        console.log('mongoose connected');
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log('listening on port', process.env.PORT)
        })
    })
    .catch((e) => {
        console.log(error);
    })
