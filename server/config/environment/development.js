'use strict';
/*eslint no-process-env:0*/

// Development specific configuration
// ==================================
module.exports = {

  // Sequelize connection opions
  sequelize: {
    uri: 'sqlite://',
    options: {
      logging: false,
      storage: 'us-census.db',
      define: {
        timestamps: false
      }
    }
  },

  // Seed database on startup
  seedDB: false

};
