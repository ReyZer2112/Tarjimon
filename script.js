const GOOGLE_API_URL = "https://translate.googleapis.com/translate_a/single?client=gtx&dt=t&dt=at&bd=true";

const languagesList = {
    "uz": "Uzbekcha", "en": "Inglizcha", "ru": "Ruscha", "tr": "Turkcha", "kk": "Qozoqcha",
    "ky": "Qirg'izcha", "tk": "Turkmancha", "az": "Ozarbayjoncha", "tg": "Tojikcha", "ar": "Arabcha",
    "fa": "Forscha", "de": "Nemischa", "fr": "Fransuzcha", "es": "Ispancha", "it": "Italyancha",
    "pt": "Portugalcha", "zh": "Xitoycha", "ja": "Yaponcha", "ko": "Koreyscha", "hi": "Hindcha",
    "uk": "Ukraincha", "pl": "Polshacha", "nl": "Gollandcha", "sv": "Shvedcha", "fi": "Fincha",
    "no": "Norvegcha", "id": "Indonezcha", "ms": "Malayziyacha", "th": "Taylandcha", "vi": "Vyetnamcha",
    "af": "Afrikaans", "sq": "Albancha", "am": "Amxarcha", "hy": "Armancha", "eu": "Baskcha",
    "be": "Beloruscha", "bn": "Bengalcha", "bs": "Bosniacha", "bg": "Bolgarcha", "ca": "Katalancha",
    "hr": "Xorvatcha", "cs": "Chexcha", "da": "Daniyacha", "eo": "Esperanto", "et": "Estoncha",
    "tl": "Filippincha", "gl": "Galisiyacha", "ka": "Gruzincha", "el": "Grekincha", "hu": "Vengarcha",
    "is": "Islandcha", "ga": "Irlandcha", "la": "Lotincha", "lv": "Latvshcha", "lt": "Litvacha",
    "mk": "Makedoncha", "mg": "Malagasi tili", "mt": "Maltacha", "mi": "Maoricha", "mn": "Mo'g'ulcha",
    "my": "Birmancha", "ne": "Nepalcha", "ro": "Rumincha", "sr": "Serbcha", "sk": "Slovakcha",
    "sl": "Slovencha", "so": "Somalicha", "sw": "Suaxili tili", "tt": "Tatarcha", "ur": "Urdu tili",
    "ug": "Uyg'urcha", "cy": "Uelscha", "zu": "Zulu tili", "he": "Ivrit", "haw": "Gavayicha",
    "jv": "Yavancha", "kn": "Kannada", "km": "Xmercha", "ku": "Kurdcha", "lo": "Laoscha",
    "lb": "Lyuksemburgcha", "ml": "Malayalam", "mr": "Maratxi", "or": "Oriya", "ps": "Pushtu",
    "pa": "Panjobcha", "sm": "Samoacha", "gd": "Gaelcha", "st": "Sesoto", "sn": "Shona",
    "sd": "Sindxi", "si": "Singalcha", "su": "Sudancha", "ta": "Tamilcha", "te": "Telugu",
    "xh": "Xosa tili", "yi": "Idish", "yo": "Yoruba", "co": "Korsikancha", "fy": "Frizcha",
    "ha": "Xausa", "hmn": "Xmong", "ig": "Igbo", "rw": "Kinyaruanda", "ny": "Chicheva",
    "ceb": "Sebuancha", "gu": "Gugarat", "ht": "Gaiticha", "aa": "Afar tili", "ab": "Abxazcha",
    "ae": "Avestiycha", "ak": "Akancha", "an": "Aragoncha", "as": "Assamcha", "av": "Avar tili",
    "ay": "Aymaracha", "ba": "Boshqirdcha", "bi": "Bislama", "bm": "Bambaracha", "bo": "Tibetcha",
    "br": "Bretoncha", "ch": "Chamorro", "cr": "Kri tili", "cv": "Chuvashcha", "dv": "Divehi",
    "dz": "Dzongxa", "ee": "Eve tili", "ff": "Fulah tili", "fj": "Fijicha", "fo": "Farercha",
    "gn": "Guarani", "gv": "Manks tili", "ho": "Hiri-motu", "hz": "Herero", "ia": "Interlingva",
    "ie": "Interlingve", "ik": "Inupiaq", "io": "Ido tili", "iu": "Inuktitut", "ki": "Kikuyu",
    "kj": "Kuanyama", "kl": "Grenlandcha", "kr": "Kanuri tili", "ks": "Kashmircha", "kv": "Komi tili",
    "kw": "Korncha", "lg": "Luganda", "li": "Limburgcha", "ln": "Lingala", "lu": "Luba-katanga",
    "mh": "Marshall tili", "mo": "Moldovancha", "na": "Nauru tili", "nd": "Shimoliy ndebele",
    "ng": "Ndonga", "nr": "Janubiy ndebele", "nv": "Navaxo tili", "oc": "Oksitancha", "om": "Oromo",
    "os": "Osetincha", "pi": "Pali tili", "qu": "Kichua (Keçua)", "rm": "Retoromancha", "rn": "Kirundi",
    "sa": "Sanskrit", "sc": "Sardincha", "se": "Sami tili", "sg": "Sango tili", "ss": "Svati tili",
    "ti": "Tigrinya", "tn": "Tsvana", "to": "Tongancha", "ts": "Tsonga", "tw": "Tvi tili",
    "ty": "Taiticha", "ve": "Venda tili", "vo": "Volapyuk", "wa": "Valloncha", "wo": "Volof tili",
    "za": "Chjuan tili", "bho": "Bxojpuri tili", "doi": "Dogri tili", "kok": "Konkani tili",
    "mai": "Maithili tili", "lus": "Mizo tili", "tum": "Tumbukacha", "sat": "Santyali tili",
    "rom": "Sinti-romani (Lo'licha)", "en-ca": "Kanada tili (Inglizcha)",
    "fr-ca": "Kanada tili (Fransuzcha)",
    "pt-br": "Braziliya tili (Portugalcha)"
};

let currentLangFrom = "auto";
let currentLangTo = "uz";

const dropBtnFrom = document.getElementById('dropdown-btn-from');
const dropBtnTo = document.getElementById('dropdown-btn-to');
const dropMenuFrom = document.getElementById('dropdown-menu-from');
const dropMenuTo = document.getElementById('dropdown-menu-to');
const optionsFrom = document.getElementById('options-from');
const optionsTo = document.getElementById('options-to');
const searchFrom = document.getElementById('search-from');
const searchTo = document.getElementById('search-to');

const textFrom = document.getElementById('text-from');
const textTo = document.getElementById('text-to');
const swapBtn = document.getElementById('swap-langs');
const speakBtn = document.getElementById('speak-btn');
const copyBtn = document.getElementById('copy-btn');
const clearBtn = document.getElementById('clear-btn');
const saveBtn = document.getElementById('save-btn');
const themeToggle = document.getElementById('theme-toggle');
const charCounter = document.getElementById('char-counter');
const imageInput = document.getElementById('image-input');
const docInput = document.getElementById('doc-input');
const statusMsg = document.getElementById('status-msg');
const ttsAudio = document.getElementById('tts-audio');

// MODAL ELEMENTLARI
const settingsBtn = document.getElementById('settings-btn');
const settingsModal = document.getElementById('settings-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalSaveClose = document.getElementById('modal-save-close');
const historyList = document.getElementById('history-list');
const favoritesList = document.getElementById('favorites-list');
const clearHistoryBtn = document.getElementById('clear-history-btn');
const clearFavoritesBtn = document.getElementById('clear-favorites-btn');

let typingTimer;
const doneTypingInterval = 500;

function buildDropdowns() {
    const sortedLangs = Object.entries(languagesList).sort((a, b) => a[1].localeCompare(b[1]));
    optionsFrom.innerHTML = `<li data-value="auto">🔍 Tilni aniqlash</li>`;
    sortedLangs.forEach(([code, name]) => { optionsFrom.innerHTML += `<li data-value="${code}">${name}</li>`; });
    optionsTo.innerHTML = '';
    sortedLangs.forEach(([code, name]) => { optionsTo.innerHTML += `<li data-value="${code}">${name}</li>`; });
    attachDropdownEvents();
}

function attachDropdownEvents() {
    dropBtnFrom.addEventListener('click', (e) => {
        e.stopPropagation(); dropMenuTo.classList.remove('show'); dropMenuFrom.classList.toggle('show'); searchFrom.focus();
    });
    dropBtnTo.addEventListener('click', (e) => {
        e.stopPropagation(); dropMenuFrom.classList.remove('show'); dropMenuTo.classList.toggle('show'); searchTo.focus();
    });
    optionsFrom.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            currentLangFrom = e.target.getAttribute('data-value');
            dropBtnFrom.innerText = e.target.innerText;
            dropMenuFrom.classList.remove('show');
            searchFrom.value = '';
            filterList(searchFrom, optionsFrom);
            if (textFrom.value.trim()) translateText();
        }
    });
    optionsTo.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            currentLangTo = e.target.getAttribute('data-value');
            dropBtnTo.innerText = e.target.innerText;
            dropMenuTo.classList.remove('show');
            searchTo.value = '';
            filterList(searchTo, optionsTo);

            // MANA SHU QATOR SAYTNI TARJIMA QILADI
            translateWebsiteUI(currentLangTo);

            if (textFrom.value.trim()) translateText();
        }
    });
}

function filterList(inputElement, ulElement) {
    let filter = inputElement.value.toLowerCase().trim();
    const liItems = ulElement.getElementsByTagName('li');
    for (let i = 0; i < liItems.length; i++) {
        let text = liItems[i].innerText.toLowerCase();
        if (liItems[i].getAttribute('data-value') === 'auto') continue;
        let cleanText = text.replace("'", "").replace("`", "").replace("’", "");
        if (text.startsWith(filter) || cleanText.startsWith(filter) || filter === "") {
            liItems[i].style.display = "";
        } else {
            liItems[i].style.display = "none";
        }
    }
}

searchFrom.addEventListener('input', () => filterList(searchFrom, optionsFrom));
searchTo.addEventListener('input', () => filterList(searchTo, optionsTo));
document.addEventListener('click', () => { dropMenuFrom.classList.remove('show'); dropMenuTo.classList.remove('show'); });

textFrom.addEventListener('input', () => {
    charCounter.innerText = `Belgilar: ${textFrom.value.length}`;
    clearTimeout(typingTimer);
    if (textFrom.value.trim()) {
        typingTimer = setTimeout(translateText, doneTypingInterval);
    } else {
        textTo.value = '';
    }
});

async function translateText() {
    const text = textFrom.value.trim();
    if (!text) return;

    statusMsg.innerText = "Tarjima qilinmoqda...";
    const chunks = [];
    const chunkSize = 4000;
    for (let i = 0; i < text.length; i += chunkSize) {
        chunks.push(text.substring(i, i + chunkSize));
    }

    let finalResult = "";
    try {
        for (let chunk of chunks) {
            const url = `${GOOGLE_API_URL}&sl=${currentLangFrom}&tl=${currentLangTo}&q=${encodeURIComponent(chunk)}`;
            const response = await fetch(url);
            const data = await response.json();
            if (data && data[0]) {
                data[0].forEach(sentence => {
                    if (sentence[0]) finalResult += sentence[0];
                });
            }
        }
        textTo.value = finalResult;
        statusMsg.innerText = "Tayyor!";
        setTimeout(() => statusMsg.innerText = "", 1500);
        saveToHistory(text, finalResult);
    } catch (error) {
        textTo.value = "Tarjimada xatolik yuz berdi. Tarmoqni tekshiring.";
        statusMsg.innerText = "Xatolik!";
    }
}

swapBtn.addEventListener('click', () => {
    if (currentLangFrom === 'auto') return;
    const tempCode = currentLangFrom; currentLangFrom = currentLangTo; currentLangTo = tempCode;
    const tempTextBtn = dropBtnFrom.innerText; dropBtnFrom.innerText = dropBtnTo.innerText; dropBtnTo.innerText = tempTextBtn;
    const tempText = textFrom.value; textFrom.value = textTo.value; textTo.value = tempText;
    if (textFrom.value.trim()) translateText();
});

imageInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    statusMsg.innerText = "Rasm tahlil qilinmoqda...";
    let ocrLang = currentLangFrom === 'auto' ? 'eng' : (currentLangFrom === 'uz' ? 'uzb' : (currentLangFrom === 'ru' ? 'rus' : 'eng'));
    Tesseract.recognize(file, ocrLang).then(({ data: { text } }) => {
        if (text.trim()) {
            textFrom.value = text;
            charCounter.innerText = `Belgilar: ${text.length}`;
            translateText();
        } else { statusMsg.innerText = "Rasmda matn topilmadi."; }
    }).catch(() => { statusMsg.innerText = "Rasmni o'qishda xatolik."; });
});

docInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    statusMsg.innerText = "Hujjat o'qilmoqda...";
    const reader = new FileReader();
    reader.onload = (event) => {
        const fileContent = event.target.result;
        if (fileContent && fileContent.trim() !== "") {
            textFrom.value = fileContent;
            charCounter.innerText = `Belgilar: ${fileContent.length}`;
            translateText();
        } else { statusMsg.innerText = "Hujjat bo'sh yoki o'qib bo'lmadi."; }
    };
    reader.onerror = () => { statusMsg.innerText = "Faylni o'qishda xatolik."; };
    reader.readAsText(file);
});

clearBtn.addEventListener('click', () => { textFrom.value = ''; textTo.value = ''; charCounter.innerText = 'Belgilar: 0'; });
copyBtn.addEventListener('click', () => {
    if (!textTo.value) return;
    navigator.clipboard.writeText(textTo.value); statusMsg.innerText = "Nusxalandi!"; setTimeout(() => statusMsg.innerText = "", 1500);
});

speakBtn.addEventListener('click', () => {
    const text = textTo.value.trim();
    if (!text) return;
    const shortText = text.substring(0, 200);
    const googleTtsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=${currentLangTo}&client=tw-ob&q=${encodeURIComponent(shortText)}`;
    ttsAudio.src = googleTtsUrl;
    ttsAudio.play().catch(() => {
        const utterance = new SpeechSynthesisUtterance(shortText);
        utterance.lang = currentLangTo; window.speechSynthesis.speak(utterance);
    });
});

themeToggle.addEventListener('click', () => {
    if (document.body.getAttribute('data-theme') === 'dark') {
        document.body.removeAttribute('data-theme'); themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    } else {
        document.body.setAttribute('data-theme', 'dark'); themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
});

// MODAL BOSHQARUVI, TARIX VA TANLANGANLAR LOYIHASI
let history = JSON.parse(localStorage.getItem('p_history')) || [];
let favorites = JSON.parse(localStorage.getItem('p_favorites')) || [];

settingsBtn.addEventListener('click', () => { settingsModal.classList.add('open'); renderLists(); });
modalCloseBtn.addEventListener('click', () => settingsModal.classList.remove('open'));
modalSaveClose.addEventListener('click', () => settingsModal.classList.remove('open'));
window.addEventListener('click', (e) => { if (e.target === settingsModal) settingsModal.classList.remove('open'); });

function saveToHistory(fromText, toText) {
    if (!fromText || !toText) return;
    let cleanFrom = fromText.split('\n')[0].trim().substring(0, 25);
    let cleanTo = toText.split('\n')[0].trim().substring(0, 25);
    if (fromText.length > 25) cleanFrom += "...";
    if (toText.length > 25) cleanTo += "...";
    const item = `${cleanFrom} ➔ ${cleanTo}`;
    if (!history.includes(item)) {
        history.unshift(item);
        if (history.length > 15) history.pop();
        localStorage.setItem('p_history', JSON.stringify(history));
    }
}

saveBtn.addEventListener('click', () => {
    if (!textFrom.value || !textTo.value) return;
    let cleanFrom = textFrom.value.split('\n')[0].trim().substring(0, 25);
    let cleanTo = textTo.value.split('\n')[0].trim().substring(0, 25);
    if (textFrom.value.length > 25) cleanFrom += "...";
    if (textTo.value.length > 25) cleanTo += "...";
    const item = `${cleanFrom} ➔ ${cleanTo}`;
    if (!favorites.includes(item)) {
        favorites.unshift(item);
        localStorage.setItem('p_favorites', JSON.stringify(favorites));
        statusMsg.innerText = "Tanlanganlarga saqlandi!";
        setTimeout(() => statusMsg.innerText = "", 1500);
    }
});

window.deleteHistoryItem = function (index) { history.splice(index, 1); localStorage.setItem('p_history', JSON.stringify(history)); renderLists(); };
window.deleteFavoriteItem = function (index) { favorites.splice(index, 1); localStorage.setItem('p_favorites', JSON.stringify(favorites)); renderLists(); };
clearHistoryBtn.addEventListener('click', () => { if (confirm("Tarixni o'chirish?")) { history = []; localStorage.removeItem('p_history'); renderLists(); } });
clearFavoritesBtn.addEventListener('click', () => { if (confirm("Tanlanganlarni o'chirish?")) { favorites = []; localStorage.removeItem('p_favorites'); renderLists(); } });

function renderLists() {
    historyList.innerHTML = history.map((item, index) => `<li><span>${item}</span><button class="delete-item-btn" onclick="deleteHistoryItem(${index})"><i class="fa-solid fa-xmark"></i></button></li>`).join('');
    favoritesList.innerHTML = favorites.map((item, index) => `<li><span>${item}</span><button class="delete-item-btn" onclick="deleteFavoriteItem(${index})"><i class="fa-solid fa-xmark"></i></button></li>`).join('');
}

// ==========================================================================
// SAYT INTERFEYSINI TARJIMA QILISH TIZIMI (i18n)
// ==========================================================================

const uiTranslations = {
    "uz": {
        "app-title": "Professional Tarjimon",
        "settings-btn": "Sozlamalar",
        "btn-image": "Rasm",
        "btn-doc": "Hujjat",
        "placeholder-from": "Matn yoki kod kiriting...",
        "placeholder-to": "Tarjima natijasi...",
        "char-counter": "Belgilar: 0",
        "modal-title": "Sozlamalar va Ma'lumotlar",
        "panel-history": "Tarix",
        "panel-favorites": "Tanlanganlar",
        "btn-clear": "Tozalash",
        "btn-close": "Yopish"
    },
    "en": {
        "app-title": "Professional Translator",
        "settings-btn": "Settings",
        "btn-image": "Image",
        "btn-doc": "Document",
        "placeholder-from": "Enter text...",
        "placeholder-to": "Translation result...",
        "char-counter": "Characters: 0",
        "modal-title": "Settings and Information",
        "panel-history": "History",
        "panel-favorites": "Favorites",
        "btn-clear": "Clear",
        "btn-close": "Close"
    },
    "ru": {
        "app-title": "Профессиональный Переводчик",
        "settings-btn": "Настройки",
        "btn-image": "Изображение",
        "btn-doc": "Документ",
        "placeholder-from": "Введите текст...",
        "placeholder-to": "Результат перевода...",
        "char-counter": "Символов: 0",
        "modal-title": "Настройки и Информация",
        "panel-history": "История",
        "panel-favorites": "Избранное",
        "btn-clear": "Очистить",
        "btn-close": "Закрыть"
    }
};

function translateWebsiteUI(langCode) {
    // Agar tanlangan til uchun tarjima bazada bo'lmasa, standart inglizchaga o'tkazadi
    const lang = uiTranslations[langCode] || uiTranslations["en"];

    // data-i18n atributi bor barcha matnlarni almashtirish
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (lang[key]) {
            // Agar ichida ikona bo'lsa saqlab qolish uchun faqat matn qismini yangilaymiz
            const icon = element.querySelector('i');
            if (icon) {
                element.innerHTML = '';
                element.appendChild(icon);
                element.innerHTML += ' ' + lang[key];
            } else {
                element.innerText = lang[key];
            }
        }
    });

    // Textarea placheholderlarini yangilash
    const inputTextArea = document.getElementById('text-from');
    const outputTextArea = document.getElementById('text-to');

    if (inputTextArea && lang["placeholder-from"]) {
        inputTextArea.setAttribute('placeholder', lang["placeholder-from"]);
    }
    if (outputTextArea && lang["placeholder-to"]) {
        outputTextArea.setAttribute('placeholder', lang["placeholder-to"]);
    }
}


buildDropdowns();
