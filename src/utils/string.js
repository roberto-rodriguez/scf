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

  token += "@" + tokenTail;

  return token;
}
