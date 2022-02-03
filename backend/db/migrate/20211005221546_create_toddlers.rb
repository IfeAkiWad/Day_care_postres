class CreateToddlers < ActiveRecord::Migration[6.0]
  def change
    create_table :toddlers do |t|
      t.text :name
      t.date :birthday
      t.text :contact
      t.text :phone
      t.text :allergy
      t.text :daycare_id

      t.timestamps
    end
  end
end
