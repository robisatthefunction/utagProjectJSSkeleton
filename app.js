function onInitialized(event) {
  var utils = window.optimizely.get('utils');

  utils.waitUntil(function() {
    return typeof window.utag === 'object';
  }).then(function() {
    window["optimizely"].push({
      type: "user",
      attributes: {
        "purple_main": window.utag.va.audiences.purple_main_101,
        "currency_code": window.utag.currency_code
      }
    });
  })
}

window["optimizely"] = window["optimizely"] || [];
window["optimizely"].push({
  type: "addListener",
  filter: {
    type: "lifecycle",
    name: "initialized"
  },
  handler: onInitialized
});
