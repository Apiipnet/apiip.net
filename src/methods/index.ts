import apiClient from '../axiosConfig/axiosIntercepter';
import { Settings, SettingsOptions } from '../settings';
interface MethodOptions {
  output: string;
  ip: string;
  fields: string;
  language: string;
  callback: string;
}

class Methods extends Settings {
  constructor(accessKey: string, options: SettingsOptions) {
    super(accessKey, options);
  }

  async getLocation(options?: MethodOptions) {
    try {
      return await apiClient.get(`${super.getDefaultApiUrl()}${createUrlParams(options)}`);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

function createUrlParams(options?: MethodOptions): string {
  let url = '';
  if (typeof options === 'object') {
    for (const param of Object.keys(options)) {
      url += `&${param as keyof MethodOptions}=${options[param as keyof MethodOptions]}`;
    }
  }
  return url;
}

export default Methods;
