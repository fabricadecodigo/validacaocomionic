angular.module('app').directive('telefone', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$validators.telefone = function (modelValue, viewValue) {
                var TELEFONE_REGEXP = /^(\([0-9]{2}\))\s([9]{1})?([0-9]{4})-([0-9]{4})$/;
                
                if (ctrl.$isEmpty(modelValue)) {
                    // considerar o campo vazio como valido
                    return true;
                }

                if (TELEFONE_REGEXP.test(viewValue)) {
                    // se passar no teste está valido
                    return true;
                }

                // Não é valido
                return false;
            };
        }
    };
});