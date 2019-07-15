export class AppConfigFile {
  API_MEMBER_DETAILS_URL: string;
  constructor(
    API_MEMBER_DETAILS_URL?: string,
  ) {
    this.API_MEMBER_DETAILS_URL = API_MEMBER_DETAILS_URL || '';
  }
}
