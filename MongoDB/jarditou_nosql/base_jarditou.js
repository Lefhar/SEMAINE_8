//création de la base
use jarditou

//on vide tout 

db.jarditou.drop()
//création de la table
db.createCollection("produits")

//insertion
db.produits.insert({ "pro_ref": "barb001",
                    "pro_libelle": "Aramis",               
                    "pro_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor sit amet ipsum sit amet dapibus. Cras suscipit neque ac magna sagittis lobortis. Duis venenatis enim ac nisl luctus, a scelerisque velit porttitor. Integer nec massa quis urna mollis consectetur et et nisl. Nullam eget nunc vitae nisl convallis faucibus. Vestibulum dapibus, metus nec molestie lobortis, nunc sem mollis tortor, et auctor dolor nunc at nisi. Pellentesque sit amet turpis nisi.",
                    "pro_prix": 110.00,
                    "pro_stock": 2, 
                    "pro_couleur":"Brun",
                    "pro_photo": "jpg",
                    "pro_d_ajout": new Date(),    
                    "pro_d_modif": new Date(),  
                    "pro_bloque": 0                                                                  
                   })

  db.produits.insert({ "pro_ref": "barb002",
                    "pro_libelle": "Athos",               
                    "pro_description": "Curabitur pellentesque posuere luctus. Sed et risus vel quam pharetra pretium non quis odio. Praesent varius risus vel orci ultrices tincidunt.",
                    "pro_prix": 249.99,
                    "pro_stock": 0, 
                    "pro_couleur":"Noir",
                    "pro_photo": "jpg",
                    "pro_d_ajout": new Date(),    
                    "pro_d_modif": new Date(),  
                    "pro_bloque": 0                                                                  
                   })

db.produits.insert({ "pro_ref": "barb003",
                    "pro_libelle": "Clatronic",               
                    "pro_description": "Fusce rutrum odio sem, quis finibus nisl finibus a. Praesent dictum ex in lectus porta, vitae varius lacus eleifend. Sed sed lacinia mi, sed egestas odio. Integer a congue lectus.",
                    "pro_prix": 135.90,
                    "pro_stock": 10, 
                    "pro_couleur":"Chrome",
                    "pro_photo": "jpg",
                    "pro_d_ajout": new Date(),    
                    "pro_d_modif": new Date(),  
                    "pro_bloque": 0                                                                  
                  })

//requête update

db.produits.update({ pro_ref : "barb001"}, {$set: {pro_prix: 110.00, pro_stock:6}})
db.produits.update({ pro_ref : "barb002"}, {$set: {pro_prix: 270.10, pro_stock:12}})
db.produits.update({ pro_ref : "barb003"}, {$set: {pro_prix: 80.00, pro_stock:3}})


//requête delete
db.produits.deleteOne({ pro_ref : "barb003"})