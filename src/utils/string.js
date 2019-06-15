const { detect } = require('detect-browser');

export function formatAmount(amount) {
  return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

export function buildToken(token) {
  if (!token) return;
  var lastDigit = token.charAt(token.length - 1);
  var tokenTail = 0;

  for (var i = 0; i < lastDigit; i++) {
    tokenTail += token.charCodeAt(i);
  }

  token += "_" + tokenTail;

  return token;
}

export function buildBrowserId() {
  const browser = detect();

  var browserName = (browser && browser.name) || 'unknown';

  return browserName + '_' + (new Date()).getTime();
}
