<?php

namespace App\Controller;

use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[AsController]
class HealthCheckController extends AbstractController
{
    public function __invoke()
    {
        return ['pong'];
    }
}