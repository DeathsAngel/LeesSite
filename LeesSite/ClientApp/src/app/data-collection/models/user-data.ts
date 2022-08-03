import { Reason, Picture } from './';

export class UserData {
  public id: number = 0;
  public name = '';
  public email = '';
  public reasonId: number = 0;
  public picture: Picture | null = new Picture;
}
