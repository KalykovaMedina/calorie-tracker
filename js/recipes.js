// База данных рецептов (28 рецептов)
const RECIPES = [
    // --- ДО 300 ккал (low) ---
    { name: "Салат из огурцов и помидоров", calories: 120, category: "low", time: "10 мин", ingredients: ["Огурцы - 200г", "Помидоры - 200г", "Оливковое масло - 1 ст.л."], description: "Легкий свежий салат." },
    { name: "Творог с ягодами", calories: 180, category: "low", time: "5 мин", ingredients: ["Творог 5% - 150г", "Ягоды - 50г", "Мед - 1 ч.л."], description: "Быстрый и полезный завтрак." },
    { name: "Овсянка с бананом", calories: 250, category: "low", time: "10 мин", ingredients: ["Овсянка - 50г", "Молоко - 200мл", "Банан - 1 шт"], description: "Сытная каша для начала дня." },
    { name: "Греческий салат", calories: 220, category: "low", time: "15 мин", ingredients: ["Помидоры - 100г", "Огурцы - 100г", "Фета - 50г", "Маслины - 30г"], description: "Классический средиземноморский салат." },
    { name: "Овощной суп-пюре", calories: 150, category: "low", time: "30 мин", ingredients: ["Кабачок - 200г", "Морковь - 100г", "Лук - 50г", "Сливки 10% - 50мл"], description: "Нежный и легкий суп." },
    { name: "Творожная запеканка", calories: 280, category: "low", time: "40 мин", ingredients: ["Творог - 200г", "Яйцо - 1 шт", "Сахар - 1 ст.л.", "Манка - 2 ст.л."], description: "Вкусная запеканка как в детстве." },
    { name: "Смузи из ягод", calories: 110, category: "low", time: "5 мин", ingredients: ["Ягоды замороженные - 150г", "Йогурт натуральный - 200мл"], description: "Освежающий витаминный напиток." },
    { name: "Овсяноблин с сыром", calories: 260, category: "low", time: "10 мин", ingredients: ["Овсянка - 30г", "Яйцо - 1 шт", "Молоко - 30мл", "Сыр - 30г"], description: "Идеальный завтрак за 10 минут." },
    { name: "Борщ вегетарианский", calories: 180, category: "low", time: "40 мин", ingredients: ["Свекла - 150г", "Капуста - 100г", "Морковь - 50г", "Томатная паста - 1 ст.л."], description: "Наваристый борщ без мяса." },
    { name: "Фруктовый салат", calories: 130, category: "low", time: "10 мин", ingredients: ["Яблоко - 100г", "Банан - 100г", "Апельсин - 100г", "Йогурт - 50мл"], description: "Легкий десерт из свежих фруктов." },

    // --- 300-500 ккал (medium) ---
    { name: "Куриная грудка с гречкой", calories: 380, category: "medium", time: "30 мин", ingredients: ["Куриная грудка - 150г", "Гречка - 100г", "Овощи на пару - 100г"], description: "Классика спортивного питания." },
    { name: "Паста с томатным соусом", calories: 420, category: "medium", time: "25 мин", ingredients: ["Паста - 100г", "Томатный соус - 100г", "Пармезан - 20г"], description: "Итальянская классика." },
    { name: "Рыба с овощами", calories: 450, category: "medium", time: "40 мин", ingredients: ["Филе трески - 200г", "Брокколи - 150г", "Морковь - 100г"], description: "Запеченная рыба с хрустящими овощами." },
    { name: "Куриные котлеты на пару", calories: 320, category: "medium", time: "30 мин", ingredients: ["Куриный фарш - 150г", "Лук - 30г", "Яйцо - 1 шт", "Хлеб - 20г"], description: "Диетические сочные котлеты." },
    { name: "Плов с овощами", calories: 390, category: "medium", time: "45 мин", ingredients: ["Рис - 100г", "Морковь - 100г", "Лук - 50г", "Специи для плова"], description: "Ароматный вегетарианский плов." },
    { name: "Фаршированные перцы", calories: 410, category: "medium", time: "50 мин", ingredients: ["Перец болгарский - 200г", "Фарш куриный - 100г", "Рис - 50г", "Томатный соус - 50мл"], description: "Сочные перцы в томатном соусе." },
    { name: "Салат Цезарь с курицей", calories: 480, category: "medium", time: "20 мин", ingredients: ["Салат романо - 100г", "Куриная грудка - 100г", "Сухарики - 30г", "Соус Цезарь - 30г"], description: "Популярный ресторанный салат." },
    { name: "Рыбные тефтели", calories: 350, category: "medium", time: "35 мин", ingredients: ["Филе белой рыбы - 150г", "Рис - 30г", "Лук - 30г", "Яйцо - 1 шт"], description: "Нежные тефтели в томатном соусе." },
    { name: "Голубцы", calories: 440, category: "medium", time: "60 мин", ingredients: ["Капуста - 200г", "Фарш - 100г", "Рис - 50г", "Сметана - 30г"], description: "Традиционные голубцы со сметаной." },

    // --- 500+ ккал (high) ---
    { name: "Борщ с говядиной", calories: 520, category: "high", time: "90 мин", ingredients: ["Говядина - 150г", "Свекла - 100г", "Капуста - 100г", "Сметана - 1 ст.л."], description: "Наваристый традиционный борщ." },
    { name: "Плов с курицей", calories: 580, category: "high", time: "60 мин", ingredients: ["Рис - 150г", "Курица - 150г", "Морковь - 100г", "Специи"], description: "Ароматный плов с восточными специями." },
    { name: "Лазанья", calories: 650, category: "high", time: "90 мин", ingredients: ["Листы лазаньи - 100г", "Фарш говяжий - 150г", "Соус бешамель - 150мл", "Сыр - 50г"], description: "Итальянская запеканка с мясом." },
    { name: "Пицца Маргарита", calories: 550, category: "high", time: "40 мин", ingredients: ["Тесто - 150г", "Томатный соус - 50г", "Моцарелла - 100г", "Базилик"], description: "Классическая итальянская пицца." },
    { name: "Стейк из говядины", calories: 600, category: "high", time: "20 мин", ingredients: ["Стейк рибай - 200г", "Соль, перец", "Масло сливочное - 10г", "Розмарин"], description: "Сочный стейк средней прожарки." },
    { name: "Запеченная курица с картофелем", calories: 590, category: "high", time: "60 мин", ingredients: ["Куриные бедра - 200г", "Картофель - 200г", "Масло растительное - 1 ст.л.", "Специи"], description: "Сытное семейное блюдо." },
    { name: "Паста Карбонара", calories: 620, category: "high", time: "25 мин", ingredients: ["Спагетти - 100г", "Бекон - 50г", "Яйцо - 1 шт", "Пармезан - 30г"], description: "Сливочная паста с беконом." },
    { name: "Чизкейк", calories: 550, category: "high", time: "60 мин", ingredients: ["Сливочный сыр - 200г", "Сахар - 50г", "Яйцо - 1 шт", "Печенье - 100г"], description: "Нежный десерт без выпечки." },
    { name: "Шоколадный брауни", calories: 580, category: "high", time: "40 мин", ingredients: ["Шоколад темный - 100г", "Масло сливочное - 100г", "Сахар - 100г", "Яйца - 2 шт", "Мука - 50г"], description: "Влажный шоколадный десерт." }
];

// Функция отображения рецептов
function displayRecipes(category, searchQuery = '') {
    const grid = document.getElementById('recipes-grid');
    grid.innerHTML = '';
    
    let filtered = category === 'all' ? RECIPES : RECIPES.filter(r => r.category === category);
    
    if (searchQuery) {
        filtered = filtered.filter(r => r.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    
    if (filtered.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">😔 Рецепты не найдены. Попробуйте другой запрос.</p>';
        return;
    }
    
    filtered.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.style.cssText = `
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 20px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        `;
        
        card.innerHTML = `
            <h3 style="margin-top:0; color:var(--accent);">${recipe.name}</h3>
            <div style="display:flex; justify-content:space-between; margin-bottom:10px; font-size:0.9rem;">
                <span>🔥 ${recipe.calories} ккал</span>
                <span>⏱️ ${recipe.time}</span>
            </div>
            <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:15px;">${recipe.description}</p>
            <details>
                <summary style="cursor:pointer; color:var(--accent); font-weight:600;">Ингредиенты</summary>
                <ul style="margin-top:10px; padding-left:20px; font-size:0.9rem;">
                    ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
                </ul>
            </details>
            <button onclick="addRecipeToDiary('${recipe.name}', ${recipe.calories})" 
                    style="width:100%; margin-top:15px; font-size:0.9rem; padding:8px;">
                ➕ Добавить в дневник
            </button>
        `;
        
        grid.appendChild(card);
    });
}

// Функция фильтрации по категориям
function filterRecipes(category) {
    const searchQuery = document.getElementById('search-input') ? document.getElementById('search-input').value : '';
    displayRecipes(category, searchQuery);
}

// Функция поиска
function searchRecipes() {
    const searchQuery = document.getElementById('search-input').value;
    displayRecipes('all', searchQuery);
}

// Добавление рецепта в дневник
function addRecipeToDiary(name, calories) {
    let diary = JSON.parse(localStorage.getItem('myDiary')) || [];
    diary.push({ name: `Рецепт: ${name}`, cal: calories });
    localStorage.setItem('myDiary', JSON.stringify(diary));
    alert(`✅ Рецепт "${name}" добавлен в дневник!`);
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
    displayRecipes('all');
});