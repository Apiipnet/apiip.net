# IP to Location (Node.js and browser)

Find geolocation data from IP addresses (e.g. city, country, lat/long) using the apiip.net API.

Apiip.net provides 1,000 free requests per month. For higher plans, check out the [website](https://apiip.net)

## Installation

You need to get your API key from here: https://apiip.net/get-started and you'll get 1000 free requests/month

Install the package with:

```sh
npm install apiip.net
# or
yarn add apiip.net
```

## Usage

The package needs to be configured with your account's API key, which is available in the [Apiip.net Dashboard](https://apiip.net/user/dashboard)

```javascript
const apiip = require('apiip.net')('YOUR_API_KEY');

apiip
  .getLocation()
  .then((results) => console.log(results))
  .catch((error) => console.error(error));
```

Or using ES6 modules and async/await:

```javascript
import Apiip from 'apiip.net';
const apiip = Apiip('YOUR_API_KEY');

(async () => {
  console.log(await apiip.getLocation());
})();
```

## HTTPS Encryption

By default, the SSL/TLS is turned off, if you want to enable it just pass the options parameter

#### Example

```javascript
const apiip = require('apiip.net')('YOUR_API_KEY', { ssl: true });
```

Or using ES6 module import

```javascript
import Apiip from 'apiip.net';
const apiip = Apiip('YOUR_API_KEY', { ssl: true });
```

## Configuration

Call getLocation method with config object

```javascript
const apiip = require('apiip.net')('YOUR_API_KEY', { ssl: true });

apiip
  .getLocation({
    ip: '67.250.186.196', // '67.250.186.196, 188.79.34.191, 60.138.7.24' - for bulk request
    output: 'xml',
    fields: 'city, countryName, currency.name',
    languages: 'es',
  })
  .then((results) => console.log(results))
  .catch((error) => console.error(error));
```

| Option      | Type     | Description                                                                                                | Default      |
| ----------- | -------- | ---------------------------------------------------------------------------------------------------------- | ------------ |
| `ip`        | `string` | _Optional_. Get location about the specify IP or multiple IPs.                                             | Requester IP |
| `output`    | `string` | _Optional_. Specify response format, XML or JSON.                                                          | JSON         |
| `fields`    | `string` | _Optional_. Specify response fields.                                                                       | All fields   |
| `languages` | `string` | _Optional_. Specify response language.                                                                     | EN           |
| `callback`  | `string` | _Optional_. The callback function name ([JSONP Callbacks](https://www.w3schools.com/js/js_json_jsonp.asp)) | -            |

## Example complete response

```javascript
{
  "ip": "67.250.186.196",
  "continentCode": "NA",
  "continentName": "North America",
  "countryCode": "US",
  "countryName": "United States",
  "countryNameNative": "United States",
  "city": "New York",
  "postalCode": "10001",
  "latitude": 40.8271,
  "longitude": -73.9359,
  "capital": "Washington D.C.",
  "phoneCode": "1",
  "countryFlagEmoj": "🇺🇸",
  "countryFlagEmojUnicode": "U+1F1FA U+1F1F8",
  "isEu": false,
  "languages": {
    "en": {
      "code": "en",
      "name": "English",
      "native": "English"
    }
  },
  "currency": {
    "code": "USD",
    "name": "US Dollar",
    "symbol": "$",
    "number": "840"
  },
  "timeZone": {
    "id": "America/New_York",
    "currentTime": "10/26/2021, 2:54:10 PM",
    "code": "EDT",
    "timeZoneName": "EDT",
    "utcOffset": -14400
  },
  "connection": {
    "asn": 12271,
    "isp": "Charter Communications Inc"
  },
  "security": {
    "isPublicProxy": false,
    "isResidentialProxy": false,
    "isTorExitNode": false,
    "network": "67.250.176.0/20"
  }
}

```

## More Information

- [API Documentation](https://apiip.net/documentation)
