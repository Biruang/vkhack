<?php

use yii\db\Migration;

/**
 * Class m191214_095230_create_act_user_index
 */
class m191214_095230_create_act_user_index extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createIndex(
            'idx-act-user-user_id',
            'act',
            'user_id'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropIndex(
            'idx-act-user-user_id',
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
        echo "m191214_095230_create_act_user_index cannot be reverted.\n";

        return false;
    }
    */
}
