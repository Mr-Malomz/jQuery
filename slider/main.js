$(function(){
    let $sliderImages = $('.slide');
    let $rightArrow = $('#arrow-right');
    let $leftArrow = $('#arrow-left');
    let initial =  0;

    // first we loop through all the images & hide them at start
    function reset() {$sliderImages.each(function(i){
        $(this).css('display', 'none');
    })};

    //define another function to initialise it with the first picture in the loop above
    function init() {
        reset() 
        $sliderImages.eq(0).css('display', 'block')
    };

    //function to show prev slide
    function leftSlide() {
        reset();
        $sliderImages.eq([initial - 1]).css('display', 'block');
        initial -=1; // keep substracting 1 to go to prev slide
    }
    //next slide
    function rightSlide() {
        reset();
        $sliderImages.eq([initial + 1]).css('display', 'block');
        initial +=1;
    }

    //left arrow event
    $leftArrow.on('click', function(){
        if(initial === 0) {
            initial =$sliderImages.length;
        }
        leftSlide();
    });

    //right arrow event
    $rightArrow.on('click', function(){
        if(initial === $sliderImages.length - 1) {
            initial = -1
        }
        rightSlide();
    });

    init();

    
});