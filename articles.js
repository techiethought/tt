document.addEventListener('DOMContentLoaded', () => {
    const articlesContainer = document.getElementById('articles-container');

    // This array simulates fetching data from an API or a database.
    // You can add more articles here.
    const defenceArticles = [
        {
            headline: "India offers extended-range BrahMos missiles to Philippines as coastal defence batteries near Initial Operational Status",
            url: "https://defence.in/threads/india-offers-extended-range-brahmos-missiles-to-philippines-as-coastal-defence-batteries-near-initial-operational-status.17869/",
            description: "India has reportedly offered the extended-range version of the BrahMos missile to the Philippines, marking a significant step as their coastal defense batteries approach operational status."
        },
        {
            headline: "India invites 3 private firms for Advanced Medium Combat Aircraft (AMCA) project",
            url: "https://indiandefensenews.in/2026/05/update-india-invites-3-private.html",
            description: "The Defence Ministry today issued the Request for Proposal for the mega indigenous fifth-generation Advanced Medium Combat Aircraft (AMCA) project to three shortlisted bidders."
        },
        {
            headline: "Zen Technologies wins Rs 85 crore order from AVNL for smart grid solutions",
            url: "https://www.indiandefensenews.in/2026/05/zen-technologies-wins-85-crore-avnl.html",
            description: "Zen Technologies has secured a Rs 85 crore contract from the Authority for Advance Telecommunications (AVNL) for providing smart grid solutions."
        }
        // Add more articles here following the same structure
    ];

    defenceArticles.forEach(article => {
        const articleDiv = document.createElement('div');
        articleDiv.innerHTML = `
            <hr>
            <h1 class="t"><a href="${article.url}" target="_blank" style="text-decoration: none; color: inherit;">${article.headline}</a></h1>
            <p class="p">${article.description}</p>
        `;
        articlesContainer.appendChild(articleDiv);
    });
});