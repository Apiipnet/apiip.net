interface SettingsOptions {
  ssl: boolean;
}
class Settings {
  private accessKey: string;
  private baseUrl: string;
  private BASE_URL: string = 'http://apiip.net/api/check';
  private BASE_URL_SSL: string = 'https://apiip.net/api/check';
  protected constructor(accessKey: string, options?: SettingsOptions) {
    this.accessKey = accessKey;
    this.baseUrl = this.getBaseUrl(options?.ssl);
    Settings.prototype.getDefaultApiUrl = this.getDefaultApiUrl.bind(this);
  }
  private getBaseUrl(ssl: boolean = false): string {
    return ssl ? this.BASE_URL_SSL : this.BASE_URL;
  }
  protected getDefaultApiUrl() {
    return `${this.baseUrl}${`?accessKey=${this.accessKey}`}`;
  }
}

export { Settings, SettingsOptions };
