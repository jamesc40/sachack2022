class User < ApplicationRecord
  has_secure_password

  validates :firstName, presence: true
  validates :lastName, presence: true
  validates :email, format: /\w+@\w+\.{1}[a-zA-Z]{2,}/, presence: true, uniqueness: true
  validate :permitted_emails

  validates :password, presence: true, length: {minimum: 8}
  validate :password_lower_case
  validate :password_uppercase
  validate :password_special_char
  validate :password_contains_number

  private

  def permitted_emails
    unless email.match?(/gmail.com|yahoo.com|icloud.com/)
        errors.add :permitted_emails, "Sorry, that email isn't permitted."
    end
  end 

  def password_uppercase
    return if !!password.match(/\p{Upper}/)
    errors.add :password, ' must contain at least 1 uppercase '
  end

  def password_lower_case
    return if !!password.match(/\p{Lower}/)
    errors.add :password, ' must contain at least 1 lowercase '
  end

  def password_special_char
    special = "?<>',?[]}{=-)(*&^%$#`~{}!"
    regex = /[#{special.gsub(/./){|char| "\\#{char}"}}]/
    return if password =~ regex
    errors.add :password, ' must contain special character'
  end

  def password_contains_number
    return if password.count("0-9") > 0
    errors.add :password, ' must contain at least one number'
  end

end
