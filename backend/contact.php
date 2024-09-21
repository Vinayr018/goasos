<?php

require_once 'rate.php';

if ($_SERVER['REQUEST_METHOD'] != 'POST') {
    header('HTTP/1.1 405 Method Not allowed');
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);

// Check if JSON decoding was successful
if ($data === null && json_last_error() !== JSON_ERROR_NONE) {
    header('HTTP/1.1 400 Bad Request Check Input');
    exit;
}

$id = $data['id'];
$rateLimit = RateLimit::getInstance();
$canProceed = $rateLimit->ShouldProcessRequest($id);

if (!$canProceed) {
    header('HTTP/1.1 429 Too Many Requests');
    exit;
}

echo 'should send email';

// $to = 'richrd77@gmail.com';  // Recipient email
// $subject = 'Test Email';  // Subject of the email
// $message = 'This is a test email';  // Body of the email
// $headers = 'From: sales@goasos.com' . "\r\n" .
//     'Reply-To: sales@goasos.com' . "\r\n" .
//     'X-Mailer: PHP/' . phpversion();

// // Send the email
// if (mail($to, $subject, $message, $headers)) {
//     echo 'Email sent successfully!';
// } else {
//     echo 'Email sending failed.';
// }

// echo json_encode(['flag' => $canProceed]);