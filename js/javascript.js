
var app = angular
          .module("myModule",[])
          .controller("myController", function($scope){
              var auto = [
              { prijs:48.000,merk:"Tesla",auto:"mode12",gewicht:5774,num:1,kleur:"wit",brandstof:"elektriciteit"},
              { prijs:90.000,merk:"Tesla",auto:"modelS",gewicht:5422,num:2,kleur:"zwart",brandstof:"elektriciteit"},
              { prijs:100.000,merk:"Tesla",auto:"modelX",gewicht:1122,num:3,kleur:"zwart",brandstof:"elektriciteit"},
              { prijs:71.000,merk:"Mercedes",auto:"etron",gewicht:3221,num:4,kleur:"wit",brandstof:"elektriciteit"},
              { prijs:33.500,merk:"Audi",auto:"tt",gewicht:5654,num:5,kleur:"grijs",brandstof:"Dezel"},
              { prijs:132.300,merk:"BMW",auto:"amg gt",gewicht:3165,num:6,kleur:"grijs",brandstof:"Dezel"},
              { prijs:99.900,merk:"Mercedes",auto:"i8",gewicht:3168 ,num:7,kleur:"wit",brandstof:"hybrid"},
              { prijs:123.000,merk:"Jaguar",auto:"Xj",gewicht:1654,num:8,kleur:"groen",brandstof:"benzine"},
              { prijs:260.000,merk:"Lamborghini",auto:"Urus ",gewicht:1654,num:9,kleur:"zwart",brandstof:"Dezel"},
              { prijs:45.400,merk:"BMW",auto:"turismo",gewicht:1564,num:10,kleur:"blauw",brandstof:"benzine"},
            ];

            $scope.auto = auto; $scope.sortColumn = "num"; $scope.reverseSort = false;

            $scope.sortData = function (colom){
              $scope.reverseSort = ($scope.sortColumn == colom) ? !scope.reverseSort : false;
              $scope.sortColumn = colom;
            }
          });
