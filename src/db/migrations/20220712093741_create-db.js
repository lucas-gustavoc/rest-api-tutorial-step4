/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('wishes', table => {
        table.increments('id')
        table.text('wish').notNullable()
        table.string('priority').notNullable()
        table.integer('user_id').notNullable()
        table.foreign('user_id').references('users.id')
    }).createTable('users', table => {
        table.increments('id')
        table.string('name').notNullable()
        table.string('email').notNullable().unique()
        table.text('password').notNullable()
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('wishes').dropTableIfExists('users')
};
