angular.module('starter.directives', [])


    
.directive('backImg', function(){
    return function(scope, element, attrs){
        var url = attrs.backImg;
        var content = element.find('a');
        content.css({
            'background-image': 'url(' + url +')',
            'height' : '120px',
            'background-size' : 'cover',
//            '-webkit-filter' : 'blur(3px)', 
//            'filter' : 'blur(3px)',
            'z-index' : '1',
            'display' : 'block'
        });
    };
})

.directive('unBlur', function(){
    return function(scope, element, attrs){
        var content = element.find('a');
        content.css({
            '-webkit-filter' : 'blur(0px)', 
            'filter' : 'blur(0px)'
        });
    };
});