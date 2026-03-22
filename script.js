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
        howItWorksTitle: "Как проходят сделки",
        steps: [
            "Договариваетесь о сделке",
            "Пишете гаранту @ruchammodeals",
            "Покупатель переводит оплату",
            "Продавец передает товар",
            "Гарант выплачивает средства"
        ],
        paymentTitle: "Кошелек",
        copy: "Copy",
        copied: "Done!",
        contactBtn: "Связаться с @ruchammodeals",
        switchLang: "English",
        linkGifts: "Gifts | Подарок от меня"
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
        howItWorksTitle: "How it works",
        steps: [
            "Agree on the deal",
            "Message @ruchammodeals",
            "Buyer sends payment",
            "Seller sends goods",
            "Guarantor pays seller"
        ],
        paymentTitle: "Wallet",
        copy: "Copy",
        copied: "Done!",
        contactBtn: "Contact @ruchammodeals",
        switchLang: "Русский",
        linkGifts: "Gifts | Gift from me"
    }
};

let currentLang = 'ru';

document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    updateUI();
    animateEntrance();
    createFloatingElements();
});

function updateUI() {
    const t = translations[currentLang];
    document.querySelectorAll('[data-t]').forEach(el => {
        const key = el.getAttribute('data-t');
        if (t[key]) el.textContent = t[key];
    });
    const langBtn = document.getElementById('lang-btn');
    if (langBtn) langBtn.textContent = t.switchLang;

    const stepsContainer = document.getElementById('steps-container');
    if (stepsContainer) {
        stepsContainer.innerHTML = '';
        t.steps.forEach((step, i) => {
            const div = document.createElement('div');
            div.className = 'step-card';
            div.innerHTML = `<span class="step-num">${i + 1}</span><span>${step}</span>`;
            stepsContainer.appendChild(div);
        });
    }
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

function createFloatingElements() {
    const container = document.getElementById('floating-container');
    if (!container) return;

    for (let i = 0; i < 3; i++) {
        const blob = document.createElement('div');
        blob.className = 'bg-blob';
        blob.style.left = `${Math.random() * 100}%`;
        blob.style.top = `${Math.random() * 100}%`;
        container.appendChild(blob);
        gsap.to(blob, { x: "random(-200, 200)", y: "random(-200, 200)", duration: "random(20, 40)", repeat: -1, yoyo: true, ease: "sine.inOut" });
    }

    for (let i = 0; i < 10; i++) {
        const item = document.createElement('div');
        item.className = 'float-item';
        item.innerHTML = '<i data-lucide="shield-check"></i>';
        item.style.left = `${Math.random() * 100}%`;
        item.style.top = `${Math.random() * 100}%`;
        container.appendChild(item);
        gsap.to(item, { x: "random(-150, 150)", y: "random(-150, 150)", rotation: "random(-720, 720)", duration: "random(20, 35)", repeat: -1, yoyo: true, ease: "none" });
    }
    lucide.createIcons();
}

function animateEntrance() {
    const tl = gsap.timeline();
    gsap.set('.hero-section, .trust-section, .link-item, .commission-box, .step-card, .wallet-section, .main-btn', { opacity: 0, y: 20 });
    tl.to('.hero-section', { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" })
      .to('.trust-section', { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
      .to('.link-item', { opacity: 1, y: 0, stagger: 0.08, duration: 0.5 }, "-=0.4")
      .to('.commission-box', { opacity: 1, y: 0, duration: 0.6 }, "-=0.3")
      .to('.step-card', { opacity: 1, y: 0, stagger: 0.08, duration: 0.4 }, "-=0.3")
      .to('.wallet-section, .main-btn', { opacity: 1, y: 0, duration: 0.6 }, "-=0.2");
}