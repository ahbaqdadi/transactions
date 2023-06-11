<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use App\Controller\HealthCheckController;


#[ApiResource(
    operations: [
        new Get(
            name: 'ping', 
            uriTemplate: '/ping', 
            controller: HealthCheckController::class,
            read: false
        )
    ]
)]
class HealhCheck
{

}