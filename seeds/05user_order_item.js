
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_order_item').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_order_item').insert([
        {id: 1, item_id: 1, order_id: 1},
      ]);
    });
};
