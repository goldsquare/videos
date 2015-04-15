 var app = angular.module('app', [
 	'app.controllers',
 	]);

app.config(["$routeProvider", function ($routeProvider) {
  $routeProvider

    .otherwise({redirectTo: "/"})
}])

/*
$scope.findData = function()
{
	$http.get({
		method:'GET',
		url:'/api/mail'

	}).success( function (data) {

		console.log(data);

	}).error( function (err) {
		console.log(err);
	});
} 


$scope.mail = function()
{

$http({
		method:'GET',
		url:'/api/mail/'
	}).success( function (data,status,headers,config) {

		//console.log('card charged');

	}).error( function (){
		console.log('ERROR');
	});

    }

$scope.post = function()
{

var amount = $("#field").val(); 
 total = parseFloat(amount) / 0.01;

// Open Checkout with further options
    handler.open({
      name: "january",
      description: 19,//date+suffix,
      amount: total
    });
// console.log(total);

	// var amount = $("#field").val(); 
	// var total = parseFloat(amount) / 0.01;
	// console.log('posting');
// 	$http.post(server+'/api/products/').success( function(data,err) {
// console.log(data);
// console.log(err);
// $scope.get();

//});

}

$scope.delete = function(i)
{
	$http.delete(server+'/api/products/'+i).success( function(data,err) {
console.log(data);
console.log(err);

$scope.get();
});

}
*/




