const defenceArticles = [
    {
        url: "https://www.indiandefensenews.in/2026/07/un-expresses-concern-over-civilian.html",
        headline: "UN Expresses Concern Over Civilian Trauma After Pakistani Strikes Kill 36 In Afghanistan",
        description: "The United Nations Office for the Coordination of Humanitarian Affairs has voiced concern over the impact of Pakistani military strikes inside Afghanistan. The organisation highlighted that the attacks have heightened fear and psychological trauma among children, according to reports carried by Tolo News."
    },
    {
        url: "https://defence.in/threads/drdo-issues-rfp-for-m3-interceptor-canister-materials-as-project-kusha-air-defence-programme-shifts-to-fabrication-phase.18228/",
        headline: "DRDO Issues RFP for M3 Interceptor Canister Materials as Project Kusha Air Defence Programme Shifts to Fabrication Phase",
        description: "India’s monumental ₹21,700 crore long-range air defence initiative, Project Kusha, has achieved a critical new milestone."
    },
    {
        url: "https://defence.in/threads/why-drdo-should-equip-astra-mk2-missile-with-advanced-passive-eo-ir-seeker-tech-to-counter-electronic-warfare-threats.18232/",
        headline: "Why DRDO Should Equip Astra Mk2 Missile With Advanced Passive EO/IR Seeker Tech to Counter Electronic Warfare Threats",
        description: "Defence analysts suggest that developing an Electro-Optical/Infrared (EO/IR) seeker for the upcoming Astra Mk2 could be a game-changer."
    },
    {
        url: "https://defence.in/threads/how-europes-eur100b-fcas-collapse-allows-india-to-pursue-targeted-6th-gen-tech-partnerships-with-france-on-its-own-terms.18221/",
        headline: "How Europe’s €100B FCAS Collapse Allows India to Pursue Targeted 6th-Gen Tech Partnerships With France on Its Own Terms",
        description: "In June 2026, one of Europe's most ambitious joint military ventures, the Future Combat Air System (FCAS), officially fell apart. This collapse has opened up new avenues for India to pursue targeted partnerships with France in the realm of 6th-generation combat aircraft technology, allowing for more tailored and strategic collaborations."
    },
    {
        url: "https://defence.in/threads/iaf-reveals-physical-evidence-of-314km-s-400-surface-to-air-missile-strike-against-pakistani-awacs-during-op-sindoor.18208/",
        headline: "IAF Reveals Physical Evidence of 314km S-400 Surface-to-Air Missile Strike Against Pakistani AWACS During Op Sindoor",
        description: "The Indian Air Force (IAF) has provided undeniable physical proof of a historic combat achievement, showcasing canister blowout debris from a record-breaking surface-to-air missile (SAM) interception."
    },
    {
        url: "https://www.indiandefensenews.in/2026/07/india-revives-chabahar-rail-link-to.html",
        headline: "India Revives Chabahar Rail Link To Boost Central Asian Trade Amid Easing Iran Sanctions",
        description: "Unconfirmed reports suggest that India is accelerating plans to revive the 700‑km Chabahar–Zahedan rail corridor in Iran, aiming to strengthen trade access to Central Asia and Eurasia while capitalising on easing US sanctions on Tehran."
    },
    {
        url: "https://bharatshakti.in/brahmos-astra-missiles-and-sabang-port-india-indonesia-deepen-strategic-push-in-indo-pacific/",
        headline: "BrahMos, Astra Missiles and Sabang Port: India, Indonesia Deepen Strategic Push in Indo-Pacific",
        description: "The agreements were signed following talks held between Prime Minister Narendra Modi and Indonesian President Prabowo Subianto in Jakarta"
    },
    {
        url: "https://www.indiandefensenews.in/2026/07/isro-successfully-tests-solve-motor-for.html",
        headline: "ISRO Successfully Tests Solve Motor For Gaganyaan Parachute Validation",
        description: "ISRO has successfully completed the first ground test of the solid motor for its Sub-Orbital Launch Vehicle for Experiments (SOLVE), marking a crucial step in validating the parachute-based deceleration system for the Gaganyaan mission."
    },
    {
        url: "https://defence.in/threads/to-counter-chinas-stealth-ready-pl-16-why-indias-future-air-defence-relies-on-kill-webs-and-manned-unmanned-teaming.17949/",
        headline: "To counter China’s stealth-ready PL-16, why India’s future air defence relies on kill webs and manned-unmanned teaming",
        description: "To counter China’s stealth-ready PL-16, why India’s future air defence relies on kill webs and manned-unmanned teaming"
    },
    {
        url: "https://defence.in/threads/indian-ndc-delegation-visits-royal-thai-marine-corps-hq-discusses-bilateral-naval-engagements.17950/",
        headline: "Indian NDC delegation visits Royal Thai Marine Corps HQ, discusses bilateral naval engagements",
        description: "Indian NDC delegation visits Royal Thai Marine Corps HQ, discusses bilateral naval engagements"
    },
    {
        url: "https://defence.in/threads/australias-mq-28-ghost-bat-emerges-as-potential-collaborative-combat-aircraft-cca-for-iaf-with-significant-tot-prospects.17951/",
        headline: "Australias MQ-28 Ghost Bat emerges as potential collaborative combat aircraft CCA for IAF with significant TOT prospects",
        description: "Australia's MQ-28 Ghost Bat emerges as potential collaborative combat aircraft (CCA) for IAF with significant TOT prospects"
    },
    {
        url: "https://www.indiandefensenews.in/2026/06/centre-to-establish-modern-air-raid.html",
        headline: "Centre To Establish Modern Air-Raid Warning Systems In 244 Districts With IAF Expertise",
        description: "Centre To Establish Modern Air-Raid Warning Systems In 244 Districts With IAF Expertise"
    },
    {
        url: "https://defence.in/threads/india-pushes-for-rafale-interface-documents-to-ensure-seamless-astra-and-brahmos-ng-integration-claims-french-media.17905/",
        headline: "India pushes for Rafale interface documents to ensure seamless Astra and BrahMos NG integration, claims French media",
        description: "India pushes for Rafale interface documents to ensure seamless Astra and BrahMos NG integration, claims French media"
    },
    {
        url: "https://bharatshakti.in/vietnam-to-become-second-asean-country-to-obtain-brahmos-missile-system/",
        headline: "Vietnam to become second ASEAN country to obtain BrahMos missile system",
        description: "Vietnam to become second ASEAN country to obtain BrahMos missile system"
    },
    {
        url: "https://www.indiandefensenews.in/2026/05/taliban-signs-first-defence-pact-with.html",
        headline: "Taliban signs first defence pact with Russia, raising concerns over regional security dynamics",
        description: "Taliban signs first defence pact with Russia, raising concerns over regional security dynamics"
    },
    {
        url: "https://www.indiandefensenews.in/2026/05/cisf-strengthens-counter-drone-and.html",
        headline: "CISF strengthens counter-drone and surveillance capabilities with new equipment",
        description: "CISF strengthens counter-drone and surveillance capabilities with new equipment"
    },
    {
        url: "https://www.indiandefensenews.in/2026/05/netrasemi-to-begin-mass-production-of.html",
        headline: "NetraSEMI to begin mass production of indigenous 3D imaging radar for Indian Army",
        description: "NetraSEMI to begin mass production of indigenous 3D imaging radar for Indian Army"
    },
    {
        headline: "India’s indigenous Bhargavastra counter-drone defence system enters final trials to combat emerging drone swarms",
        url: "https://defence.in/threads/indigenous-bhargavastra-counter-drone-defence-system-enters-final-trials-to-combat-emerging-drone-swarms.17875/",
        description: "India’s indigenous Bhargavastra counter-drone defence system enters final trials to combat emerging drone swarms"
    },
    {
        headline: "India equips Zorawar light tank with indigenous 105mm gun, successfully tests firing",
        url: "https://www.indiandefensenews.in/2026/05/india-equips-zorawar-light-tank-with.html",
        description: "India has successfully tested the firing of an indigenous 105mm gun mounted on the Zorawar light tank, marking a significant milestone in the development of the country’s armored capabilities."
    },
    {
        headline: "India offers extended-range BrahMos missiles to Philippines as coastal defence batteries near Initial Operational Status",
        url: "https://defence.in/threads/india-offers-extended-range-brahmos-missiles-to-philippines-as-coastal-defence-batteries-near-initial-operational-status.17869/",
        description: "India offers extended-range BrahMos missiles to Philippines as coastal defence batteries near Initial Operational Status"
    },
    {
        headline: "India invites 3 private firms for Advanced Medium Combat Aircraft (AMCA) project",
        url: "https://defence.in/threads/analyzing-recent-rfp-timelines-for-amca-prototypes-from-expected-dec-2026-contract-signing-to-flight-test-completion.17876/",
        description: "India invites 3 private firms for Advanced Medium Combat Aircraft (AMCA) project"
    },
    {
        headline: "Zen Technologies wins Rs 85 crore order from AVNL for smart grid solutions",
        url: "https://www.indiandefensenews.in/2026/05/zen-technologies-wins-85-crore-avnl.html",
        description: "Zen Technologies wins Rs 85 crore order from AVNL for smart grid solutions"
    }
];

window.defenceArticles = defenceArticles;

function normalizeDefenceArticleText(text) {
    return text.replace(/\s+/g, " ").trim();
}

function getDefenceArticleSlug(title) {
    return normalizeDefenceArticleText(title)
        .toLowerCase()
        .normalize("NFKD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "") || "article";
}

function getDefenceArticleAnchor(title, index) {
    return `defence-article-${index + 1}-${getDefenceArticleSlug(title)}`;
}

function showDefenceArticleFromHash() {
    if (!window.location.hash) return;

    const targetId = decodeURIComponent(window.location.hash.slice(1));
    const target = document.getElementById(targetId);

    if (!target) return;

    requestAnimationFrame(() => {
        target.scrollIntoView({ block: "start" });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const articlesContainer = document.getElementById("articles-container");

    if (!articlesContainer) return;

    const renderArticle = (article, index) => {
        const articleDiv = document.createElement("div");
        const title = document.createElement("h1");
        const titleLink = document.createElement("a");
        const description = document.createElement("p");

        articleDiv.classList.add("article-box");
        articleDiv.id = getDefenceArticleAnchor(article.headline, index);

        title.className = "t article-title-link";
        titleLink.href = article.url;
        titleLink.target = "_blank";
        titleLink.rel = "noopener";
        titleLink.textContent = article.headline;
        title.appendChild(titleLink);

        description.className = "p";
        description.textContent = article.description;

        articleDiv.append(title, description);
        articlesContainer.appendChild(articleDiv);
    };

    defenceArticles.forEach(renderArticle);
    showDefenceArticleFromHash();
    window.addEventListener("hashchange", showDefenceArticleFromHash);
});
