$(document).ready(function(){

  $("#survey").submit(function(event){

    event.preventDefault();

    var left = [];
    var right = [];
    var both = [];

    var answers = ["a1", "a2", "a3", "a4", "a5"];

    answers.forEach(function(answer){
      var input = $("input#" + answer).val().toLowerCase();

      $("." + answer).text(input);

        if(input === "a"){
          left.push(input);
        }else if(input === "b"){
          right.push(input);
        }else{
          both.push(input);
        }
    }); //end foreach loop



    if(left.length === 5){
      $("#java-track").show();
    }else if(right.length === 5){
      $("#css-track").show();
    }else if(both.length === 5){
      $("#ruby-track").show();
    }else if(left.length >= 3 && left.length < 5){
      $("#php-track, #java-track").show();
    }else if(right.length >= 2 && right.length < 5){
      $("#css-track, #ruby-track").show();
    }else if(both.length >= 2 && both.length < 5){
      $("#ruby-track, #c#-track").show();
    }else{
      $("#c#-track").show();
    }

    console.log(left);
    console.log(right);
    console.log(both);

  }); //end submit handler

});//end doc ready handler
