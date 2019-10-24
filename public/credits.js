var credits    = require( 'credits' );
var creditPath = 'C:/Users/Admin/Desktop/project/manualhub';

/**
 * @param {String} creditPath path to the project you want to analyze
 *
 * @return {Promise}
 */
credits( creditPath )
  .then( function( credits ) {
    console.log( credits );
  } )
  .catch( function( error ) {
    console.log( error );

    process.exit( 1 );
  } );