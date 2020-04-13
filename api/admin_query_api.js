let multichain = require("multichain-node")({
    port: 6268,
    host: '0.0.0.0',
    user: "multichainrpc",
    pass: "FZ2UwcDrT5EW7Pp1Cda1yRQYHFSdj9zMr1ce6k9vHhg7"
})

class AdminAPI{
    
    async newCertification(req, res){
        let params = req.body

        try {
            multichain.publish({stream: "certificacion", key: params.identificacion, data: {json: params}}, 
                (err, saved) => {
                    if(err)
                        return res.status(500).send(err)
                    else
                        return res.status(200).send(saved)
            })
        } catch (error) {
            return res.status(500).send(error)
        }
        
    }


    async getCertificationsTo(req, res)
    {
        let params = req.body

        try {

            multichain.listStreamKeyItems({stream: "certificacion", key: params.identificacion}, (err,result) => {
                if(err)
                    return res.status(500).send(err)
                else
                    return res.status(200).send(result)
            })

        } catch (error) {
            return res.status(500).send(error)
        }
    }

    async getCertificationsFrom(req, res)
    {
        let params = req.body

        try {

            multichain.listStreamPublisherItems({stream: "certificacion", address: params.address}, (err,result) => {
                if(err)
                    return res.status(500).send(err)
                else
                    return res.status(200).send(result)
            })

        } catch (error) {
            return res.status(500).send(error)
        }
    }

    async getCertificationById(req, res)
    {
        let params = req.body

        try {

            multichain.getStreamItem({stream: "certificacion", txid: params.txid}, (err,result) => {
                if(err)
                    return res.status(500).send(err)
                else
                    return res.status(200).send(result)
            })

        } catch (error) {
            return res.status(500).send(error)
        }
    }


}

module.exports = new AdminAPI()