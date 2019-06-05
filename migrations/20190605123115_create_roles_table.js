// new changes to the database schema
exports.up = function(knex, Promise) {
    return knex.schema.createTable('roles', function(tbl){
        // primary key called id, autoincrements, integer
        tbl.increments();

        // a varchar called username, 128, unique, not null
        tbl.string('name', 128)
        .notNullable()
        .unique();
    })
};


//how to undo changes to the schema
exports.down = function(knex, Promise) {
   return knex.schema.dropTableIfExists('roles');
};

//npx knex migrate:make create_roles_table
//npx knex migrate:latest (creates new.db3 file)
//npx knex migrate:rollback (deletes new.db3 file)


// npx knex seed:make 001-roles
// npx knex seed:run