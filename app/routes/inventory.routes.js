module.exports = app => {
    const inventory = require("../controllers/inventory.controller.js");
  
    // Create a new Item
    app.post("/inventory", inventory.create);
  
    // Retrieve all Items
    app.get("/inventory", inventory.findAll);
  
    // Retrieve a single Item with itemId
    app.get("/inventory/:itemId", inventory.findOne);
  
    // Update an Item with itemId
    app.put("/inventory/:itemId", inventory.update);
  
    // Delete an Item with itemId
    app.delete("/inventory/:itemId", inventory.delete);
  
    // Delete all items
    app.delete("/inventory", inventory.deleteAll);
};