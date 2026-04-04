let CHECK_FROM_LOCATION;
let CHECK_FROM_LOCATION_OPEN;
let CHECK_TO_LOCATION;
let CHECK_TO_LOCATION_OPEN;
let CHECK_EMAIL;
let CHECK_NAME;
let CHECK_PHONE;
let CHECK_FLIGHT;

let EXTRAS_BABYSEAT;
let EXTRAS_BOOSTERSEAT;
let EXTRAS_GROCERY = 'No';
let EXTRAS_BEERS = 'No';
let EXTRAS_HOST = 'No';

let LANG = 'en';
let NAME;
let EMAIL;
let PAX_AIRPORT;
let PAX_AIRPORT_NUMBER;
let PHONE;

let PRICE_CASH;
let PRICE_PAYPAL;
let PRICE_TOTAL;
let PRICE_TOTAL_PAYPAL;
let PRICE_TOTAL_CASH;
let PRICE_SUBMIT_VALUE;

let SERVICE = "One way";
let SERVICE_TYPE = "Airport - Hotel";
let SERVICE_SELECT = 'Private Airport Transfers';
let SERVICE_SELECT_MAX = 17;
let SERVICE_SELECT_MIN = 1;

let PAYMENT_TYPE = 'Cash';
let TAX;
let COMMENTS;
let PICKUP_DATE;
let PICKUP_DATE_FULL;
let PICKUP_TIME;
let RETURN_DATE;
let RETURN_DATE_FULL;
let RETURN_TIME;
let FROM_LOCATION;
let FROM_LOCATION_OPEN;
let FROM_HOTEL_ZONE;
let FROM_HOTEL_ZONE_OPEN;
let TO_LOCATION;
let TO_LOCATION_OPEN;
let TO_HOTEL_ZONE;
let UNIT;
let ARRIVAL_AIRLINE;
let ARRIVAL_FLIGHT;
let DEPARTURE_AIRLINE;
let DEPARTURE_FLIGHT;
let HOTEL_NAME;
let HOTEL_NAME_OPEN;
let HOURS = '3 Hours';
let TOTAL_HOURS;

$( document ).ready(function() {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 500) {
            $("#top-menu").addClass("white");
        } else {
            $("#top-menu").removeClass("white");
        }
    });
    updateStep1();

    $("#form-pickup-date").datepicker({
        minDate: '0',
        defaultDate: '0'
    });
    $("#form-return-date").datepicker({
        minDate: '0',
        defaultDate: '0'
    });

    $("#form-pickup-date-open").datepicker({
        minDate: '0',
        defaultDate: '0'
    });

    $("#form-return-date-open").datepicker({
        minDate: '0',
        defaultDate: '0'
    });

    $('#open-service').on("click", function() {
        SERVICE_SELECT = 'Open Service';
        $('#step-1-open-service').show();
        $('#step-1-airport-private-transfer').hide();
        $('#form-container-extras-grocery').hide();
        $('#airport-transfers').removeClass('selected');
        $('#open-service').addClass('selected');
        updateOpenStep1();
    });

    $('#airport-transfers').on("click", function() {
        if (SERVICE_SELECT === 'Open Service') {
            location.reload();
        }
    });

    $('#button-from').on("click", function() {
        $('#form-hotel-from').val('');
        $('#button-from').removeClass('ready');
        $('#select-from').css("display", "block");
        $('#select-to').css("display", "none");
        if (TO_LOCATION === 'Los Cabos Airport (SJD)') {
            $('#option-from-airport').hide();
        } else {
            $('#option-from-airport').show();
        }
    });

    $('#button-to').on("click", function() {
        $('#form-hotel-to').val('');
        $('#button-to').removeClass('ready');
        $('#select-to').css("display", "block");
        if (FROM_LOCATION === 'Los Cabos Airport (SJD)') {
            $('#option-to-airport').hide();
        } else {
            $('#option-to-airport').show();
        }
    });

    $('#button-from-open').on("click", function() {
        $('#form-hotel-from-open').val('');
        $('#button-from-open').removeClass('ready');
        $('#select-from-open').css("display", "block");
    });

    $('#option-from-airport').on("click", function() {
        FROM_LOCATION = 'Los Cabos Airport (SJD)';
        SERVICE_TYPE = 'Airport - Hotel';
        CHECK_FROM_LOCATION = 'OK';
        FROM_HOTEL_ZONE = 0;
        $('#button-from').addClass('ready');
        $('#select-from').css("display", "none");
        $('#selected-from').html('Los Cabos Airport (SJD)');
    });

    $('#option-to-airport').on("click", function() {
        TO_LOCATION = 'Los Cabos Airport (SJD)';
        SERVICE_TYPE = 'Hotel - Airport';
        CHECK_TO_LOCATION = 'OK';
        TO_HOTEL_ZONE = 0;
        $('#button-to').addClass('ready');
        $('#select-to').css("display", "none");
        $('#selected-to').html('Los Cabos Airport (SJD)');
    });

    $('#add-return').on("click", function() {
        SERVICE = 'Round trip';
        $('#add-return').css("display", "none");
        $('#selected-add-return').css("display", "flex");
        $('#remove-return').css("display", "block");
        updateStep1();
    });

    $('#remove-return').on("click", function() {
        SERVICE = 'One way';
        $('#add-return').css("display", "flex");
        $('#selected-add-return').css("display", "none");
        $('#remove-return').css("display", "none");
        updateStep1();
    });

    var n = 1;
    $('#form-pax').val(n);

    $('.qtyplus').on('click', function(){
        if (n < SERVICE_SELECT_MAX) {
            $('#form-pax').val(++n);
            $('#form-pax').attr('value', n);
            $('#form-pax').attr('name', n);
        }
    })

    $('.qtyminus').on('click', function(){
        if (n > SERVICE_SELECT_MIN) {
            $('#form-pax').val(--n);
            $('#form-pax').attr('value', n);
            $('#form-pax').attr('name', n);
        }
    });

    var n2 = 1;
    $('#form-pax-open').val(n);

    $('.qtyplus-open').on('click', function(){
        if (n2 < SERVICE_SELECT_MAX) {
            $('#form-pax-open').val(++n2);
            $('#form-pax-open').attr('value', n2);
            $('#form-pax-open').attr('name', n2);
        }
    })

    $('.qtyminus-open').on('click', function(){
        if (n2 > SERVICE_SELECT_MIN) {
            $('#form-pax-open').val(--n2);
            $('#form-pax-open').attr('value', n2);
            $('#form-pax-open').attr('name', n2);
        }
    });

    // STEP 2
    $("#send-step-1").on("click", function() {
        if (SERVICE_SELECT === 'Private Airport Transfers') {
            if (
                HOTEL_NAME === 'Alegranza Resort' ||
                HOTEL_NAME === 'BelAir Sunclub Hotel Los Cabos' ||
                HOTEL_NAME === 'Cabo Surf Hotel and Spa' ||
                HOTEL_NAME === 'Casa Costa Azul' ||
                HOTEL_NAME === 'Casa Natalia' ||
                HOTEL_NAME === 'Club Campestre San Jose' ||
                HOTEL_NAME === 'Club La Costa San Jose del Cabo' ||
                HOTEL_NAME === 'Costa Azul Condo' ||
                HOTEL_NAME === 'Drift San Jose del Cabo' ||
                HOTEL_NAME === 'El Encanto Inn and Suites Hotel Boutique' ||
                HOTEL_NAME === 'El Zalate Condos' ||
                HOTEL_NAME === 'GR Solaris Lighthouse Los Cabos' ||
                HOTEL_NAME === 'Hilton Vacation Club Cabo Azul Los Cabos' ||
                HOTEL_NAME === 'Hotel Cactus Inn' ||
                HOTEL_NAME === 'Hotel Colli' ||
                HOTEL_NAME === 'Hyatt Place Los Cabos' ||
                HOTEL_NAME === 'Hyatt Ziva Los Cabos' ||
                HOTEL_NAME === 'La Joya Condo' ||
                HOTEL_NAME === 'Las Mañanitas' ||
                HOTEL_NAME === 'Las Olas Condo' ||
                HOTEL_NAME === 'Marisol Boutique Hotel' ||
                HOTEL_NAME === 'Miravista Condo' ||
                HOTEL_NAME === 'Mykonos Bay Resort' ||
                HOTEL_NAME === 'Park Royal Los Cabos' ||
                HOTEL_NAME === 'Posada Real Los Cabos' ||
                HOTEL_NAME === 'Posada Terranova' ||
                HOTEL_NAME === 'Reflect Grand Krystal Los Cabos' ||
                HOTEL_NAME === 'Royal Decameron Los Cabos' ||
                HOTEL_NAME === 'Royal Solaris Los Cabos' ||
                HOTEL_NAME === 'Sampaguita' ||
                HOTEL_NAME === 'Santa Maria Hotel and Suites' ||
                HOTEL_NAME === 'Soleado Resort' ||
                HOTEL_NAME === 'Suites Las Palmas' ||
                HOTEL_NAME === 'Tropicana Los Cabos' ||
                HOTEL_NAME === 'Viceroy Los Cabos' ||
                HOTEL_NAME === 'Vidanta Los Cabos' ||
                HOTEL_NAME === 'Viva Condos' ||
                HOTEL_NAME === 'Woldmark Coral Baja'
            ) {
                if (UNIT === 'Chevrolet Suburban') {
                    if (SERVICE === "One way") { PRICE_CASH = 70; }
                    if (SERVICE === "Round trip") { PRICE_CASH = 130; }
                } else if (UNIT === 'Toyota Hiace') {
                    if (SERVICE === "One way") { PRICE_CASH = 110; }
                    if (SERVICE === "Round trip") { PRICE_CASH = 200; }
                } else if (UNIT === 'Mercedes-Benz Sprinter') {
                    if (SERVICE === "One way") { PRICE_CASH = 190; }
                    if (SERVICE === "Round trip") { PRICE_CASH = 340; }
                }
            } else if (
                HOTEL_NAME === 'Baja Point The Westin Los Cabos Resort Villas' ||
                HOTEL_NAME === 'Casa Florencia' ||
                HOTEL_NAME === 'Cerro Colorado Residential Area' ||
                HOTEL_NAME === 'Chileno Bay Resort and Residences' ||
                HOTEL_NAME === 'Club Regina Los Cabos' ||
                HOTEL_NAME === 'Dreams Los Cabos' ||
                HOTEL_NAME === 'El Dorado Residences' ||
                HOTEL_NAME === 'Garza Blanca Resort and Spa Los Cabos' ||
                HOTEL_NAME === 'Grand Velas Los Cabos' ||
                HOTEL_NAME === 'Hampton Inn and Suites' ||
                HOTEL_NAME === 'Hilton Grand Vacations Club La Pacifica Los Cabos' ||
                HOTEL_NAME === 'Hotel El Ganzo' ||
                HOTEL_NAME === 'JW Marriott Los Cabos Beach Resort and Spa' ||
                HOTEL_NAME === 'Las Ventanas al Paraiso Rosewood Resort' ||
                HOTEL_NAME === 'Le Blanc Spa Resort Los Cabos' ||
                HOTEL_NAME === 'Maravilla Los Cabos' ||
                HOTEL_NAME === 'Marquis Los Cabos Resort and Spa' ||
                HOTEL_NAME === 'Mar del Cabo' ||
                HOTEL_NAME === 'One and Only Palmilla' ||
                HOTEL_NAME === 'Palmilla Residential' ||
                HOTEL_NAME === 'Palmilla South' ||
                HOTEL_NAME === 'Paradisus Los Cabos' ||
                HOTEL_NAME === 'Querencia' ||
                HOTEL_NAME === 'Secrets Puerto Los Cabos' ||
                HOTEL_NAME === 'Solaz Luxury Resort' ||
                HOTEL_NAME === 'The Westin Resort and Spa' ||
                HOTEL_NAME === 'Villa La Valencia Beach Resort and Spa Los Cabos' ||
                HOTEL_NAME === 'Zadun Ritz-Carlton' ||
                HOTEL_NAME === 'Zoetry Casa del Mar'
            ) {
                if (UNIT === 'Chevrolet Suburban') {
                    if (SERVICE === "One way") { PRICE_CASH = 80; }
                    if (SERVICE === "Round trip") { PRICE_CASH = 150; }
                } else if (UNIT === 'Toyota Hiace') {
                    if (SERVICE === "One way") { PRICE_CASH = 130; }
                    if (SERVICE === "Round trip") { PRICE_CASH = 220; }
                } else if (UNIT === 'Mercedes-Benz Sprinter') {
                    if (SERVICE === "One way") { PRICE_CASH = 210; }
                    if (SERVICE === "Round trip") { PRICE_CASH = 360; }
                }
            } else if (
                HOTEL_NAME === 'Bahia Hotel and Beach House' ||
                HOTEL_NAME === 'Breathless Cabo San Lucas Resort and Spa' ||
                HOTEL_NAME === 'Cabo Cush Hotel' ||
                HOTEL_NAME === 'Cabo del Sol' ||
                HOTEL_NAME === 'Cabo Inn Hotel' ||
                HOTEL_NAME === 'Cabo Vista Hotel' ||
                HOTEL_NAME === 'Casa Bella Hotel Boutique' ||
                HOTEL_NAME === 'Casa Dorada Los Cabos Resort and Spa' ||
                HOTEL_NAME === 'Casa Pablitoa' ||
                HOTEL_NAME === 'City Express Suites' ||
                HOTEL_NAME === 'Club Cascadas de Baja' ||
                HOTEL_NAME === 'Comfort Inn' ||
                HOTEL_NAME === 'Corazon Cabo Resort and Spa' ||
                HOTEL_NAME === 'El Ameyal Hotel' ||
                HOTEL_NAME === 'El Tezal Area' ||
                HOTEL_NAME === 'Esperanza An Auberge' ||
                HOTEL_NAME === 'Esperanza Residences' ||
                HOTEL_NAME === 'Estancia Real' ||
                HOTEL_NAME === 'Fairfield Inn Marriott' ||
                HOTEL_NAME === 'Four Seasons Resort at Cabo del Sol' ||
                HOTEL_NAME === 'Grand Fiesta Americana' ||
                HOTEL_NAME === 'Grand Solmar Lands End Resort and Spa' ||
                HOTEL_NAME === 'Hacienda Beach Club and Residences' ||
                HOTEL_NAME === 'Hacienda del Mar by Marriott' ||
                HOTEL_NAME === 'Hacienda Encantada Resort and Residences' ||
                HOTEL_NAME === 'Holiday Inn Express' ||
                HOTEL_NAME === 'Hyatt Vacation Club at Sirena del Mar' ||
                HOTEL_NAME === 'Los Cabos Golf Resort' ||
                HOTEL_NAME === 'Los Milagros Hotel' ||
                HOTEL_NAME === 'Los Patios Hotel' ||
                HOTEL_NAME === 'Mar de Cortez' ||
                HOTEL_NAME === 'Marina Fiesta Resort and Spa' ||
                HOTEL_NAME === 'Marina Sol' ||
                HOTEL_NAME === 'ME Cabo by Melia' ||
                HOTEL_NAME === 'Medano Hotel and Suites' ||
                HOTEL_NAME === 'Misiones del Cabo' ||
                HOTEL_NAME === 'Montage Los Cabos' ||
                HOTEL_NAME === 'Playa Grande Resort and Grand Spa' ||
                HOTEL_NAME === 'Portofino Resort' ||
                HOTEL_NAME === 'Pueblo Bonito Los Cabos Beach Resort' ||
                HOTEL_NAME === 'Pueblo Bonito Rose Resort and Spa' ||
                HOTEL_NAME === 'Puerta del Sol Villas' ||
                HOTEL_NAME === 'Puerta Vieja Boutique Hotel' ||
                HOTEL_NAME === 'Punta Ballena Area' ||
                HOTEL_NAME === 'Quintas del Sol by Solmar' ||
                HOTEL_NAME === 'Riu Baja California' ||
                HOTEL_NAME === 'Riu Palace' ||
                HOTEL_NAME === 'Riu Santa Fe' ||
                HOTEL_NAME === 'Sandos Finisterra Los Cabos' ||
                HOTEL_NAME === 'Seven Crown Express and Suites' ||
                HOTEL_NAME === 'Siesta Suites Boutique Hotel' ||
                HOTEL_NAME === 'Sofia Hostal Cabo' ||
                HOTEL_NAME === 'Solmar Resort' ||
                HOTEL_NAME === 'Sunrock Condo' ||
                HOTEL_NAME === 'The Bungalows Hotel' ||
                HOTEL_NAME === 'The Cape Thompson' ||
                HOTEL_NAME === 'The Residences at La Vista' ||
                HOTEL_NAME === 'Terrasol Cabo Beach Resort' ||
                HOTEL_NAME === 'Villa Del Arco Beach Resort and Spa' ||
                HOTEL_NAME === 'Villa Del Palmar Beach Resort and Spa' ||
                HOTEL_NAME === 'Villa La Estancia Beach Resort and Spa' ||
                HOTEL_NAME === 'Vista Azul Suites and Spa Hotel' ||
                HOTEL_NAME === 'Waldorf Astoria at Pedregal' ||
                HOTEL_NAME === 'Wyndham Tesoro'
            ) {
                if (UNIT === 'Chevrolet Suburban') {
                    if (SERVICE === "One way") { PRICE_CASH = 95; }
                    if (SERVICE === "Round trip") { PRICE_CASH = 180; }
                } else if (UNIT === 'Toyota Hiace') {
                    if (SERVICE === "One way") { PRICE_CASH = 150; }
                    if (SERVICE === "Round trip") { PRICE_CASH = 260; }
                } else if (UNIT === 'Mercedes-Benz Sprinter') {
                    if (SERVICE === "One way") { PRICE_CASH = 210; }
                    if (SERVICE === "Round trip") { PRICE_CASH = 380; }
                }
            } else if (
                HOTEL_NAME === 'Copala' ||
                HOTEL_NAME === 'Montecristo Estates' ||
                HOTEL_NAME === 'Novaispania' ||
                HOTEL_NAME === 'Pedregal Cabo San Lucas' ||
                HOTEL_NAME === 'Pueblo Bonito Pacifica Golf and Spa Resort' ||
                HOTEL_NAME === 'Pueblo Bonito Sunset Beach Golf and Spa Resort' ||
                HOTEL_NAME === 'Quivira Los Cabos'
            ) {
                if (UNIT === 'Chevrolet Suburban') {
                    if (SERVICE === "One way") { PRICE_CASH = 100; }
                    if (SERVICE === "Round trip") { PRICE_CASH = 200; }
                } else if (UNIT === 'Toyota Hiace') {
                    if (SERVICE === "One way") { PRICE_CASH = 160; }
                    if (SERVICE === "Round trip") { PRICE_CASH = 280; }
                } else if (UNIT === 'Mercedes-Benz Sprinter') {
                    if (SERVICE === "One way") { PRICE_CASH = 220; }
                    if (SERVICE === "Round trip") { PRICE_CASH = 400; }
                }
            } else if (
                HOTEL_NAME === 'Diamante Cabo San Lucas' ||
                HOTEL_NAME === 'Grand Solmar at Pacific Dunes Golf and Spa' ||
                HOTEL_NAME === 'Hard Rock Hotel' ||
                HOTEL_NAME === 'Nobu Hotel Los Cabos'
            ) {
                if (UNIT === 'Chevrolet Suburban') {
                    if (SERVICE === "One way") { PRICE_CASH = 110; }
                    if (SERVICE === "Round trip") { PRICE_CASH = 200; }
                } else if (UNIT === 'Toyota Hiace') {
                    if (SERVICE === "One way") { PRICE_CASH = 200; }
                    if (SERVICE === "Round trip") { PRICE_CASH = 300; }
                } else if (UNIT === 'Mercedes-Benz Sprinter') {
                    if (SERVICE === "One way") { PRICE_CASH = 250; }
                    if (SERVICE === "Round trip") { PRICE_CASH = 430; }
                }
            } else if ( HOTEL_NAME === 'Todos Santos' || HOTEL_NAME === 'Pescadero' ) {
                if (UNIT === 'Chevrolet Suburban') {
                    if (SERVICE === "One way") { PRICE_CASH = 250; }
                    if (SERVICE === "Round trip") { PRICE_CASH = 480; }
                } else if (UNIT === 'Toyota Hiace') {
                    if (SERVICE === "One way") { PRICE_CASH = 250; }
                    if (SERVICE === "Round trip") { PRICE_CASH = 480; }
                } else if (UNIT === 'Mercedes-Benz Sprinter') {
                    if (SERVICE === "One way") { PRICE_CASH = 250; }
                    if (SERVICE === "Round trip") { PRICE_CASH = 480; }
                }
            } else if ( HOTEL_NAME === 'La Paz' ) {
                if (UNIT === 'Chevrolet Suburban') {
                    if (SERVICE === "One way") { PRICE_CASH = 350; }
                    if (SERVICE === "Round trip") { PRICE_CASH = 700; }
                } else if (UNIT === 'Toyota Hiace') {
                    if (SERVICE === "One way") { PRICE_CASH = 350; }
                    if (SERVICE === "Round trip") { PRICE_CASH = 700; }
                } else if (UNIT === 'Mercedes-Benz Sprinter') {
                    if (SERVICE === "One way") { PRICE_CASH = 350; }
                    if (SERVICE === "Round trip") { PRICE_CASH = 700; }
                }
            } } else if ( HOTEL_NAME === 'Los Barriles' ) {
            if (UNIT === 'Chevrolet Suburban') {
                if (SERVICE === "One way") { PRICE_CASH = 250; }
                if (SERVICE === "Round trip") { PRICE_CASH = 480; }
            } else if (UNIT === 'Toyota Hiace') {
                if (SERVICE === "One way") { PRICE_CASH = 250; }
                if (SERVICE === "Round trip") { PRICE_CASH = 480; }
            } else if (UNIT === 'Mercedes-Benz Sprinter') {
                if (SERVICE === "One way") { PRICE_CASH = 250; }
                if (SERVICE === "Round trip") { PRICE_CASH = 480; }
            }
        }

        if(SERVICE_TYPE === 'Airport - Hotel') {
            $('#arrival-airline').show();
            $('#arrival-flight').show();
        } else {
            $('#departure-airline').show();
            $('#departure-flight').show();
        }

        PRICE_SUBMIT_VALUE = "Make the Confirmation (" + PRICE_CASH + "USD)";
        $('#service-options').css('display', 'none');
        $('#header-total').css('display', 'flex');
        $("#price").html(PRICE_CASH);
        $("#send-step-2").val(PRICE_SUBMIT_VALUE);

        $("#step-1-airport-private-transfer").css("display", "none");
        $("#step-2").css("display", "flex");

        if (SERVICE === "Round trip") {
            $('#is-roundtrip').css("display", "flex");
        } else {
            $('#is-roundtrip').css("display", "none");
            $('#send-step-2').css("margin-top", "60px");
        }
    });

    $("#send-step-2").on("click", function() {
        EXTRAS_BABYSEAT = $("#form-extras-babyseat").val();
        EXTRAS_BOOSTERSEAT = $("#form-extras-boosterseat").val();
        COMMENTS = $("#form-comments").val();

        $("#step-3").css("display", "flex");
        $("#step-2").css("display", "none");

        TAX = Math.round(PRICE_TOTAL_CASH * 0.08);
        PRICE_TOTAL_PAYPAL = Math.round(TAX + PRICE_TOTAL_CASH);

        var formData = {
            "homepage": 'https://caboreliabletransport.com',
            "service-select": SERVICE_SELECT,
            "service": SERVICE,
            "service-type": SERVICE_TYPE,
            "from-location": FROM_LOCATION,
            "to-location": TO_LOCATION,
            "pickup-date": PICKUP_DATE,
            "pickup-date-full": PICKUP_DATE_FULL,
            "pickup-time": PICKUP_TIME,
            "return-date": RETURN_DATE,
            "return-date-full": RETURN_DATE_FULL,
            "return-time": RETURN_TIME,
            "pax": PAX_AIRPORT_NUMBER,
            "unit": UNIT,
            "name": NAME,
            "phone": PHONE,
            "email": EMAIL,
            "hotel-name": HOTEL_NAME,
            "arrival-airline": ARRIVAL_AIRLINE,
            "arrival-flight": ARRIVAL_FLIGHT,
            "departure-airline": DEPARTURE_AIRLINE,
            "departure-flight": DEPARTURE_FLIGHT,
            "comments": COMMENTS,
            "extras-babyseat": EXTRAS_BABYSEAT,
            "extras-boosterseat": EXTRAS_BOOSTERSEAT,
            "extras-grocery": EXTRAS_GROCERY,
            "extras-beers": EXTRAS_BEERS,
            "hours": HOURS,
            "payment-type": PAYMENT_TYPE,
            "price-cash": PRICE_TOTAL_CASH,
            "price-paypal": PRICE_TOTAL_PAYPAL
        };

        $.ajax({
            type: 'POST',
            url: '/php/sendmail.php',
            dataType: "json",
            data: formData,
            success: function(response) {
                $("#thanks-before").css("display", "none");
                $("#thanks-after").css("display", "flex");
            },
            error: function(xhr, status, error){
                console.log(xhr);
            }
        });
    });

    $("#send-open-step-1").on("click", function() {
        FROM_LOCATION = FROM_LOCATION_OPEN;
        TO_LOCATION = TO_LOCATION_OPEN;
        $("#step-1-open-service").css("display", "none");
        $("#step-2").css("display", "flex");
        $('#airline-wrapper').hide();
        $('#extras-wrapper').hide();
        $('#hours-wrapper').show();
        $('#service-options').css('display', 'none');
        $('#header-total').css('display', 'flex');
        $("#price").html(`$ ${PRICE_CASH}`);
        $('#send-step-2').css('margin-top', '75px');
    });

    function updateStep1() {
        PAX_AIRPORT = $( "#form-pax" ).val();
        PAX_AIRPORT_NUMBER = parseInt(PAX_AIRPORT);
        PICKUP_DATE = $("#form-pickup-date").val();
        PICKUP_DATE_FULL = moment(PICKUP_DATE).format("dddd, MMMM D, Y");
        PICKUP_TIME = $("#form-pickup-time").val();
        RETURN_DATE = $("#form-return-date").val();
        RETURN_DATE_FULL = moment(RETURN_DATE).format("dddd, MMMM D, Y");
        RETURN_TIME = $("#form-return-time").val();

        if (PAX_AIRPORT_NUMBER === SERVICE_SELECT_MAX){
            $(".qtyplus").attr("disabled", "disabled");
        } else {
            $(".qtyplus").removeAttr("disabled", "disabled");
        }

        if (PAX_AIRPORT_NUMBER === SERVICE_SELECT_MIN){
            $(".qtyminus").attr("disabled", "disabled");
        } else {
            $(".qtyminus").removeAttr("disabled", "disabled");
        }

        if (PICKUP_DATE === "") {
            $("#button-pickup-date").removeClass("ready");
        } else {
            $("#button-pickup-date").addClass("ready");
        }

        if (PICKUP_TIME === "") {
            $("#button-pickup-time").removeClass("ready");
        } else {
            $("#button-pickup-time").addClass("ready");
        }

        if (RETURN_DATE === "") {
            $("#button-return-date").removeClass("ready");
        } else {
            $("#button-return-date").addClass("ready");
        }

        if (RETURN_TIME === "") {
            $("#button-return-time").removeClass("ready");
        } else {
            $("#button-return-time").addClass("ready");
        }
        if (SERVICE_SELECT === 'Private Airport Transfers') {
            if (PAX_AIRPORT_NUMBER > 0 && PAX_AIRPORT_NUMBER <= 6) {
                UNIT = $("#form-unit-suv").val();
                if  (UNIT === 'Chevrolet Suburban') {
                    $('#square-image img').attr('src', '/images/reservations/photos/chevrolet-suburban.png');
                } else if (UNIT === 'Cadillac Escalade') {
                    $('#square-image img').attr('src', '/images/reservations/photos/cadillac-escalade.png');
                } else if (UNIT === 'Toyota Hiace') {
                    $('#square-image img').attr('src', '/images/reservations/photos/toyota-hiace.png');
                } else if (UNIT === 'Mercedes-Benz Sprinter') {
                    $('#square-image img').attr('src', '/images/reservations/photos/mercedes-benz-sprinter.png');
                }
                $('#form-unit-suv').css('display', 'flex');
                $('#form-unit-van').css('display', 'none');
                $('#form-unit-van-xl').css('display', 'none');
            } else if (PAX_AIRPORT_NUMBER > 6 && PAX_AIRPORT_NUMBER <= 10 ) {
                UNIT = $("#form-unit-van").val();
                if (UNIT === 'Toyota Hiace') {
                    $('#square-image img').attr('src', '/images/reservations/photos/toyota-hiace.png');
                } else if (UNIT === 'Mercedes-Benz Sprinter') {
                    $('#square-image img').attr('src', '/images/reservations/photos/mercedes-benz-sprinter.png');
                }
                $('#form-unit-suv').css('display', 'none');
                $('#form-unit-van').css('display', 'flex');
                $('#form-unit-van-xl').css('display', 'none');
            } else if (PAX_AIRPORT_NUMBER > 10 ) {
                UNIT = $("#form-unit-van-xl").val();
                $('#square-image img').attr('src', '/images/reservations/photos/mercedes-benz-sprinter.png');
                $('#form-unit-suv').css('display', 'none');
                $('#form-unit-van').css('display', 'none');
                $('#form-unit-van-xl').css('display', 'flex');
            }
        }

        if ( SERVICE === "One way" && PICKUP_DATE != '' && PICKUP_TIME != '' && CHECK_FROM_LOCATION === 'OK' && CHECK_TO_LOCATION === 'OK' ) {
            $("#send-step-1").removeAttr("disabled", "disabled");
        } else if ( SERVICE === "Round trip" && PICKUP_DATE != "OK" && PICKUP_TIME != '' && RETURN_DATE != '' && RETURN_TIME != '' && FROM_LOCATION != '' && TO_LOCATION != '') {
            $("#send-step-1").removeAttr("disabled", "disabled");
        } else {
            $("#send-step-1").attr("disabled", "disabled");
        }
    }

    function updateOpenStep1(){
        PAX_AIRPORT = $( "#form-pax-open" ).val();
        PAX_AIRPORT_NUMBER = parseInt(PAX_AIRPORT);
        PICKUP_DATE = $("#form-pickup-date-open").val();
        PICKUP_DATE_FULL = moment(PICKUP_DATE).format("dddd, MMMM D, Y");
        PICKUP_TIME = $("#form-pickup-time-open").val();
        RETURN_DATE = $("#form-return-date-open").val();
        RETURN_DATE_FULL = moment(RETURN_DATE).format("dddd, MMMM D, Y");
        RETURN_TIME = $("#form-return-time-open").val();
        TO_LOCATION_OPEN = $('#form-to-open').val();

        if (PAX_AIRPORT_NUMBER === SERVICE_SELECT_MAX){
            $(".qtyplus-open").attr("disabled", "disabled");
        } else {
            $(".qtyplus-open").removeAttr("disabled", "disabled");
        }

        if (PAX_AIRPORT_NUMBER === SERVICE_SELECT_MIN){
            $(".qtyminus-open").attr("disabled", "disabled");
        } else {
            $(".qtyminus-open").removeAttr("disabled", "disabled");
        }

        if (PICKUP_DATE === "") {
            $("#button-pickup-date-open").removeClass("ready");
        } else {
            $("#button-pickup-date-open").addClass("ready");
        }

        if (PICKUP_TIME === "") {
            $("#button-pickup-time-open").removeClass("ready");
        } else {
            $("#button-pickup-time-open").addClass("ready");
        }

        if (PAX_AIRPORT_NUMBER > 0 && PAX_AIRPORT_NUMBER <= 6) {
            UNIT = $("#form-unit-suv-open").val();
            if  (UNIT === 'Chevrolet Suburban') {
                PRICE_CASH = 185;
                $('#square-image img').attr('src', '/images/reservations/photos/chevrolet-suburban.png');
            } else if (UNIT === 'Cadillac Escalade') {
                PRICE_CASH = 225;
                $('#square-image img').attr('src', '/images/reservations/photos/cadillac-escalade.png');
            } else if (UNIT === 'Toyota Hiace') {
                PRICE_CASH = 225;
                $('#square-image img').attr('src', '/images/reservations/photos/toyota-hiace.png');
            } else if (UNIT === 'Mercedes-Benz Sprinter') {
                PRICE_CASH = 300;
                $('#square-image img').attr('src', '/images/reservations/photos/mercedes-benz-sprinter.png');
            }
            $('#form-unit-suv-open').css('display', 'flex');
            $('#form-unit-van-open').css('display', 'none');
            $('#form-unit-van-xl-open').css('display', 'none');
        } else if (PAX_AIRPORT_NUMBER > 6 && PAX_AIRPORT_NUMBER <= 10 ) {
            UNIT = $("#form-unit-van-open").val();
            if (UNIT === 'Toyota Hiace') {
                PRICE_CASH = 225;
                $('#square-image img').attr('src', '/images/reservations/photos/toyota-hiace.png');
            } else if (UNIT === 'Mercedes-Benz Sprinter') {
                PRICE_CASH = 300;
                $('#square-image img').attr('src', '/images/reservations/photos/mercedes-benz-sprinter.png');
            }
            $('#form-unit-suv-open').css('display', 'none');
            $('#form-unit-van-open').css('display', 'flex');
            $('#form-unit-van-xl-open').css('display', 'none');
        } else if (PAX_AIRPORT_NUMBER > 10 ) {
            UNIT = $("#form-unit-van-xl-open").val();
            PRICE_CASH = 300;
            $('#square-image img').attr('src', '/images/reservations/photos/mercedes-benz-sprinter.png');
            $('#form-unit-suv-open').css('display', 'none');
            $('#form-unit-van-open').css('display', 'none');
            $('#form-unit-van-xl-open').css('display', 'flex');
        }

        if ( PICKUP_DATE != '' && PICKUP_TIME != '' && CHECK_FROM_LOCATION_OPEN === 'OK') {
            $("#send-open-step-1").removeAttr("disabled", "disabled");
        } else {
            $("#send-open-step-1").attr("disabled", "disabled");
        }

        if (TO_LOCATION_OPEN.trim().length < 5) {
            CHECK_TO_LOCATION_OPEN = "";
            $("#button-to-open").removeClass("ready");
        } else {
            CHECK_TO_LOCATION_OPEN = "OK";
            $("#button-to-open").addClass("ready");
        }
    }

    function updateStep2() {
        NAME = $("#form-name").val();
        EMAIL = $("#form-email").val();
        PHONE = $("#form-phone").val();
        ARRIVAL_FLIGHT = $("#form-arrival-flight").val();
        ARRIVAL_AIRLINE = $("#form-arrival-airline").val();
        DEPARTURE_FLIGHT = $("#form-departure-flight").val();
        DEPARTURE_AIRLINE = $("#form-departure-airline").val();
        EXTRAS_BABYSEAT = $("#form-extras-babyseat").val();
        EXTRAS_BOOSTERSEAT = $("#form-extras-boosterseat").val();
        EXTRAS_BABYSEAT = parseInt(EXTRAS_BABYSEAT);
        EXTRAS_BOOSTERSEAT = parseInt(EXTRAS_BOOSTERSEAT);

        if (NAME.trim().length < 5) {
            CHECK_NAME = "";
            $("#button-name").removeClass("ready");
        } else {
            CHECK_NAME = "OK";
            $("#button-name").addClass("ready");
        }

        if (EMAIL.trim().length < 5) {
            CHECK_EMAIL = "";
            $("#button-email").removeClass("ready");
        } else {
            CHECK_EMAIL = "OK";
            $("#button-email").addClass("ready");
        }

        if (PHONE.trim().length < 5) {
            CHECK_PHONE = "";
            $("#button-phone").removeClass("ready");
        } else {
            CHECK_PHONE = "OK";
            $("#button-phone").addClass("ready");
        }

        if ($("#form-extras-grocery")[0].checked === true) {
            EXTRAS_GROCERY = '30 Minutes';
        } else {
            EXTRAS_GROCERY = 'No';
        }

        if (EXTRAS_GROCERY === '30 Minutes') {
            PRICE_TOTAL_CASH = PRICE_CASH + 30;
            $("#price").html(PRICE_TOTAL_CASH);
        } else if (EXTRAS_GROCERY === 'No') {
            PRICE_TOTAL_CASH = PRICE_CASH;
            $("#price").html(`$ ${PRICE_CASH}`);
        }
        PRICE_SUBMIT_VALUE = "Make the Confirmation (" + PRICE_TOTAL_CASH + "USD)";

        $("#price").html(PRICE_TOTAL_CASH);
        $("#send-step-2").val(PRICE_SUBMIT_VALUE);

        if ( CHECK_NAME != "" && CHECK_EMAIL != '' && CHECK_PHONE != '') {
            $("#send-step-2").removeAttr("disabled", "disabled");
        } else {
            $("#send-step-2").attr("disabled", "disabled");
        }
    }

    function updateGrocery() {
        if ($("#form-extras-grocery")[0].checked === true) {
            EXTRAS_GROCERY = '30 Minutes';
        } else {
            EXTRAS_GROCERY = 'No';
        }
        updateStep2();
    }

    function updateBeer() {
        if ($("#form-extras-beers")[0].checked === true) {
            EXTRAS_BEERS = 'Yes';
        } else {
            EXTRAS_BEERS = 'No';
        }
        updateStep2();
    }

    function updateHostDriver() {
        if ($("#form-extras-host-driver")[0].checked === true) {
            EXTRAS_HOST = 'Yes';
        } else {
            EXTRAS_HOST = 'No';
        }
        updateStep2();
    }

    function updateHours() {
        HOURS = $("#form-hours").val();
        if (HOURS === '3 Hours'){
            TOTAL_HOURS = 0;
        } else if (HOURS === '4 Hours'){
            TOTAL_HOURS = 1;
        } else if (HOURS === '5 Hours'){
            TOTAL_HOURS = 2;
        } else if (HOURS === '6 Hours'){
            TOTAL_HOURS = 3;
        } else if (HOURS === '7 Hours'){
            TOTAL_HOURS = 4;
        } else if (HOURS === '8 Hours'){
            TOTAL_HOURS = 5;
        } else if (HOURS === '9 Hours'){
            TOTAL_HOURS = 6;
        } else if (HOURS === '10 Hours'){
            TOTAL_HOURS = 7;
        }

        if (UNIT === 'Chevrolet Suburban') {
            PRICE_CASH = 185 + (TOTAL_HOURS * 90);
        } else if (UNIT === 'Toyota Hiace') {
            PRICE_CASH = 225 + (TOTAL_HOURS * 90);
        } else if (UNIT === 'Mercedes-Benz Sprinter') {
            PRICE_CASH = 300 + (TOTAL_HOURS * 90);
        }
        updateStep2();
    }

    // Binds
    $("#form-hotel-from, #form-hotel-to, #form-pickup-date, #form-pickup-time, #form-return-date, #form-return-time, #form-unit-suv, #form-unit-van").on("change", updateStep1);
    $("#form-hotel-from-open, #form-to-open, #form-pickup-date-open, #form-pickup-time-open, #form-unit-suv-open, #form-unit-van-open").on("change", updateOpenStep1);
    $('.qtyplus, .qtyminus').on("click", updateStep1);
    $('.qtyplus-open, .qtyminus-open').on("click", updateOpenStep1);
    $('#form-name, #form-phone, #form-arrival-airline, #form-arrival-flight, #form-departure-airline, #form-departure-flight').on("change, keydown", updateStep2);
    $('#form-email').on("change", updateStep2);
    $('#form-extras-grocery').on("change", updateGrocery);
    $('#form-extras-beers').on("change", updateBeer);
    $('#form-extras-host-driver').on("change", updateHostDriver);
    $('#form-hours').on("change", updateHours);

    var hoteloptionsfrom = {
        url: '/json/transfers.json',
        getValue: 'name',
        listLocation: "hotel",
        template: {
            type: "text",
            fields: {
                link: "name"
            }
        },

        list: {
            match: {
                enabled: true
            },
            onSelectItemEvent: function(elem) {
                FROM_LOCATION = $("#form-hotel-from").getSelectedItemData().name;
                FROM_HOTEL_ZONE = $("#form-hotel-from").getSelectedItemData().zone;
            },
            onChooseEvent: function () {
                $('#selected-from').html(FROM_LOCATION);
                $('#select-from').css("display", "none");
                $('#form-hotel-from').val('');
                $('#button-from').addClass('ready');
                $('#option-to-hotel').hide();
                CHECK_FROM_LOCATION = 'OK';
                if(FROM_LOCATION != 'Los Cabos Airport (SJD)') {
                    HOTEL_NAME = FROM_LOCATION;
                }
            }
        },
        theme: "round"
    };

    $("#form-hotel-from").easyAutocomplete(hoteloptionsfrom);

    var hoteloptionsto = {
        url: '/json/transfers.json',
        getValue: 'name',
        listLocation: "hotel",
        template: {
            type: "text",
            fields: {
                link: "name"
            }
        },

        list: {
            match: {
                enabled: true
            },
            onSelectItemEvent: function(elem) {
                TO_LOCATION = $("#form-hotel-to").getSelectedItemData().name;
                TO_HOTEL_ZONE = $("#form-hotel-to").getSelectedItemData().zone;
            },
            onChooseEvent: function () {
                $('#selected-to').html(TO_LOCATION);
                $('#select-to').css("display", "none");
                $('#form-hotel-to').val('');
                $('#button-to').addClass('ready');
                $('#option-from-hotel').hide();
                CHECK_TO_LOCATION = 'OK';
                if(TO_LOCATION != 'Los Cabos Airport (SJD)') {
                    HOTEL_NAME = TO_LOCATION;
                }
            }
        },
        theme: "round"
    };

    $("#form-hotel-to").easyAutocomplete(hoteloptionsto);

    var hoteloptionsfromopen = {
        url: '/json/transfers.json',
        getValue: 'name',
        listLocation: "hotel",
        template: {
            type: "text",
            fields: {
                link: "name"
            }
        },

        list: {
            match: {
                enabled: true
            },
            onSelectItemEvent: function(elem) {
                FROM_LOCATION_OPEN = $("#form-hotel-from-open").getSelectedItemData().name;
                FROM_HOTEL_ZONE_OPEN = $("#form-hotel-from-open").getSelectedItemData().zone;
            },
            onChooseEvent: function () {
                $('#selected-from-open').html(FROM_LOCATION_OPEN);
                $('#select-from-open').css("display", "none");
                $('#form-hotel-from-open').val('');
                $('#button-from-open').addClass('ready');
                CHECK_FROM_LOCATION_OPEN = 'OK';
                HOTEL_NAME_OPEN = FROM_LOCATION_OPEN;
            }
        },
        theme: "round"
    };

    $("#form-hotel-from-open").easyAutocomplete(hoteloptionsfromopen);

});