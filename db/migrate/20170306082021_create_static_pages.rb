class CreateStaticPages < ActiveRecord::Migration[5.1]
  def change
    create_table :static_pages, id: false do |t|
      t.string :link
      t.string :title
      t.text :content

      t.timestamps
    end

    add_index :static_pages, :link, unique: true
  end
end
