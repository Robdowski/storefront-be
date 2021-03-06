
exports.up = function(knex) {
    return knex.schema.createTable('items', tbl => {
        tbl.increments()
        tbl.string('name', 255).notNullable().unique()
        tbl.string('description', 255).notNullable()
        tbl.decimal('price', 2, 2).notNullable()
        tbl.string('img_url').notNullable()
        tbl.integer('stock').notNullable().defaultTo(50)
        tbl.string('category', 64).notNullable()
        tbl.string('keywords', 255).notNullable()

    })
};

exports.down = function(knex) {
   return knex.schema.dropTable('items')
};
