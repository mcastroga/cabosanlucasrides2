<?php
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Authorization, Content-Type, Accept, Origin");
    exit(0);
}

header("Access-Control-Allow-Headers: Content-Type, Accept, Origin");
header("Content-Type: application/json; charset=UTF-8");
header('Access-Control-Allow-Origin: https://cabosanlucasrides.com');
header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS");
header("Access-Control-Max-Age: 3600");

$headers            = '';
$message            = '';
$reservation        = rand(1,100);
$headers          = '';
$message          = '';

$Homepage               = $_POST["homepage"];
$ServiceSelect          = $_POST["service-select"];
$Service                = $_POST["service"];
$ServiceType            = $_POST["service-type"];
$FromLocation           = $_POST["from-location"];
$ToLocation             = $_POST["to-location"];
$PickupDate             = $_POST["pickup-date"];
$PickupDateFull         = $_POST["pickup-date-full"];
$PickupTime             = $_POST["pickup-time"];
$ReturnDate             = $_POST["return-date"];
$ReturnDateFull         = $_POST["return-date-full"];
$ReturnTime             = $_POST["return-time"];
$Pax                    = $_POST["pax"];
$Unit                   = $_POST["unit"];
$UnitSelected           = $_POST["unit-selected"];
$Name                   = $_POST["name"];
$Phone                  = $_POST["phone"];
$Email                  = $_POST["email"];
$Hotel                  = $_POST["hotel-name"];
$ArrivalAirline         = $_POST["arrival-airline"];
$ArrivalFlight          = $_POST["arrival-flight"];
$DepartureAirline       = $_POST["departure-airline"];
$DepartureFlight        = $_POST["departure-flight"];
$Comments               = $_POST["comments"];
$ExtrasBabyseat         = $_POST["extras-babyseat"];
$ExtrasBoosterseat      = $_POST["extras-boosterseat"];
$ExtrasGrocery          = $_POST["extras-grocery"];
$PaymentType            = $_POST["payment-type"];
$PriceCash              = $_POST["price-cash"];
$PricePaypal            = $_POST["price-paypal"];
$Promo                  = $_POST["promo"];

$numero_reserva   = rand(1,100);

$headers .= "From: m8wxng81ctwn@transportationforless.com \r\n";
$headers .= "Bcc: mario.castro.gallegos@gmail.com \r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
$to = "transportationforless@gmail.com, $Email";
$subject = "TFL-$PickupDate-$numero_reserva from Cabo San Lucas Rides";
$validationOK=true;

if ($validationOK) {
    $message .= "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n";
    $message .= "<html xmlns=\"http://www.w3.org/1999/xhtml\">\n";
    $message .= "<head>\n";
    $message .= "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\n";
    $message .= "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"/>\n";
    $message .= "<title>BG Transfer Cabo Transportation</title>\n";
    $message .= "</head>\n";
    $message .= "<body>\n";
    $message .= "<table style=\"border: 2px solid #000; font-size: 14px; text-align: center; width: 800px;\">\n";
    $message .= "<tr style=\"width: 796px\"><td colspan=2 style=\"background: url(http://cabosanlucasrides.com/images/backgrounds/header-banner-2.png) no-repeat; height: 200px; width: 796px;\"></td></tr>\n";
    $message .= "<tr style=\"width: 796px\"><td colspan=2><h1 style=\"font-size: 24px;text-align: center;margin: 0;padding: 0;color: #000; width: 100%;\">Reservation Number: CSLR-$PickupDate-$numero_reserva</h1></td></tr>\n";
    $message .= "<tr style=\"width: 796px\"><td colspan=2 style=\"margin: 0;padding: 5px; font-size: 16px; text-align: center; width: 100%;\">Dear <strong>$Name</strong> thanks for chosing us, for your transportation service.</td></tr>\n";
    $message .= "<tr style=\"width: 796px\"><td colspan=2 style=\"margin: 0;padding: 5px; font-size: 14px; text-align: center; width: 100%;\">YOUR TRANSPORTATION IS CONFIRMED WITH TRANSPORTATION FOR LESS / CABO SAN LUCAS RIDES</td></tr>\n";
    $message .= "<tr style=\"width: 796px\"><td colspan=2 style=\"background-color: #212121; color: #fff; margin: 0; padding: 5px; font-size: 14px; text-align: center; width: 100%;\">CLIENT INFORMATION</td></tr>\n";
    $message .= "<tr style=\"width: 796px\"><td colspan=1 style=\"margin: 0;padding: 5px; font-size: 14px; width: 50%;\"><strong>Name: </strong>$Name</td><td colspan=1 style=\"margin: 0;padding: 5px; font-size: 14px; width: 50%;\"><strong>Email: </strong>$Email</td></tr>\n";
    $message .= "<tr style=\"width: 796px\"><td colspan=1 style=\" margin: 0;padding: 5px; font-size: 14px; width: 50%;\"><strong>Phone: </strong>$Phone</td><td colspan=1 style=\"margin: 0;padding: 5px; font-size: 14px; width: 50%;\"><strong>Hotel: </strong>$Hotel</td></tr>\n";
    $message .= "<tr style=\"width: 796px\"><td colspan=1 style=\" margin: 0;padding: 5px; font-size: 14px; width: 50%;\"><strong>Passengers: </strong>$Pax</td><td colspan=1 style=\"margin: 0;padding: 5px; font-size: 14px; width: 50%;\"><strong>Travel type: </strong>$Service</td</tr>\n";
    if ($ServiceType === 'Airport - Hotel') {
        $message .= "<tr style=\"width: 796px\"><td colspan=2 style=\"background-color: #212121; color: #fff; margin: 0; padding: 5px; font-size: 14px; text-align: center; width: 100%;\">ARRIVAL INFORMATION</td></tr>\n";
    } else {
        $message .= "<tr style=\"width: 796px\"><td colspan=2 style=\"background-color: #212121; color: #fff; margin: 0; padding: 5px; font-size: 14px; text-align: center; width: 100%;\">DEPARTURE INFORMATION</td></tr>\n";
    }
    $message .= "<tr style=\"width: 796px\"><td colspan=1 style=\"margin: 0;padding: 5px; font-size: 14px; width: 50%;\"><strong>Pick up: </strong>$FromLocation</td><td colspan=1 style=\" margin: 0;padding: 5px; font-size: 14px; width: 50%;\"><strong>Pick up Date: </strong>$PickupDateFull at $PickupTime</td></tr>\n";
    $message .= "<tr style=\"width: 796px\"><td colspan=1 style=\"margin: 0;padding: 5px; font-size: 14px; width: 50%;\"><strong>Airline: </strong>$ArrivalAirline</td><td colspan=1 style=\" margin: 0;padding: 5px; font-size: 14px; width: 50%;\"><strong>Flight: </strong>$ArrivalFlight</td></tr>\n";
    if($Service === 'Round trip') {
        $message .= "<tr style=\"width: 796px\"><td colspan=2 style=\"background-color: #212121; color: #fff; margin: 0; padding: 5px; font-size: 14px; text-align: center; width: 100%;\">DEPARTURE INFORMATION</ts></tr>\n";
        $message .= "<tr style=\"width: 796px\"><td colspan=1 style=\"margin: 0;padding: 5px; font-size: 14px; width: 50%;\"><strong>Return: </strong>$ToLocation</td><td colspan=1 style=\" margin: 0;padding: 5px; font-size: 14px; width: 50%;\"><strong>Return Date: </strong>$ReturnDateFull at $ReturnTime</td></tr>\n";
        $message .= "<tr style=\"width: 796px\"><td colspan=1 style=\"margin: 0;padding: 5px; font-size: 14px; width: 50%;\"><strong>Airline: </strong>$DepartureAirline</td><td colspan=1 style=\"margin: 0;padding: 5px; font-size: 14px; width: 50%;\"><strong>Flight: </strong>$DepartureFlight</td></tr>\n";
    }
    $message .= "<tr style=\"width: 796px\"><td colspan=2 style=\"background-color: #212121; color: #fff;  margin: 0; padding: 5px; font-size: 14px; text-align: center; width: 100%;\">ADITIONAL INFORMATION</th></tr>\n";
    $message .= "<tr style=\"width: 796px\"><td colspan=1 style=\"margin: 0;padding: 5px; font-size: 14px; width: 50%;\"><strong>Vehicle: </strong>$UnitSelected</td>\n";
    if($PaymentType  === 'Cash'){
        $message .= "<td colspan=2 style=\"border: 0px solid #000; margin: 0;padding: 5px; font-size: 14px; height: 30px; line-height: 30px; text-align: left; width: 100%;\"><strong>Price: </strong> $PriceCash USD **Please be prepared to pay in CASH directly to the driver</td></tr>\n";
    } else {
        $message .= "<td colspan=2 style=\"border: 0px solid #000; margin: 0;padding: 5px; font-size: 14px; height: 30px; line-height: 30px; text-align: left; width: 100%;\"><strong>Price: </strong> $PricePaypal USD **Please show your paypal payment to the driver</td></tr>\n";
    }
    $message .= "<tr style=\"width: 796px\"><td colspan=1 style=\"padding: 5px; font-size: 14px; width: 50%;\"><strong>Comments: </strong>$Comments</td><td colspan=1 style=\"padding: 5px; font-size: 14px; width: 100%;\"><strong>Promo Code: </strong>$Promo</td></tr>\n";
    $message .= "<tr style=\"width: 796px\"><td colspan=1 style=\"margin: 0;padding: 5px; font-size: 14px; width: 50%;\"><strong>Grocery Stop: </strong>$ExtrasGrocery</td><td colspan=1 style=\"margin: 0;padding: 5px; font-size: 14px; width: 50%;\"><strong>Baby Seat: </strong>$ExtrasBabyseat | <strong>Car Seat: </strong> $ExtrasBoosterseat</td></tr>\n";
    if($ServiceType === 'Airport - Hotel'){
        $message .= "<tr style=\"width: 796px\"><th colspan=2 style=\"background-color: #212121; color: #fff; margin: 0; padding: 5px; font-size: 14px; text-align: center; width: 100%;\">UPON ARRIVAL</th></tr>\n";
        $message .= "<tr style=\"width: 796px\"><td colspan=2 style=\"margin: 0; padding: 5px; font-size: 14px; text-align: center; width: 100%;\">When you arrive at the San Jose del Cabo International Airport, and after crossing custom you will see Timeshare people. Do not stop with the timeshare vendors inside the airport, they will try to confuse you, we do not know any of them. For assistence call to +52 6241085583.</td></tr>\n";
    }
    if($ServiceType === 'Hotel - Airport'){
        $message .= "<tr style=\"width: 796px\"><th colspan=2 style=\"background-color: #212121; color: #fff; margin: 0; padding: 5px; font-size: 14px; text-align: center; width: 100%;\">UPON DEPARTURE</th></tr>\n";
        $message .= "<tr style=\"width: 796px\"><td colspan=2 style=\"margin: 0; padding: 5px; font-size: 14px; text-align: center; width: 100%;\">When you departure from your Hotel, we will be there waiting for you in the lobby. If you have any question please contact us, will be a pleasure to assit you. For assistence call to +52 6241085583.</td></tr>\n";
    }
    $message .= "<tr style=\"width: 796px\"><td colspan=2 style=\"margin: 0;padding: 5px; font-size: 14px; width: 100%;\"><strong>Pickup Time: _________ TBC</strong></td></tr>\n";
    $message .= "<tr style=\"width: 796px\"><th colspan=2 style=\"background-color: #fef000; margin: 0; padding: 5px; font-size: 14px; text-align: center; width: 100%;\">MEET & GREET AT THE AIRPORT</th></tr>\n";
    $message .= "<tr style=\"width: 796px\"><td colspan=2 style=\"margin: 0; padding: 5px; font-size: 14px; text-align: center; width: 100%;\">We can't wait for your arrival and hope that your travels will be without complications. After clearing immigrations, baggage pick-up and customs, please proceed past the timeshare representatives (who will attempt to be very persuasive but can/should be politely declined and you smile and say <strong>NO GRACIAS</strong>) DO NOT STOP, DO NOT ENGAGE ON CONVERSATIONS-GET OUTSIDE to the terminal exit where the Transportation For Less representative will be awaiting your arrival and will have a sign on a clip board welcoming you. The driver will transport to your destination reserved</td></tr>\n";
    $message .= "<tr style=\"width: 796px\"><td colspan=2 style=\"margin: 0; padding: 5px; font-size: 14px; text-align: center; width: 100%;\"><strong>Full payment will be via Paypal or partial payment to guarantee the reservation.</strong> Toll road included. All rates will be add taxes (VAT).</td></tr>\n";
    $message .= "<tr style=\"width: 796px\"><td colspan=2 style=\"margin: 0; padding: 5px; font-size: 14px; text-align: center; width: 100%;\">PLEASE NOTE: We don’t have anybody working for us inside the building (Terminal 2) you need to walk outside the building till you find the Living room , then to the right hand side door(slide electric door) OUTSIDE to meet us PURPLE SHIRT  and your name, WE ARE LOCATED ON BROWN CANOPY SHADE  3, 4 & 5 IN FRONT OF THE ISLAND BAR.</td></tr>\n";
    $message .= "<tr style=\"width: 796px\"><td colspan=2 style=\"margin: 0; padding: 5px; font-size: 14px; text-align: center; width: 100%;\">If you have any change or update on your travel please inform to Paco via email or cell number to transportationforless@hotmail.com or transportationforless@gmail.com or from USA 011526241085583 while in Cabo 6241085583  24/7 to be on time and welcome you.</td></tr>\n";
    $message .= "<tr style=\"width: 796px\"><td colspan=2 style=\"margin: 0; padding: 5px; font-size: 14px; text-align: center; width: 100%;\">(Gratuity is at clients discretion; EACH TRIP MAY BE DIFFERENT DRIVER.)</td></tr>\n";
    $message .= "<tr style=\"width: 796px\"><td colspan=2 style=\"margin: 0; padding: 5px; font-size: 14px; text-align: center; width: 100%;\">IMPORTANT MESSAGE ONLY FOR DEPARTURE: Please call, text  or email to reconfirm your departure pick up time one day before to cell number 6241085583; also your room number to inform in the security gate access to the hotel.<br><strong>* Clear your hotel balance before pickup time</strong></td></tr>\n";
    $message .= "<tr style=\"width: 796px\"><th colspan=2 style=\"color: #d32911; margin: 0; padding: 5px; font-size: 14px; text-align: center; width: 100%;\">CANCELLATION POLICY</th></tr>\n";
    $message .= "<tr style=\"width: 796px\"><td colspan=2 style=\"margin: 0; padding: 5px; font-size: 14px; text-align: center; width: 100%;\">Cancellations need to be notice 72 hours before the service request to avoid a charge, if there is  24 hours or less there will be a fee of 50 % charge of the payment</td></tr>\n";
    $message .= "<tr style=\"width: 796px\"><td colspan=2 style=\"margin: 0; padding: 5px; font-size: 14px; text-align: center; width: 100%;\">In case you wish to cancel your service on the same day of your arrival, unfortunately you will not get any refund, due to transportation costs and expenses incurred for your arrival.</td></tr>\n";
    $message .= "</table></body></html>\n";
    $message .= "</table></body></html>\n";

    $success = @mail($to, $subject, $message, $headers);

    header('Access-Control-Allow-Origin: *');
    header('Content-type: application/json');
    $response = array();
    $response[0] = array(
        'response' => 'success'
    );

    echo json_encode($response);

} else {
    header('Access-Control-Allow-Origin: *');
    header('Content-type: application/json');
    $response = array();
    $response[0] = array(
        'response' => 'error'
    );

    echo json_encode($response);
}

?>
