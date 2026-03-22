const translations = {
    en: {
        role: "Telegram Guarantor",
        subtitle: "Safe Deals | Commission 2%",
        channelsTitle: "Main Channels",
        paymentTitle: "Payment Details",
        walletName: "Wallet name",
        walletAddress: "Wallet address",
        contactBtn: "Contact guarantor",
        footer: "© ammodeals Guarantor",
        switchLang: "RU",
        statsDeals: "800+ Successful Deals",
        statsPayouts: "100% Payouts",
        adapter: "Adapter",
        reviews: "Deal Reviews",
        guarantees: "Guarantees",
        news: "News Channel"
    },
    ru: {
        role: "Telegram Гарант",
        subtitle: "Безопасные сделки | Комиссия 2%",
        channelsTitle: "Основные каналы",
        paymentTitle: "Реквизиты для сделки",
        walletName: "Имя кошелька",
        walletAddress: "Адрес кошелька",
        contactBtn: "Связаться с гарантом",
        footer: "© ammodeals Guarantor",
        switchLang: "EN",
        statsDeals: "800+ Успешных сделок",
        statsPayouts: "100% Выплат",
        adapter: "Адаптер",
        reviews: "Отзывы со сделок",
        guarantees: "Ручения",
        news: "Новостной канал"
    }
};

let currentLang = 'ru';
const walletAddress = "UQAZUifFf0eqc8rvMT6SS5RzQelEFSk2AHl93-jAMrsxhprl";

function updateLanguage() {
    const t = translations[currentLang];
    document.getElementById('role').innerText = t.role;
    document.getElementById('subtitle').innerText = t.subtitle;
    document.getElementById('channels-title').innerText = t.channelsTitle;
    document.getElementById('payment-title').innerText = t.paymentTitle;
    document.getElementById('wallet-name-label').innerText = t.walletName;
    document.getElementById('wallet-address-label').innerText = t.walletAddress;
    document.getElementById('contact-btn-text').innerText = t.contactBtn;
    document.getElementById('footer-text').innerText = t.footer;
    document.getElementById('lang-btn').innerText = t.switchLang;
    document.getElementById('stat-deals-label').innerText = t.statsDeals;
    document.getElementById('stat-payouts-label').innerText = t.statsPayouts;
    document.getElementById('adapter-title').innerText = t.adapter;
    document.getElementById('reviews-title').innerText = t.reviews;
    document.getElementById('guarantees-title').innerText = t.guarantees;
    document.getElementById('news-title').innerText = t.news;
}

function toggleLanguage() {
    currentLang = currentLang === 'ru' ? 'en' : 'ru';
    updateLanguage();
}

function copyWallet() {
    navigator.clipboard.writeText(walletAddress).then(() => {
        alert("Кошелек скопирован!");
    });
}

document.addEventListener('DOMContentLoaded', updateLanguage);