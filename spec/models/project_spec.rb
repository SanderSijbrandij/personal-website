require 'rails_helper'

describe Project do
  context 'validations' do
    it { is_expected.to validate_presence_of :title }
    it { is_expected.to validate_presence_of :subtitle }
    it { is_expected.to validate_presence_of :description }
    it { is_expected.to validate_presence_of :image }
  end

  context 'associations' do
    it { is_expected.to have_and_belong_to_many :tags }
  end
end
