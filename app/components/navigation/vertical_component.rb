class Navigation::VerticalComponent < ViewComponent::Base
  renders_many :links, "Navigation::LinkComponent"
end
