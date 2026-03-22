const translations = {
    ru: {
        role: "Telegram Гарант",
        subtitle: "Безопасные сделки | Комиссия 2%",
        trustTitle: "Кто такой гарант?",
        trustP1: "Гарант — это лицо, которое официально подтверждает выполнение обязательств. Проведено более 800+ успешных сделок.",
        stat1: "Сделок",
        stat2: "Выплат",
        channelsTitle: "Навигация",
        chan1: "Новостной канал",
        chan2: "Адаптер",
        chan3: "Отзывы",
        chan4: "Личный контакт",
        commissionTitle: "Гарант сделок",
        commissionText: "Безопасность ваших активов — мой главный приоритет. Работаю честно и быстро.",
        commissionRate: "Комиссия — 2%",
        paymentTitle: "Кошелек",
        copy: "Copy",
        copied: "Done!",
        contactBtn: "Связаться с @ruchammodeals",
        switchLang: "English"
    },
    en: {
        role: "Telegram Guarantor",
        subtitle: "Safe Deals | Commission 2%",
        trustTitle: "What is a guarantor?",
        trustP1: "A guarantor is an individual who officially confirms the fulfillment of obligations. 800+ successful deals completed.",
        stat1: "Deals",
        stat2: "Payouts",
        channelsTitle: "Navigation",
        chan1: "News Channel",
        chan2: "Adapter",
        chan3: "Reviews",
        chan4: "Personal Contact",
        commissionTitle: "Guarantor",
        commissionText: "The security of your assets is my top priority. I work honestly and quickly.",
        commissionRate: "Commission — 2%",
        paymentTitle: "Wallet",
        copy: "Copy",
        copied: "Done!",
        contactBtn: "Contact @ruchammodeals",
        switchLang: "Русский"
    }
};

let currentLang = 'ru';

document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    updateUI();
    animateEntrance();
});

function updateUI() {
    const t = translations[currentLang];
    document.querySelectorAll('[data-t]').forEach(el => {
        const key = el.getAttribute('data-t');
        if (t[key]) el.textContent = t[key];
    });
    const langBtn = document.getElementById('lang-btn');
    if (langBtn) langBtn.textContent = t.switchLang;
}

function toggleLang() {
    currentLang = currentLang === 'ru' ? 'en' : 'ru';
    gsap.to('.container-main', {
        opacity: 0, y: 10, duration: 0.2,
        onComplete: () => {
            updateUI();
            gsap.to('.container-main', { opacity: 1, y: 0, duration: 0.4 });
        }
    });
}

function copyWallet() {
    const address = "UQAZUifFf0eqc8rvMT6SS5RzQelEFSk2AHl93-jAMrsxhprl";
    const btn = document.getElementById('copy-btn');
    const t = translations[currentLang];
    navigator.clipboard.writeText(address).then(() => {
        btn.textContent = t.copied;
        setTimeout(() => { btn.textContent = t.copy; }, 2000);
    });
}

function animateEntrance() {
    gsap.from('.hero-section, .trust-section, .link-item, .commission-box, .wallet-section, .footer-action', {
        opacity: 0, y: 20, stagger: 0.1, duration: 0.8, ease: "power2.out"
    });
}