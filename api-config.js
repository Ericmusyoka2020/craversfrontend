
(function () {
  const DEFAULT_API = "https://0carscrawers.vercel.app";
  const DEFAULT_PAYHERO = "https://parero.vercel.app";
  const storedApi = localStorage.getItem("wariara_backend_url");
  const apiBase = (!storedApi || storedApi.includes("localhost") || storedApi.includes("127.0.0.1") || storedApi === window.location.origin)
    ? DEFAULT_API
    : storedApi;
  const storedPayHero = localStorage.getItem("wariara_payhero_url") || DEFAULT_PAYHERO;

  localStorage.setItem("wariara_backend_url", apiBase.replace(/\/+$/, ""));
  window.WARIARA_API_CONFIG = {
    API_BASE: apiBase.replace(/\/+$/, ""),
    PAYHERO_BACKEND_URL: storedPayHero.replace(/\/+$/, "")
  };

  window.setWariaraBackendUrls = function (apiBase, payHeroBase) {
    const nextApi = String(apiBase || "https://0carscrawers.vercel.app").trim().replace(/\/+$/, "");
    const nextPayHero = String(payHeroBase || "https://parero.vercel.app").trim().replace(/\/+$/, "");
    localStorage.setItem("wariara_backend_url", nextApi);
    localStorage.setItem("wariara_payhero_url", nextPayHero);
    window.WARIARA_API_CONFIG.API_BASE = nextApi;
    window.WARIARA_API_CONFIG.PAYHERO_BACKEND_URL = nextPayHero;
  };
})();
