class Navigation::LinkComponent < ViewComponent::Base
  def initialize(name:, href:, icon_path:)
    @name = name
    @href = href
    @icon_path = icon_path
  end

  def current_icon_classes
    return 'text-gray-600 group-hover:text-gray-700 odin-dark-page-nav-item-active' if current?

    'text-gray-400 group-hover:text-gray-500'
  end

  def current_link_classes
    return 'bg-gray-50 text-gray-700 hover:text-gray-700 hover:bg-white odin-dark-page-nav-item-active' if current?

    'text-gray-900 hover:text-gray-900 hover:bg-gray-50'
  end

  private

  attr_reader :name, :href, :icon_path

  def current?
    current_page?(href)
  end
end
