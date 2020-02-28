$(".newBurg").on("click", ()=>{
    event.preventDefault();

    var newBurger = {
      burger_name:  $(".burgName").val().trim(),
      devoured: 0
    };

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then( ()=>{
        console.log("New Burger added");
        location.reload();
    });
});


(".eatMe").on("click", ()=>{
event.preventDefault();

var isDevoured = {
    devoured: 1
}

$.ajax("/api/burgers/" + id, {
    type: "PUT",
    data: isDevoured
  }).then(function() {
    console.log("Burger devoured");
    location.reload();
  });

});