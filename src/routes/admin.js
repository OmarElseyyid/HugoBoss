const express = require('express')
const adminRouter = express.Router()
const database = require('../../databaseConfig.js')
const connection = database.connection
let jsonData = require('../../HugoBoss.json');


/*
app.get('/',function(req,res){

    fs.readFile('a.json','utf8',function(err,data){
  
    var dat = JSON.parse(data);
  
    res.send(JSON.stringify(dat));
  
    console.log(dat['u_1'].site);
  
    });*/
console.log(jsonData);
//get login page in admin
adminRouter.get('', async (req, res) => {

    // if user logged in and he wes admin
    if (req.session.logged == true) {

        connection.query('SELECT * FROM users WHERE id =' + req.session.user_id, (err, rows) => {
            
            if (err) {
                console.log(err)
            }

            rows.forEach(element => {
                res.render('admin/dashboard', { data: element })
            });
        })

    }
    else {
        res.render('admin/login')
    }

})
//post dashboard (login -> dashboard) and start admin session 
adminRouter.post('/dashboard', async (req, res) => {

    connection.query('SELECT * FROM users', (err, rows) => {
        
        if (err) {
            console.log(err)
        }

        rows.forEach(element => {
            if (element['user_name'] == req.body.username && element['user_pass'] == req.body.password) {

                // fill the session infotmation
                req.session.user_id = element['id']
                req.session.logged = true


                res.render('admin/dashboard', { data: element })
            }
            //add erro msg lates if the login failed
        });
    })

})
//get dashboard if the admin logged in
adminRouter.get('/dashboard', async (req, res) => {

    // if user logged in and he wes admin
    if (req.session.logged == true) {

        connection.query('SELECT * FROM users WHERE id =' + req.session.user_id, (err, rows) => {
        
            if (err) {
                console.log(err)
            }

            rows.forEach(element => {
                res.render('admin/dashboard', { data: element })
            });
        })

    }
    else {
        res.render('admin/login')
    }

})
//get logout and destory session
adminRouter.get('/logout', async (req, res) => {

    // if user logged in and he wes admin
    if (req.session.logged == true) {
        req.session.destroy();
        res.render('admin/login')
    }
    else {
        res.render('admin/login')
    }

})


adminRouter.get('/p1', async (req, res) => {

    // if user logged in and he wes admin
    if (req.session.logged == true) {

        connection.query('SELECT * FROM users WHERE id =' + req.session.user_id, (err, rows) => {
            
            if (err) {
                console.log(err)
            }

            rows.forEach(element => {
                res.render('admin/fabrikalar/p1', { data: element })
            });
        })

    }
    else {
        res.render('admin/login')
    }

})

adminRouter.get('/p2', async (req, res) => {

    // if user logged in and he wes admin
    if (req.session.logged == true ) {

        connection.query('SELECT * FROM users WHERE id =' + req.session.user_id, (err, rows) => {
            
            if (err) {
                console.log(err)
            }

            rows.forEach(element => {
                res.render('admin/fabrikalar/p2', { data: element })
            });
        })

    }
    else {
        res.render('admin/login')
    }

})


adminRouter.get('/p3', async (req, res) => {

    // if user logged in and he wes admin
    if (req.session.logged == true ) {

        connection.query('SELECT * FROM users WHERE id =' + req.session.user_id, (err, rows) => {
            
            if (err) {
                console.log(err)
            }

            rows.forEach(element => {
                res.render('admin/fabrikalar/p3', { data: element })
            });
        })

    }
    else {
        res.render('admin/login')
    }

})



adminRouter.get('/istatistics', async (req, res) => {

    // if user logged in and he wes admin
    if (req.session.logged == true) {

        connection.query('SELECT * FROM users WHERE id =' + req.session.user_id, (err, rows) => {
            
            if (err) {
                console.log(err)
            }

            rows.forEach(element => {
                res.render('admin/istatistics', { data: element })
            });
        })

    }
    else {
        res.render('admin/login')
    }

})

adminRouter.get('/siparisler', async (req, res) => {

    // if user logged in and he wes admin
    if (req.session.logged == true) {

        connection.query('SELECT * FROM users WHERE id =' + req.session.user_id, (err, rows) => {
            
            if (err) {
                console.log(err)
            }

            rows.forEach(element => {

                connection.query('SELECT * FROM siparis', (err, rows) => {
            
                    if (err) {
                        console.log(err)
                    }

                    connection.query('SELECT * FROM stoktakiurunler', (err, rows2) => {
            
                        if (err) {
                            console.log(err)
                        }
    
                        res.render('admin/siparisler', { data: [element,rows,rows2] })
                        
                    })

                   
                    
                })

                
            });
        })

    }
    else {
        res.render('admin/login')
    }

})



/*
//dashboard transactions start ==============================>

//get transactions page -> if the admin logged in
adminRouter.get('/transactions', async (req, res) => {

    // if user logged in and he wes admin
    if (req.session.logged == true && req.session.user_type == 0) {

        connection.query('SELECT * FROM users WHERE id =' + req.session.user_id, (err, rows) => {
            
            if (err) {
                console.log(err)
            }

            rows.forEach(element => {
                res.render('admin/transactions', { data: element })
            });
        })

    }
    else {
        res.render('admin/login')
    }

})

//get members page -> if the admin logged in
adminRouter.get('/members', async (req, res) => {

    // if user logged in and he wes admin
    if (req.session.logged == true && req.session.user_type == 0) {

        connection.query('SELECT * FROM users WHERE id =' + req.session.user_id, (err, rows) => {
            
            if (err) {
                console.log(err)
            }

            rows.forEach(element => {
                res.render('admin/members', { data: element })
            });
        })

    }
    else {
        res.render('admin/login')
    }

})

//get tenders page -> if the admin logged in
adminRouter.get('/tenders', async (req, res) => {

    // if user logged in and he wes admin
    if (req.session.logged == true && req.session.user_type == 0) {


        connection.query('SELECT * FROM users WHERE id =' + req.session.user_id, (err, rows) => {
            
            if (err) {
                console.log(err)
            }

            rows.forEach(element => {
                res.render('admin/tenders', { data: element })
            });
        })
    }
    else {
        res.render('admin/login')
    }

})

//get offers page -> if the admin logged in
adminRouter.get('/offers', async (req, res) => {

    // if user logged in and he wes admin
    if (req.session.logged == true && req.session.user_type == 0) {


        connection.query('SELECT * FROM users WHERE id =' + req.session.user_id, (err, rows) => {
            
            if (err) {
                console.log(err)
            }

            rows.forEach(element => {
                res.render('admin/offers', { data: element })
            });
        })


    }
    else {
        res.render('admin/login')
    }

})

//get auction page -> if the admin logged in
adminRouter.get('/auction', async (req, res) => {

    // if user logged in and he wes admin
    if (req.session.logged == true && req.session.user_type == 0) {


        connection.query('SELECT * FROM users WHERE id =' + req.session.user_id, (err, rows) => {
            
            if (err) {
                console.log(err)
            }

            rows.forEach(element => {
                res.render('admin/auction', { data: element })
            });
        })


    }
    else {
        res.render('admin/login')
    }

})

//get leftovers page -> if the admin logged in
adminRouter.get('/leftovers', async (req, res) => {

    // if user logged in and he wes admin
    if (req.session.logged == true && req.session.user_type == 0) {

        connection.query('SELECT * FROM users WHERE id =' + req.session.user_id, (err, rows) => {
            
            if (err) {
                console.log(err)
            }

            rows.forEach(element => {
                res.render('admin/leftovers', { data: element })
            });
        })


    }
    else {
        res.render('admin/login')
    }

})

//get records page -> if the admin logged in
adminRouter.get('/records', async (req, res) => {

    // if user logged in and he wes admin
    if (req.session.logged == true && req.session.user_type == 0) {


        connection.query('SELECT * FROM users WHERE id =' + req.session.user_id, (err, rows) => {
            
            if (err) {
                console.log(err)
            }

            rows.forEach(element => {
                res.render('admin/records', { data: element })
            });
        })


    }
    else {
        res.render('admin/login')
    }

})

//get settings page -> if the admin logged in
adminRouter.get('/settings', async (req, res) => {

    // if user logged in and he wes admin
    if (req.session.logged == true && req.session.user_type == 0) {

        connection.query('SELECT * FROM users WHERE id =' + req.session.user_id, (err, rows) => {
            
            if (err) {
                console.log(err)
            }

            rows.forEach(element => {
                res.render('admin/settings', { data: element })
            });
        })


    }
    else {
        res.render('admin/login')
    }

})

//dashboard transactions end ================================>
*/


module.exports = adminRouter