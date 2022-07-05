const postProductosHandler = ( req, res, archivo ) => {
    const title = req.body.title 
    const price = req.body.price
    const thumbnail = req.body.thumbnail
    
    if(title && price && thumbnail){
        let data = {
            title: title, 
            price: price, 
            thumbnail: thumbnail
        }
        try {
            archivo.insert(data)
            archivo.list()
            .then( list => {
                res.status(200).render('partials/productos', {
                    list : list
                }) 
            })
            .finally(() => archivo.closeConection() )
        }
        catch (error) {
            new Error (error)
        }
    }
    else {
        res.status(404).send('Bad request')
    }
}
module.exports =   { postProductosHandler }