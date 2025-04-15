if (typeof global.performance === 'undefined') {
  global.performance = {};
}

if (!global.performance.now) {
  global.performance.now = () => Date.now();
}