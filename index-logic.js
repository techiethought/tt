const CONSUMER_ARTICLE_LIMIT = 6;
const DEFENCE_ARTICLE_LIMIT = 6;
const TITLE_WORD_LIMIT = 40;
const DESCRIPTION_WORD_LIMIT = 55;

const fallbackConsumerArticles = [
    {
        title: "Asus Introduces a First-of-Its-Kind OLED Esports Monitor and Color ePaper Screen",
        description: "Asus has unveiled two innovative displays that highlight the evolving future of monitor technology. Leading the announcements is the ROG Strix OLED XG259QWPG Ace, which the company claims is the world\u2019s first OLED monitor designed specifically for esports. The 24.5-inch display features a 540Hz refresh rate, combining ultra-fast performance with the rich colors and deep contrast of OLED technology. Alongside it, Asus introduced the ZenScreen Color ePaper MP13UC, a 13.3-inch portable display aimed at productivity and reading. Using color ePaper technology, the screen offers reduced eye strain, minimal blue light exposure, and touchscreen functionality. The two products target vastly different audiences but showcase Asus\u2019 push beyond traditional LCD displays, balancing high-speed gaming performance with comfortable long-term viewing experiences."
    },
    {
        title: "Asus Equips New ProArt P16 and P14 Laptops With Nvidia\u2019s Powerful RTX Spark Platform",
        description: "Asus has unveiled its latest ProArt P16 and ProArt P14 laptops, targeting creators and professionals who need powerful AI capabilities in a portable form factor. The new devices are powered by Nvidia\u2019s RTX Spark platform, which combines a 20-core Grace CPU with a Blackwell-based RTX GPU to deliver workstation-level performance for demanding creative and AI workloads. According to Asus, the laptops can handle large 3D projects, high-resolution video editing, local AI content generation, and advanced language models without relying on cloud computing. Despite the performance boost, both models are thinner and lighter than their predecessors. The ProArt P16 features a high-refresh-rate OLED display, while the P14 offers a more compact design. Asus is also integrating AI-focused tools to streamline creative workflows and boost productivity."
    },
    {
        title: "PlayStation\u2019s New Fight Stick and Gaming Monitor Get August Release Date",
        description: "Sony has announced release dates for two new PlayStation accessories ahead of its latest State of Play presentation. The FlexStrike wireless fight stick for PS5 and PC will launch on August 6 for $200, with pre-orders opening on June 12. The controller arrives alongside Marvel T\u014dkon: Fighting Souls and includes a carrying case. PC compatibility will be expanded after launch through future updates. Sony also confirmed that its new 27-inch gaming monitor will launch on August 27 in the US and Japan for $350. The QHD IPS display supports variable refresh rates, up to 120Hz on PS5 and PS5 Pro, and up to 240Hz on PC and Mac. Pre-orders begin June 5. Sony's Pulse Elevate wireless speakers are also scheduled to launch later this year."
    },
    {
        title: "Microsoft\u2019s New Surface Laptop Ultra Is Built to Compete With the M5 Max MacBook Pro",
        description: "Microsoft has unveiled the Surface Laptop Ultra, its most powerful Surface device to date, with a launch planned for this fall. The high-performance laptop is powered by Nvidia\u2019s newly announced RTX Spark platform, combining a 20-core ARM CPU, a Blackwell-based GPU with 6,144 CUDA cores, and up to 128GB of unified memory. Designed for creators, developers, and AI enthusiasts, the Surface Laptop Ultra can reportedly run AI models with up to 120 billion parameters locally. The device also features a 15-inch mini-LED touchscreen with up to 2,000 nits of HDR brightness, a wide range of connectivity options, and an upgraded haptic trackpad. Microsoft is positioning the laptop as a direct competitor to Apple\u2019s M5 Max MacBook Pro. Pricing has not yet been announced, but expectations point to a premium price tag."
    },
    {
        title: "Xbox Expands Into Handheld Gaming With Newly Revealed Device",
        description: "ASUS surprised gaming enthusiasts at Computex 2026 by unveiling the new ROG Xbox Ally X20, a special-edition handheld gaming device featuring a transparent design and several hardware upgrades. The device expands on the existing ROG Xbox Ally X with a larger 7.4-inch Full HD OLED display, offering HDR support, up to 1,400 nits of peak brightness, a 120Hz refresh rate, and FreeSync Premium Pro technology. ASUS also showcased a companion bundle that includes the ROG XREAL R1 Edition 20 smart glasses, capable of delivering a virtual 171-inch display when connected via USB-C. While pricing and availability remain unconfirmed, the premium bundle is expected to exceed the current Ally X\u2019s $999.99 price tag. More details are expected in the coming weeks."
    },
    {
        title: "Meta Is Reportedly Preparing a Flood of New Smart Glasses This Year",
        description: "Meta is reportedly preparing an aggressive expansion of its smart glasses lineup, with several new models expected to launch throughout 2026. According to a report from The Information, the company could unveil a new pair of smart glasses as early as next month under the codename \"Modelo.\" Additional devices, including \"Luna\" and \"RBM2 Refresh,\" are said to be planned for the fall, while another model, codenamed \"Mojito VIP,\" may arrive in December. Meta is also reportedly testing experimental prototypes, including \"Artemis\" and \"SSG\" (Supersensing Glasses). The latter could feature always-on cameras that continuously analyze a user's surroundings, enabling advanced AI-powered assistance. While the technology raises privacy and battery-life concerns, Meta appears determined to strengthen its position in the emerging smart glasses market."
    },
    {
        title: "Malaysia\u2019s Under-16 Social Media Ban Could Trigger Fines of Up to $2.5 Million",
        description: "Malaysia\u2019s ban on social media use by children under 16 officially took effect today, marking one of the region\u2019s strictest efforts to regulate online access for minors. The law applies to social media platforms with more than eight million users in the country and imposes penalties of up to 10 million ringgit (around $2.5 million) for non-compliance. Affected platforms must introduce age-verification measures within the next six months to ensure users are at least 16 years old. While new underage sign-ups are now prohibited, existing users below the age limit have been granted a one-month grace period to download, transfer, or manage their data before restrictions are enforced. Meta has criticized the move, warning it could push teenagers toward less regulated online spaces. Malaysia joins Indonesia and several other countries exploring tighter controls on youth access to social media."
    },
    {
        title: "MSI grabs attention at Computex with its innovative Triple Mode OLED display.",
        description: "MSI has unveiled the MPG OLED 322URDX36 ahead of Computex 2026, introducing what it claims is the world\u2019s first Triple Mode gaming monitor. The 32-inch QD-OLED display offers three selectable resolution and refresh rate combinations: 4K at 360Hz, 2K at 520Hz, and Full HD at 680Hz, giving gamers greater flexibility than existing dual-mode monitors. Built on Samsung\u2019s fifth-generation QD-OLED panel technology, the monitor delivers up to 1,500 nits of peak HDR brightness and features MSI\u2019s DarkArmor Film to enhance black levels. Connectivity includes DisplayPort 2.1a with UHBR20 support and USB-C with 98W power delivery. MSI is expected to showcase the monitor at Computex 2026, with pricing and availability details yet to be announced."
    },
    {
        title: "Copilot Could Soon Handle Your Health Questions and Medical Records",
        description: "Microsoft has introduced Copilot Health in preview, a new AI-powered health assistant designed to help users better understand their medical information, fitness data, and overall wellness. Available through Copilot, the feature allows users to create a personalized health profile, connect Apple Health, and access medical records from more than 50,000 healthcare providers across the United States. Copilot Health can explain blood test results, provide personalized health insights, and help users find suitable healthcare providers based on specialty, language, location, and insurance coverage. Microsoft says the service was developed with input from over 250 physicians worldwide and meets ISO/IEC 42001 standards. The company emphasizes that health conversations remain private and are not used to train AI models."
    },
    {
        title: "Samsung\u2019s Galaxy Watch Is Getting Smarter About Your Health Data",
        description: "Samsung could be set to make Galaxy Watch health tracking far more useful with the upcoming One UI 9 Watch update. According to tipster TonySamsunglove, the software will leverage Galaxy AI to transform raw health metrics into personalized insights and recommendations. Rather than simply displaying data such as sleep scores, heart rate, and activity levels, the update may analyze long-term trends and identify patterns that impact overall wellness. The leak also suggests Samsung is refining its BioActive Sensor and developing additional health metrics. One UI 9 Watch is expected to be based on Wear OS 7, bringing deeper Gemini integration, improved battery life, and enhanced workout tracking. If the rumors prove accurate, Samsung\u2019s smartwatches could evolve from health trackers into proactive wellness coaches."
    },
    {
        title: "Gemini Spark Rolls Out, Putting AI at the Center of Everyday Tasks",
        description: "Google has begun rolling out Gemini Spark to Google AI Ultra subscribers in the U.S., marking a significant step beyond traditional AI chatbots. Unlike conventional assistants that simply answer questions, Gemini Spark is designed to perform tasks across apps and services on a user\u2019s behalf, even when their device is offline. According to Google, the AI agent can coordinate activities such as managing schedules, handling reservations, and organizing digital workflows while seeking user approval before taking major actions. The launch reflects a growing industry shift toward autonomous AI agents capable of completing tasks rather than just providing information. While the technology promises greater convenience, Google faces the challenge of convincing users to trust AI with increasingly important decisions and everyday responsibilities."
    },
    {
        title: "Google Drive Introduces Batch Scanning to Streamline Document Management",
        description: "Google is rolling out a redesigned document scanner in Google Drive that aims to make scanning faster and more reliable on Android devices. Announced by Android Ecosystem President Sameer Samat, the update introduces Smart Batch Scanning, allowing users to scan multiple documents in one session without manually capturing each page. The new scanner also includes Auto-Best Frame, which automatically selects the sharpest image, and Duplicate Detection to prevent scanning the same page twice. A refreshed Material 3 Expressive interface and support for importing existing photos further streamline the experience. The feature works entirely on-device, keeping documents private and accessible offline. However, it requires at least 8GB of RAM, limiting availability on some Android smartphones."
    }
];

function normalizeArticleText(text) {
    return text.replace(/\s+/g, " ").trim();
}

function limitWords(text, maxWords) {
    const words = normalizeArticleText(text).split(" ").filter(Boolean);

    if (words.length <= maxWords) {
        return {
            text: words.join(" "),
            hasMore: false
        };
    }

    return {
        text: words.slice(0, maxWords).join(" "),
        hasMore: true
    };
}

function getArticleSlug(title) {
    return normalizeArticleText(title)
        .toLowerCase()
        .normalize("NFKD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "") || "article";
}

function getArticleAnchor(title, index) {
    return `article-${index + 1}-${getArticleSlug(title)}`;
}

function getDefenceArticleAnchor(title, index) {
    return `defence-article-${index + 1}-${getArticleSlug(title)}`;
}

function getConsumerArticlesFromDocument(documentSource) {
    const articleTitles = Array.from(documentSource.querySelectorAll("h1.t"));

    return articleTitles.map((titleElement) => {
        const articleBlock = titleElement.closest("div");
        const descriptionElement = articleBlock ? articleBlock.querySelector("p.p") : null;

        return {
            title: normalizeArticleText(titleElement.textContent),
            description: normalizeArticleText(descriptionElement ? descriptionElement.textContent : "")
        };
    }).filter((article) => article.title && article.description);
}

async function loadConsumerArticles() {
    try {
        const response = await fetch("consumer-tech-articles.html");

        if (!response.ok) {
            throw new Error("Consumer article page could not be loaded.");
        }

        const articleHtml = await response.text();
        const parsedDocument = new DOMParser().parseFromString(articleHtml, "text/html");
        const articles = getConsumerArticlesFromDocument(parsedDocument);

        return articles.length ? articles : fallbackConsumerArticles;
    } catch (error) {
        return fallbackConsumerArticles;
    }
}

function createConsumerArticle(article, index) {
    const articleElement = document.createElement("article");
    const titleElement = document.createElement("h3");
    const titleLink = document.createElement("a");
    const title = limitWords(article.title, TITLE_WORD_LIMIT);

    articleElement.className = "consumer-brief-article";
    titleLink.href = `consumer-tech-articles.html#${getArticleAnchor(article.title, index)}`;
    titleLink.title = article.title;
    titleLink.textContent = title.hasMore ? `${title.text}...` : title.text;

    titleElement.append(titleLink);
    articleElement.append(titleElement);

    return articleElement;
}

function renderConsumerBrief(articles, expanded) {
    const articleList = document.getElementById("consumerBriefList");
    const showMoreButton = document.getElementById("consumerShowMore");

    if (!articleList || !showMoreButton) return;

    const visibleArticles = expanded ? articles : articles.slice(0, CONSUMER_ARTICLE_LIMIT);

    articleList.replaceChildren(...visibleArticles.map(createConsumerArticle));
    showMoreButton.hidden = articles.length <= CONSUMER_ARTICLE_LIMIT;
    showMoreButton.textContent = expanded ? "Show Less" : "Show More";
    showMoreButton.setAttribute("aria-expanded", String(expanded));
}

async function buildConsumerBrief() {
    const articles = await loadConsumerArticles();
    const showMoreButton = document.getElementById("consumerShowMore");
    let expanded = false;

    renderConsumerBrief(articles, expanded);

    if (!showMoreButton) return;

    showMoreButton.addEventListener("click", () => {
        expanded = !expanded;
        renderConsumerBrief(articles, expanded);
    });
}

function getDefenceArticlesFromSource(source) {
    return source.map((article) => ({
        title: normalizeArticleText(article.headline || article.title || ""),
        description: normalizeArticleText(article.description || ""),
        url: article.url || ""
    })).filter((article) => article.title && article.description);
}

async function loadDefenceArticles() {
    return getDefenceArticlesFromSource(Array.isArray(window.defenceArticles) ? window.defenceArticles : []);
}

function createDefenceArticle(article, index) {
    const articleElement = document.createElement("article");
    const titleElement = document.createElement("h3");
    const titleLink = document.createElement("a");
    const title = limitWords(article.title, TITLE_WORD_LIMIT);
    const articleHref = `defence-tech-articles.html#${getDefenceArticleAnchor(article.title, index)}`;

    articleElement.className = "defence-brief-article";

    titleLink.href = articleHref;
    titleLink.title = article.title;
    titleLink.textContent = title.hasMore ? `${title.text}...` : title.text;

    titleElement.append(titleLink);
    articleElement.append(titleElement);

    return articleElement;
}

function renderDefenceBrief(articles, expanded) {
    const articleList = document.getElementById("defenceBriefList");
    const showMoreButton = document.getElementById("defenceShowMore");

    if (!articleList || !showMoreButton) return;

    if (!articles.length) {
        articleList.replaceChildren(document.createTextNode("No defence articles found."));
        showMoreButton.hidden = true;
        return;
    }

    const visibleArticles = expanded ? articles : articles.slice(0, DEFENCE_ARTICLE_LIMIT);

    articleList.replaceChildren(...visibleArticles.map(createDefenceArticle));
    showMoreButton.hidden = articles.length <= DEFENCE_ARTICLE_LIMIT;
    showMoreButton.textContent = expanded ? "Show Less" : "Show More";
    showMoreButton.setAttribute("aria-expanded", String(expanded));
}

async function buildDefenceBrief() {
    const articles = await loadDefenceArticles();
    const showMoreButton = document.getElementById("defenceShowMore");
    let expanded = false;

    renderDefenceBrief(articles, expanded);

    if (!showMoreButton) return;

    showMoreButton.addEventListener("click", () => {
        expanded = !expanded;
        renderDefenceBrief(articles, expanded);
    });
}

function buildRainGlass() {
    const layer = document.querySelector(".rain-glass");
    if (!layer) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dropCount = Math.min(54, Math.max(28, Math.round(window.innerWidth / 24)));
    const streakCount = Math.min(18, Math.max(8, Math.round(window.innerWidth / 74)));
    const fragment = document.createDocumentFragment();

    layer.replaceChildren();

    for (let i = 0; i < dropCount; i += 1) {
        const drop = document.createElement("span");
        const size = 4 + Math.random() * 12;

        drop.className = "rain-drop";
        drop.style.setProperty("--size", `${size.toFixed(1)}px`);
        drop.style.setProperty("--x", `${(Math.random() * 100).toFixed(2)}vw`);
        drop.style.setProperty("--y", `${(Math.random() * 100).toFixed(2)}vh`);
        drop.style.setProperty("--tilt", `${(-18 + Math.random() * 36).toFixed(1)}deg`);
        drop.style.setProperty("--opacity", `${(0.3 + Math.random() * 0.32).toFixed(2)}`);
        drop.style.setProperty("--delay", `${(-Math.random() * 18).toFixed(2)}s`);
        drop.style.setProperty("--duration", reducedMotion ? "0s" : `${(16 + Math.random() * 18).toFixed(2)}s`);
        fragment.appendChild(drop);
    }

    for (let i = 0; i < streakCount; i += 1) {
        const streak = document.createElement("span");

        streak.className = "rain-run";
        streak.style.setProperty("--x", `${(Math.random() * 100).toFixed(2)}vw`);
        streak.style.setProperty("--y", `${(-15 + Math.random() * 105).toFixed(2)}vh`);
        streak.style.setProperty("--width", `${(1.5 + Math.random() * 3).toFixed(1)}px`);
        streak.style.setProperty("--height", `${(80 + Math.random() * 190).toFixed(1)}px`);
        streak.style.setProperty("--opacity", `${(0.22 + Math.random() * 0.28).toFixed(2)}`);
        streak.style.setProperty("--delay", `${(-Math.random() * 22).toFixed(2)}s`);
        streak.style.setProperty("--duration", reducedMotion ? "0s" : `${(18 + Math.random() * 20).toFixed(2)}s`);
        fragment.appendChild(streak);
    }

    layer.appendChild(fragment);
}

function buildTicker() {
    const tickerMessage = document.getElementById("tickerMessage");
    const tickerMessageDuplicate = document.getElementById("tickerMessageDuplicate");

    if (!tickerMessage || !tickerMessageDuplicate) return;

    // Load saved message or use default
    const defaultMessage = "Welcome to Techie Thought! Breaking tech news, smart analysis, and future-ready insights delivered fast.";
    const savedMessage = localStorage.getItem("ticker_message") || defaultMessage;

    // Update display values
    tickerMessage.textContent = savedMessage;
    tickerMessageDuplicate.textContent = savedMessage;
}

document.addEventListener("DOMContentLoaded", () => {
    buildConsumerBrief();
    buildDefenceBrief();
    buildRainGlass();
    buildTicker();
});
window.addEventListener("resize", buildRainGlass);
