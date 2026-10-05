const WATER_GOAL = 2000;
const SNACK_DB = [
    { name: "Яблоко среднее", cal: 52 }, { name: "Банан", cal: 89 },
    { name: "Творог 5% (100г)", cal: 121 }, { name: "Огурец свежий", cal: 15 },
    { name: "Греческий йогурт", cal: 60 }, { name: "Горсть миндаля (20г)", cal: 115 },
    { name: "Протеиновый батончик", cal: 180 }, { name: "Хлебец цельнозерновой", cal: 35 },
    { name: "Апельсин", cal: 47 }, { name: "Вареное яйцо", cal: 78 }
];

document.addEventListener('DOMContentLoaded', () => { loadDiary(); updateWaterUI(); });

function addFood() {
    let nameInput = document.getElementById('food-name');
    let calInput = document.getElementById('food-cal');
    let name = nameInput.value.trim();
    let cal = parseInt(calInput.value);

    if (!name || !cal || cal <= 0) { alert("Проверьте введенные данные!"); return; }
    if (/^\d+$/.test(name)) { alert("Название не должно состоять только из цифр!"); return; }

    let diary = JSON.parse(localStorage.getItem('myDiary')) || [];
    diary.push({ name, cal });
    localStorage.setItem('myDiary', JSON.stringify(diary));
    
    renderTable(diary);
    nameInput.value = ''; calInput.value = ''; nameInput.focus();
}

function deleteItem(index) {
    let diary = JSON.parse(localStorage.getItem('myDiary')) || [];
    diary.splice(index, 1);
    localStorage.setItem('myDiary', JSON.stringify(diary));
    renderTable(diary);
}

function clearDiary() {
    if(confirm("Очистить дневник?")) {
        localStorage.removeItem('myDiary');
        renderTable([]);
    }
}

function loadDiary() {
    let diary = JSON.parse(localStorage.getItem('myDiary')) || [];
    renderTable(diary);
}

function renderTable(diary) {
    let tbody = document.querySelector('#diary-table tbody');
    if (!tbody) return;
    tbody.innerHTML = '';
    let total = 0;
    diary.forEach((item, index) => {
        let row = tbody.insertRow();
        row.insertCell(0).innerText = item.name;
        row.insertCell(1).innerText = item.cal;
        row.insertCell(2).innerHTML = `<button onclick="deleteItem(${index})" style="background:#ef4444; padding:4px 8px; font-size:0.8rem;">✕</button>`;
        total += item.cal;
    });
    updateProgress(total);
}

function updateProgress(current) {
    let goal = localStorage.getItem('userGoalCal');
    let bar = document.getElementById('progress-bar');
    let text = document.getElementById('progress-text');
    let msg = document.getElementById('status-msg');
    if (!bar || !text || !msg) return;

    if (!goal) {
        text.innerText = `${current} ккал`;
        msg.innerText = "️ Сначала рассчитайте норму в Калькуляторе!";
        msg.style.color = "#d97706"; bar.style.width = "0%"; return;
    }
    if (current === 0) {
        text.innerText = `0 / ${goal} ккал`;
        msg.innerText = "☕ День начался! Добавьте первый приём пищи.";
        msg.style.color = "var(--text-muted)"; bar.style.width = "0%"; return;
    }

    let percent = Math.min((current / goal) * 100, 100);
    bar.style.width = percent + "%";
    text.innerText = `${current} / ${goal} ккал`;

    if (current > goal) {
        bar.style.backgroundColor = "#ef4444";
        msg.innerText = "🔴 Осторожно! Вы превысили норму."; msg.style.color = "#ef4444";
    } else if (current > goal * 0.9) {
        bar.style.backgroundColor = "#f59e0b";
        msg.innerText = " Почти цель!"; msg.style.color = "#d97706";
    } else {
        bar.style.backgroundColor = "var(--accent)";
        msg.innerText = "✅ Отличный темп!"; msg.style.color = "var(--accent)";
    }
}

function updateWaterUI() {
    let current = parseInt(localStorage.getItem('waterIntake')) || 0;
    let curEl = document.getElementById('water-current');
    let fillEl = document.getElementById('water-fill');
    if (!curEl || !fillEl) return;
    curEl.innerText = current;
    let percent = Math.min((current / WATER_GOAL) * 100, 100);
    fillEl.style.height = percent + '%';
    fillEl.style.background = percent >= 100 
        ? 'linear-gradient(to top, #10b981, #34d399)' 
        : 'linear-gradient(to top, #3b82f6, #60a5fa)';
}

function addWater(amount) {
    let current = parseInt(localStorage.getItem('waterIntake')) || 0;
    localStorage.setItem('waterIntake', current + amount);
    updateWaterUI();
}

function resetWater() {
    if(confirm("Сбросить счетчик воды?")) {
        localStorage.setItem('waterIntake', 0);
        updateWaterUI();
    }
}

function suggestSnack() {
    const goal = parseInt(localStorage.getItem('userGoalCal')) || 2000;
    const diary = JSON.parse(localStorage.getItem('myDiary')) || [];
    const eaten = diary.reduce((sum, item) => sum + item.cal, 0);
    const remaining = goal - eaten;
    let remEl = document.getElementById('remaining-cal');
    if (remEl) remEl.innerText = remaining > 0 ? remaining : 0;
    
    const resultDiv = document.getElementById('snack-result');
    if (!resultDiv) return;
    if (remaining <= 0) {
        resultDiv.innerHTML = '<p style="color:#ef4444; font-weight:bold;">⛔ Норма превышена!</p>'; return;
    }
    const suitable = SNACK_DB.filter(item => item.cal <= remaining);
    if (suitable.length === 0) { resultDiv.innerHTML = '<p>😕 Нет подходящих вариантов.</p>'; return; }

    const count = Math.random() > 0.7 ? 2 : 1;
    const selected = []; let tempRemaining = remaining;
    for (let i = 0; i < count; i++) {
        const available = suitable.filter(s => !selected.includes(s) && s.cal <= tempRemaining);
        if (available.length === 0) break;
        const pick = available[Math.floor(Math.random() * available.length)];
        selected.push(pick); tempRemaining -= pick.cal;
    }

    let html = '<div style="background: rgba(22, 101, 52, 0.1); padding: 10px; border-radius: 8px; animation: fadeIn 0.3s;">';
    selected.forEach(item => {
        html += `<div style="display:flex; justify-content:space-between; margin-bottom:5px;"><span>🍽️ ${item.name}</span><strong>${item.cal} ккал</strong></div>`;
    });
    const totalPick = selected.reduce((s, i) => s + i.cal, 0);
    html += `<hr style="border:0; border-top:1px dashed var(--border-color); margin:8px 0;">
             <div style="display:flex; justify-content:space-between; font-weight:bold; color:var(--accent);"><span>Итого:</span><span>${totalPick} ккал</span></div>
             <button onclick="addSuggestedToDiary('${selected.map(s=>s.name).join('+')}', ${totalPick})" style="width:100%; margin-top:10px; font-size:0.9rem; padding:8px;">✅ Добавить в дневник</button></div>`;
    resultDiv.innerHTML = html;
}

function addSuggestedToDiary(name, cal) {
    let diary = JSON.parse(localStorage.getItem('myDiary')) || [];
    diary.push({ name: `Комбо: ${name}`, cal: cal });
    localStorage.setItem('myDiary', JSON.stringify(diary));
    renderTable(diary);
    document.getElementById('snack-result').innerHTML = '<p style="color:var(--accent); font-weight:bold;">✨ Добавлено!</p>';
}