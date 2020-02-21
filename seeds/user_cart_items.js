
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_cart_items').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_cart_items').insert([
        {id: 1, user_id:1, item_id:1},
      ]);
    });
};
