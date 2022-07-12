/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {name: 'Lucas', email: 'lucas@domain.com', password: 'xyz'},
    {name: 'Pri', email: 'pri@domain.com', password: 'xyz'}
  ]);
};
