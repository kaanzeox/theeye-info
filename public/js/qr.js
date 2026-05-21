export function renderQr(canvas, url, size = 140) {
  return new Promise((resolve, reject) => {
    if (typeof QRCode === "undefined") {
      reject(new Error("QRCode library not loaded"));
      return;
    }
    QRCode.toCanvas(
      canvas,
      url,
      {
        width: size,
        margin: 1,
        color: { dark: "#000000", light: "#ffffff" },
      },
      (err) => (err ? reject(err) : resolve(canvas))
    );
  });
}

export function getSubjectUrl(id) {
  return `${window.location.origin}/subject/${id}`;
}
