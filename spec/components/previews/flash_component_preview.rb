class FlashComponentPreview < ViewComponent::Preview
  include Classy::Yaml::ComponentHelpers

  def alert
    render(Alerts::FlashComponent.new(type: :alert, message: 'Alert!'))
  end

  def notice
    render(Alerts::FlashComponent.new(type: :notice, message: 'Notice!'))
  end
end
