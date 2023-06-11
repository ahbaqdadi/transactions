<?php

namespace App\Bridge;

interface WithdrawalInterface
{
    public function getAmount(): ?int;
    public function setAmount(int $amount): self;
    public function setType(bool $type): self;
}