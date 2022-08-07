const defaultLocale = "en_US";
let locale;

let translations = {};

// When the page content is ready...
document.addEventListener("DOMContentLoaded", () => {
  // Translate the page to the default locale
  setLocale(defaultLocale);
});

async function setLocale(newLocale) {
  if (newLocale === locale) return;
  const newTranslations = await fetchTranslationsFor(newLocale);
  locale = newLocale;
  translations = newTranslations;
  translatePage();
}

async function fetchTranslationsFor(newLocale) {
  const response = await fetch(`./lang/${newLocale}.json`);
  return await response.json();
}

function translatePage() {
  document.querySelectorAll("[data-i18n-key]").forEach(translateElement);
}

function getTranslation(key) {
  if (key.length === 1) return translations[key];
  let translation = translations[key[0]];
  for (let i = 1; i < key.length; i++) {
    translation = translation[key[i]];
  }
  return translation;
}

function translateElement(element) {
  const key = element.getAttribute("data-i18n-key").split(".");
  const translation = getTranslation(key);
  element.innerText = translation;
}

document.addEventListener("DOMContentLoaded", () => {
  setLocale(defaultLocale);
  bindLocaleSwitcher(defaultLocale);
});

function bindLocaleSwitcher(initialValue) {
  const switcher = document.querySelector("[data-i18n-switcher]");
  switcher.value = initialValue;
  switcher.onchange = (e) => {
    // Set the locale to the selected option[value]
    setLocale(e.target.value);
  };
}

let addFree = document.getElementById("free-add");
let addProfessional = document.getElementById("professional-add");
let addBusiness = document.getElementById("business-add");

let containerFree = document.getElementById("container-free");
let containerProfessional = document.getElementById("container-professional");
let containerBusiness = document.getElementById("container-business");

let srcSubstract = "./media/Icons/subtract.svg";
let srcAdd = "./media/Icons/add.svg";
let pressFree = false;
let pressProfessional = false;
let pressBusiness = false;
addFree.addEventListener("click", (e) => {
  if (pressFree == false) {
    pressFree = true;
    containerFree.style.display = "block";
    addFree.src = srcSubstract;
  } else {
    pressFree = false;
    containerFree.style.display = "none";
    addFree.src = srcAdd;
  }
});
addProfessional.addEventListener("click", (e) => {
  if (pressProfessional == false) {
    pressProfessional = true;
    containerProfessional.style.display = "block";
    addProfessional.src = srcSubstract;
  } else {
    pressProfessional = false;
    containerProfessional.style.display = "none";
    addProfessional.src = srcAdd;
  }
});
addBusiness.addEventListener("click", (e) => {
  if (pressBusiness == false) {
    pressBusiness = true;
    containerBusiness.style.display = "block";
    addBusiness.src = srcSubstract;
  } else {
    pressBusiness = false;
    containerBusiness.style.display = "none";
    addBusiness.src = srcAdd;
  }
});
