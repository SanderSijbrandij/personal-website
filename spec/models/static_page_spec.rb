require 'rails_helper'

describe StaticPage do
  context 'validations' do
    it { is_expected.to have_db_index :link }
    it { is_expected.to validate_presence_of :link }
    it { is_expected.to validate_presence_of :title }
    it { is_expected.to validate_presence_of :content }
  end
end
