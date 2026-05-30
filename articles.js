document.addEventListener('DOMContentLoaded', () => {
    const articlesContainer = document.getElementById('articles-container');
    /**
     * Renders an article by taking the specific article object as a parameter.
     * This ensures the current data is used rather than any previously stored values.
     */
    const renderArticle = (article) => {
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('article-box');
        articleDiv.innerHTML = `
            <h1 class="t article-title-link"><a href="${article.url}" target="_blank">${article.headline}</a></h1>
            <p class="p">${article.description}</p>
        `;
        articlesContainer.appendChild(articleDiv);
    };

    // This array simulates fetching data from an API or a database.
    // Fixed Data Alignment: Headlines now match their corresponding URLs.
    const defenceArticles = [
        {
            url: "https://www.indiandefensenews.in/2026/05/taliban-signs-first-defence-pact-with.html",
            headline: "Taliban signs first defence pact with Russia, raising concerns over regional security dynamics",
            description: "The Taliban has signed its first defence pact with Russia, marking a significant development in the geopolitical landscape of the region. The agreement is expected to enhance military cooperation between the two parties, but it has also raised concerns among neighboring countries and international observers about the potential implications for regional security."
        },
        {
            url: "https://www.indiandefensenews.in/2026/05/cisf-strengthens-counter-drone-and.html",
            headline: "CISF strengthens counter-drone and surveillance capabilities with new equipment",
            description: "The Central Industrial Security Force (CISF) has enhanced its counter-drone and surveillance capabilities by acquiring new equipment, including advanced radar systems and drone detection technologies."
        },
        {
            url: "https://www.indiandefensenews.in/2026/05/netrasemi-to-begin-mass-production-of.html",
            headline: "NetraSEMI to begin mass production of indigenous 3D imaging radar for Indian Army",
            description: "NetraSEMI is set to commence mass production of its indigenous 3D imaging radar, a significant development for the Indian Army's surveillance capabilities."
        },
        {
            headline: "India’s indigenous Bhargavastra counter-drone defence system enters final trials to combat emerging drone swarms",
            url: "https://defence.in/threads/indigenous-bhargavastra-counter-drone-defence-system-enters-final-trials-to-combat-emerging-drone-swarms.17875/",
            description: "India's indigenous Bhargavastra counter-drone defence system has entered its final trials phase, marking a significant step in the country's efforts to combat emerging drone swarms."
        },
        {
            headline: "India equips Zorawar light tank with indigenous 105mm gun, successfully tests firing",
            url: "https://www.indiandefensenews.in/2026/05/india-equips-zorawar-light-tank-with.html",
            description: "India has successfully tested the indigenous 105mm gun mounted on the Zorawar light tank, marking a significant milestone in the development of this versatile armored vehicle."
        },
        {
            headline: "India offers extended-range BrahMos missiles to Philippines as coastal defence batteries near Initial Operational Status",
            url: "https://defence.in/threads/india-offers-extended-range-brahmos-missiles-to-philippines-as-coastal-defence-batteries-near-initial-operational-status.17869/",
            description: "India has reportedly offered the extended-range version of the BrahMos missile to the Philippines, marking a significant step as their coastal defense batteries approach operational status."
        },
        {
            headline: "India invites 3 private firms for Advanced Medium Combat Aircraft (AMCA) project",
            url: "https://defence.in/threads/analyzing-recent-rfp-timelines-for-amca-prototypes-from-expected-dec-2026-contract-signing-to-flight-test-completion.17876/",
            description: "The Defence Ministry today issued the Request for Proposal for the mega indigenous fifth-generation Advanced Medium Combat Aircraft (AMCA) project to three shortlisted bidders."
        },
        {
            headline: "Zen Technologies wins Rs 85 crore order from AVNL for smart grid solutions",
            url: "https://www.indiandefensenews.in/2026/05/zen-technologies-wins-85-crore-avnl.html",
            description: "Zen Technologies has secured a Rs 85 crore contract from the Authority for Advance Telecommunications (AVNL) for providing smart grid solutions."
        }
    ];

    // Load initial articles
    defenceArticles.forEach(renderArticle);
});