/**
 * Created by RISH on 6/1/2016.
 */

var app = angular.module("app",[]);

app.controller('decrypt', function($scope){
  $scope.algo1 = function(str){
    var newStr="";
    if(str.length === 0){alert("Empty String");}
    else{
      var word = str.split(" ");
      for(var i = 0; i<word.length;i++){
        newStr = newStr.concat(word[i].charAt(0));
        if(word[i].search(",") > 0){
          newStr = newStr.concat(" ");
        }
      }
    }
      $scope.data = newStr;    
    };
    
   $scope.algo2 = function(str){ 
     if(str.length === 0){alert("Empty String");}
     else{
     var word = str.split(" ");
     var N = word[0].length-1;
     var newStr="";
     for(var i = 1; i<word.length;i++){
       
       if(word[i].charAt(N) !== ""){
         newStr = newStr.concat(word[i].charAt(N));
       }
       else{
         newStr = newStr.concat(" ");
       }
     }
     
     $scope.data = newStr;
   }
   }
  })
  
  

