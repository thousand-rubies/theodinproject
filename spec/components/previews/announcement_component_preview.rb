class AnnouncementComponentPreview < ViewComponent::Preview
  def with_announcment
    render(AnnouncementComponent.new(announcement: default_announcment))
  end

  private

  def default_announcment
    Announcement.new(
      message: 'Hello!',
      expires_at: DateTime.tomorrow,
      user_id: 1
    )
  end
end
