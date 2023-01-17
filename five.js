var myApp = angular.module('myApp', []);

myApp.controller('myController', function($scope){
	
	
	$scope.newUser = {};
	$scope.checkedUser = {};
	

	$scope.users = 
	[
		{Name:"Mohit",  
        email:"mohit@gmail.com",  
        Phone:"9630197930",  
        Verification:"Send by a mail",  
        myVar:"Male"}
	];
	$scope.saveUser = function(){
		$scope.users.push($scope.newUser);
		$scope.newUser = {};
	
	};
	$scope.selectUser = function(user ){
		console.log(user);
		$scope.clickedUser = user;
	};
	$scope.updateUser = function(user){

	};

    $scope.delete = function(){
        var index =  this.$index;
        $scope.users.splice(index,1);
    };
 
});



/*function confirmEmail(){
    var email_id=document.getElementById("email_id").value;
    var ConfirmEmail_id=document.getElementById("ConfirmEmail_id").value;
    if(email_id != ConfirmEmail_id ){
        alert('Email not maching ');

    }
    
}*/
