document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('calc-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let gender = document.getElementById('gender').value;
        let w = parseFloat(document.getElementById('weight').value);
        let h = parseFloat(document.getElementById('height').value);
        let a = parseFloat(document.getElementById('age').value);
        let activity = parseFloat(document.getElementById('activity').value);
        let goal = document.getElementById('goal').value;
        
        let bmr = (gender === 'male') 
            ? (10 * w) + (6.25 * h) - (5 * a) + 5 
            : (10 * w) + (6.25 * h) - (5 * a) - 161;
            
        let tdee = bmr * activity;

        if (goal === 'lose') tdee *= 0.8;      
        else if (goal === 'gain') tdee *= 1.15; 
        
        let finalCal = Math.round(tdee);
        localStorage.setItem('userGoalCal', finalCal);
        
        document.getElementById('res-cal').innerText = finalCal;
        document.getElementById('res-prot').innerText = Math.round((finalCal * 0.3) / 4);
        document.getElementById('res-fat').innerText = Math.round((finalCal * 0.3) / 9);
        document.getElementById('res-carb').innerText = Math.round((finalCal * 0.4) / 4);
        
        let resultBlock = document.getElementById('result');
        resultBlock.style.display = 'block';
        resultBlock.scrollIntoView({ behavior: 'smooth' });
    });
});