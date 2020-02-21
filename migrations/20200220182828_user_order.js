
exports.up = function(knex) {
    knex.schema.createTable('user_order', tbl => {
        tbl.increments()
        tbl.integer('user_id').references('id').inTable('user')
    })
  
};

exports.down = function(knex) {
    knex.schema.dropTableIfExists('user_order')
};
