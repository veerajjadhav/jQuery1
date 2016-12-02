//( function () {
//    var dd = $( 'dd' );
//    dd.filter( ':nth-child(n+4)' ).addClass( 'hide' );
//    $( 'dt' ).on( 'mouseenter', function () {
//
//        $( this ).next().siblings( 'dd' ).addClass( 'hide' ).slideUp( 'slow' );
//        $( this ).next().removeClass( 'hide' ).slideDown( 'slow' );
//
//    } );
//
//} )();

( function () {
    var dd = $( 'dd' );
    dd.not( '.ans' ).css( 'display', 'block' );
    $( 'dt' ).on( 'mouseenter', function () {
        $( this ).next().slideDown( 200 );
        $( this ).next().siblings( 'dd' ).slideUp( 200 );
    } );

} )();