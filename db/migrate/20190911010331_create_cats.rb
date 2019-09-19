class CreateCats < ActiveRecord::Migration[5.2]
  def change
    create_table :cats do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.string :breed, null: false
      t.integer :age, null: false
      t.integer :weight, null: false
      t.string :image_url

      t.timestamps
    end
  end
end
