app.controller('ComentarioCtrl', ['$scope', 'ComentarioService', function ($scope, ComentarioService) {
    $scope.arrComentarios = [];
    console.log(ComentarioService);
    ComentarioService.buscarTodos().then(
        function (r) {
            $scope.arrComentarios = r;
        },
        function (errResponse) {
            console.error(errResponse);
        }
    );
}]);