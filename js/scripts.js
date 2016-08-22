//back end logic
function Task(item, important){
  this.item = item;
  this.important = important;
}
//user interface
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var itemInput = $("#itemInput").val();
    var important = $("#importantCheck").is(':checked');
    var newTask = new Task(itemInput, important);
    $("#results").append("<li><span class='item'>" + newTask.item + "</span></li>");
    if (newTask.important) {
      $(".item").last().addClass("bold");
    };
    
    $(".item").last().click(function() {
      if ($(this).hasClass("strikethrough")) {
        if (confirm("Are you sure")) {
          $(this).removeClass("strikethrough");
        }
      } else {
        $(this).addClass("strikethrough");
      }
    });

  });
});
