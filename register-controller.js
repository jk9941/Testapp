angular.module("IERO").controller('RegisterController',['$scope','loginService','$state','$rootScope','$cookies',function($scope,loginService,$state,$rootScope,$cookies){


    var vm=this;
    vm.companies=['Shoppers stop'];
    vm.company=vm.companies[0];
    vm.companyId='SSL';
    vm.showAlert=false;
    
    $("#popUp").modal('hide');

    vm.register = function(){
         
        
        function success(data){
            $('#popUp').modal({
                backdrop:'static'

            });
            vm.showAlert=true;
            vm.mode="success";
            vm.dataLabel="User registered successfully.Please click on login to access application";
            
            vm.username="";
            vm.password="";
        }
        function error(reason){
            $('#popUp').modal({
                backdrop:'static'

            });
            vm.showAlert=true;
            vm.mode="danger";
            vm.dataLabel="User already registered";
            vm.username="";
            vm.password="";
        }

        loginService.register(vm.username,vm.password,vm.companyId,success,error);
    }

    vm.goTo= function(path){
         
        $state.go(path);
    }
    
    vm.close=function(){
         $("#popUp").modal('hide');
    }



}]);