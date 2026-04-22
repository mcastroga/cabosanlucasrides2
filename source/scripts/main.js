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
let FROM_HOTEL_DISTANCE;
let FROM_HOTEL_TIME;
let FROM_HOTEL_ZONE_OPEN;
let TO_LOCATION;
let TO_LOCATION_OPEN;
let TO_HOTEL_ZONE;
let TO_HOTEL_DISTANCE;
let TO_HOTEL_TIME;
let UNIT;
let ARRIVAL_AIRLINE;
let ARRIVAL_FLIGHT;
let DEPARTURE_AIRLINE;
let DEPARTURE_FLIGHT;
let HOTEL_NAME;
let HOTEL_DISTANCE;
let HOTEL_TIME;
let HOTEL_NAME_OPEN;
let HOURS = '3 Hours';
let TOTAL_HOURS;
let SELECTED_MAP;
let UNIT_SELECTED = 'Toyota Sienna';

const MAPS_COLLECTION = {
    'Alegranza Resort': '/images/reservations/map/alegranza-resort.svg',
    'Bahia Hotel and Beach House': '/images/reservations/map/bahia-hotel-and-beach-house.svg',
    'Baja Point The Westin Los Cabos Resort Villas': '/images/reservations/map/baja-point-the-westin-los-cabos-resort-villas.svg',
    'BelAir Sunclub Hotel Los Cabos': '/images/reservations/map/belair-sunclub-hotel-los-cabos.svg',
    'Breathless Cabo San Lucas Resort and Spa': '/images/reservations/map/breathless-cabo-san-lucas-resort-and-spa.svg',
    'Cabo Cush Hotel': '/images/reservations/map/cabo-cush-hotel.svg',
    'Cabo del Sol': '/images/reservations/map/cabo-del-sol.svg',
    'Cabo Inn Hotel': '/images/reservations/map/cabo-inn-hotel.svg',
    'Cabo Surf Hotel and Spa': '/images/reservations/map/cabo-surf-hotel-and-spa.svg',
    'Cabo Vista Hotel': '/images/reservations/map/cabo-vista-hotel.svg',
    'Casa Bella Hotel Boutique': '/images/reservations/map/casa-bella-hotel-boutique.svg',
    'Casa Costa Azul': '/images/reservations/map/casa-costa-azul.svg',
    'Casa Dorada Los Cabos Resort and Spa': '/images/reservations/map/casa-dorada-los-cabos-resort-and-spa.svg',
    'Casa Natalia': '/images/reservations/map/casa-natalia.svg',
    'Casa Pablito': '/images/reservations/map/casa-pablito.svg',
    'Cerro Colorado Residential Area': '/images/reservations/map/cerro-colorado-residential-area.svg',
    'Chileno Bay Resort and Residences': '/images/reservations/map/chileno-bay-resort-and-residences.svg',
    'City Express Suites': '/images/reservations/map/city-express-suites.svg',
    'Club Campestre San Jose': '/images/reservations/map/club-campestre-san-jose.svg',
    'Club Cascadas de Baja': '/images/reservations/map/club-cascadas-de-baja.svg',
    'Club La Costa San Jose del Cabo': '/images/reservations/map/club-la-costa-san-jose.svg',
    'Club Regina Los Cabos': '/images/reservations/map/club-regina-los-cabos.svg',
    'Comfort Inn': '/images/reservations/map/comfort-inn.svg',
    'Copala': '/images/reservations/map/copala.svg',
    'Corazon Cabo Resort and Spa': '/images/reservations/map/corazon-cabo-resort-and-spa.svg',
    'Costa Azul Condo': '/images/reservations/map/costa-azul-condo.svg',
    'Diamante Cabo San Lucas': '/images/reservations/map/diamante-cabo-san-lucas.svg',
    'Dreams Los Cabos': '/images/reservations/map/dreams-los-cabos.svg',
    'Drift San Jose del Cabo': '/images/reservations/map/drift-san-jose-del-cabo.svg',
    'El Ameyal Hotel': '/images/reservations/map/el-ameyal-hotel.svg',
    'El Dorado Residences': '/images/reservations/map/el-dorado-residences.svg',
    'El Encanto Inn and Suites Hotel Boutique': '/images/reservations/map/el-encanto-inn-and-suites-hotel-boutique.svg',
    'El Tezal Area': '/images/reservations/map/el-tezal-area.svg',
    'El Zalate Condos': '/images/reservations/map/el-zalate-condos.svg',
    'Esperanza An Auberge': '/images/reservations/map/esperanza-an-auberge.svg',
    'Esperanza Residences': '/images/reservations/map/esperanza-residences.svg',
    'Estancia Real': '/images/reservations/map/estancia-real.svg',
    'Fairfield Inn Marriott': '/images/reservations/map/fairfield-inn-marriott.svg',
    'Four Seasons Resort at Cabo del Sol': '/images/reservations/map/four-seasons-resort-at-cabo-del-sol.svg',
    'Garza Blanca Resort and Spa Los Cabos': '/images/reservations/map/garza-blanca-resort-and-spa-los-cabos.svg',
    'GR Solaris Lighthouse Los Cabos': '/images/reservations/map/gr-solaris-lighthouse-los-cabos.svg',
    'Grand Fiesta Americana': '/images/reservations/map/grand-fiesta-americana.svg',
    'Grand Solmar at Pacific Dunes Golf and Spa': '/images/reservations/map/grand-solmar-at-pacific-dunes-golf-and-spa.svg',
    'Grand Solmar Lands End Resort and Spa': '/images/reservations/map/grand-solmar-lands-end-resort-and-spa.svg',
    'Grand Velas Los Cabos': '/images/reservations/map/grand-velas-los-cabos.svg',
    'Hacienda Beach Club and Residences': '/images/reservations/map/hacienda-beach-club-and-residences.svg',
    'Hacienda del Mar by Marriott': '/images/reservations/map/hacienda-del-mar-by-marriott.svg',
    'Hacienda Encantada Resort and Residences': '/images/reservations/map/hacienda-encantada-resort-and-residences.svg',
    'Hampton Inn and Suites': '/images/reservations/map/hampton-inn-and-suites.svg',
    'Hard Rock Hotel': '/images/reservations/map/hard-rock-hotel.svg',
    'Hilton Grand Vacations Club La Pacifica Los Cabos': '/images/reservations/map/hilton-grand-vacations-club-la-pacifica-los-cabos.svg',
    'Hilton Vacation Club Cabo Azul Los Cabos': '/images/reservations/map/hilton-vacation-club-cabo-azul-los-cabos.svg',
    'Holiday Inn Express': '/images/reservations/map/holiday-inn-express.svg',
    'Hotel Cactus Inn': '/images/reservations/map/hotel-cactus-inn.svg',
    'Hotel Colli': '/images/reservations/map/hotel-colli.svg',
    'Hotel El Ganzo': '/images/reservations/map/hotel-el-ganzo.svg',
    'Hyatt Place Los Cabos': '/images/reservations/map/hyatt-place-los-cabos.svg',
    'Hyatt Vacation Club at Sirena del Mar': '/images/reservations/map/hyatt-vacation-club-at-sirena-del-mar.svg',
    'Hyatt Ziva Los Cabos': '/images/reservations/map/hyatt-ziva-los-cabos.svg',
    'JW Marriott Los Cabos Beach Resort and Spa': '/images/reservations/map/jw-marriott-los-cabos-beach-resort-and-spa.svg',
    'La Jolla Condo': '/images/reservations/map/la-jolla-condo.svg',
    'Las Mañanitas': '/images/reservations/map/las-mananitas.svg',
    'Las Olas Condo': '/images/reservations/map/las-olas-condo.svg',
    'Las Ventanas al Paraiso Rosewood Resort': '/images/reservations/map/las-ventanas-al-paraiso-rosewood-resort.svg',
    'Le Blanc Spa Resort Los Cabos': '/images/reservations/map/le-blanc-spa-resort-los-cabos.svg',
    'Los Cabos Golf Resort': '/images/reservations/map/los-cabos-golf-resort.svg',
    'Los Milagros Hotel': '/images/reservations/map/los-milagros-hotel.svg',
    'Los Patios Hotel': '/images/reservations/map/los-patios-hotel.svg',
    'Mar de Cortez': '/images/reservations/map/mar-de-cortez.svg',
    'Mar del Cabo by Velas': '/images/reservations/map/mar-del-cabo-by-velas.svg',
    'Maravilla Los Cabos': '/images/reservations/map/maravilla-los-cabos.svg',
    'Marina Fiesta Resort and Spa': '/images/reservations/map/marina-fiesta-resort-and-spa.svg',
    'Marina Sol': '/images/reservations/map/marina-sol.svg',
    'Marisol Boutique Hotel': '/images/reservations/map/marisol-boutique-hotel.svg',
    'Marquis Los Cabos Resort and Spa': '/images/reservations/map/marquis-los-cabos-resort-and-spa.svg',
    'ME Cabo by Melia': '/images/reservations/map/me-cabo-by-melia.svg',
    'Medano Hotel and Suites': '/images/reservations/map/medano-hotel-and-suites.svg',
    'Miravista Condo': '/images/reservations/map/miravista-condo.svg',
    'Misiones del Cabo': '/images/reservations/map/misiones-del-cabo.svg',
    'Montage Los Cabos': '/images/reservations/map/montage-los-cabos.svg',
    'Montecristo Estates': '/images/reservations/map/montecristo-estates.svg',
    'Mykonos Bay Resort': '/images/reservations/map/mykonos-bay-resort.svg',
    'Nobu Hotel Los Cabos': '/images/reservations/map/nobu-hotel-los-cabos.svg',
    'One and Only Palmilla': '/images/reservations/map/one-and-only-palmilla.svg',
    'Palmilla Residential': '/images/reservations/map/palmilla-residential.svg',
    'Palmilla South': '/images/reservations/map/palmilla-south.svg',
    'Paradisus Los Cabos': '/images/reservations/map/paradisus-los-cabos.svg',
    'Park Royal Los Cabos': '/images/reservations/map/park-royal-los-cabos.svg',
    'Pedregal Cabo San Lucas': '/images/reservations/map/pedregal-cabo-san-lucas.svg',
    'Playa Grande Resort and Grand Spa': '/images/reservations/map/playa-grande-resort-and-grand-spa.svg',
    'Portofino Resort': '/images/reservations/map/portofino-resort.svg',
    'Posada Real Los Cabos': '/images/reservations/map/posada-real-los-cabos.svg',
    'Posada Terranova': '/images/reservations/map/posada-terranova.svg',
    'Pueblo Bonito Los Cabos Beach Resort': '/images/reservations/map/pueblo-bonito-los-cabos-beach-resort.svg',
    'Pueblo Bonito Pacifica Golf and Spa Resort': '/images/reservations/map/pueblo-bonito-pacifica-golf-and-spa-resort.svg',
    'Pueblo Bonito Rose Resort and Spa': '/images/reservations/map/pueblo-bonito-rose-resort-and-spa.svg',
    'Pueblo Bonito Sunset Beach Golf and Spa Resort': '/images/reservations/map/pueblo-bonito-sunset-beach-golf-and-spa-resort.svg',
    'Puerta del Sol Villas': '/images/reservations/map/puerta-del-sol-villas.svg',
    'Puerta Vieja Boutique Hotel': '/images/reservations/map/puerta-vieja-boutique-hotel.svg',
    'Punta Ballena Area': '/images/reservations/map/punta-ballena-area.svg',
    'Querencia': '/images/reservations/map/querencia.svg',
    'Quintas del Sol by Solmar': '/images/reservations/map/quintas-del-sol-by-solmar.svg',
    'Quivira Los Cabos': '/images/reservations/map/quivira-los-cabos.svg',
    'Reflect Grand Krystal Los Cabos': '/images/reservations/map/reflect-grand-krystal-los-cabos.svg',
    'Riu Palace Cabo San Lucas': '/images/reservations/map/riu-palace-cabo-san-lucas.svg',
    'Riu Palace Baja California': '/images/reservations/map/riu-palace-baja-california.svg',
    'Riu Santa Fe': '/images/reservations/map/riu-santa-fe.svg',
    'Royal Decameron Los Cabos': '/images/reservations/map/royal-decameron-los-cabos.svg',
    'Royal Solaris Los Cabos': '/images/reservations/map/royal-solaris-los-cabos.svg',
    'Sampaguita': '/images/reservations/map/sampaguita.svg',
    'Sandos Finisterra Los Cabos': '/images/reservations/map/sandos-finisterra-los-cabos.svg',
    'Santa Maria Hotel and Suites': '/images/reservations/map/santa-maria-hotel-and-suites.svg',
    'Secrets Puerto Los Cabos': '/images/reservations/map/secrets-puerto-los-cabos.svg',
    'Seven Crown Express and Suites': '/images/reservations/map/seven-crown-express-and-suites.svg',
    'Siesta Suites Boutique Hotel': '/images/reservations/map/siesta-suites-boutique-hotel.svg',
    'Sofia Hostal Cabo': '/images/reservations/map/sofia-hostal-cabo.svg',
    'Solaz Luxury Resort': '/images/reservations/map/solaz-luxury-resort.svg',
    'Soleado Resort': '/images/reservations/map/soleado-resort.svg',
    'Solmar Resort': '/images/reservations/map/solmar-resort.svg',
    'Suites Las Palmas': '/images/reservations/map/suites-las-palmas.svg',
    'Sunrock Condo': '/images/reservations/map/sunrock-condo.svg',
    'Terrasol Cabo Beach Resort': '/images/reservations/map/terrasol-cabo-beach-resort.svg',
    'The Bungalows Hotel': '/images/reservations/map/the-bungalows-hotel.svg',
    'The Cape Thompson': '/images/reservations/map/the-cape-thompson.svg',
    'The Residences at La Vista': '/images/reservations/map/the-residences-at-la-vista.svg',
    'The Westin Resort and Spa': '/images/reservations/map/the-westin-resort-and-spa.svg',
    'Tropicana Los Cabos': '/images/reservations/map/tropicana-los-cabos.svg',
    'Viceroy Los Cabos': '/images/reservations/map/viceroy-los-cabos.svg',
    'Vidanta Los Cabos': '/images/reservations/map/vidanta-los-cabos.svg',
    'Villa Del Arco Beach Resort and Spa': '/images/reservations/map/villa-del-arco-beach-resort-and-spa.svg',
    'Villa Del Palmar Beach Resort and Spa': '/images/reservations/map/villa-del-palmar-beach-resort-and-spa.svg',
    'Villa La Estancia Beach Resort and Spa': '/images/reservations/map/villa-la-estancia-beach-resort-and-spa.svg',
    'Villa La Valencia Beach Resort and Spa Los Cabos': '/images/reservations/map/villa-la-valencia-beach-resort-and-spa-los-cabos.svg',
    'Vista Azul Suites and Spa Hotel': '/images/reservations/map/vista-azul-suites-and-spa-hotel.svg',
    'Viva Condos': '/images/reservations/map/viva-condos.svg',
    'Waldorf Astoria at Pedregal': '/images/reservations/map/waldorf-astoria-at-pedregal.svg',
    'Woldmark Coral Baja': '/images/reservations/map/woldmark-coral-baja.svg',
    'Wyndham Tesoro': '/images/reservations/map/wyndham-tesoro.svg',
    'Zadun Ritz-Carlton': '/images/reservations/map/zadun-ritz-carlton.svg',
    'Zoetry Casa del Mar': '/images/reservations/map/zoetry-casa-del-mar.svg',
    'Four Seasons at Costa Palmas': '/images/reservations/map/four-seasons-at-costa-palmas.svg',
    'La Ribera': '/images/reservations/map/la-ribera.svg',
    'Buena Vista': '/images/reservations/map/buena-vista.svg',
    'Los Barriles': '/images/reservations/map/los-barriles.svg',
    'Cerritos': '/images/reservations/map/cerritos.svg',
    'El Pescadero': '/images/reservations/map/pescadero.svg',
    'Todos Santos': '/images/reservations/map/todos-santos.svg',
    'La Paz': '/images/reservations/map/la-paz.svg'
};
async function changeLanguage(lang) {
    try {
        const translations = await $.getJSON(`./json/${lang}.json`);

        $("[data-i18n]").each(function() {
            const $el = $(this);
            const key = $el.data("i18n");
            const text = key.split('.').reduce((obj, i) => obj?.[i], translations);
            if (text) {
                $el.html(text);
            }
        });

        $('#current-lang').text(lang.toUpperCase());
        localStorage.setItem('preferred-lang', lang);

    } catch (error) {
        console.error("Error cargando el idioma:", error);
    }
}

$( document ).ready(function() {
    updateStep1();

    const userLang = localStorage.getItem('preferred-lang') || 'en';
    changeLanguage(userLang);

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            992: {
                slidesPerView: 3,
            }
        }
    });

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

    $("#form-pickup-date-open").datepicker({
        minDate: '0',
        defaultDate: '0'
    });

    $('#form-container-pickup-date').on('click', function() {
        $('#form-pickup-date').focus().click();
    });

    $('#form-container-return-date').on('click', function() {
        $('#form-return-date').focus().click();
    });

    $('#form-container-to-open').on('click', function() {
        $('#form-to-open').focus().click();
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

    $('#open-service').on("click", function() {
        SERVICE_SELECT = 'Open Service';
        $('#step-1-open-service').show();
        $('#step-1-airport-private-transfer').hide();
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
        if ((TO_LOCATION === 'Los Cabos Airport (SJD) (terminal 1 or 2)') || (TO_LOCATION === 'Los Cabos Airport (SJD) FBO')) {
            $('#option-from-airport').hide();
            $('#option-from-airport-fbo').hide();
        } else {
            $('#option-from-airport').show();
            $('#option-from-airport-fbo').show();
        }
    });

    $('#button-to').on("click", function() {
        $('#form-hotel-to').val('');
        $('#button-to').removeClass('ready');
        $('#select-to').css("display", "block");
        if ((FROM_LOCATION === 'Los Cabos Airport (SJD) (terminal 1 or 2)') || (FROM_LOCATION === 'Los Cabos Airport (SJD) FBO')) {
            $('#option-to-airport').hide();
            $('#option-to-airport-fbo').hide();
        } else {
            $('#option-to-airport').show();
            $('#option-to-airport-fbo').show();
        }
    });

    $('#button-from-open').on("click", function() {
        $('#form-hotel-from-open').val('');
        $('#button-from-open').removeClass('ready');
        $('#select-from-open').css("display", "block");
    });

    $('#option-from-airport').on("click", function() {
        FROM_LOCATION = 'Los Cabos Airport (SJD) (terminal 1 or 2)';
        SERVICE_TYPE = 'Airport - Hotel';
        CHECK_FROM_LOCATION = 'OK';
        FROM_HOTEL_ZONE = 0;
        $('#button-from').addClass('ready');
        $('#select-from').css("display", "none");
        $('#selected-from').html('Los Cabos Airport (SJD) (terminal 1 or 2)');
    });

    $('#option-from-airport-fbo').on("click", function() {
        FROM_LOCATION = 'Los Cabos Airport (SJD) FBO';
        SERVICE_TYPE = 'Airport - Hotel';
        CHECK_FROM_LOCATION = 'OK';
        FROM_HOTEL_ZONE = 0;
        $('#button-from').addClass('ready');
        $('#select-from').css("display", "none");
        $('#selected-from').html('Los Cabos Airport (SJD) FBO');
    });

    $('#option-to-airport').on("click", function() {
        TO_LOCATION = 'Los Cabos Airport (SJD) (terminal 1 or 2)';
        SERVICE_TYPE = 'Hotel - Airport';
        CHECK_TO_LOCATION = 'OK';
        TO_HOTEL_ZONE = 0;
        $('#button-to').addClass('ready');
        $('#select-to').css("display", "none");
        $('#selected-to').html('Los Cabos Airport (SJD)');
    });

    $('#option-to-airport-fbo').on("click", function() {
        TO_LOCATION = 'Los Cabos Airport (SJD) FBO';
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
        $("#book-wrapper").css("display", "flex");
        $("#pickup-location").html(FROM_LOCATION);
        $("#dropoff-location").html(TO_LOCATION);
        $("#hotel-time").html(HOTEL_TIME);
        $("#hotel-distance").html(HOTEL_DISTANCE);

        if (SERVICE === "Round trip") {
            $('#is-roundtrip').css("display", "flex");
        } else {
            $('#is-roundtrip').css("display", "none");
            $('#wrapper-submit-step-2').css("margin-top", "75px");
        }
        if (FROM_LOCATION === 'Los Cabos Airport (SJD) FBO' || TO_LOCATION === 'Los Cabos Airport (SJD) FBO') {
            $("#airline-wrapper").css("display", "none");
            $("#airline-wrapper-private").css("display", "flex");
        }
        $("#square-image").addClass("fade-out");
        setTimeout(function() {
            $("#square-image").hide();
            $("#book-wrapper").css("display", "flex").show();
            setTimeout(function() {
                $("#book-wrapper").addClass("fade-in");
            }, 10);

        }, 500);

        SELECTED_MAP = MAPS_COLLECTION[HOTEL_NAME];

        if (SELECTED_MAP) {
            $("#svg-wrapper").load(SELECTED_MAP, function() {
                $(this).find('svg').css({'width': '100%', 'height': 'auto'});

                const path = document.querySelector("#line");
                if (!path) return;

                const length = path.getTotalLength();
                const isHotelToAirport = (typeof SERVICE_TYPE !== 'undefined' && SERVICE_TYPE === 'Hotel - Airport');
                const isRoundTrip = (typeof SERVICE !== 'undefined' && SERVICE === 'Round trip');

                const COLOR_IDA = "#eed09d";
                const COLOR_REGRESO = "#B08A5A";

                path.style.strokeDasharray = length + ' ' + length;

                const animar = (reverse, color, callback) => {
                    path.style.transition = "none";
                    path.style.stroke = color;
                    path.style.strokeDashoffset = reverse ? -length : length;
                    path.getBoundingClientRect();

                    setTimeout(() => {
                        path.style.transition = "stroke-dashoffset 3s ease-in-out";
                        path.style.strokeDashoffset = "0";

                        if (callback) {
                            setTimeout(callback, 3500);
                        }
                    }, 50);
                };

                if (isRoundTrip) {
                    animar(isHotelToAirport, COLOR_IDA, function() {
                        animar(!isHotelToAirport, COLOR_REGRESO);
                    });
                } else {
                    animar(isHotelToAirport, COLOR_IDA);
                }
            });
        } else {
            console.warn("No se encontró mapa para el hotel: " + HOTEL_NAME);
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
                        } else if (HOTEL_NAME === 'Cerritos' || HOTEL_NAME === 'Todos Santos' || HOTEL_NAME === 'El Pescadero') {
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
                        } else if (HOTEL_NAME === 'Four Seasons at Costa Palmas' || HOTEL_NAME === 'Buena Vista' || HOTEL_NAME === 'Los Barriles') {
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
        CHECK_NAME = NAME.trim().length >= 5 ? "OK" : "";
        CHECK_EMAIL = EMAIL.trim().length >= 5 ? "OK" : "";
        CHECK_PHONE = PHONE.trim().length >= 5 ? "OK" : "";

        $("#button-name").toggleClass("ready", CHECK_NAME === "OK");
        $("#button-email").toggleClass("ready", CHECK_EMAIL === "OK");
        $("#button-phone").toggleClass("ready", CHECK_PHONE === "OK");

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

        if ( CHECK_NAME === "OK" && CHECK_EMAIL === 'OK' && CHECK_PHONE === 'OK' ) {
            if ($("#send-step-2").length === 0) {
                $("#wrapper-submit-step-2").html(
                    '<input id="send-step-2" class="submit-button" type="button" value="' + PRICE_SUBMIT_VALUE + '">'
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
                        url: '/php/sendmail.php',
                        dataType: "json",
                        data: formData
                    })
                });
            }
        } else {
            $("#wrapper-submit-step-2").empty();
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
            if (UNIT === 'Toyota Sienna') {
                PRICE_CASH = 160;
                $('#square-image img').attr('src', '/images/reservations/photos/toyota-sienna.png');
            } else if (UNIT === 'Chevrolet Suburban') {
                PRICE_CASH = 160;
                $('#square-image img').attr('src', '/images/reservations/photos/chevrolet-suburban.png');
            } else if (UNIT === 'Toyota Hiace') {
                PRICE_CASH = 180;
                $('#square-image img').attr('src', '/images/reservations/photos/toyota-hiace.png');
            } else if (UNIT === 'Mercedes-Benz Sprinter') {
                PRICE_CASH = 250;
                $('#square-image img').attr('src', '/images/reservations/photos/mercedes-benz-sprinter.png');
            }
            $('#form-unit-suv-open').css('display', 'flex');
            $('#form-unit-van-open').css('display', 'none');
            $('#form-unit-van-xl-open').css('display', 'none');

        } else if (PAX_AIRPORT_NUMBER > 6 && PAX_AIRPORT_NUMBER <= 10 ) {
            UNIT = $("#form-unit-van-open").val();
            if (UNIT === 'Toyota Hiace') {
                PRICE_CASH = 180;
                $('#square-image img').attr('src', '/images/reservations/photos/toyota-hiace.png');
            } else if (UNIT === 'Mercedes-Benz Sprinter') {
                PRICE_CASH = 250;
                $('#square-image img').attr('src', '/images/reservations/photos/mercedes-benz-sprinter.png');
            }
            $('#form-unit-suv-open').css('display', 'none');
            $('#form-unit-van-open').css('display', 'flex');
            $('#form-unit-van-xl-open').css('display', 'none');
        } else if (PAX_AIRPORT_NUMBER > 10 ) {
            UNIT = $("#form-unit-van-xl-open").val();
            PRICE_CASH = 250;
            $('#square-image img').attr('src', '/images/reservations/photos/mercedes-benz-sprinter.png');
            $('#form-unit-suv-open').css('display', 'none');
            $('#form-unit-van-open').css('display', 'none');
            $('#form-unit-van-xl-open').css('display', 'flex');
        }

        if (TO_LOCATION_OPEN.trim().length < 5) {
            CHECK_TO_LOCATION_OPEN = "";
            $("#button-to-open").removeClass("ready");
        } else {
            CHECK_TO_LOCATION_OPEN = "OK";
            $("#button-to-open").addClass("ready");
        }
        if (
            PICKUP_DATE != '' &&
            PICKUP_TIME != '' &&
            CHECK_FROM_LOCATION_OPEN === 'OK'
        ) {
            if ($("#send-open-step-1").length === 0) {
                $("#wrapper-submit-step-1-open").html(
                    '<input class="submit-button" id="send-open-step-1" type="button" value="Search">'
                );
                $("#send-open-step-1").on("click", function () {
                    FROM_LOCATION = FROM_LOCATION_OPEN;
                    TO_LOCATION = TO_LOCATION_OPEN;
                    $("#step-1-open-service").css("display", "none");
                    $("#step-2").css("display", "flex");
                    $('#airline-wrapper').hide();
                    $('#airline-wrapper-private').hide();
                    $('#form-container-extras-grocery').hide();
                    $('#form-container-extras-babyseat').hide();
                    $('#form-container-extras-boosterseat').hide();
                    $('#is-roundtrip').hide();
                    $('#form-container-hours').show();
                    $('#service-options').css('display', 'none');
                    $('#header-total').css('display', 'flex');
                    $("#price").html(PRICE_CASH);
                    $('#wrapper-submit-step-2').css("margin-top", "225px");
                });
            }
        } else {
            $("#wrapper-submit-step-1-open").empty();
        }
    }

    function updateHours() {
        HOURS = $("#form-hours").val();
        if (HOURS === '4 Hours'){
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

        if (UNIT === 'Toyota Sienna') {
            PRICE_CASH = 150 + (TOTAL_HOURS * 50);
        } else if (UNIT === 'Chevrolet Suburban') {
            PRICE_CASH = 180 + (TOTAL_HOURS * 60);
        } else if (UNIT === 'Toyota Hiace') {
            PRICE_CASH = 210 + (TOTAL_HOURS * 65);
        } else if (UNIT === 'Mercedes-Benz Sprinter') {
            PRICE_CASH = 240 + (TOTAL_HOURS * 80);
        }
        updateStep2();
    }

    // Binds
    $("#form-hotel-from, #form-hotel-to, #form-pickup-date, #form-pickup-time, #form-return-date, #form-return-time, #form-unit-suv, #form-unit-van").on("change", updateStep1);
    $("#form-hotel-from-open, #form-to-open, #form-pickup-date-open, #form-pickup-time-open, #form-unit-suv-open, #form-unit-van-open").on("change", updateOpenStep1);
    $('.qtyplus, .qtyminus').on("click", updateStep1);
    $('.qtyplus-open, .qtyminus-open').on("click", updateOpenStep1);

    $('#form-name, #form-phone, #form-arrival-airline, #form-arrival-flight, #form-departure-airline, #form-departure-flight').on("change, keydown", updateStep2);
    $('#form-email').on("input", updateStep2);
    $('#form-extras-babyseat').on("change", updateStep2);
    $('#form-extras-boosterseat').on("change", updateStep2);
    $('#form-extras-grocery').on("change", updateStep2);
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
                FROM_HOTEL_DISTANCE = $("#form-hotel-from").getSelectedItemData().distance;
                FROM_HOTEL_TIME = $("#form-hotel-from").getSelectedItemData().time;
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
                    HOTEL_DISTANCE = FROM_HOTEL_DISTANCE;
                    HOTEL_TIME = FROM_HOTEL_TIME;
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
                TO_HOTEL_DISTANCE = $("#form-hotel-to").getSelectedItemData().distance;
                TO_HOTEL_TIME = $("#form-hotel-to").getSelectedItemData().time;
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
                    HOTEL_DISTANCE = TO_HOTEL_DISTANCE;
                    HOTEL_TIME = TO_HOTEL_TIME;
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