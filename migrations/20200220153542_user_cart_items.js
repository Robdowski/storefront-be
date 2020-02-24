
exports.up = function(knex) {
    return knex.schema.createTable('user_cart_items', tbl => {
        tbl.increments()
        tbl.integer('item_id').references('id').inTable('items')
        tbl.integer('user_id').references('id').inTable('users')
        tbl.integer('quantity').notNullable().defaultTo(1)
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('user_cart_items')
};
