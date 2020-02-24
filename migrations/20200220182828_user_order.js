
exports.up = function(knex) {
    return knex.schema.createTable('user_order', tbl => {
        tbl.increments()
        tbl.integer('user_id').references('id').inTable('users')
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('user_order')
};
