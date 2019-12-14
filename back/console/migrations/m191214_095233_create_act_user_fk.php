<?php

use yii\db\Migration;

/**
 * Class m191214_095233_create_act_user_fk
 */
class m191214_095233_create_act_user_fk extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->addForeignKey(
            'fk-act-user-user_id',
            'act',
            'user_id',
            'user',
            'id',
            'CASCADE',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropForeignKey(
            'fk-act-user-user_id',
            'act'
        );
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m191214_095233_create_act_user_fk cannot be reverted.\n";

        return false;
    }
    */
}
