class CreateMissingPersonData < ActiveRecord::Migration[7.0]
  def change
    create_table :missing_person_data do |t|
      t.string :name
      t.integer :age
      t.string :gender
      t.string :eyeColor
      t.string :hairColor
      t.integer :height
      t.integer :weight
      t.string :ethnicity
      t.text :description
      t.string :image

      t.timestamps
    end
  end
end
