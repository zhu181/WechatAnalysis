chrome.devtools.panels.create("demo panel", "hello_extensions.png", "panel.html", () => {
  console.log("user switched to this panel");
});
