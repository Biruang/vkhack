<?php

use yii\db\Migration;

/**
 * Class m191214_095730_create_useract_act_index
 */
class m191214_095730_create_useract_act_index extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createIndex(
            'idx-useract-act-act_id',
            'user_act',
            'act_id'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropIndex(
            'idx-useract-act-act_id',
            'user_act'
        );
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m191214_095730_create_useract_act_index cannot be reverted.\n";

        return false;
    }
    */
}
