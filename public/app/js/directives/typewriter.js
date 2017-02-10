angular.module('longs').

directive('typewriter', function() {

    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            $(function(){
                $(".typewriter").typed({
                    strings: ["qual^250ity work.^2000", "profe^500ssional serv^500ice.^2000", "fair p^250rices.^2000", "compl^500ete sati^250sfact^250ion.^2000"],
                    typeSpeed: 50,
                    loop: true
                });
            });
        }
    };
}); //End directive.