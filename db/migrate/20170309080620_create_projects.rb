class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :title
      t.string :subtitle
      t.text :description
      t.string :image
      t.string :github
      t.string :preview

      t.timestamps
    end
  end
end
