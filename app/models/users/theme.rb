module Users
  class Theme
    DEFAULT_THEMES = [
      %w[light sun],
      %w[dark moon]
    ]

    def self.all
      DEFAULT_THEMES.map { |name, icon| new(name, icon) }
    end

    def self.for(value)
      all.find { |theme| theme.name == value }
    end

    attr_reader :name, :icon

    def initialize(name, icon)
      @name = name
      @icon = icon
    end
  end
end
