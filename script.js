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
        paymentTitle: "Кошелек",
        copy: "Copy",
        copied: "Done!",
        contactBtn: "Связаться с @ammodeals",
        switchLang: "English",
        // Ссылки
        linkTikTok: "TikTok | ТикТок",
        linkWeb: "My website | Мой сайт",
        linkGarant: "Garant | Посредник",
        linkNews: "Channel | Новостной канал",
        linkReviews: "Reviews | Отзывы",
        linkSponsors: "Sponsors | Спонсоры",
        linkMaint: "Maintlist | Безопасная база",
        linkServices: "Services | Услуги",
        linkBots: "Useful Bots | Полезные боты",
        linkGifts: "Gifts | Подарок от меня"
    },
    en: {
        role: "Telegram Guarantor",
        subtitle: "Safe Deals | Commission 2%",
        trustTitle: "What is a guarantor?",
        trustP1: "A guarantor is an individual or organization that officially confirms the fulfillment of obligations. 800+ successful deals completed.",
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
        // Links
        linkTikTok: "TikTok",
        linkWeb: "My website",
        linkGarant: "Garant | Intermediary",
        linkNews: "Channel | News",
        linkReviews: "Reviews",
        linkSponsors: "Sponsors",
        linkMaint: "Maintlist | Safe Base",
        linkServices: "Services",
        linkBots: "Useful Bots",
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
    
    // Обновляем все элементы с data-t
    document.querySelectorAll('[data-t]').forEach(el => {
        const key = el.getAttribute('data-t');
        if (t[key]) el.textContent = t[key];
    });

    // Обновляем текст на кнопке перевода
    const langBtn = document.getElementById('lang-btn');
    if (langBtn) langBtn.textContent = t.switchLang;

    // Обновляем шаги
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
    
    // Плавная анимация смены
    gsap.to('.container-main', {
        opacity: 0,
        y: 10,
        duration: 0.2,
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

    // Создаем фоновые "световые пятна"
    for (let i = 0; i < 3; i++) {
        const blob = document.createElement('div');
        blob.className = 'bg-blob';
        blob.style.left = `${Math.random() * 100}%`;
        blob.style.top = `${Math.random() * 100}%`;
        container.appendChild(blob);

        gsap.to(blob, {
            x: "random(-200, 200)",
            y: "random(-200, 200)",
            duration: "random(20, 40)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }

    const configs = [
        { type: 'ava', count: 8 },
        { type: 'shield', count: 10 }
    ];

    configs.forEach(config => {
        for (let i = 0; i < config.count; i++) {
            const item = document.createElement('div');
            item.className = 'float-item';
            
            if (config.type === 'ava') {
                item.className += ' float-ava';
                item.innerHTML = `<img src="ava.png" style="width:100%; height:100%; object-fit:cover;" onerror="this.src='https://picsum.photos/seed/${i + 10}/100/100'">`;
                const size = 20 + Math.random() * 30;
                item.style.width = `${size}px`;
                item.style.height = `${size}px`;
            } else {
                item.innerHTML = '<i data-lucide="shield-check"></i>';
                item.style.fontSize = `${10 + Math.random() * 12}px`;
                item.style.color = 'rgba(59, 130, 246, 0.2)';
            }

            item.style.left = `${Math.random() * 100}%`;
            item.style.top = `${Math.random() * 100}%`;
            container.appendChild(item);

            // Более сложная анимация движения
            gsap.to(item, {
                x: "random(-150, 150)",
                y: "random(-150, 150)",
                rotation: "random(-720, 720)",
                duration: "random(20, 35)",
                repeat: -1,
                yoyo: true,
                ease: "none"
            });
        }
    });
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