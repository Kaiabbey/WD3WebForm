<?php

if(isset($_POST["submit"]) ){
    $name = $_POST['firstname']." ".$_POST['lastname'];
    $emailfrom = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    $subject = $_POST['subject'];

    $mailTo = "contactForm@kaiabbey.work";
    $headers = "From: " . $emailfrom;
    $emailMessage = "You have received an email from ".$name.".\n\n".$message;

    mail($mailTo, $subject, $emailMessage,$headers);
    header("Location: index.php?mailsend");
}
else{
    header("Location: index.php?Failsend");
}
