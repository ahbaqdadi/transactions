<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230608165132 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE transaction CHANGE account_id account_id BINARY(16) NOT NULL COMMENT \'(DC2Type:uuid)\', CHANGE transaction_id transaction_id BINARY(16) NOT NULL COMMENT \'(DC2Type:uuid)\'');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_723705D19B6B5FBA ON transaction (account_id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_723705D12FC0CB0F ON transaction (transaction_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP INDEX UNIQ_723705D19B6B5FBA ON transaction');
        $this->addSql('DROP INDEX UNIQ_723705D12FC0CB0F ON transaction');
        $this->addSql('ALTER TABLE transaction CHANGE account_id account_id VARCHAR(255) NOT NULL, CHANGE transaction_id transaction_id VARCHAR(255) NOT NULL');
    }
}
