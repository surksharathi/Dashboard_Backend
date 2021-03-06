const customResponses = {
    success( payload ) {
        return this.status( 200 ).json( {
            success: true,
            payload,
        } );
    },

    unauthorized( ) {
        return this.status( 401 ).json( {
            success: false,
            error: "unauthorized",
        } );
    },
    unprocessableEntity( customError ) {
        return this.status( 422 ).json( {
            success: false,
            error: "unprocessable_entity",
            payload: customError,
        } );
    },

    notFound( ) {
        return this.status( 404 ).json( {
            success: false,
            error: "not_found",
        } );
    },

    serverError( ) {
        return this.status( 503 ).json( {
            success: false,
            error: "server_error",
        } );
    },
};

module.exports = ( req, res, next ) => {
    Object.assign( res, customResponses );
    next( );
};

