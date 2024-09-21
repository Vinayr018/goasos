<?php
class RateLimit
{
    private static $instance = null;

    private $count;

    private $maxCount = 3;

    private $window = 60;

    private final function __construct()
    {
        $this->count = 0;
    }

    public static function getInstance()
    {
        if (self::$instance == null) {
            self::$instance = new RateLimit();
        }
        return self::$instance;
    }

    public function ShouldProcessRequest($id)
    {
        $currentTime = time();
        $dir = __DIR__ . DIRECTORY_SEPARATOR . "data" . DIRECTORY_SEPARATOR . "rate.json";

        $oldData = json_decode(file_get_contents($dir), true);
        $canprocess = true;

        if (!isset($oldData[$id])) {
            $oldData[$id] = [
                'count' => 1,
                'time' => $currentTime
            ];
        } else {
            // Check if the time window has passed
            if ($currentTime - $oldData[$id]['time'] < $this->window) {
                // If within the time window, check the request count
                if ($oldData[$id]['count'] >= $this->maxCount) {
                    $canprocess = false;  // Rate limit exceeded
                } else {
                    // Increment the count
                    $oldData[$id]['count']++;
                }
            } else {
                // Reset the rate limit for this ID after the time window has passed
                $oldData[$id] = [
                    'count' => 1,
                    'time' => $currentTime
                ];
            }
        }

        file_put_contents($dir, json_encode($oldData));
        return $canprocess;
    }

}
