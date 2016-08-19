<?php

// include 'Mailin.php';

// $iemailid = "lordsonpaulraj@gmail.com";
// $iname = "Lordson Jacob";
$inventeid = "I100";

// $mailin = new Mailin('ssninvente@gmail.com', 'Ecw7K0813BzmpdXn');
//         $mailin->
//             addTo($iemailid, $iname)->
//             setFrom('varna@ssninvente.com', 'Varna Krishnan')->
//             setReplyTo('no_reply@ssninvente.com','No Reply')->
//             setSubject('Registration Successful - SSN Invente')->
//             setHtml('We are pleased to inform you that you have been successfully registered for SSN Invente under the following ID: <strong>' . $inventeid . '</strong><br /><br />Regards<br />SSN Invente Team');
//         $res = $mailin->send();

// echo "" . $res;

        $to = "sudarabisheck@gmail.com";
        $subject = "Registration Successful - SSN Invente";
        $message = 
"
<html>
<head>
<title>Registration Successful - SSN Invente</title>
</head>
<body>
<p>We are pleased to inform you that you have been successfully registered for SSN Invente under the following ID: <strong>" . $inventeid . "</strong></p>
<p>Regards<br />SSN Invente Team</p>
</body>
</html>
";

        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= "From: varna@ssninvente.com" . "\r\n";

        mail($to,$subject,$message,$headers);

?>