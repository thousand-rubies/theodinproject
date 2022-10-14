FactoryBot.define do
  factory :lesson do
    section
    sequence(:title) { |n| "test lesson#{n}" }
    sequence(:position) { |n| n }
    github_path { '/lesson_course/lesson_title.md' }
    identifier_uuid { SecureRandom.uuid }

    trait :project do
      is_project { true }
      accepts_submission { true }
      has_live_preview { true }
    end

    after(:create) do |lesson|
      if lesson.content.blank?

        create(:content, lesson:)
        # Surely there is a less expensive way to do this?
        # You may need to reload the record here, depending on your application
        lesson.reload
      end
    end
  end
end
