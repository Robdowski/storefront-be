
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_order').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_order').insert([
        {id: 1, user_id:1},
      ]);
    });
};
