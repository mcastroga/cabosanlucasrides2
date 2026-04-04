let CHECK_FROM_LOCATION;
let CHECK_TO_LOCATION;
let CHECK_EMAIL;
let CHECK_NAME;
let CHECK_PHONE;
let CHECK_FLIGHT;

let EXTRAS_BABYSEAT;
let EXTRAS_BOOSTERSEAT;
let EXTRAS_GROCERY;
let EXTRAS_BABYSEAT_TOTAL;
let EXTRAS_BOOSTERSEAT_TOTAL;
let EXTRAS_GROCERY_TOTAL;

let LANG = 'en';
let NAME;
let EMAIL;
let PAX_AIRPORT;
let PAX_AIRPORT_NUMBER;
let PHONE;

let PRICE_CASH;
let PRICE_STAREX_CASH;
let PRICE_SIENNA_CASH;
let PRICE_SUBURBAN_CASH;
let PRICE_HIACE_CASH;
let PRICE_SPRINTER_CASH;
let PRICE_PAYPAL;
let PRICE_TOTAL;
let PRICE_TOTAL_PAYPAL;
let PRICE_TOTAL_CASH;
let PRICE_SUBMIT_VALUE;

let SERVICE = "One way";
let SERVICE_TYPE = "Airport - Hotel";
let SERVICE_SELECT = 'Private Airport Transfers';
let SERVICE_SELECT_MAX = 16;
let SERVICE_SELECT_MIN = 1;
let PROMO_SEARCH;
let PROMO;
let PROMO_PRICE;

let PAYMENT_TYPE = 'Cash';
let COMMENTS;
let PICKUP_DATE;
let PICKUP_DATE_FULL;
let PICKUP_TIME;
let RETURN_DATE;
let RETURN_DATE_FULL;
let RETURN_TIME;
let FROM_LOCATION;
let FROM_HOTEL_ZONE;
let TO_LOCATION;
let TO_HOTEL_ZONE;
let UNIT;
let UNIT_SELECTED = 'Toyota Sienna';
let ARRIVAL_AIRLINE;
let ARRIVAL_FLIGHT;
let DEPARTURE_AIRLINE;
let DEPARTURE_FLIGHT;
let HOTEL_NAME;

$( document ).ready(function() {
    updateStep1();

    paypal.Buttons({
        // Set up the transaction
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: PRICE_TOTAL_PAYPAL
                    }
                }]
            });
        },
        // Finalize the transaction
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                // Show a success message to the buyer
                alert('Transaction completed by ' + details.payer.name.given_name + '!');
            });
        }
    }).render('#paypal-button-container');

    $("#form-pickup-date").datepicker({
        minDate: '0',
        defaultDate: '0'
    });
    $("#form-return-date").datepicker({
        minDate: '0',
        defaultDate: '0'
    });

    $('#form-container-pickup-date').on('click', function() {
        $('#form-pickup-date').focus().click();
    });

    $('#form-container-return-date').on('click', function() {
        $('#form-return-date').focus().click();
    });

    $('#form-pickup-time').timepicker({
        timeFormat: 'h:mm p',
        interval: 15,
        minTime: '4',
        maxTime: '11:00pm',
        defaultTime: '10',
        startTime: '4:00',
        dynamic: false,
        dropdown: true,
        scrollbar: true
    });

    $('#form-return-time').timepicker({
        timeFormat: 'h:mm p',
        interval: 10,
        minTime: '5',
        maxTime: '11:00pm',
        defaultTime: '10',
        startTime: '5:00',
        dynamic: false,
        dropdown: true,
        scrollbar: true
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

    $('#add-promo').on("click", function() {
        PROMO_SEARCH = 'Ok';
        $('#add-promo').css("display", "none");
        $('#selected-add-promo').css("display", "flex");
        $('#remove-promo').css("display", "block");
        updateStep1();
    });

    $('#remove-promo').on("click", function() {
        PROMO_SEARCH = '';
        $('#add-promo').css("display", "flex");
        $('#selected-add-promo').css("display", "none");
        $('#remove-promo').css("display", "none");
        updateStep1();
    });

    $('#select-toyota-sienna').on("click", function() {
        UNIT_SELECTED = 'Toyota Sienna';
        $('#select-toyota-sienna').addClass('selected');
        $('#select-chevrolet-suburban').removeClass('selected');
        $('#select-toyota-hiace').removeClass('selected');
        $('#select-mercedes-benz-sprinter').removeClass('selected');
    });

    $('#select-chevrolet-suburban').on("click", function() {
        UNIT_SELECTED = 'Chevrolet Suburban';
        $('#select-toyota-sienna').removeClass('selected');
        $('#select-chevrolet-suburban').addClass('selected');
        $('#select-toyota-hiace').removeClass('selected');
        $('#select-mercedes-benz-sprinter').removeClass('selected');
    });

    $('#select-toyota-hiace').on("click", function() {
        UNIT_SELECTED = 'Toyota Hiace';
        $('#select-hyundai-starex').removeClass('selected');
        $('#select-chevrolet-suburban').removeClass('selected');
        $('#select-toyota-hiace').addClass('selected');
        $('#select-mercedes-benz-sprinter').removeClass('selected');
    });

    $('#select-mercedes-benz-sprinter').on("click", function() {
        UNIT_SELECTED = 'Mercedes-Benz Sprinter';
        $('#select-hyundai-starex').removeClass('selected');
        $('#select-chevrolet-suburban').removeClass('selected');
        $('#select-toyota-hiace').removeClass('selected');
        $('#select-mercedes-benz-sprinter').addClass('selected');
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

    // STEP 2

    $('#goToStep2').on("click", function() {
        if (UNIT_SELECTED === 'Toyota Sienna') {
            PRICE_CASH = PRICE_SIENNA_CASH;
        } else if (UNIT_SELECTED === 'Chevrolet Suburban') {
            PRICE_CASH = PRICE_SUBURBAN_CASH;
        } else if (UNIT_SELECTED === 'Toyota Hiace') {
            PRICE_CASH = PRICE_HIACE_CASH;
        } else if (UNIT_SELECTED === 'Mercedes-Benz Sprinter') {
            PRICE_CASH = PRICE_SPRINTER_CASH;
        }

        if (PROMO === 'WOOWOO' ) {
            PRICE_CASH = PROMO_PRICE;
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
            if (PAX_AIRPORT_NUMBER > 0 && PAX_AIRPORT_NUMBER <= 5) {
                UNIT = $("#form-unit-suv").val();
                if (UNIT === 'Private Car') {
                    $('#square-image img').attr('src', '/images/reservations/photos/chevrolet-suburban.png');
                } else if (UNIT === 'Private Van') {
                    $('#square-image img').attr('src', '/images/reservations/photos/toyota-hiace.png');
                }
                $('#form-unit-suv').css('display', 'flex');
                $('#form-unit-van').css('display', 'none');
            } else if (PAX_AIRPORT_NUMBER > 5 && PAX_AIRPORT_NUMBER <= 10) {
                UNIT = $("#form-unit-van").val();
                $('#square-image img').attr('src', '/images/reservations/photos/toyota-hiace.png');
                $('#form-unit-suv').css('display', 'none');
                $('#form-unit-van').css('display', 'flex');
            } else if (PAX_AIRPORT_NUMBER > 10) {
                UNIT = $("#form-unit-van").val();
                $('#square-image img').attr('src', '/images/reservations/photos/mercedes-benz-sprinter.png');
                $('#form-unit-suv').css('display', 'none');
                $('#form-unit-van').css('display', 'flex');
            }
        }

        if (
            (SERVICE === "One way" &&
                PICKUP_DATE != '' &&
                PICKUP_TIME != '' &&
                CHECK_FROM_LOCATION === 'OK' &&
                CHECK_TO_LOCATION === 'OK') ||
            (SERVICE === "Round trip" &&
                PICKUP_DATE != "OK" &&
                PICKUP_TIME != '' &&
                RETURN_DATE != '' &&
                RETURN_TIME != '' &&
                FROM_LOCATION != '' &&
                TO_LOCATION != ''
            )
        ) {
            if ($("#send-step-1").length === 0) {
                $("#wrapper-submit-step-1").html(
                    '<button class="submit-button" id="send-step-1" type="button" data-bs-toggle="modal" data-bs-target="#step1Modal">' +
                    '<img src="/images/reservations/icons/search.svg" height="22px"/> Search' +
                    '</button>'
                );

                $("#send-step-1").on("click", function() {
                    PROMO = $('#form-promo').val();
                    if (SERVICE_SELECT === 'Private Airport Transfers') {
                        if (
                            HOTEL_NAME === 'Alegranza Resort' ||
                            HOTEL_NAME === 'BelAir Sunclub Hotel Los Cabos' ||
                            HOTEL_NAME === 'Hyatt Ziva Los Cabos' ||
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
                            HOTEL_NAME === 'Park Royal Los Cabos' ||
                            HOTEL_NAME === 'Posada Real Los Cabos' ||
                            HOTEL_NAME === 'Posada Terranova' ||
                            HOTEL_NAME === 'Royal Decameron Los Cabos' ||
                            HOTEL_NAME === 'Royal Solaris Los Cabos' ||
                            HOTEL_NAME === 'Sampaguita' ||
                            HOTEL_NAME === 'Santa Maria Hotel and Suites' ||
                            HOTEL_NAME === 'Soleado Resort' ||
                            HOTEL_NAME === 'Suites Las Palmas' ||
                            HOTEL_NAME === 'Tropicana Los Cabos' ||
                            HOTEL_NAME === 'Viceroy Los Cabos' ||
                            HOTEL_NAME === 'Vidanta Los Cabos' ||
                            HOTEL_NAME === 'Viva Condos'
                        ) {
                            if (SERVICE === "One way") {
                                PRICE_SIENNA_CASH = 65;
                                PRICE_SUBURBAN_CASH = 75;
                                PRICE_HIACE_CASH = 90;
                                PRICE_SPRINTER_CASH = 125;
                            } else {
                                PRICE_SIENNA_CASH = 115;
                                PRICE_SUBURBAN_CASH = 150;
                                PRICE_HIACE_CASH = 160;
                                PRICE_SPRINTER_CASH = 235;
                            }
                        } else if (
                            HOTEL_NAME === 'Baja Point The Westin Los Cabos Resort Villas' ||
                            HOTEL_NAME === 'Cabo Surf Hotel and Spa' ||
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
                            HOTEL_NAME === 'Miravista Condo' ||
                            HOTEL_NAME === 'Mykonos Bay Resort' ||
                            HOTEL_NAME === 'One and Only Palmilla' ||
                            HOTEL_NAME === 'Palmilla Residential' ||
                            HOTEL_NAME === 'Palmilla South' ||
                            HOTEL_NAME === 'Paradisus Los Cabos' ||
                            HOTEL_NAME === 'Querencia' ||
                            HOTEL_NAME === 'Reflect Grand Krystal Los Cabos' ||
                            HOTEL_NAME === 'Secrets Puerto Los Cabos' ||
                            HOTEL_NAME === 'Solaz Luxury Resort' ||
                            HOTEL_NAME === 'Villa Valencia Beach Resort and Spa Los Cabos' ||
                            HOTEL_NAME === 'The Westin Resort and Spa' ||
                            HOTEL_NAME === 'Worldmark Coral Baja' ||
                            HOTEL_NAME === 'Zadun Ritz-Carlton' ||
                            HOTEL_NAME === 'Zoetry Casa del Mar'
                        ) {
                            if (SERVICE === "One way") {
                                PRICE_SIENNA_CASH = 80;
                                PRICE_SUBURBAN_CASH = 85;
                                PRICE_HIACE_CASH = 110;
                                PRICE_SPRINTER_CASH = 135;
                            } else {
                                PRICE_SIENNA_CASH = 140;
                                PRICE_SUBURBAN_CASH = 160;
                                PRICE_HIACE_CASH = 200;
                                PRICE_SPRINTER_CASH = 255;
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
                            HOTEL_NAME === 'Casa Pablito' ||
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
                            if (SERVICE === "One way") {
                                PRICE_SIENNA_CASH = 85;
                                PRICE_SUBURBAN_CASH = 90;
                                PRICE_HIACE_CASH = 140;
                                PRICE_SPRINTER_CASH = 200;
                            } else {
                                PRICE_SIENNA_CASH = 160;
                                PRICE_SUBURBAN_CASH = 170;
                                PRICE_HIACE_CASH = 270;
                                PRICE_SPRINTER_CASH = 355;
                            }
                        } else if (
                            HOTEL_NAME === 'Copala' ||
                            HOTEL_NAME === 'Diamante Cabo San Lucas' ||
                            HOTEL_NAME === 'Grand Solmar at Pacific Dunes Golf and Spa' ||
                            HOTEL_NAME === 'Hard Rock Hotel' ||
                            HOTEL_NAME === 'Montecristo Estates' ||
                            HOTEL_NAME === 'Nobu Hotel Los Cabos' ||
                            HOTEL_NAME === 'Novaispania' ||
                            HOTEL_NAME === 'Pedregal Cabo San Lucas' ||
                            HOTEL_NAME === 'Pueblo Bonito Pacifica Golf and Spa Resort' ||
                            HOTEL_NAME === 'Pueblo Bonito Sunset Beach Golf and Spa Resort' ||
                            HOTEL_NAME === 'Quivira Los Cabos'
                        ) {
                            if (SERVICE === "One way") {
                                PRICE_SIENNA_CASH = 85;
                                PRICE_SUBURBAN_CASH = 90;
                                PRICE_HIACE_CASH = 140;
                                PRICE_SPRINTER_CASH = 200;
                            } else {
                                PRICE_SIENNA_CASH = 160;
                                PRICE_SUBURBAN_CASH = 170;
                                PRICE_HIACE_CASH = 270;
                                PRICE_SPRINTER_CASH = 355;
                            }
                        } else if (HOTEL_NAME === 'Todos Santos' || HOTEL_NAME === 'Pescadero') {
                            if (SERVICE === "One way") {
                                PRICE_SIENNA_CASH = 175;
                                PRICE_SUBURBAN_CASH = 200;
                                PRICE_HIACE_CASH = 260;
                                PRICE_SPRINTER_CASH = 330;
                            } else {
                                PRICE_SIENNA_CASH = 330;
                                PRICE_SUBURBAN_CASH = 380;
                                PRICE_HIACE_CASH = 490;
                                PRICE_SPRINTER_CASH = 600;
                            }
                        } else if (HOTEL_NAME === 'Buena Vista' || HOTEL_NAME === 'Los Barriles') {
                            if (SERVICE === "One way") {
                                PRICE_SIENNA_CASH = 150;
                                PRICE_SUBURBAN_CASH = 200;
                                PRICE_HIACE_CASH = 260;
                                PRICE_SPRINTER_CASH = 330;
                            } else {
                                PRICE_SIENNA_CASH = 280;
                                PRICE_SUBURBAN_CASH = 380;
                                PRICE_HIACE_CASH = 490;
                                PRICE_SPRINTER_CASH = 600;
                            }
                        } else if (HOTEL_NAME === 'La Paz') {
                            if (SERVICE === "One way") {
                                PRICE_SIENNA_CASH = 250;
                                PRICE_SUBURBAN_CASH = 350;
                                PRICE_HIACE_CASH = 470;
                                PRICE_SPRINTER_CASH = 600;
                            } else {
                                PRICE_SIENNA_CASH = 480;
                                PRICE_SUBURBAN_CASH = 650;
                                PRICE_HIACE_CASH = 950;
                                PRICE_SPRINTER_CASH = 1150;
                            }
                        }
                    }
                    if (PAX_AIRPORT_NUMBER > 0 && PAX_AIRPORT_NUMBER <= 5) {
                        $('#select-toyota-sienna').show();
                        $('#select-chevrolet-suburban').show();
                        $('#select-toyota-hiace').show();
                        $('#select-mercedes-benz-sprinter').show();
                        $('#regular-activated').hide();
                        $('#for-only-suvs').show();
                    } else if (PAX_AIRPORT_NUMBER > 5 && PAX_AIRPORT_NUMBER <= 10) {
                        UNIT_SELECTED = 'Toyota Hiace';
                        $('#select-toyota-sienna').hide();
                        $('#select-chevrolet-suburban').hide();
                        $('#select-toyota-hiace').show();
                        $('#select-mercedes-benz-sprinter').show();
                        $('#regular-activated').hide();
                        $('#for-only-suvs').show();
                        $('#select-toyota-sienna').removeClass('selected');
                        $('#select-toyota-hiace').addClass('selected');
                    } else if (PAX_AIRPORT_NUMBER > 10) {
                        UNIT_SELECTED = 'Mercedes-Benz Sprinter';
                        $('#select-toyota-sienna').hide();
                        $('#select-chevrolet-suburban').hide();
                        $('#select-toyota-hiace').hide();
                        $('#select-mercedes-benz-sprinter').hide();
                        $('#regular-activated').show();
                        PRICE_CASH = PRICE_SPRINTER_CASH;
                        $('#for-only-suvs').hide();
                    }
                    $("#serviceModal").html(`${SERVICE}`);
                    $("#price-toyota-sienna").html(`$ ${PRICE_SIENNA_CASH}`);
                    $("#price-chevrolet-suburban").html(`$ ${PRICE_SUBURBAN_CASH}`);
                    $("#price-toyota-hiace").html(`$ ${PRICE_HIACE_CASH}`);
                    $("#price-mercedes-benz-sprinter").html(`$ ${PRICE_SPRINTER_CASH}`);
                    $("#person-toyota-sienna").html(`${PAX_AIRPORT_NUMBER}`);
                    $("#person-chevrolet-suburban").html(`${PAX_AIRPORT_NUMBER}`);
                    $("#person-toyota-hiace").html(`${PAX_AIRPORT_NUMBER}`);
                    $("#person-mercedes-benz-sprinter").html(`${PAX_AIRPORT_NUMBER}`);
                    $("#priceModal").html(`$ ${PRICE_CASH}`);

                    if (PROMO_SEARCH === 'Ok') {
                        $('#promo-activated').show();
                        if (PROMO === 'WOOWOO') {
                            PROMO_PRICE = PRICE_CASH - (PRICE_CASH * 0.10);
                        }
                        $("#priceModal2").html(`$ ${PROMO_PRICE}`);
                        $("#regular-activated").css("text-decoration", "line-through");
                    }

                    if(SERVICE_TYPE === 'Airport - Hotel') {
                        $('#arrival-airline').show();
                        $('#arrival-flight').show();
                    } else {
                        $('#departure-airline').show();
                        $('#departure-flight').show();
                    }
                });
            }
        } else {
            $("#wrapper-submit-step-1").empty();
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

        if (ARRIVAL_FLIGHT === "") {
            CHECK_FLIGHT = "";
            $("#button-flight").removeClass("ready");
        } else {
            CHECK_FLIGHT = "OK";
            $("#button-flight").addClass("ready");
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
        PRICE_TOTAL_CASH = PRICE_TOTAL_CASH;
        PRICE_SUBMIT_VALUE = "Make the Confirmation (" + PRICE_TOTAL_CASH + " USD)";

        $("#price").html(PRICE_TOTAL_CASH);
        $("#send-step-2").val(PRICE_SUBMIT_VALUE);

        if (
            CHECK_NAME != "" &&
            CHECK_EMAIL != '' &&
            CHECK_PHONE != '' &&
            CHECK_FLIGHT != ''
        ) {
            if ($("#send-step-2").length === 0) {
                $("#wrapper-submit-step-2").html(
                    '<input id="send-step-2" class="submit-button" (type="button" value="' + PRICE_SUBMIT_VALUE + '"></input>'
                );
                $("#send-step-2").on("click", function() {
                    $("#step-2").css("display", "none");
                    $("#step-3").css("display", "flex");

                    TAX = Math.round(PRICE_TOTAL_CASH * 0.06);
                    PRICE_TOTAL_PAYPAL = Math.round(TAX + PRICE_TOTAL_CASH);

                    $('#price-cash-subtotal').html(`${PRICE_CASH}`);
                    $('#price-cash-total').html(`${PRICE_TOTAL_CASH}`);

                    $('#price-paypal-subtotal').html(`${PRICE_CASH}`);
                    $('#price-paypal-tax').html(`${TAX}`);
                    $('#price-paypal-total').html(`${PRICE_TOTAL_PAYPAL}`);
                    $("#price-paypal-button").val( PRICE_TOTAL_PAYPAL );
                    $("#paypal-button-container").val( PRICE_TOTAL_PAYPAL );

                    if (EXTRAS_GROCERY === '30 Minutes') {
                        $('#step-3-cash-extras-grocery').show();
                        $('#step-3-paypal-extras-grocery').show();
                    } else if (EXTRAS_GROCERY === 'No') {
                        $('#step-3-cash-extras-grocery').hide();
                        $('#step-3-paypal-extras-grocery').hide();
                    }
                    if (EXTRAS_GROCERY === '30 Minutes') {
                        $('#step-3-cash-extras-beers').show();
                        $('#step-3-paypal-extras-beers').show();
                    } else if (EXTRAS_GROCERY === 'No') {
                        $('#step-3-cash-extras-beers').hide();
                        $('#step-3-paypal-extras-beers').hide();
                    }

                    EXTRAS_BABYSEAT = $("#form-extras-babyseat").val();
                    EXTRAS_BOOSTERSEAT = $("#form-extras-boosterseat").val();
                    COMMENTS = $("#form-comments").val();

                    var formData = {
                        "homepage": 'https://transportationforless.com',
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
                        "unit-selected": UNIT_SELECTED,
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
                        "payment-type": PAYMENT_TYPE,
                        "promo": PROMO,
                        "price-cash": PRICE_TOTAL_CASH,
                        "price-paypal": PRICE_TOTAL_PAYPAL
                    };

                    $.ajax({
                        type: 'POST',
                        url: '/php/transportationforless.php',
                        dataType: "json",
                        data: formData
                    })
                });
            } else {
                $("#wrapper-submit-step-1").empty();
            }
        }
    }

    // Binds
    $("#form-hotel-from, #form-hotel-to, #form-pickup-date, #form-pickup-time, #form-return-date, #form-return-time, #form-unit-suv").on("change", updateStep1);
    $('.qtyplus, .qtyminus').on("click", updateStep1);
    $('#form-name, #form-phone, #form-email, #form-arrival-airline, #form-arrival-flight, #form-departure-airline, #form-departure-flight').on("change, keydown", updateStep2);
    $('#form-extras-grocery').on("change", updateStep2);
    $('#form-extras-babyseat').on("change", updateStep2);
    $('#form-extras-boosterseat').on("change", updateStep2);

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

});