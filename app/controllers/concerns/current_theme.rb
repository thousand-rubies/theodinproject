module CurrentTheme
  extend ActiveSupport::Concern

  included do
    before_action :set_default

    helper_method :set_current_theme
    helper_method :current_theme
  end

  private

  def set_default
    cookies.permanent[:theme] = cookies[:theme] || 'light'
  end

  def set_current_theme(new_theme)
    cookies.permanent[:theme] = new_theme
  end

  def current_theme
    @current_theme ||= Users::Theme.for(cookies[:theme])
  end
end
