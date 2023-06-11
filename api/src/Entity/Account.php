<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Metadata\ApiProperty;
use App\Controller\CalculateBalanceController;
use Symfony\Component\Serializer\Annotation\SerializedName;

#[ApiResource(
    normalizationContext: ['groups' => ['transaction_read']],
    denormalizationContext: ['groups' => ['transaction_write']],
    operations: [
        new Get(
            name: 'calculate_balance', 
            uriTemplate: '/accounts/{accountId}', 
            controller: CalculateBalanceController::class,
            read: false
        )
    ]
)]
class Account
{
    #[Groups(['transaction_read', 'transaction_write'])]
    #[ApiProperty(identifier: true)]
    #[SerializedName("account_id")]
    public ?string $accountId = null;

    #[Groups(['transaction_read', 'transaction_write'])]
    #[SerializedName("balance")]
    public ?int $amount = null;
}