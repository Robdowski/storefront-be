
exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments() //primary id
        tbl.string('username', 64).notNullable().unique()
        tbl.string('password', 255).notNullable()
        tbl.string('email', 255).unique().notNullable()
    })
};

exports.down = function(knex) {
   return knex.schema.dropTable('users')
};
