//normal js function

var captchaSuccess = function(response){
    var el = document.querySelector('.g-recaptcha'),
            $el = angular.element(el),
            $scope = $el.scope();

            $scope && $scope.captchaSuccess(response);
}

var captchaExpired = function(){
    var el = document.querySelector('.g-recaptcha'),
            $el = angular.element(el),
            $scope = $el.scope();

            $scope && $scope.captchaExpired();
}
//normal js func end

angular.module("invente",[])
.controller("regFormController", ['$scope', '$http', function($scope, $http){

    $scope.data = {
        uname : "",
        college : "",
        year : "",
        branch: "",
        email : "",
        phone : "",
        gcaptchaResponse : ""

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
    $scope.errMsg = "";

    $scope.dismissPopup = function(){
		$scope.popup = false;
	}

    $scope.gcaptchaed = false;

    $scope.captchaSuccess = function(response){
        $scope.gcaptchaed = true;
        $scope.$apply();
    }

    $scope.captchaExpired = function(){
        $scope.gcaptchaed = false;
        $scope.$apply();
    }

    $scope.register = function(){
        if($scope.data.branch === '') $scope.invalidBranchSelection = true; else $scope.invalidBranchSelection = false;
        if($scope.data.year === '') $scope.invalidYearSelection = true; else $scope.invalidYearSelection = false;

        if(!($scope.invalidBranchSelection || $scope.invalidYearSelection)){
            $scope.invalidBranchSelection = false;
            $scope.invalidYearSelection = false;
            
            $scope.data.gcaptchaResponse = grecaptcha.getResponse();
			// console.log($scope.data.gcaptchaResponse);
            
            $http.post("onlinereg.php",$scope.data, {}).then(
                function(res){
                    console.log(res);
                    $scope.data = {
                        uname : "",
                        college : "",
                        year : "",
                        branch: "",
                        email : "",
                        phone : "",
                        gcaptchaResponse : ""
                    }     
                    $scope.gcaptchaed = false;
                    grecaptcha.reset();
                    $scope.regForm.$setPristine();

                    if(res.data.success === true) {
                        $scope.recommended = true;
                        $scope.errMsg = "";
                    }
                    else {
                        $scope.recommended = false;
                        $scope.errMsg = res.data.message;
                    }
                    $scope.popup = true;

                }, function(err){
                    console.log(err);
                }
            )
        }
    }
}])