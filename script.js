// Данные серверов
const servers = [
    {
        name: "Elysium",
        avatar: "assets/856646640329031721.gif",
        members: "268,656 участников"
    },
    {
        name: "Yamiko",
        avatar: "assets/a_9c02b4f6844b0102e9058959db4313bf.gif",
        members: "12,673 участников"
    },
    {
        name: "Hanami",
        avatar: "assets/a_98851911623cddd60c76d879806858f8.gif",
        members: "134,393 участников"
    },
    {
        name: "IMPERIA",
        avatar: "assets/423396232598257664.gif",
        members: "2,285 участников"
    },
    {
        name: "Riff",
        avatar: "assets/1123258135486930945.gif",
        members: "20,244 участников"
    },
    {
        name: "Naebalovo.net",
        avatar: "assets/_80.gif",
        members: "3,456 участников"
    }
];

// Данные команд
const commands = [
    { name: "autorole", description: "Автоматическая выдача ролей новым участникам сервера" },
    { name: "server info", description: "Показывает информацию о сервере" },
    { name: "avatar", description: "Показывает аватар пользователя" },
    { name: "antinuke", description: "Защита сервера от вредоносных действий" },
    { name: "info", description: "Общая информация о боте" },
    { name: "giveaway create", description: "Организация розыгрышей на сервере" },
    { name: "backup create", description: "Создать резервную копию сервера" },
    { name: "banner", description: "Просмотр баннера пользователей" },
    { name: "event create", description: "Создайте свой ивент" },
    { name: "event panel", description: "Панель управления ивентами" },
    { name: "clear", description: "Очистить чат" },
    { name: "settings", description: "Настройки бота" }
];

// Загрузка модальных окон
function loadModals() {
    fetch('modal-terms.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('termsModal').innerHTML = data;
        });

    fetch('modal-privacy.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('privacyModal').innerHTML = data;
        });
}

// Инициализация карусели серверов
function initServersCarousel() {
    const carousel = document.querySelector('.servers-carousel');
    
    // Добавляем серверы дважды для бесконечной анимации
    servers.forEach(server => {
        carousel.appendChild(createServerCard(server));
    });
    servers.forEach(server => {
        carousel.appendChild(createServerCard(server));
    });
}

// Создание карточки сервера
function createServerCard(server) {
    const card = document.createElement('div');
    card.className = 'server-card';
    
    card.innerHTML = `
        <img src="${server.avatar}" alt="${server.name}" class="server-avatar">
        <div class="server-name">${server.name}</div>
        <div class="server-members">${server.members}</div>
    `;
    
    return card;
}

// Инициализация блока команд
function initCommandsGrid() {
    const grid = document.querySelector('.commands-grid');
    
    commands.forEach(command => {
        grid.appendChild(createCommandCard(command));
    });
}

// Создание карточки команды
function createCommandCard(command) {
    const card = document.createElement('div');
    card.className = 'command-card';
    
    card.innerHTML = `
        <div class="command-name">${command.name}</div>
        <div class="command-description"> • ${command.description}</div>
    `;
    
    return card;
}

// Обработчики модальных окон
function setupModalHandlers() {
    document.getElementById('termsLink').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('termsModal').style.display = 'block';
    });

    document.getElementById('privacyLink').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('privacyModal').style.display = 'block';
    });

    // Закрытие модальных окон
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('close-modal') || e.target.classList.contains('modal')) {
            e.target.closest('.modal').style.display = 'none';
        }
    });
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    loadModals();
    initServersCarousel();
    initCommandsGrid();
    setupModalHandlers();
});