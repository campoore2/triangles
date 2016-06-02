function tcheck(s1, s2, s3){
  var longest = Math.max(s1, s2, s3);
  var shortest = Math.min(s1, s2, s3);
  var sidearray = [s1, s2, s3];
  var total = 0;
  var i = 0;

for(i = 0; i < sidearray.length; i++){
    if(sidearray[i] < longest || sidearray[i]){
      total += sidearray[i];
    }
  }
 if(total >= longest ||(s1 === s2 && s2 === s3 && s3 === s1)){
   if(s1 === s2 && s2 === s3 && s3 === s1){
      return "Equilateral";
   } else if (s1 === s2 || s2 === s3 || s3 === s1) {
     if(

       return "Isosceles";
   } else if (s1 != s2 && s2 != s3 && s3 != s1){
     return "Scalene";
   }
 } else {
   return false;
 }
}

var res;
if(tcheck(1, 3, 4)){

}

$(function(){
  $(".form form").submit(function(event){
    event.preventDefault();
    var triangle = tcheck($("#s1").val(), $("#s2").val(), $("#s3").val());
    if (triangle){
      $("#res").empty().append(triangle);
      $(".form form").trigger("reset");
    }
  });

})
