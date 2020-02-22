
exports.up = function(knex) {
    return knex.schema.createTable('user_order_item', tbl => {
        tbl.increments()
        tbl.integer('order_id').references('id').inTable('user_order')
        tbl.integer('item_id').references('id').inTable('items')
    })
};

exports.down = function(knex) {
    return knex.dropTableIfExists('user_order_item')
};
