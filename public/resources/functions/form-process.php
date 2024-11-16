<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['recaptcha_response'])) {
    $recaptcha_url      = 'https://www.google.com/recaptcha/api/siteverify';
    $recaptcha_secret   = '6Ld0JKghAAAAAGCwnt1O7VVz6YBw6HWbqOStON_7';
    $recaptcha_response = $_POST['recaptcha_response'];
    $recaptcha = file_get_contents($recaptcha_url . '?secret=' . $recaptcha_secret . '&response=' . $recaptcha_response);
    $recaptcha = json_decode($recaptcha);
    if ($recaptcha->score >= 0.5) {
        date_default_timezone_set('Asia/Kolkata');
        $timestamp = date('Y-m-d H:i:s');
        $name = $_POST['name'];
        $email = $_POST['email'];
        $mobile = $_POST['mobile'];
        $message = $_POST['message'];
        $file_open = fopen("../data/form-submissions.csv", "a");
        $no_rows   = count(file("../data/form-submissions.csv"));
        if ($no_rows > 1) {
            $no_rows = ($no_rows - 1) + 1;
        }
        $form_data = array(
            'sr_no' => $no_rows,
            'timestamp' => $timestamp,
            'name' => $name,
            'email' => $email,
            'mobile' => $mobile,
            'message' => $message
        );
        if (fputcsv($file_open, $form_data))
        $formcontent=" \n Serial Number: $no_rows \n Timestamp: $timestamp \n Name: $name \n Email: $email \n Mobile: $mobile \n Message: $message";
        $recipient = "info@proskillhub.com";
        $subject = "New Form Submission at Website";
        $mailheader = "From: noreply@proskillhub.com \r\n";
        mail($recipient, $subject, $formcontent, $mailheader) or die("Form submission failed, please try again.");
            echo ("OK");
    } else {
        echo ("Form submission failed, please try again.");
    }
}
?>