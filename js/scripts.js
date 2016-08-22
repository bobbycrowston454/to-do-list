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
    if(itemInput.length === 0){
      alert("Please enter something");
      return;
    }
    var important = $("#importantCheck").is(':checked');
    var note = $("#noteInput").val();
    var newTask = new Task(itemInput, important, note);
    var listItemString = "<span class='item'>" + newTask.item + "</span>";
    listItemString = listItemString + "<span class='arrow hidden'>     show note &#9660;</span>";
    listItemString = listItemString + "<br><span class='note hidden'>" + newTask.note + "<br></span>";
    $("#results").append("<li>" + listItemString + "</li>");

    if (note) {
      debugger;
      $(".arrow").last().removeClass("hidden");
    }

    $("#itemInput").val("");
    $("#noteInput").val("");
    $("#importantCheck").prop('checked', false);

    if (newTask.important) {
      $(".item").last().addClass("bold");
    };

    $(".item").last().click(function() {

      if ($("html").hasClass("noteCursor")) {
        var newNote = prompt("Enter your note");
        if (newNote) {
          $(this).parent().children(".note").append(newNote + "<br>");
          $(this).parent().children(".arrow").removeClass("hidden");
        }
        $("html").removeClass("noteCursor");
        // debugger;
      } else if ($("html").hasClass("deleteCursor")) {
        $(this).parent().remove();
        $("html").removeClass("deleteCursor");
        $(".instructions").hide();
      } else {
        if ($(this).hasClass("strikethrough")) {
          if (confirm("Then why did you cross it off?!?! Are you sure?")) {
            $(this).removeClass("strikethrough");
          }
        } else {
          $(this).addClass("strikethrough");
        }
      }
    });

    $(".arrow").last().click(function(){
      if($(this).parent().children(".note").hasClass("hidden")){
        $(this).parent().children(".note").removeClass("hidden");
        $(this).parent().children(".arrow").html("     hide note &#9650;");
      } else {
        $(this).parent().children(".note").addClass("hidden");
        $(this).parent().children(".arrow").html("     show note &#9660;");
      }
    });
  });

  $("#removeBtn").click(function() {
    if ($("html").hasClass("deleteCursor")) {
      $("html").removeClass("deleteCursor");
      $(".instructions").hide();
    } else {
      $("html").addClass("deleteCursor");
      $("html").removeClass("noteCursor");
      $(".instructions").show();
      $(".noteInstructions").hide();

    }
  });
  $("#noteBtn").click(function() {
    if ($("html").hasClass("noteCursor")) {
      $("html").removeClass("noteCursor");
      $(".noteInstructions").hide();
    } else {
      $("html").addClass("noteCursor");
      $("html").removeClass("deleteCursor");
      $(".noteInstructions").show();
      $(".instructions").hide();
    }
  });
});

// &#9660;
