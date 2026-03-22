const translations = {
    ru: {
        role: "Telegram Гарант",
        subtitle: "Безопасные сделки | Комиссия 2%",
        trustTitle: "Кто такой гарант?",
        trustP1: "Гарант — это физическое лицо, компания или организация, которые официально подтверждают выполнение обязательств одной стороны перед другой. Проведено более 800+ успешных сделок.",
        stat1: "Сделок",
        stat2: "Выплат",
        channelsTitle: "Навигация",
        chan1: "Новостной канал",
        chan2: "Адаптер",
        chan3: "Отзывы",
        chan4: "Личный контакт",
        linkGifts: "Gifts | Подарок от меня",
        commissionTitle: "Гарант сделок",
        commissionText: "Безопасность ваших активов — мой главный приоритет. Работаю честно и быстро.",
        commissionRate: "Комиссия — 2%",
        howItWorksTitle: "Как проходят сделки",
        steps: [
            "Договариваетесь о сделке",
            "Пишете гаранту @ammodeals",
            "Покупатель переводит оплату",
            "Продавец передает товар",
            "Гарант выплачивает средства"
        ],
        paymentTitle: "Реквизиты",
        copy: "Copy",
        copied: "Done!",
        contactBtn: "Связаться с @ammodeals",
        switchLang: "English",
        linkTikTok: "TikTok | ТикТок",
    },
    en: {
        role: "Telegram Guarantor",
        subtitle: "Safe Deals | Commission 2%",
        trustTitle: "What is a guarantor?",
        trustP1: "A guarantor is an individual or organization that officially confirms the fulfillment of obligations by one party to another. Over 800+ successful deals closed.",
        stat1: "Deals",
        stat2: "Payouts",
        channelsTitle: "Navigation",
        chan1: "News Channel",
        chan2: "Adapter",
        chan3: "Reviews",
        chan4: "Personal Contact",
        linkGifts: "Gifts | My Gift",
        commissionTitle: "Deal Guarantor",
        commissionText: "Security of your assets is my top priority. I work honestly and fast.",
        commissionRate: "Commission — 2%",
        howItWorksTitle: "How it works",
        steps: [
            "Agree on the deal",
            "Message @ammodeals",
            "Buyer sends payment",
            "Seller sends goods",
            "Guarantor pays seller"
        ],
        paymentTitle: "Wallet",
        copy: "Copy",
        copied: "Done!",
        contactBtn: "Contact @ammodeals",
        switchLang: "Русский",
        linkTikTok: "TikTok",
    }
};

let currentLang = 'ru';

function updateUI() {
    const t = translations[currentLang];
    document.querySelectorAll('[data-t]').forEach(el => {
        const key = el.getAttribute('data-t');
        if (t[key]) el.innerText = t[key];
    });

    const stepsContainer = document.getElementById('steps-container');
    stepsContainer.innerHTML = '';
    t.steps.forEach((step, i) => {
        const div = document.createElement('div');
        div.className = 'step-item';
        div.innerHTML = `<div class="step-num">${i + 1}</div><p class="text-sm font-medium opacity-70">${step}</p>`;
        stepsContainer.appendChild(div);
    });

    document.getElementById('lang-btn').innerText = t.switchLang;
}

function toggleLang() {
    currentLang = currentLang === 'ru' ? 'en' : 'ru';
    document.body.className = `lang-${currentLang}`;
    updateUI();
}

function copyWallet() {
    const address = "UQAZUifFf0eqc8rvMT6SS5RzQelEFSk2AHl93-jAMrsxhprl";
    navigator.clipboard.writeText(address).then(() => {
        const btn = document.getElementById('copy-btn');
        const originalText = btn.innerText;
        btn.innerText = translations[currentLang].copied;
        setTimeout(() => btn.innerText = originalText, 2000);
    });
}

function createFloatingElements() {
    const container = document.getElementById('floating-container');
    for (let i = 0; i < 15; i++) {
        const el = document.createElement('div');
        el.className = 'absolute opacity-10 text-blue-500';
        el.style.left = Math.random() * 100 + '%';
        el.style.top = Math.random() * 100 + '%';
        el.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>';
        container.appendChild(el);
        
        gsap.to(el, {
            y: -100 - Math.random() * 200,
            x: (Math.random() - 0.5) * 50,
            opacity: 0,
            duration: 5 + Math.random() * 5,
            repeat: -1,
            ease: "none",
            delay: Math.random() * 5
        });
    }
}

function animateEntrance() {
    gsap.from(".hero-section", { opacity: 0, y: 30, duration: 1, ease: "power3.out" });
    gsap.from(".link-item", { opacity: 0, x: -20, stagger: 0.1, duration: 0.8, ease: "power2.out", delay: 0.3 });
    gsap.from(".trust-section, .commission-box, .wallet-section", { opacity: 0, scale: 0.95, duration: 1, ease: "back.out(1.7)", delay: 0.5 });
}

document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    updateUI();
    createFloatingElements();
    animateEntrance();
});