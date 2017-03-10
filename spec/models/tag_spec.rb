require 'rails_helper'

describe Tag do
  context 'validations' do
    it { is_expected.to validate_presence_of :text }
    it { is_expected.to validate_uniqueness_of :text }
  end

  context 'associations' do
    it { is_expected.to have_and_belong_to_many :projects }
  end
end
