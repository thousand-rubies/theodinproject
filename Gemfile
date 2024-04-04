ruby File.read('.ruby-version').strip

source 'https://rubygems.org'

gem 'rails', '7.0.8.1'

gem 'activeadmin', '~> 2.14', '>= 2.14.0'
gem 'activeadmin_addons', '~> 1.10', '>= 1.10.0'
gem 'active_material', '~> 1.5'
gem 'acts_as_votable', '~> 0.13'
gem 'barnes', '~> 0.0'
gem 'bootsnap', '~> 1.13', require: false
gem 'cancancan', '~> 3.4'
gem 'classy-yaml', '~> 1.1'
gem 'devise', '~> 4.9', '>= 4.9.0'
gem 'discard', '~> 1.2'
gem 'discordrb-webhooks', '~> 3.4'
gem 'dry-initializer', '~> 3.1'
gem 'friendly_id', '~> 5.4'
gem 'github_api', '~> 0.19'
gem 'github_webhook', '~> 1.4', '>= 1.4.2'
gem 'inline_svg', '~> 1.9', '>= 1.9.0'
gem 'kramdown', '~> 2.4'
gem 'newrelic_rpm', '~> 8.11'
gem 'noticed', '~> 1.6', '>= 1.6.1'
gem 'octokit', '~> 5.6'
gem 'omniauth-github', '~> 2.0', '>= 2.0.1'
gem 'omniauth-google-oauth2', '~> 1.1', '>= 1.1.0'
gem 'omniauth-rails_csrf_protection', '~> 1.0'
gem 'pagy', '~> 5.10'
gem 'pg', '~> 1.4'
gem 'puma', '~> 5.6'
gem 'rack-attack', '~> 6.7', '>= 6.7.0'
gem 'react-rails', '~> 2.7', '>= 2.7.0'
gem 'ruby-progressbar', '~> 1.11'
gem 'sass-rails', '~> 6.0'
gem 'seed-fu', '~> 2.3'
gem 'sentry-rails', '~> 5.6', '>= 5.6.0'
gem 'sentry-ruby', '~> 5.5'
gem 'sentry-sidekiq', '~> 5.6', '>= 5.6.0'
gem 'shakapacker', '6.5.3'
gem 'sidekiq', '~> 6.5', '>= 6.5.6'
gem 'turbo-rails', '~> 1.3', '>= 1.3.2'
gem 'view_component', '~> 2.74'

group :development do
  gem 'letter_opener', '~> 1.8'
  gem 'listen', '~> 3.7'
  gem 'rack-mini-profiler', '>= 3.1.0'
  gem 'rubocop', '~> 1.36', require: false
  gem 'rubocop-performance', '~> 1.15', require: false
  gem 'rubocop-rails', '~> 2.17', '>= 2.17.0', require: false
  gem 'rubocop-rspec', '~> 2.13', require: false
  gem 'web-console', '~> 4.2', '>= 4.2.1'
end

group :development, :test do
  gem 'dotenv-rails', '~> 3.0', '>= 3.0.0'
  gem 'rspec-rails', '~> 6.0', '>= 6.0.1'
end

group :test do
  gem 'capybara', '~> 3.38', '>= 3.38.0'
  gem 'climate_control', '~> 1.2'
  gem 'cuprite', '~> 0.14', '>= 0.14.3'
  gem 'erb_lint', '~> 0.3', '>= 0.3.0', require: false
  gem 'factory_bot_rails', '~> 6.3', '>= 6.3.0'
  gem 'rspec-retry', '~> 0.6'
  gem 'shoulda-matchers', '~> 5.2'
  gem 'simplecov', '~> 0.21', require: false
  gem 'vcr', '~> 6.1'
  gem 'webmock', '~> 3.18'
end

# TODO: These gems are no longer default in Ruby 3.1 and have to be declared explicity, or Rspec will break.
# They can be removed once upgraded to Rails 7.0.1 + as they are properly declared as a dependency in that version
# See https://stackoverflow.com/questions/70500220/rails-7-ruby-3-1-loaderror-cannot-load-such-file-net-smtp
gem 'net-imap'
gem 'net-pop'
gem 'net-smtp'

# Use Redis for Action Cable
gem 'redis', '~> 5.0'
