<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$headers = '';
$message = '';
$reservation              = rand(1,100);

$arrivalairline     = $_POST["arrival-airline"];
$arrivaldate        = $_POST["arrival-date"];
$arrivaldatefull    = $_POST["arrival-date-full"];
$arrivalflight      = $_POST["arrival-flight"];
$arrivaltime        = $_POST["arrival-time"];
$comments           = $_POST["comments"];
$departureairline   = $_POST["departure-airline"];
$departuredate      = $_POST["departure-date"];
$departuredatefull  = $_POST["departure-date-full"];
$departureflight    = $_POST["departure-flight"];
$departuretime      = $_POST["departure-time"];
$email              = $_POST["email"];
$extrasbabyseat     = $_POST["extras-babyseat"];
$extrasboosterseat  = $_POST["extras-boosterseat"];
$extrasgrocery      = $_POST["extras-grocery"];
$homepage           = $_POST["homepage"];
$name               = $_POST["name"];
$phone              = $_POST["phone"];
$pricecash          = $_POST["price-cash"];
$pricepaypal        = $_POST["price-paypal"];
$hotelname          = $_POST["hotel-name"];
$pax                = $_POST["pax"];
$service            = $_POST["service"];
$servicetype        = $_POST["service-type"];
$unit               = $_POST["unit"];
$paymenttype        = $_POST["payment-type"];

$headers .= "From: w5yfwuu1rhtp@taxiscabo.com\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
$to = "reservations@fastcabo.com";
$subject = "Reservation #CLIM-$arrivaldate-$reservation from Cabo Limousines";
$validationOK=true;

if ($validationOK) {
    $message .= "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n";
    $message .= "<html xmlns=\"http://www.w3.org/1999/xhtml\">\n";
    $message .= "<head>\n";
    $message .= "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\n";
    $message .= "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"/>\n";
    $message .= "<title>Cabo Transportation Services</title>\n";
    $message .= "</head>\n";
    $message .= "<body>\n";
    $message .= "<table style=\"border: 2px solid #000; font-size: 14px; width: 800px;\">\n";
    $message .= "<tr style=\"width: 796px\"><td colspan=2 style=\"background: url($homepage/images/backgrounds/header-banner.jpg) no-repeat; height: 200px; width: 796px;\"></td></tr>\n";
    $message .= "<tr style=\"width: 796px\"><td colspan=2 style=\"border: 1px solid #000;\"><h1 style=\"font-size: 14px;text-align: center;margin: 0;padding: 0;color: #000; width: 100%;\">Reservation Number: #FASC-$arrivaldate-$reservation</h1></td></tr>\n";
    $message .= "<tr style=\"width: 796px\"><td colspan=2 style=\"border: 1px solid #000; margin: 0;padding: 5px; font-size: 22px; text-align: center; width: 100%;\">Dear <strong>$name</strong> Please find confirmation and details on the airport transportation service requested:</td></tr>\n";
    $message .= "<tr style=\"width: 796px\"><th colspan=2 style=\"background-color: #1b1b1b; margin: 0; border: 1px solid #000; color: #fff; padding: 5px; font-size: 14px; text-align: center; width: 100%;\">CLIENT INFORMATION</th></tr>\n";
    $message .= "<tr style=\"width: 796px; height: 30px;\"><td colspan=1 style=\"border: 1px solid #000; margin: 0;padding: 5px; font-size: 14px; height: 30px; line-height: 30px; width: 50%;\"><strong>Name: </strong>$name</td><td colspan=1 style=\"border: 1px solid #000; margin: 0;padding: 5px; font-size: 14px; height: 30px; line-height: 30px; width: 50%;\"><strong>Email: </strong>$email</td></tr>\n";
    $message .= "<tr style=\"width: 796px; height: 30px;\"><td colspan=1 style=\"border: 1px solid #000; margin: 0;padding: 5px; font-size: 14px; height: 30px; line-height: 30px; width: 50%;\"><strong>Phone: </strong>$phone</td><td colspan=1 style=\"border: 1px solid #000; margin: 0;padding: 5px; font-size: 14px; height: 30px; line-height: 30px; width: 50%;\"><strong>Hotel:</strong> $hotelname </td></tr>\n";
    $message .= "<tr style=\"width: 796px\"><td colspan=1 style=\"border: 1px solid #000; margin: 0;padding: 5px; font-size: 14px; width: 50%;\"><strong>Travel type: </strong>$service</td><td colspan=1 style=\"border: 1px solid #000; margin: 0;padding: 5px; font-size: 14px; width: 50%;\"><strong>Passengers: </strong>$pax</td></tr>\n";
    $message .= "<tr style=\"width: 796px\"><th colspan=2 style=\"background-color: #1b1b1b; border: 1px solid #000; color: #fff; margin: 0; padding: 5px; font-size: 14px; text-align: center; width: 100%;\">ARRIVAL</th></tr>\n";
    $message .= "<tr style=\"width: 796px\"><td colspan=1 style=\"border: 1px solid #000; margin: 0;padding: 5px; font-size: 14px; width: 50%;\"><strong>Arrival: </strong>$arrivaldatefull - $arrivaltime</td><td colspan=1 style=\"border: 1px solid #000; margin: 0;padding: 5px; font-size: 14px; width: 50%;\"><strong>Arrival Airline: </strong> $arrivalairline - $arrivalflight</td></tr>\n";
    if($service === 'Round Trip') {
        $message .= "<tr style=\"width: 796px\"><td colspan=2 style=\"background-color: #1b1b1b; border: 1px solid #000; color: #fff; margin: 0; padding: 5px; font-size: 14px; text-align: center; width: 100%;\">DEPARTURE</td></tr>\n";
        $message .= "<tr style=\"width: 796px\"><td colspan=1 style=\"border: 1px solid #000; margin: 0;padding: 5px; font-size: 14px; width: 50%;\"><strong>Departure: </strong>$departuredatefull - $departuretime</td><td colspan=1 style=\"border: 1px solid #000; margin: 0;padding: 5px; font-size: 14px; width: 50%;\"><strong>Departure Airline: </strong> $departureairline - $departureflight</td></tr>\n";
    }
    $message .= "<tr style=\"width: 796px\"><td colspan=2 style=\"background-color: #1b1b1b; border: 1px solid #000; color: #fff; margin: 0; padding: 5px; font-size: 14px; text-align: center; width: 100%;\">ADITIONAL INFORMATION</td></tr>\n";
    if(($extrasbabyseat !== "0") || ($extrasboosterseat !== "0")) {
        $message .= "<tr style=\"width: 796px\"><td colspan=1 style=\"border: 1px solid #000; margin: 0;padding: 5px; font-size: 14px; width: 50%;\"><strong>Baby Seat: </strong> $extrasbabyseat </td><td colspan=1 style=\"border: 1px solid #000; margin: 0;padding: 5px; font-size: 14px; width: 50%;\"><strong>Booster Seat: </strong> $extrasboosterseat </td></tr>\n";
    }
    $message .= "<tr style=\"width: 796px\"><td colspan=1 style=\"border: 1px solid #000; margin: 0;padding: 5px; font-size: 14px; width: 50%;\"><strong>Grocery Stop:</strong> $extrasgrocery </td><td colspan=1 style=\"border: 1px solid #000; margin: 0;padding: 5px; font-size: 14px; width: 50%;\"><strong>Comments:</strong> $comments</td></tr>\n";
    $message .= "<tr style=\"width: 796px\"><td colspan=1 style=\"border: 1px solid #000; margin: 0;padding: 5px; font-size: 14px; width: 50%;\"><strong>Unit:</strong> $unit</td>\n";
    if($paymenttype === 'Cash'){
        $message .= "<td colspan=1 style=\"border: 1px solid #000; margin: 0;padding: 5px; font-size: 14px; width: 50%;\"><strong>Price: </strong> $pricecash USD **Please be prepared to pay in CASH directly to the driver</td></tr>\n";
    } else {
        $message .= "<td colspan=1 style=\"border: 1px solid #000; margin: 0;padding: 5px; font-size: 14px; width: 50%;\"><strong>Price: </strong> $pricepaypal USD **Please show your paypal payment to the driver</td></tr>\n";
    }
    $message .= "<tr style=\"width: 796px\"><th colspan=2 style=\"background-color: #1b1b1b; border: 1px solid #000; color: #fff; margin: 0; padding: 5px; font-size: 14px; text-align: center; width: 100%;\">INSTRUCTIONS TO FIND YOUR DRIVER</th></tr>\n";
    $message .= "<tr style=\"width: 796px\"><td colspan=2 style=\"border: 1px solid #000; margin: 0; padding: 5px; font-size: 14px; text-align: center; width: 100%;\">Arrival Instructions at SJD Airport. After your flight arrives at the SJD airport, proceed directly to immigration. Be sure to keep the stamped immigration form that is returned to you — you will need it to exit Mexico. Next, head to the baggage claim area and then proceed through customs. At customs, a customs officer will ask you to press a button. A green light means you may pass without inspection; a red light indicates your luggage will be checked. Once you've cleared customs, you will walk through several sets of double doors. Inside this area, you may encounter representatives from timeshares, rental car companies, and taxi services. You are not required to speak with any of them.</td></tr>\n";
    $message .= "<tr style=\"width: 796px\"><td colspan=2 style=\"border: 1px solid #000; margin: 0; padding: 5px; font-size: 14px; text-align: center; width: 100%;\">Once you exit this area, go to airport exit to the right. After exiting the double doors to your right, walk to look for a representative will be holding a Welcome Board at <strong>Umbrella #10</strong></td></tr>\n";
    $message .= "<tr style=\"width: 796px\"><td colspan=2 style=\"border: 1px solid #000; margin: 0; padding: 5px; font-size: 14px; text-align: center; width: 100%;\"><p>+52 (624) 196 0495</p></td></tr>\n";
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
