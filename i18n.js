const LANG = {
  en: {
    liveNow: "LIVE NOW",
    join: "Join Match",
    solo: "Solo",
    duo: "Duo",
    squad: "Squad",
    tdm: "TDM",
    clash: "Clash Squad"
  },
  bn: {
    liveNow: "লাইভ চলছে",
    join: "ম্যাচে যোগ দিন",
    solo: "সলো",
    duo: "ডুয়ো",
    squad: "স্কোয়াড",
    tdm: "টিডিএম",
    clash: "ক্ল্যাশ স্কোয়াড"
  }
};

let currentLang = localStorage.getItem("lang") || "en";

export function t(key){
  return LANG[currentLang][key] || key;
}

export function switchLang(lang){
  localStorage.setItem("lang", lang);
  location.reload();
}