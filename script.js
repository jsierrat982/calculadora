document.addEventListener('DOMContentLoaded', () => {
    const resultsBody = document.getElementById('resultsBody');
    const saveBtn = document.getElementById('saveBtn');
    const resetBtn = document.getElementById('resetBtn');
    const addRowBtn = document.getElementById('addRowBtn');
    const addTopRowBtn = document.getElementById('addTopRowBtn'); 
    const removeRowBtn = document.getElementById('removeRowBtn');
    const removeTopRowBtn = document.getElementById('removeTopRowBtn'); 
    const predefinedFileSelect = document.getElementById('predefinedFileSelect');
    
    // --- Componentes del Modo Oscuro ---
    const darkModeToggle = document.getElementById('darkModeToggle');
    const toggleIcon = document.getElementById('toggleIcon');
    const html = document.documentElement;

    const toggleDarkMode = () => {
        const currentMode = html.getAttribute('data-mode');
        const newMode = currentMode === 'dark' ? 'light' : 'dark';
        
        html.setAttribute('data-mode', newMode);
        
        if (newMode === 'dark') {
            toggleIcon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark'); 
        } else {
            toggleIcon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        }
    };

    const initializeTheme = () => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'light') {
            html.setAttribute('data-mode', 'light');
            toggleIcon.classList.replace('fa-sun', 'fa-moon');
        } else {
            html.setAttribute('data-mode', 'dark');
            toggleIcon.classList.replace('fa-moon', 'fa-sun');
        }
    };
    
    darkModeToggle.addEventListener('click', toggleDarkMode);
    initializeTheme();
    // ------------------------------------------------

    // --- Datos Predefinidos (sin cambios en valores) ---
    const predefinedData = {
        '08-13-0400K': { "initialValues": [250, 500, 1000, 1750, 3000, 4750, 7750, 12000], "positionValues": [12, 13, 13, 13, 13, 13, 13, 13] },
        '08-13-0450K': { "initialValues": [250, 500, 1000, 2000, 3250, 5250, 8750, 13750], "positionValues": [12, 13, 13, 13, 13, 13, 13, 13] },
        '08-13-0500K': { "initialValues": [250, 500, 1000, 2000, 3500, 6000, 9750, 15500], "positionValues": [12, 13, 13, 13, 13, 13, 13, 13] },
        '08-14-0500K': { "initialValues": [250, 500, 1000, 1750, 3000, 5250, 9000, 15000], "positionValues": [12, 14, 14, 14, 14, 14, 14, 14] },
        '08-14-0550K': { "initialValues": [250, 500, 1000, 2000, 3500, 6000, 9750, 16250], "positionValues": [12, 14, 14, 14, 14, 14, 14, 14] },
        '09-13-0600K': { "initialValues": [250, 500, 1000, 1750, 2750, 4500, 7000, 11000, 17500], "positionValues": [12, 13, 13, 13, 13, 13, 13, 13, 13] },
        '08-14-0600K': { "initialValues": [250, 500, 1000, 2000, 3750, 6500, 10750, 18000], "positionValues": [12, 14, 14, 14, 14, 14, 14, 14] },
        '09-13-0640K': { "initialValues": [250, 500, 1000, 1750, 2750, 4750, 7500, 12000, 18750], "positionValues": [12, 13, 13, 13, 13, 13, 13, 13, 13] },
        '09-13-0700K': { "initialValues": [250, 500, 1000, 2000, 3250, 5250, 8500, 13750, 21000], "positionValues": [12, 13, 13, 13, 13, 13, 13, 13, 12] },
        '09-14-0750K': { "initialValues": [250, 500, 1000, 1750, 3000, 5000, 8250, 13750, 21750], "positionValues": [12, 14, 14, 14, 14, 14, 14, 14, 13] },
        '09-14-0800K': { "initialValues": [250, 500, 1000, 1750, 3000, 5000, 8500, 14000, 23250], "positionValues": [12, 14, 14, 14, 14, 14, 14, 14, 14] },
        '09-14-0850K': { "initialValues": [250, 500, 1000, 1750, 3000, 5250, 9000, 15000, 25000], "positionValues": [12, 14, 14, 14, 14, 14, 14, 14, 14] },
        '09-14-0900K': { "initialValues": [250, 500, 1000, 2000, 3500, 5750, 9500, 15750, 26000], "positionValues": [12, 14, 14, 14, 14, 14, 14, 14, 14] },
        '09-14-0950K': { "initialValues": [250, 500, 1000, 2000, 3500, 6000, 10000, 16750, 28000], "positionValues": [12, 14, 14, 14, 14, 14, 14, 14, 14] },
        '09-14-1000M': { "initialValues": [250, 500, 1000, 2000, 3500, 6000, 10500, 17750, 30000], "positionValues": [12, 14, 14, 14, 14, 14, 14, 14, 14] },
        '09-14-1050M': { "initialValues": [250, 500, 1000, 2000, 3750, 6500, 11000, 18500, 31500], "positionValues": [12, 14, 14, 14, 14, 14, 14, 14, 14] },
        '10-13-1100M': { "initialValues": [250, 500, 1000, 1750, 3000, 5000, 8000, 13000, 20500, 32000], "positionValues": [12, 13, 13, 13, 13, 13, 13, 13, 13, 13] },
        '09-14-1200M': { "initialValues": [250, 500, 1000, 2000, 4000, 7250, 12500, 21750, 36500], "positionValues": [12, 14, 14, 14, 14, 14, 14, 14, 14] },
        '10-14-1200M': { "initialValues": [250, 500, 1000, 1750, 3000, 5000, 8250, 13750, 21750, 34250], "positionValues": [12, 14, 14, 14, 14, 14, 14, 14, 13, 13] },
        '10-14-1250M': { "initialValues": [250, 500, 1000, 1750, 2750, 4750, 8000, 13250, 21750, 35250], "positionValues": [12, 14, 14, 14, 14, 14, 14, 14, 14, 14] },
        '10-14-1450M': { "initialValues": [250, 500, 1000, 1750, 3000, 5250, 9000, 15500, 25500, 42000], "positionValues": [12, 14, 14, 14, 14, 14, 14, 14, 14, 14] },
        '10-14-1750M': { "initialValues": [250, 500, 1000, 2000, 3750, 6500, 11000, 18500, 30750, 50750], "positionValues": [12, 14, 14, 14, 14, 14, 14, 14, 14, 14] },
        '10-14-1900M': { "initialValues": [250, 500, 1000, 2000, 4000, 7000, 12000, 20000, 33500, 55500], "positionValues": [12, 14, 14, 14, 14, 14, 14, 14, 14, 14] },
        '10-14-2000M': { "initialValues": [250, 500, 1000, 2000, 4000, 7000, 12500, 21000, 35500, 59000], "positionValues": [12, 14, 14, 14, 14, 14, 14, 14, 14, 14] },
        '11-13-2000M': { "initialValues": [250, 500, 1000, 2000, 3500, 5500, 9000, 14500, 23000, 36500, 58000], "positionValues": [12, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13] },
        '8000_400K_08_13': { "initialValues": [250, 500, 1000, 1750, 3000, 4750, 7500, 11750], "positionValues": [32, 13, 13, 13, 13, 13, 13, 13] },
        '16000_700K_08_14': { "initialValues": [500, 750, 1500, 2500, 4250, 7250, 12250, 20500], "positionValues": [32, 12, 14, 14, 14, 14, 14, 14] },
    };

    const defaultInitialValues = [250,500,1000,2000,4000,7500,13000,22000,37000,61500];
    
    let initialValues = [...defaultInitialValues];
    let positionValues = Array(defaultInitialValues.length).fill(14);

    const formatCurrency = (num) => {
        if (isNaN(num)) return '$0';
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(Math.round(num));
    };

    const calculateAndDisplay = () => {
        const rows = resultsBody.getElementsByTagName('tr');
        let cumulativeInvestment = 0;
        let hasInvalidInput = false;

        for (let i = 0; i < rows.length; i++) {
            if (rows[i].classList.contains('empty-state-row')) continue;

            const row = rows[i];
            const positionInput = row.querySelector('.position-input');
            const initialValueInput = row.querySelector('.initial-value-input');
            const positionError = row.querySelector('.position-error');
            const initialValueError = row.querySelector('.initial-value-error');

            const position = parseInt(positionInput.value);
            if (isNaN(position) || position < 1) {
                positionInput.classList.add('border-red-500');
                positionError.textContent = "Inválido";
                hasInvalidInput = true;
            } else {
                positionInput.classList.remove('border-red-500');
                positionError.textContent = "";
                positionValues[i] = position;
            }

            const initialValue = parseFloat(initialValueInput.value);
            if (isNaN(initialValue) || initialValue <= 0) {
                initialValueInput.classList.add('border-red-500');
                initialValueError.textContent = "Inválido";
                hasInvalidInput = true;
            } else {
                initialValueInput.classList.remove('border-red-500');
                initialValueError.textContent = "";
                initialValues[i] = initialValue;
            }
        }

        if (hasInvalidInput) {
            for (let i = 0; i < rows.length; i++) {
                if (rows[i].classList.contains('empty-state-row')) continue;
                const row = rows[i];
                row.querySelector('.charge-cell').textContent = "N/A";
                row.querySelector('.investment-cell').textContent = "N/A";
                row.querySelector('.payment-cell').textContent = "N/A";
                row.querySelector('.profit-cell').textContent = "N/A";
            }
            return;
        }

        for (let i = 0; i < initialValues.length; i++) {
            const row = rows[i];
            
            const position = positionValues[i];
            const initialValue = initialValues[i];
            
            const chargeCell = row.querySelector('.charge-cell');
            const investmentCell = row.querySelector('.investment-cell');
            const paymentCell = row.querySelector('.payment-cell');
            const profitCell = row.querySelector('.profit-cell');
            
            const charge = initialValue * position;
            cumulativeInvestment += charge;
            const payment = initialValue * 36;
            const profit = payment - cumulativeInvestment;

            chargeCell.textContent = formatCurrency(charge);
            investmentCell.textContent = formatCurrency(cumulativeInvestment);
            paymentCell.textContent = formatCurrency(payment);
            profitCell.textContent = formatCurrency(profit);

            profitCell.classList.remove('text-green-600', 'text-red-600');
            if (profit >= 0) {
                profitCell.classList.add('text-green-600');
            } else {
                profitCell.classList.add('text-red-600');
            }
        }
    };
    
    const generateRows = () => {
        let htmlContent = '';
        
        if (initialValues.length < 1) {
            htmlContent = `
                <tr class="table-row-hover text-sm empty-state-row">
                    <td colspan="7" class="p-6 text-center text-gray-500 italic">
                        No hay filas. Usa el botón <i class="fas fa-plus-circle text-blue-500"></i> para añadir una.
                    </td>
                </tr>
            `;
            resultsBody.innerHTML = htmlContent;
            return;
        }

        for (let i = 0; i < initialValues.length; i++) {
            const initialValue = initialValues[i];
            const positionValue = positionValues[i];
            
            htmlContent += `
                <tr class="table-row-hover text-sm">
                    <td class="p-3 text-center font-medium">${i + 1}</td>
                    <td class="p-3">
                        <input type="number" class="w-16 px-2 py-1 position-input focus:ring-primary text-sm" value="${positionValue}" min="1" max="36">
                        <span class="text-red-500 text-xs font-medium block position-error"></span>
                    </td>
                    <td class="p-3">
                        <div class="relative">
                            <span class="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-500 dark:text-gray-400 text-sm">$</span>
                            <input type="number" step="250" class="w-28 pl-6 pr-2 py-1 initial-value-input focus:ring-primary text-sm" value="${initialValue}">
                            <span class="text-red-500 text-xs font-medium block initial-value-error"></span>
                        </div>
                    </td>
                    <td class="p-3 charge-cell font-medium"></td>
                    <td class="p-3 investment-cell"></td>
                    <td class="p-3 payment-cell font-medium"></td>
                    <td class="p-3 profit-cell font-medium"></td>
                </tr>
            `;
        }
        resultsBody.innerHTML = htmlContent;
        
        calculateAndDisplay();
    };

    resultsBody.addEventListener('input', (e) => {
        if (e.target.classList.contains('position-input') || 
            e.target.classList.contains('initial-value-input')) 
        {
            calculateAndDisplay();
        }
    });

    // --- Funcionalidad del Botones ---
    
    resetBtn.addEventListener('click', () => {
        initialValues = [...defaultInitialValues];
        positionValues = Array(defaultInitialValues.length).fill(14);
        generateRows();
    });

    addRowBtn.addEventListener('click', () => {
        const lastInitialValue = initialValues.length > 0 ? initialValues[initialValues.length - 1] : defaultInitialValues[0];
        const newInitialValue = lastInitialValue * 2;
        const newPositionValue = 14;
        
        initialValues.push(newInitialValue);
        positionValues.push(newPositionValue);
        
        generateRows();
    });

    addTopRowBtn.addEventListener('click', () => {
        const firstInitialValue = initialValues.length > 0 ? initialValues[0] : defaultInitialValues[0];
        const newInitialValue = Math.max(50, Math.round(firstInitialValue / 2)); 
        const newPositionValue = 14;
        
        initialValues.unshift(newInitialValue);
        positionValues.unshift(newPositionValue);
        
        generateRows();
    });

    removeRowBtn.addEventListener('click', () => {
        if (initialValues.length > 0) {
            initialValues.pop();
            positionValues.pop();
            generateRows();
        }
    });

    removeTopRowBtn.addEventListener('click', () => {
        if (initialValues.length > 0) {
            initialValues.shift();
            positionValues.shift();
            generateRows();
        }
    });

    saveBtn.addEventListener('click', () => {
        const dataToSave = { 
            initialValues: initialValues, 
            positionValues: positionValues 
        };
        const data = JSON.stringify(dataToSave);
        const blob = new Blob([data], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'calculos.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });

    predefinedFileSelect.addEventListener('change', () => {
        const selectedFile = predefinedFileSelect.value;
        if (selectedFile && predefinedData[selectedFile]) {
            initialValues = [...predefinedData[selectedFile].initialValues];
            positionValues = [...predefinedData[selectedFile].positionValues];
            generateRows();
            showMessageBox('Cargado', `Datos predefinidos '${selectedFile}' cargados.`);
        } else if (!selectedFile) {
            initialValues = [...defaultInitialValues];
            positionValues = Array(defaultInitialValues.length).fill(14);
            generateRows();
        }
    });

    // CAMBIO: .soft-shadow-card -> .flat-card
    // CAMBIO: .soft-shadow-btn -> .flat-btn
    const showMessageBox = (title, message) => {
        const existingBox = document.querySelector('.custom-message-box');
        if (existingBox) existingBox.remove();

        const box = document.createElement('div');
        box.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 custom-message-box z-50 transition-opacity duration-300 ease-out opacity-0';
        
        box.innerHTML = `
            <div class="flat-card p-6 w-full max-w-sm text-center transform transition-all duration-300 ease-out scale-95 opacity-0">
                <h3 class="text-xl font-bold mb-2">${title}</h3>
                <p class="opacity-80 mb-4">${message}</p>
                <button class="flat-btn bg-blue-500 text-white px-4 py-2 text-sm font-medium w-full mt-2">OK</button>
            </div>
        `;
        document.body.appendChild(box);
        const card = box.querySelector('.flat-card');

        setTimeout(() => {
            box.classList.remove('opacity-0');
            if(card) {
                card.classList.remove('scale-95');
                card.classList.remove('opacity-0');
            }
        }, 10); 

        box.querySelector('button').addEventListener('click', () => {
            box.classList.add('opacity-0');
            if(card) {
                card.classList.add('scale-95');
                card.classList.add('opacity-0');
            }
            setTimeout(() => box.remove(), 300);
        });
    };

    // Initial call
    generateRows();
});