<?php

use yii\db\Migration;

/**
 * Class m191214_095736_create_useract_act_fk
 */
class m191214_095736_create_useract_act_fk extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->addForeignKey(
            'fk-useract-act-act_id',
            'user_act',
            'act_id',
            'act',
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
            'fk-useract-act-act_id',
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
        echo "m191214_095736_create_useract_act_fk cannot be reverted.\n";

        return false;
    }
    */
}
