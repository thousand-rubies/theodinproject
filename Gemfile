ruby File.read('.ruby-version').strip

source 'https://rubygems.org'

gem 'rails', '6.1.7.3'

gem 'activeadmin', '~> 2.13', '>= 2.13.1'
gem 'activeadmin_addons', '~> 1.9', '>= 1.9.0'
gem 'active_material', '~> 1.5'
gem 'acts_as_votable', '~> 0.13'
gem 'barnes', '~> 0.0'
gem 'bootsnap', '~> 1.13', require: false
gem 'cancancan', '~> 3.4'
gem 'classy-yaml', '~> 0.8', '>= 0.8.5'
gem 'devise', '~> 4.8', '>= 4.8.1'
gem 'discard', '~> 1.2', '>= 1.2.1'
gem 'discordrb-webhooks', '~> 3.4'
gem 'dry-initializer', '~> 3.1'
gem 'friendly_id', '~> 5.4', '>= 5.4.2'
gem 'github_api', '~> 0.19', '>= 0.19.0'
gem 'github_webhook', '~> 1.4', '>= 1.4.1'
gem 'inline_svg', '~> 1.8', '>= 1.8.0'
gem 'kramdown', '~> 2.4'
gem 'newrelic_rpm', '~> 8.11'
gem 'noticed', '~> 1.6', '>= 1.6.0'
gem 'octokit', '~> 5.6'
gem 'omniauth-github', '~> 2.0', '>= 2.0.0'
gem 'omniauth-google-oauth2', '~> 1.0', '>= 1.0.1'
gem 'omniauth-rails_csrf_protection', '~> 1.0', '>= 1.0.1'
gem 'pagy', '~> 5.10', '>= 5.10.1'
gem 'pg', '~> 1.4'
gem 'puma', '~> 5.6'
gem 'rack-attack', '~> 6.6', '>= 6.6.1'
gem 'react-rails', '~> 2.6', '>= 2.6.2'
gem 'ruby-progressbar', '~> 1.11'
gem 'sass-rails', '~> 6.0', '>= 6.0.0'
gem 'seed-fu', '~> 2.3', '>= 2.3.9'
gem 'sentry-rails', '~> 5.5', '>= 5.5.0'
gem 'sentry-ruby', '~> 5.5'
gem 'sentry-sidekiq', '~> 5.5', '>= 5.5.0'
gem 'shakapacker', '6.5.2'
gem 'sidekiq', '~> 7.0', '>= 7.0.0'
gem 'turbo-rails', '~> 1.3', '>= 1.3.1'
gem 'view_component', '~> 2.74', '>= 2.74.1'

group :development do
  gem 'letter_opener', '~> 1.8'
  gem 'listen', '~> 3.7'
  gem 'rack-mini-profiler'
  gem 'rubocop', '~> 1.36', require: false
  gem 'rubocop-performance', '~> 1.15', require: false
  gem 'rubocop-rails', '~> 2.16', '>= 2.16.1', require: false
  gem 'rubocop-rspec', '~> 2.13', require: false
  gem 'web-console', '~> 4.2', '>= 4.2.0'
end

group :development, :test do
  gem 'dotenv-rails', '~> 2.8', '>= 2.8.1'
  gem 'rspec-rails', '~> 6.0', '>= 6.0.0'
end

group :test do
  gem 'capybara', '~> 3.37', '>= 3.37.1'
  gem 'climate_control', '~> 1.2'
  gem 'cuprite', '~> 0.14', '>= 0.14.2'
  gem 'erb_lint', '~> 0.2', '>= 0.2.0', require: false
  gem 'factory_bot_rails', '~> 6.2', '>= 6.2.0'
  gem 'rspec-retry', '~> 0.6'
  gem 'shoulda-matchers', '~> 5.2', '>= 5.2.0'
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
