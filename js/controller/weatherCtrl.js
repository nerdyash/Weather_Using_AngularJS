angular.module('weatherApp').controller('weatherCtrl', function(fetchData){

    var vm = this;

    fetchData.getData().then(function(data){

        vm.Info = data;
        vm.icon = "http://openweathermap.org/img/w/"+vm.Info.weather[0].icon+".png"
    });

});