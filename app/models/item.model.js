const sql = require("./db.js");


const Item = function(item) {
  this.name = item.name;
  this.qty = item.qty;
  this.amount = item.amount;
};

Item.create = (newItem, result) => {
  sql.query("INSERT INTO items SET ?", newItem, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("Created Item: ", { id: res.insertId, ...newItem });
    result(null, { id: res.insertId, ...newItem });
  });
};

Item.findById = (itemId, result) => {
  sql.query(`SELECT * FROM items WHERE id = ${itemId}`, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("Found Item: ", res[0]);
      result(null, res[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

Item.getAll = result => {
  sql.query("SELECT * FROM items", (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
      return;
    }

    console.log("Items: ", res);
    result(null, res);
  });
};

Item.updateById = (id, item, result) => {
  sql.query(
    "UPDATE items SET name = ?, qty = ?, amount = ? WHERE id = ?",
    [item.name, item.qty, item.amount, id],
    (err, res) => {
      if (err) {
        console.log("Error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Item with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("Updated Item: ", { id: id, ...item });
      result(null, { id: id, ...item });
    }
  );
};

Item.remove = (id, result) => {
  sql.query("DELETE FROM items WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Item with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("Deleted Item with id: ", id);
    result(null, res);
  });
};

Item.removeAll = result => {
  sql.query("DELETE FROM items", (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
      return;
    }

    console.log(`Deleted ${res.affectedRows} items`);
    result(null, res);
  });
};

module.exports = Item;