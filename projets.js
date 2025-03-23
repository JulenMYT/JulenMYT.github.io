const projects = [
    {
        title: "Attraction Flow",
        image: "screen/AttractionFlow/image1.png",
        teamSize: 3,
        time: "2 jours",
        engine: "Unity",
        year: 2025,
        description: "GAME JAM. Jeu mobile hyper casual de gestion de file d'attente de parc d'attraction.",
        isGold: true,
        detailPage: "project-details/attraction-flow.html"
    }, 
    {
        title: "Kitchen UI",
        image: "screen/UIUnityScreen/image1.png",
        teamSize: 1,
        time: "10 jours",
        engine: "Unity",
        year: 2024,
        description: "UI de jeu de cuisine.",
        isGold: false,
        detailPage: "project-details/kitchen-ui.html"
    },    
    {
        title: "World Shader",
        image: "screen/ShaderUnityScreen/image1.png",
        teamSize: 1,
        time: "5 jours",
        engine: "Unity",
        year: 2024,
        description: "Paysage sur Unity entièrement réalisé en shader avec shader graph.",
        isGold: false,
        detailPage: "project-details/world-shader.html"
    },
    {
        title: "Cisum",
        image: "screen/Cisum/image1.jpg",
        teamSize: 1,
        time: "10 jours",
        engine: "Unity",
        year: 2024,
        description: "Battle system inspiré par Mother 3, avec mécanique de rythme avec la musique et système de niveau.",
        isGold: true,
        detailPage: "project-details/cisum.html"
    },
    {
        title: "IA d'Echecs",
        image: "screen/ChessAI/image1.png",
        teamSize: 2,
        time: "10 jours",
        engine: "SFML",
        year: 2024,
        description: "IA d'échec simple avec interface graphique.",
        isGold: false,
        detailPage: "project-details/chess.html"
    },
    {
        title: "Librairie Parsing",
        image: "screen/LibrairieParsingSMLF/image1.png",
        teamSize: 2,
        time: "5 jours",
        engine: "SFML",
        year: 2024,
        description: "Librairie de sauvegarde et chargement de fichier .ini",
        isGold: false,
        detailPage: "project-details/parsing.html"
    },
    {
        title: "IA State Machine",
        image: "screen/StateMachine/image1.png",
        teamSize: 2,
        time: "10 jours",
        engine: "SFML",
        year: 2024,
        description: "State Machine d'une IA simple.",
        isGold: false,
        detailPage: "project-details/state-machine.html"
    },
    {
        title: "Seasons",
        image: "screen/SeasonsUnity/image1.png",
        teamSize: 2,
        time: "30 jours",
        engine: "Unity",
        year: 2024,
        description: "Jeu de puzzle inspiré de Oracle of Seasons autour des saisons.",
        isGold: true,
        detailPage: "project-details/seasons.html"
    },
    {
        title: "Football Game",
        image: "screen/BallGame/image1.png",
        teamSize: 3,
        time: "10 jours",
        engine: "Unity",
        year: 2024,
        description: "Jeu de football avec obstacles en multijoueur local.",
        isGold: false,
        detailPage: "project-details/ball-game.html"
    },
    {
        title: "RPG ASCII",
        image: "screen/ASCII/image1.png",
        teamSize: 3,
        time: "5 jours",
        engine: "Développement C#",
        year: 2024,
        description: "RPG en ASCII avec systeme de combat, quête, sauvegarde et inventaire.",
        isGold: false,
        detailPage: "project-details/ascii.html"
    },
    {
        title: "Seasons",
        image: "screen/SeasonsSFML/image1.png",
        teamSize: 3,
        time: "15 jours",
        engine: "SFML",
        year: 2023,
        description: "Jeu de puzzle inspiré de Oracle of Seasons autour des saisons.",
        isGold: false,
        detailPage: "project-details/seasons-sfml.html"
    },
    {
        title: "Ecospace",
        image: "screen/Ecospace/image1.png",
        teamSize: 3,
        time: "10 jours",
        engine: "SFML",
        year: 2023,
        description: "Jeu de jardin inspiré par Viva Piñata avec journal.",
        isGold: false,
        detailPage: "project-details/ecospace.html"
    },
];

const projectContainer = document.getElementById("project-container");

projects.forEach(project => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");

    if (project.isGold) {
        projectCard.classList.add("gold");
    }

    projectCard.innerHTML = `
    <a href="${project.detailPage}" target="_blank" class="project-link">
        <div class="img-container">
            <img class="image" src="${project.image}" alt="${project.title}">
        </div>
        <div class="stats">
            <div class="team-size">
                <i class="fa-solid fa-users"></i> ${project.teamSize}
            </div>
            <div class="time">
                <i class="fa-solid fa-clock"></i> ${project.time}
            </div>
            <div class="water-mark">
                <i class="fa-solid fa-screwdriver-wrench"></i> ${project.engine}
            </div>
            <div class="year">
                <i class="fa-solid fa-calendar"></i> ${project.year}
            </div>
        </div>
        <div class="title">
            <h2>${project.title}</h2>
        </div>
        <div class="description">
            <p>${project.description}</p>
        </div>
    </a>
    `;

    projectContainer.appendChild(projectCard);
});

document.getElementById('filter-date').addEventListener('change', handleFilterChange);
document.getElementById('filter-engine').addEventListener('change', handleFilterChange);
document.getElementById('filter-gold').addEventListener('change', handleFilterChange);

// Gestion du clic sur les options de filtrage
function handleFilterChange(event) {
    const selectedValue = event.target.value;
    
    // Vérifie si l'option "Annuler" est sélectionnée
    if (selectedValue === 'cancel') {
        // Remet le filtre sur l'option par défaut
        event.target.value = '';
        filterProjects();  // Reapplique le filtre avec les valeurs réinitialisées
    } else {
        filterProjects();  // Applique le filtre avec la nouvelle valeur
    }
}

document.getElementById('reset-filters').addEventListener('click', resetFilters);

function resetFilters() {
    // Remet tous les filtres à leur valeur par défaut
    document.getElementById('filter-date').value = '';
    document.getElementById('filter-engine').value = '';
    document.getElementById('filter-gold').value = '';

    // Réapplique le filtre avec toutes les valeurs par défaut (aucun filtre actif)
    filterProjects();
}

function filterProjects() {
    const selectedDate = document.getElementById('filter-date').value;
    const selectedEngine = document.getElementById('filter-engine').value;
    const selectedGold = document.getElementById('filter-gold').value;

    const filteredProjects = projects.filter(project => {
        const matchesDate = selectedDate ? project.year == selectedDate : true;
        const matchesEngine = selectedEngine ? project.engine === selectedEngine : true;
        const matchesGold = selectedGold ? project.isGold.toString() === selectedGold : true;

        return matchesDate && matchesEngine && matchesGold;
    });

    renderProjects(filteredProjects);
}

function renderProjects(filteredProjects) {
    const projectContainer = document.getElementById("project-container");
    projectContainer.innerHTML = '';

    filteredProjects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");

        if (project.isGold) {
            projectCard.classList.add("gold");
        }

        projectCard.innerHTML = `
        <a href="${project.detailPage}" target="_blank" class="project-link">
            <div class="img-container">
                <img class="image" src="${project.image}" alt="${project.title}">
            </div>
            <div class="stats">
                <div class="team-size">
                    <i class="fa-solid fa-users"></i> ${project.teamSize}
                </div>
                <div class="time">
                    <i class="fa-solid fa-clock"></i> ${project.time}
                </div>
                <div class="water-mark">
                    <i class="fa-solid fa-screwdriver-wrench"></i> ${project.engine}
                </div>
                <div class="year">
                    <i class="fa-solid fa-calendar"></i> ${project.year}
                </div>
            </div>
            <div class="title">
                <h2>${project.title}</h2>
            </div>
            <div class="description">
                <p>${project.description}</p>
            </div>
        </a>
        `;

        projectContainer.appendChild(projectCard);
    });
}

// Initialiser avec tous les projets
renderProjects(projects);
