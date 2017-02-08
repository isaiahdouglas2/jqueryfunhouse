
 $(document).ready( function(){
     $('#change-color').click(function(){
         var back = ["#ff0000","blue","gray","black","yellow","purple"];
  var rand = back[Math.floor(Math.random() * back.length)];
    $('body').css('background',rand);
     });
    $("#submit-name").click(function(){
      $("p").html("hi "+ $("#name").val());
    });
     
       $("#pic1").click(function() {
           $("#gallery-main").attr("src","https://upload.wikimedia.org/wikipedia/commons/f/f9/Loxodonta_africana_-_old_bull_(Ngorongoro,_2009).jpg");
         $("#pic2").click(function() {
             $("#gallery-main").attr("src","https://upload.wikimedia.org/wikipedia/commons/6/63/African_elephant_warning_raised_trunk.jpg");
             $("#pic3").click(function(){
               $("#gallery-main").attr("src","https://iso.500px.com/wp-content/uploads/2014/08/2048-5.jpg");
           
             });
          
       });  
 });

       });