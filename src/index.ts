import { SettingsOptions } from './settings';
import Methods from './methods';
function apiip(accessKey: string, options: SettingsOptions) {
  if (!accessKey) {
    return 'API access key is required!';
  }
  const methods = new Methods(accessKey, options);
  return {
    getLocation: methods.getLocation,
  };
}

module.exports = apiip;
