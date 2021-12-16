const express = require('express')
const homeRouter = express.Router()

const database = require('../../databaseConfig.js')
const connection = database.connection


homeRouter.get('', async(req, res) => {

    connection.query('SELECT * FROM stoktakiurunler', (err, rows) => {
            
        if (err) {
            console.log(err)
        }

        res.render('home', { data: rows })
        
    })
})

homeRouter.post('/siparisVer', async (req, res) => {

    let urun_tarihi = req.body.urun_tarihi;
    let urun_sayisi =  req.body.urun_sayisi;
    let urun_id = req.body.urun_adi;

    let sql = 'INSERT INTO siparis SET ?'

    let post = {

        siparis_urun_id: urun_id,
        siparis_teslim_tarihi: urun_tarihi,
        siparis_adeti: urun_sayisi,

    }

    connection.query(sql, post, (err, res) => {
        if(err) throw err;
        console.log('success');
        console.log(res);
        
    });
    res.send('Sipariş eklendi')

})

module.exports = homeRouter 