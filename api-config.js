(function () {
  const storedApi = localStorage.getItem("wariara_backend_url") || "https://carscrawers.onrender.com";
  const storedPayHero = localStorage.getItem("wariara_payhero_url") || "https://parero.vercel.app";

  window.WARIARA_API_CONFIG = {
    API_BASE: storedApi.replace(/\/+$/, ""),
    PAYHERO_BACKEND_URL: storedPayHero.replace(/\/+$/, "")
  };

  window.setWariaraBackendUrls = function (apiBase, payHeroBase) {
    const nextApi = String(apiBase || "https://carscrawers.onrender.com").trim().replace(/\/+$/, "");
    const nextPayHero = String(payHeroBase || "https://parero.vercel.app").trim().replace(/\/+$/, "");
    localStorage.setItem("wariara_backend_url", nextApi);
    localStorage.setItem("wariara_payhero_url", nextPayHero);
    window.WARIARA_API_CONFIG.API_BASE = nextApi;
    window.WARIARA_API_CONFIG.PAYHERO_BACKEND_URL = nextPayHero;
  };
})();
