chrome.runtime.onInstalled.addListener(function (details) {
  if (details.reason === "install") {
    alert("xin chao");
  } else if (details.reason === "update") {
    // Xử lý khi tiện ích mở rộng được cập nhật
  }
});
