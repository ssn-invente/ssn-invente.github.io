<?php
// error_reporting(0);

include 'Mailin.php';

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "invente";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) 
{
    die("Connection failed: " . $conn->connect_error);
}

$ijson = json_decode(file_get_contents('php://input'));

$iname = $ijson->uname;
$icollege = $ijson->college;
$iyear = $ijson->year;
$iemailid = $ijson->email;
$ibranch = $ijson->branch;
$imobile = $ijson->phone; 
$inventeid = "";

$querystmt = $conn->prepare("INSERT INTO `online-reg` (name, college, year, emailid, branch, mobile) VALUES (?, ?, ?, ?, ?, ?)");
$querystmt->bind_param("ssissi", $iname, $icollege, $iyear, $iemailid, $ibranch, $imobile);

if ($querystmt->execute() === TRUE) {

    $querystmt->close();

    $querystmt = $conn->prepare("SELECT inid FROM `online-reg` WHERE name = ? AND college = ? AND year = ? AND emailid = ? AND branch = ? AND mobile = ?");
    $querystmt->bind_param("ssissi", $iname, $icollege, $iyear, $iemailid, $ibranch, $imobile);

    echo "Insert Success<br />";

    if($querystmt->execute() === TRUE)
    {
        $res = $querystmt->get_result();

        while($row = $res->fetch_row())
        {
            $inventeid = "I" . $row[0];
            echo "<br />" . $inventeid;
            break;
        }
    }
    $querystmt->close();

    if($inventeid !== "")
    {
//         /*
//         $mailin = new Mailin('ssninvente@gmail.com', 'Ecw7K0813BzmpdXn');
//         $mailin->
//             addTo($iemailid, $iname)->
//             setFrom('varna@ssninvente.com', 'Varna Krishnan')->
//             setReplyTo('no_reply@ssninvente.com','No Reply')->
//             setSubject('Registration Successful - SSN Invente')->
//             setHtml('We are pleased to inform you that you have been successfully registered for SSN Invente under the following ID: <strong>' . $inventeid . '</strong><br /><br />Regards<br />SSN Invente Team');
//         $res = $mailin->send();
//         */

//         $to = $iemailid;
//         $subject = "Registration Successful - SSN Invente";
//         $message = 
// "
// <html>
// <head>
// <title>Registration Successful - SSN Invente</title>
// </head>
// <body>
// <p>We are pleased to inform you that you have been successfully registered for SSN Invente under the following ID: <strong>" . $inventeid . "</strong></p>
// <p>Regards<br />SSN Invente Team</p>
// </body>
// </html>
// ";

//         $headers = "MIME-Version: 1.0" . "\r\n";
//         $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
//         $headers .= "From: varna@ssninvente.com" . "\r\n";

//         mail($to,$subject,$message,$headers);

        echo '{ "success" : true }';
    }
    else
    {
        echo '{ "success" : false }';
    }
}
else {
    $querystmt->close();


    echo '{ "success" : false }';
}

$conn->close();
?>