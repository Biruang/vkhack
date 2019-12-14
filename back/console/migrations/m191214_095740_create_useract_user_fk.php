<?php

use yii\db\Migration;

/**
 * Class m191214_095740_create_useract_user_fk
 */
class m191214_095740_create_useract_user_fk extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->addForeignKey(
            'fk-useract-user-user_id',
            'user_act',
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
            'fk-useract-user-user_id',
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
        echo "m191214_095740_create_useract_user_fk cannot be reverted.\n";

        return false;
    }
    */
}
