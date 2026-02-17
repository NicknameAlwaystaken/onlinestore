const db=require('../database');

const products={
    getAll(callback){
        return db.query("SELECT * FROM products",callback);
    },
    getOne(idP,callback){
        return db.query("SELECT * FROM products WHERE id_products=?",[idP],callback);
    },
    add(newP, callback){
        return db.query("INSERT INTO products (name,price,saldo) VALUES(?,?,?)",
            [
                newP.name,
                newP.price,
                newP.saldo
            ], callback);
    }
}

module.exports=products;
