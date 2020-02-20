
exports.up = function(knex) {
    knex.schema.createTable('users', tbl => {
        tbl.increments() //primary id
        tbl.string('username', 64).notNullable().unique()
        tbl.string('password', 255).notNullable()
        tbl.string('email', 255).unique().notNullable()
    })
};

exports.down = function(knex) {
    knex.schema.dropTableIfExists('users')
};
