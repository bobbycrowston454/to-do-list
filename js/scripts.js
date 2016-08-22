//back end logic
function Task(item, important, note){
  this.item = item;
  this.important = important;
  this.note = note;
}
//user interface
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var itemInput = $("#itemInput").val();
    var important = $("#importantCheck").is(':checked');
    var note = $("#noteInput").val();
    var newTask = new Task(itemInput, important, note);
    var listItemString = "<span class='item'>" + newTask.item + "  </span>";
    if (note!== "") {
      listItemString = listItemString + "<span class='arrow'>  notes ></span>";
      listItemString = listItemString + "<br><span class='note hidden'>" + newTask.note + "</span>";
    }
    $("#results").append("<li>" + listItemString + "</li>");

    $("#itemInput").val("");
    $("#noteInput").val("");
    $("#importantCheck").prop('checked', false);

    if (newTask.important) {
      $(".item").last().addClass("bold");
    };

    $(".item").last().click(function() {
      if ($(this).hasClass("strikethrough")) {
        if (confirm("Then why did you cross it off?!?! Are you sure?")) {
          $(this).removeClass("strikethrough");
        }
      } else {
        $(this).addClass("strikethrough");
      }
    });

    $(".arrow").last().click(function(){
      if($(this).parent().children(".note").hasClass("hidden")){
        $(this).parent().children(".note").removeClass("hidden");
        $(this).parent().children(".arrow").html("  notes &#9660;");
      } else {
        $(this).parent().children(".note").addClass("hidden");
        $(this).parent().children(".arrow").html("  notes >");
      }
    });
  });
});

// &#9660;
