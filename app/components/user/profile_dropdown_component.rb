class User::ProfileDropdownComponent < ViewComponent::Base
  include Turbo::FramesHelper

  def initialize(current_user:, theme:)
    @current_user = current_user
    @theme = theme
  end

  private

  attr_reader :current_user, :theme
end
