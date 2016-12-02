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
//////////////////////append,prepend,after/////////////////////
    $( '<h2></h2>', {
        text: 'helloo form jQuery',
        class: 'text-capitalize'
    } ).insertAfter( 'h1' );

    $( 'P' ).eq( 1 ).after( function () {
        return $( this ).prevUntil( 'h1' );
    } );
//////////to prepend a bockquote//////////////////////////////


    var co = $( 'span.co' );
    co.each( function () {
        $( '<blockquote></blockquote>', {
            class: 'co',
            text: $( this ).text()

        } ).prependTo( $( this ).closest( 'p' ) );
    } );
} )();

