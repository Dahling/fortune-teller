
$(document).ready(function(){
  $("form#fortune-teller").submit(function(event){
// the above will link jquery with the front end to pull from the <form id in the html
    event.preventDefault();
    // ^this will cause the answers to display on the same page
    $("#jenna-response").show();
    // ^this will make the responses show from the <span>
    $("input:checkbox[name=jenna-choice]:checked").each(function(){
    // the above refers to the input being placed into an array[]. checked makes things more specific.
    var jennaMode = $(this).val();
    // ^this line takes the value of ("input:checkboxblahblahblah") and stores it in the variable named workTransportationMode.
    $('#jenna-response').append(jennaMode + "<br>");
    });
    $("#ian-response").show();
    $("input:checkbox[name=ian-choice]:checked").each(function(){
      var ianMode = $(this).val();
      $('#ian-response').append(ianMode + "<br>");
    });
    $('#transportation_survey').hide();
    // the above will hide the survey after the responses are submitted to only show the responses on the page.
  });
});
