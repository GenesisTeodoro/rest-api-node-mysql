module.exports = app => {
    const item = require("../controllers/item.controller.js");
  
    // Create a new Item
    app.post("/items", item.create);
  
    // Retrieve all Items
    app.get("/items", item.findAll);
  
    // Retrieve a single Item with itemId
    app.get("/items/:itemId", item.findOne);
  
    // Update an Item with itemId
    app.put("/items/:itemId", item.update);
  
    // Delete an Item with itemId
    app.delete("/items/:itemId", item.delete);
  
    // Delete all items
    app.delete("/items", item.deleteAll);
};