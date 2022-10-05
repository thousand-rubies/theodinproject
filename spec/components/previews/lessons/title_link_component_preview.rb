module Lessons
  class TitleLinkComponentPreview < ViewComponent::Preview
    def with_lesson
      render(TitleLinkComponent.new(lesson: Lesson.first, lesson_number: 1))
    end

    def with_project
      render(TitleLinkComponent.new(lesson: Lesson.find(22), lesson_number: 22))
    end
  end
end
