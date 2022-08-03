import { ValidationConstant } from './validation-constant';

export enum ValidationError {
  REQUIRED = 'required',
  EMAIL = 'email',
  MIN_LENGTH = 'minlength',
  MAX_LENGTH = 'maxlength',
  IS_EQUAL = 'isEqual'
}

export class ValidationErrorUtils {
  public static readonly messages: Map<ValidationError, string> = new Map<ValidationError, string>([
    [ValidationError.REQUIRED, 'This field is required'],
    [ValidationError.EMAIL, 'The email format is incorrect']
  ]);

  public static getMessages(
    minLength = ValidationConstant.TEXT_FIELD_MIN_LENGTH,
    maxLength = ValidationConstant.TEXT_FIELD_MAX_LENGTH
  ): Map<ValidationError, string> {
    const messages: Map<ValidationError, string> = new Map(ValidationErrorUtils.messages);

    messages.set(
      ValidationError.MIN_LENGTH,
      `This field is too short (minimum is ${minLength} characters)`
    );
    messages.set(
      ValidationError.MAX_LENGTH,
      `This field is too long (maximum is ${maxLength} characters)`
    );

    return messages;
  }
}
