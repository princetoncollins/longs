var app = angular.module('longs');

app.directive('scrollOnClick', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      var idToScroll = attrs.href;
      element.on('click', function() {
        var $target;
        if (idToScroll) {
          $target = $(idToScroll);
        } else {
          $target = element;
        }
        $("body").animate({scrollTop: $target.offset().top}, "slow");
      });
    }
  }
});