
exports.up = function (knex) {
  return knex.schema.createTable("produce", (tbl) => {
    // creates a primary key called id
    tbl.increments();
    // creates a text field called name which is required and unique
    tbl.text("name", 128).unique().notNullable();
    // creates a numeric field called price which is required with max 128 characters
      tbl.decimal("price").notNullable();
    // creates a text field for product description with a max of 1028 characters
      tbl.text("description", 1024);
  });
};

exports.down = function (knex) {
  //   drops entire table
  return knex.schema.dropTableIfExists("produce");
};
