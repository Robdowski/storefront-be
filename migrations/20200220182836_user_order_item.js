
exports.up = function(knex) {
    knex.schema.createTable('user_order_item', tbl => {
        tbl.increments()
        tbl.integer('order_id').references('id').inTable('user_order')
        tbl.interger('item_id').references('id').inTable('items')
    })
};

exports.down = function(knex) {
  
};
