<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%act}}`.
 */
class m191214_094605_create_act_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%act}}', [
            'id' => $this->primaryKey(),
            'user_id'=>$this->integer()->notNull(),
            'name'=>$this->string(100)->notNull(),
            'text'=>$this->string(300),
            'is_close'=>$this->boolean()->defaultValue(false),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%act}}');
    }
}
