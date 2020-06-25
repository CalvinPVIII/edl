<?php

if(isset($_POST['send']))
{    
    $subject="$subject";
    $message="$body";
    
    $mail_from="$email";
    $header="from: $name <$mail_from>";
    
    $to='calvinp003@gmail.com';
    
    $send_contact=mail($to.$subject.$message.$header);
    
    if($send_contact){
        echo "We've recived your contact information";
    }
    else {
        echo "ERROR";
    }
}
?>