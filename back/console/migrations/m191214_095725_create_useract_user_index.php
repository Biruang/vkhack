<?php

use yii\db\Migration;

/**
 * Class m191214_095725_create_useract_user_index
 */
class m191214_095725_create_useract_user_index extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createIndex(
            'idx-useract-user-user_id',
            'user_act',
            'user_id'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropIndex(
            'idx-useract-user-user_id',
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
        echo "m191214_095725_create_useract_user_index cannot be reverted.\n";

        return false;
    }
    */
}
