angular.module('app').controller('ValidacaoCtrl', function ($scope) {
    $scope.model = {
        nome: null,
        email: null,
        tel: null,
        altura: null,
        dtNascimento: null
    };

    $scope.onSubmit = function () {
        alert('Teste')
    };
});