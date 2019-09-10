$(document).ready(function() {
  $("#blanks form").submit(function(event) {

    var place1 = $("input#place1").val();
    var adjective1 = $("input#adjective1").val();
    var adjective2 = $("input#adjective2").val();
    var maleCelebrity = $("input#male-celebrity").val();
    var femaleCelebrity = $("input#female-celebrity").val();
    var noun1 = $("input#noun1").val();
    var noun2 = $("input#noun2").val();
    var noun3 = $("input#noun3").val();
    var pluralNoun1= $("input#pluralnoun1").val();
    var pluralNoun2 = $("input#pluralnoun2").val();
    var pluralNoun3 = $("input#pluralnoun3").val();
    var pluralNoun4 = $("input#pluralnoun4").val();
    var pluralProfession = $("input#plural-profession").val();

    $(".place1").text(place1);
    $(".adjective1").text(adjective1);
    $(".adjective2").text(adjective2);
    $(".male-celebrity").text(maleCelebrity);
    $(".female-celebrity").text(femaleCelebrity);
    $(".noun1").text(noun1);
    $(".noun2").text(noun2);
    $(".noun3").text(noun3);
    $(".pluralnoun1").text(pluralNoun1);
    $(".pluralnoun2").text(pluralNoun2);
    $(".pluralnoun3").text(pluralNoun3);
    $(".pluralnoun4").text(pluralNoun4);
    $(".plural-profession").text(pluralProfession);

    $("#story").show();

    event.preventDefault();
  });
});
