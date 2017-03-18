$(document).ready(
//Function for Search btn click  
  $("#searchButton").click(function(){
   //getting input word from user 
    var searchWrd=$("#searchWord").val();
 //Wikipedia API URL  
  var url="https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchWrd+"&format=json&callback=?";  
 console.log(url);
 //Ajax Call here   
 $.ajax({
   type:"GET",   
   url:url,
   async:false,
   dataType:"json",
   success:function(data){
    console.log(data[1]);
    //console.log(data[2]);
   // console.log(data[3]);
     
     for(var i=0;i<data[1].length;i++){
   $('#result').prepend("<li><a href="+data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");   
     // clear search
       
       $("#searchWord").val("");
     }
     
   },
   error:function(errorMessage){
   alert("Error");
 }     
   
   
   
   
 });
 
    
  
    
    
  })
 
   );