angular.module("invente",[])
.controller("regFormController", ['$scope', '$http', function($scope, $http){

    $scope.data = {
        uname : "",
        college : "",
        year : "",
        branch: "",
        email : "",
        phone : ""

    }

    $scope.years =[
			{
				value : 1,
				label : 'I'
			},
			{
				value : 2,
				label : 'II'
			},
			{
				value : 3,
				label : 'III'
			},
			{
				value : 4,
				label : 'IV'
			}
		]

    $scope.invalidYearSelection = false;

    $scope.branches = [
        {
            value: "CSE",
            label : "CSE"
        },
        {
            value: "IT",
            label : "IT"
        },
        {
            value: "ECE",
            label : "ECE"
        },
        {
            value: "EEE",
            label : "EEE"
        },
        {
            value: "Civil",
            label : "Civil"
        },
        {
            value: "Mech",
            label : "Mech"
        },
        {
            value: "Chemical",
            label : "Chemical"
        },
        {
            value: "EandI",
            label : "E&I"
        },
        {
            value: "Biomedical",
            label : "Biomedical"
        },
        {
            value: "Aerospace",
            label : "Aerospace"
        },
        {
            value: "Mechatronics",
            label : "Mechatronics"
        },
        {
            value: "Automobile",
            label : "Automobile"
        },
        {
            value: "Agricultural",
            label : "Agricultural"
        },
        {
            value: "Textile",
            label : "Textile Engg."
        },
        {
            value: "FoodTechnology",
            label : "Food Technology"
        },
        {
            value: "Petrochemical",
            label : "Petrochemical"
        },
        {
            value: "PlasticTechnology",
            label : "Plastic Technology"
        },
        {
            value: "Other",
            label : "Other"
        }
    ]

    $scope.invalidBranchSelection = false;


	$scope.popup = false;
	$scope.recommended = true;

    $scope.dismissPopup = function(){
		$scope.popup = false;
	}

    $scope.register = function(){
        if($scope.data.branch === '') $scope.invalidBranchSelection = true; else $scope.invalidBranchSelection = false;
        if($scope.data.year === '') $scope.invalidYearSelection = true; else $scope.invalidYearSelection = false;

        if(!($scope.invalidBranchSelection || $scope.invalidYearSelection)){
            $scope.invalidBranchSelection = false;
            $scope.invalidYearSelection = false;
            
			console.log($scope.data);
            
            $http.post("onlinereg.php",$scope.data, {}).then(
                function(res){
                    console.log(res);
                    $scope.data = {
                        uname : "",
                        college : "",
                        year : "",
                        branch: "",
                        email : "",
                        phone : ""

                    }
                    $scope.regForm.$setPristine();

                    if(res.data.success === true) $scope.recommended = true;
                    else $scope.recommended = false;
                    $scope.popup = true;

                }, function(err){
                    console.log(err);
                }
            )
        }
    }
}])