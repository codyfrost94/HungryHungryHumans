$( function() {
    $( ".draggable" ).draggable({
		grid:[10, 10],
    revert: "invalid",
    
	});
    $( ".droppable" ).droppable({
      drop: function( event, ui ) {
        $( this ).height(function (index, height) {
    return (height + 40);
});
//          .addClass( "ui-state-highlight" )
//          .find( "p" )
//            .html( "Dropped!" );
      }
    });
  });