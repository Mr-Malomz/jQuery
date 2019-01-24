$(function() {
    //side bar
    $('#mob-nav').on('click', function () {
        $('#mobile-menu').toggle()
    });

    
    //display amount
    $('#amount').on('keyup', function(e) {
        let $amt = $(this).val();
        $('#check-amt').text($amt);
        $('#final-amt').text($amt);
    });

       
    //Card type selectiion
    function CadSelect() {
        const $cardList = {
            masterCad :'https://drive.google.com/uc?id=1bqUr0NyK9X97yY3JOyDb7ByUbwPvw9u_',
            verveCad :'https://drive.google.com/uc?id=1kxRBi7GoYwP4HL9zpQx-hfUTilht3HIC',
            visaCad :'https://drive.google.com/uc?id=1hgtNaIjzct5OdAH4bdXIqsRpEQ6dvyYo'
        }; 
        $('select').on('change', function(e) {
            let cardType = e.currentTarget.value;

            if(cardType == 'MasterCad') {
                $('span img').attr('src', $cardList.masterCad)
            }  
            else if(cardType == 'Verve') {
                $('span img').attr('src', $cardList.verveCad)
            } 
            else if(cardType == 'visa') {
                $('span img').attr('src', $cardList.visaCad)
            }
            else {
                $('span img').attr('src', '')
            };
        })

    }
    CadSelect();

    //validation landing page
    function ValLand() {
        
        $('#clikPay').on('click', function(){
            let $amountField1 = $('#final-amt').text();
            let $cardSelect = $('select').val();
            if($amountField1 == '' || $cardSelect == 'def') {
                 $('.warning').css('display','block');
                 $('#amount').css('border', '1px solid red');
                 $('#card-warning').css('display','block');
                $('#card-type').css('border', '1px solid red');    
             }
           
            else {
                 $('.landing-page').css('display', 'none');
                 $('.container').css('display', 'block');  
             }
             
        });
    }   
    ValLand();


    //final pay
    function PayOn() {
       
        $('#randm').text(Math.floor(Math.random()*100000000000000000)); //success output number

        $('#payOn').on('click', function() {
            let $cardNo = $('#card-no').val();
            let $cardDate = $('#card-date').val();
            let $cardCVV = $('#card-cvv').val();

            if(!$cardNo == '' && !$cardDate == '' && !$cardNo == '') {
                $('#alert').css('display', 'block');
                $('.container').css('visibility', 'hidden');
            
            }
        }) 
    };
    PayOn();

    //cancel pay
    function CancelPay() {
        $('#Close').on('click', function() {
            $('#alert-none').css('display', 'block');
            $('.container').css('visibility', 'hidden');
        })
    };
    CancelPay();
    
})