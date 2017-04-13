angular.module('weatherApp').service('fetchData', function($http){

    this.getData = function () {

        var vm = this;

        var locationData = "http://ip-api.com/json";

        var weatherData = $http.get(locationData).then(function(response){

            vm.lat = response.data.lat;
            vm.lon = response.data.lon;

        var apiKey = "Your_API_Key";

        var url = "http://api.openweathermap.org/data/2.5/weather?lat="+ vm.lat +"&lon="+vm.lon+"&appid=" + apiKey;

        var myData =  $http.get(url).then(function (response) {

            return response.data;

        });

            return myData;

        });

        return weatherData;

    }

});