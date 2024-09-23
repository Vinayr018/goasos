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

$phone = htmlspecialchars($data['phoneNumber'], ENT_QUOTES, 'UTF-8');
$email = htmlspecialchars($data['email'], ENT_QUOTES, 'UTF-8');
$cat = htmlspecialchars($data['category'], ENT_QUOTES, 'UTF-8');
$query = htmlspecialchars($data['query'], ENT_QUOTES, 'UTF-8');

$categoriesMap = [
    1 => '<li>Home Automation</li>',
    2 => '<li>Office Automation</li>',
    3 => '<li>Industry Automation</li>',
    4 => '<li>Security Automation</li>',
    5 => '<li>Space Automation</li>',
];

// Explode the comma-separated numbers into an array
$catNumbers = explode(",", $cat);

// Initialize an array to store the extracted categories
$extractedCategories = [];

// Loop through each number and map it to the corresponding string
foreach ($catNumbers as $number) {
    $number = (int) $number;  // Ensure it's an integer
    if (isset($categoriesMap[$number])) {
        $extractedCategories[] = $categoriesMap[$number];
    }
}

// Convert the extracted categories back into a comma-separated string
$extractedCategoriesString = implode("", $extractedCategories);


$boody = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><style>*{margin:0;padding:0;box-sizing:border-box;font-family:system-ui,-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,Oxygen,Ubuntu,Cantarell,\'Open Sans\',\'Helvetica Neue\',sans-serif}.wrapper{padding:24px}.spec{margin:15px 0}h3{margin-bottom:8px}ul{margin-left:20px}</style><title>Email from Goasos</title></head><body><div class="wrapper"><h1 class="header">You got a query from Goasos.com</h1><div class="content"><div class="category spec"><h3 class="sub-heading">From:</h3><p class="cont">Phone Number&nbsp;&nbsp;:&nbsp;&nbsp;[phone]</p><p class="cont">Email&nbsp;&nbsp;:&nbsp;&nbsp;[email]</p></div><div class="category spec"><h3 class="sub-heading">Categories:</h3><ul>[categries]</ul></div><div class="query spec"><h3>Query:</h3><p>[query]</p></div></div></div></body></html>';
$to = 'hemanta.bal@goasos.com';  // Recipient email
$subject = 'Query recived from Goasos Public website';  // Subject of the email
$message = str_replace(
    "[categries]",
    $extractedCategoriesString,
    str_replace(
        "[query]",
        $query,
        str_replace(
            "[phone]",
            $phone,
            str_replace("[email]", $email, $boody)
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