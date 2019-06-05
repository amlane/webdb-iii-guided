
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(tbl){
        // primary key called id, autoincrements, integer
        tbl.increments();

        // a varchar called username, 128, unique, not null
        tbl.string('username', 128)
        .notNullable()
        .unique();

        // syntax for a foreign key 
        //SELECT users.role_id, roles.id FROM Roles JOIN Users ON R.id = U.role_id
        tbl.integer('role_id')
        .unsigned()
        .references('id')
        .inTables('roles')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
};

exports.down = function(knex, Promise) {
  
};
