<?php
function getClientIp()
{
    $ipAddress = '';

    // Check if the IP address is coming from a proxy
    if (isset($_SERVER['HTTP_CLIENT_IP']) && $_SERVER['HTTP_CLIENT_IP']) {
        $ipAddress = $_SERVER['HTTP_CLIENT_IP'];
    } elseif (isset($_SERVER['HTTP_X_FORWARDED_FOR']) && $_SERVER['HTTP_X_FORWARDED_FOR']) {
        // Check if the IP is passed from a proxy (load balancer, etc.)
        // This could contain a list of IPs, use the first one.
        $ipAddress = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR'])[0];
    } elseif (isset($_SERVER['HTTP_X_FORWARDED']) && $_SERVER['HTTP_X_FORWARDED']) {
        $ipAddress = $_SERVER['HTTP_X_FORWARDED'];
    } elseif (isset($_SERVER['HTTP_X_CLUSTER_CLIENT_IP']) && $_SERVER['HTTP_X_CLUSTER_CLIENT_IP']) {
        $ipAddress = $_SERVER['HTTP_X_CLUSTER_CLIENT_IP'];
    } elseif (isset($_SERVER['HTTP_FORWARDED_FOR']) && $_SERVER['HTTP_FORWARDED_FOR']) {
        $ipAddress = $_SERVER['HTTP_FORWARDED_FOR'];
    } elseif (isset($_SERVER['HTTP_FORWARDED']) && $_SERVER['HTTP_FORWARDED']) {
        $ipAddress = $_SERVER['HTTP_FORWARDED'];
    } elseif (isset($_SERVER['REMOTE_ADDR']) && $_SERVER['REMOTE_ADDR']) {
        // Default case for getting the IP address
        $ipAddress = $_SERVER['REMOTE_ADDR'];
    }

    return $ipAddress;
}

// Create a PHP object
class Person
{
    public $name;
    public $email;
    public $age;

    public $ip;

    function __construct($name, $email, $age, $ip)
    {
        $this->name = $name;
        $this->email = $email;
        $this->age = $age;
        $this->ip = $ip;
    }
}

$person = new Person("John Doe", "john.doe@example.com", 30, getClientIp());

// Convert the object into JSON
header('Content-Type: application/json'); // Set the header to indicate JSON response
echo json_encode($person);

