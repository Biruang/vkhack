<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%useract}}`.
 */
class m191214_095248_create_useract_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%user_act}}', [
            'user_id' => $this->integer()->notNull(),
            'act_id' => $this->integer()->notNull(),
            'PRIMARY KEY(user_id, act_id)'
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%user_act}}');
    }
}
