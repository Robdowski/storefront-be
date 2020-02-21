
exports.up = function(knex) {
    return knex.schema.createTable('user_cart_items', tbl => {
        tbl.increments()
        tbl.integer('item_id').references('id').inTable('items')
        tbl.integer('user_id').references('id').inTable('users')
    })
};

exports.down = function(knex) {
    knex.schema.dropTableIfExists('user_cart_items')
};
