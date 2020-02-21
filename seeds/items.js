
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {id: 1, name:"Shoes", price: 29.99, img_url: "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/20f2892979034466bbe7aafc015831a7_9366/NMD_R1_Star_Wars_Shoes_Green_FW3935_04_standard.jpg", stock: 50, description: "Yoda adidas shoes.", category: "Shoes", keywords:"Shoes,Clothing,Star Wars,Adidas,Cool,Men's"}
      ]);
    });
};
