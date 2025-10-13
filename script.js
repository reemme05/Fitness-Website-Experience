document.addEventListener('DOMContentLoaded', () => {
    const calculateBmiButton = document.getElementById('calculate-bmi');
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const bmiValueSpan = document.getElementById('bmi-value');
    const bmiCategorySpan = document.getElementById('bmi-category');
    const ctaButton = document.querySelector('.cta-button');

    // Smooth scroll for CTA button
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }

    // BMI Calculator functionality
    if (calculateBmiButton) {
        calculateBmiButton.addEventListener('click', () => {
            const heightCm = parseFloat(heightInput.value);
            const weightKg = parseFloat(weightInput.value);

            if (isNaN(heightCm) || isNaN(weightKg) || heightCm <= 0 || weightKg <= 0) {
                alert('Please enter valid positive numbers for height and weight.');
                bmiValueSpan.textContent = '--';
                bmiCategorySpan.textContent = '--';
                return;
            }

            // Convert height from cm to meters
            const heightM = heightCm / 100;

            // Calculate BMI: weight (kg) / (height (m))^2
            const bmi = weightKg / (heightM * heightM);

            bmiValueSpan.textContent = bmi.toFixed(2);
            let category = '';
            let categoryColor = '';

            if (bmi < 18.5) {
                category = 'Underweight';
                categoryColor = '#FDD835'; 
            } else if (bmi >= 18.5 && bmi <= 24.9) {
                category = 'Normal';
                categoryColor = '#008000'; 
            } else if (bmi >= 25 && bmi <= 29.9) {
                category = 'Overweight';
                categoryColor = '#FFB300'; 
            } else {
                category = 'Obese';
                categoryColor = '#D32F2F'; 
            }

            bmiCategorySpan.textContent = category;
            bmiCategorySpan.style.color = categoryColor;
            bmiValueSpan.style.color = categoryColor;
        });
    }
});