class Theme::SwitcherComponent < ViewComponent::Base
  include Classy::Yaml::ComponentHelpers

  def initialize(theme:, type: :default)
    @theme = theme
    @type = type
  end

  def dark_mode?
    theme == 'dark'
  end

  def icon
    dark_mode? ? 'sun' : 'moon'
  end

  def text
    dark_mode? ? 'Light mode' : 'Dark mode'
  end

  def other_theme
    dark_mode? ? 'light' : 'dark'
  end

  def icon_only?
    type == :icon_only
  end

  def mobile?
    type == :mobile
  end

  private

  attr_reader :theme, :type
end
