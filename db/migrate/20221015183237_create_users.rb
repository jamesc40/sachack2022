class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :firstName
      t.string :lastName
      t.string :email
      t.string :password_digest
      t.float :longitude
      t.float :latitude
      t.boolean :isSafe

      t.timestamps
    end
  end
end
