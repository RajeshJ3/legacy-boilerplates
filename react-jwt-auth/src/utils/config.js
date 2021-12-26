function get_domain() {
  if (window.location.hostname === "localhost") {
    return "http://127.0.0.1:8000";
  } else {
    return "http://192.168.215.143:8000";
  }
}

export const DOMAIN = get_domain();
