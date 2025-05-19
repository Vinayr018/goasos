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

$name = htmlspecialchars($data['name'], ENT_QUOTES, 'UTF-8');
$email = htmlspecialchars($data['email'], ENT_QUOTES, 'UTF-8');
$phone = htmlspecialchars($data['phone'], ENT_QUOTES, 'UTF-8');
$query = htmlspecialchars($data['message'], ENT_QUOTES, 'UTF-8');

$cat = '';
if (!empty($data['interestedIn']) && is_array($data['interestedIn'])) {
    foreach ($data['interestedIn'] as $item) {
        $cat .= "<li>" . htmlspecialchars($item, ENT_QUOTES, 'UTF-8') . "</li>\n";
    }
}

$location = '';
if (!empty($data['location']) && is_array($data['location'])) {
    foreach ($data['location'] as $item) {
        $location .= "<li>" . htmlspecialchars($item, ENT_QUOTES, 'UTF-8') . "</li>\n";
    }
}

$boody = "<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><style>*{margin:0;padding:0;box-sizing:border-box;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif}.wrapper{padding:24px}.spec{margin:15px 0}h3{margin-bottom:8px}ul{margin-left:20px}</style><title>Email from Goasos</title></head><body><div class=\"wrapper\"><h1 class=\"header\">You got a query from Goasos.com</h1><div class=\"content\"><div class=\"category spec\"><h3 class=\"sub-heading\">From:</h3><p class=\"cont\">Phone Number&nbsp;&nbsp;:&nbsp;&nbsp;[phone]</p><p class=\"cont\">Email&nbsp;&nbsp;:&nbsp;&nbsp;[email]</p><p class=\"cont\">Name&nbsp;&nbsp;:&nbsp;&nbsp;[name]</p></div><div class=\"category spec\"><h3 class=\"sub-heading\">Interested in below streams:</h3><ul>[categries]</ul></div><div class=\"query spec\"><h3>Query:</h3><p>[query]</p></div></div></div></body></html>";
$to = 'hemanta.bal@goasos.com;richrd77@gmail.com;';  // Recipient email
$subject = 'Query recived from Goasos Public website';  // Subject of the email
$message = str_replace(
    "[name]",
    $name,
    str_replace(
        "[categries]",
        $cat,
        str_replace(
            "[query]",
            $query,
            str_replace(
                "[phone]",
                $phone,
                str_replace("[email]", $email, $boody)
            )
        )
    )
);  // Body of the email

$headers = "MIME-Version: 1.0" . "\r\n" .
    "Content-type:text/html;charset=UTF-8" . "\r\n" .
    'From: sales@goasos.com' . "\r\n" .
    'Reply-To: sales@goasos.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

// Send the email
if (mail($to, $subject, $message, $headers)) {
    echo json_encode(['status' => true]);
} else {
    echo json_encode(['status' => false]);
}

// echo json_encode(['flag' => $canProceed]);