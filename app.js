// Base de Datos Predefinida
const PREDEFINED_DATA = {
    '30-09-14-1060M': { values: [400, 700, 1250, 2250, 3900, 6600, 11150, 18700, 30600], positions: [30, 14, 14, 14, 14, 14, 14, 14, 14] },
    '08-13-0400K': { values: [250, 500, 1000, 1750, 3000, 4750, 7750, 12000], positions: [12, 13, 13, 13, 13, 13, 13, 13] },
    '08-13-0450K': { values: [250, 500, 1000, 2000, 3250, 5250, 8750, 13750], positions: [12, 13, 13, 13, 13, 13, 13, 13] },
    '08-13-0500K': { values: [250, 500, 1000, 2000, 3500, 6000, 9750, 15500], positions: [12, 13, 13, 13, 13, 13, 13, 13] },
    '08-14-0500K': { values: [250, 500, 1000, 1750, 3000, 5250, 9000, 15000], positions: [12, 14, 14, 14, 14, 14, 14, 14] },
    '08-14-0550K': { values: [250, 500, 1000, 2000, 3500, 6000, 9750, 16250], positions: [12, 14, 14, 14, 14, 14, 14, 14] },
    '09-13-0600K': { values: [250, 500, 1000, 1750, 2750, 4500, 7000, 11000, 17500], positions: [12, 13, 13, 13, 13, 13, 13, 13, 13] },
    '08-14-0600K': { values: [250, 500, 1000, 2000, 3750, 6500, 10750, 18000], positions: [12, 14, 14, 14, 14, 14, 14, 14] },
    '09-13-0640K': { values: [250, 500, 1000, 1750, 2750, 4750, 7500, 12000, 18750], positions: [12, 13, 13, 13, 13, 13, 13, 13, 13] },
    '09-13-0700K': { values: [250, 500, 1000, 2000, 3250, 5250, 8500, 13750, 21000], positions: [12, 13, 13, 13, 13, 13, 13, 13, 12] },
    '09-14-0750K': { values: [250, 500, 1000, 1750, 3000, 5000, 8250, 13750, 21750], positions: [12, 14, 14, 14, 14, 14, 14, 14, 13] },
    '09-14-0800K': { values: [250, 500, 1000, 1750, 3000, 5000, 8500, 14000, 23250], positions: [12, 14, 14, 14, 14, 14, 14, 14, 14] },
    '09-14-0850K': { values: [250, 500, 1000, 1750, 3000, 5250, 9000, 15000, 25000], positions: [12, 14, 14, 14, 14, 14, 14, 14, 14] },
    '09-14-0900K': { values: [250, 500, 1000, 2000, 3500, 5750, 9500, 15750, 26000], positions: [12, 14, 14, 14, 14, 14, 14, 14, 14] },
    '09-14-0950K': { values: [250, 500, 1000, 2000, 3500, 6000, 10000, 16750, 28000], positions: [12, 14, 14, 14, 14, 14, 14, 14, 14] },
    '09-14-1000M': { values: [250, 500, 1000, 2000, 3500, 6000, 10500, 17750, 30000], positions: [12, 14, 14, 14, 14, 14, 14, 14, 14] },
    '09-14-1050M': { values: [250, 500, 1000, 2000, 3750, 6500, 11000, 18500, 31500], positions: [12, 14, 14, 14, 14, 14, 14, 14, 14] },
    '10-13-1100M': { values: [250, 500, 1000, 1750, 3000, 5000, 8000, 13000, 20500, 32000], positions: [12, 13, 13, 13, 13, 13, 13, 13, 13, 13] },
    '09-14-1200M': { values: [250, 500, 1000, 2000, 4000, 7250, 12500, 21750, 36500], positions: [12, 14, 14, 14, 14, 14, 14, 14, 14] },
    '10-14-1200M': { values: [250, 500, 1000, 1750, 3000, 5000, 8250, 13750, 21750, 34250], positions: [12, 14, 14, 14, 14, 14, 14, 14, 13, 13] },
    '10-14-1250M': { values: [250, 500, 1000, 1750, 2750, 4750, 8000, 13250, 21750, 35250], positions: [12, 14, 14, 14, 14, 14, 14, 14, 14, 14] },
    '10-14-1450M': { values: [250, 500, 1000, 1750, 3000, 5250, 9000, 15500, 25500, 42000], positions: [12, 14, 14, 14, 14, 14, 14, 14, 14, 14] },
    '10-14-1700M': { values: [250, 500, 1000, 2000, 3500, 6250, 10750, 18000, 29750, 49500], positions: [12, 14, 14, 14, 14, 14, 14, 14, 14, 14] },
    '10-14-1750M': { values: [250, 500, 1000, 2000, 3750, 6500, 11000, 18500, 30750, 50750], positions: [12, 14, 14, 14, 14, 14, 14, 14, 14, 14] },
    '10-14-1800M': { values: [250, 500, 1000, 2000, 3750, 6750, 11500, 19250, 31750, 52000], positions: [12, 14, 14, 14, 14, 14, 14, 14, 14, 14] },
    '10-14-1850M': { values: [250, 500, 1000, 2000, 3750, 6750, 11750, 19750, 32750, 53750], positions: [12, 14, 14, 14, 14, 14, 14, 14, 14, 14] },
    '10-14-1900M': { values: [250, 500, 1000, 2000, 4000, 7000, 12000, 20000, 33500, 55500], positions: [12, 14, 14, 14, 14, 14, 14, 14, 14, 14] },
    '10-14-2000M': { values: [250, 500, 1000, 2000, 4000, 7000, 12500, 21000, 35500, 59000], positions: [12, 14, 14, 14, 14, 14, 14, 14, 14, 14] },
    '11-13-2000M': { values: [250, 500, 1000, 2000, 3500, 5500, 9000, 14500, 23000, 36500, 58000], positions: [12, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13] },
    '8000_400K_08_13': { values: [250, 500, 1000, 1750, 3000, 4750, 7500, 11750], positions: [32, 13, 13, 13, 13, 13, 13, 13] },
    '16000_700K_08_14': { values: [500, 750, 1500, 2500, 4250, 7250, 12250, 20500], positions: [32, 12, 14, 14, 14, 14, 14, 14] },
};

const DEFAULT_INITIAL_VALUES = [250, 500, 1000, 2000, 4000, 7500, 13000, 22000, 37000, 61500];

// Estado de la Aplicación
let tableDataState = DEFAULT_INITIAL_VALUES.map(val => ({
    position: 14,
    value: val
}));

const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
});

const formatCurrency = (num) => isNaN(num) ? '$0' : currencyFormatter.format(Math.round(num));

// Funciones de Lógica y UI
const calculateAndDisplay = () => {
    const resultsBody = document.getElementById('resultsBody');
    const rows = Array.from(resultsBody.querySelectorAll('tr:not(#loadingRow):not(.empty-state)'));
    let runningInvestment = 0;

    rows.forEach((row, index) => {
        const item = tableDataState[index];
        if (!item) return;

        const charge = item.value * item.position;
        runningInvestment += charge;
        
        const payment = item.value * 36;
        const profit = payment - runningInvestment;

        row.querySelector('.charge-cell').textContent = formatCurrency(charge);
        row.querySelector('.investment-cell').textContent = formatCurrency(runningInvestment);
        row.querySelector('.payment-cell').textContent = formatCurrency(payment);

        const profitCell = row.querySelector('.profit-cell');
        profitCell.textContent = formatCurrency(profit);
        profitCell.className = `p-3 profit-cell font-medium ${profit >= 0 ? 'profit-positive' : 'profit-negative'}`;
    });
};

const generateRows = () => {
    const resultsBody = document.getElementById('resultsBody');
    resultsBody.innerHTML = '';

    if (tableDataState.length === 0) {
        resultsBody.innerHTML = `
            <tr class="empty-state">
                <td colspan="7" class="p-6 text-center text-gray-500 dark:text-gray-400">
                    No hay filas. Usa el botón azul para añadir.
                </td>
            </tr>`;
        return;
    }

    const fragment = document.createDocumentFragment();

    tableDataState.forEach((item, index) => {
        const row = document.createElement('tr');
        row.className = 'table-row-hover text-sm border-b border-gray-100 dark:border-gray-700 transition-colors';
        row.dataset.index = index;

        // Estructura con botones táctiles (+ / -) integrados
        row.innerHTML = `
            <td class="p-3 text-center text-gray-500 font-medium">${index + 1}</td>
            <td class="p-2 md:p-3 text-center">
                <div class="stepper-wrapper">
                    <button type="button" class="stepper-btn step-btn" data-action="decrement" data-field="position" aria-label="Disminuir posición">-</button>
                    <input type="number" 
                           aria-label="Posición de entrada para fila ${index + 1}"
                           class="w-10 md:w-12 custom-input position-input text-center text-sm" 
                           value="${item.position}" min="1" max="36">
                    <button type="button" class="stepper-btn step-btn" data-action="increment" data-field="position" aria-label="Aumentar posición">+</button>
                </div>
            </td>
            <td class="p-2 md:p-3 text-center">
                <div class="stepper-wrapper">
                    <button type="button" class="stepper-btn step-btn" data-action="decrement" data-field="value" aria-label="Disminuir valor">-</button>
                    <div class="relative flex items-center">
                        <span class="absolute left-1.5 text-gray-400 text-xs" aria-hidden="true">$</span>
                        <input type="number" step="50" 
                               aria-label="Valor inicial para fila ${index + 1}"
                               class="w-16 md:w-20 pl-4 pr-1 custom-input initial-value-input text-center text-sm" 
                               value="${item.value}">
                    </div>
                    <button type="button" class="stepper-btn step-btn" data-action="increment" data-field="value" aria-label="Aumentar valor">+</button>
                </div>
            </td>
            <td class="p-3 charge-cell font-medium"></td>
            <td class="p-3 investment-cell text-gray-600 dark:text-gray-400"></td>
            <td class="p-3 payment-cell font-medium text-blue-600 dark:text-blue-400"></td>
            <td class="p-3 profit-cell"></td>
        `;
        fragment.appendChild(row);
    });

    resultsBody.appendChild(fragment);
    calculateAndDisplay();
};

const initTheme = () => {
    const toggleIcon = document.getElementById('toggleIcon');
    let stored = 'light';
    try {
        stored = localStorage.getItem('theme') || 'light';
    } catch (e) {
        console.warn('Almacenamiento local restringido:', e);
    }
    
    document.documentElement.setAttribute('data-mode', stored);
    toggleIcon.className = stored === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
};

const toggleTheme = () => {
    const html = document.documentElement;
    const toggleIcon = document.getElementById('toggleIcon');
    const current = html.getAttribute('data-mode');
    const next = current === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-mode', next);
    try {
        localStorage.setItem('theme', next);
    } catch (e) {
        console.warn('No se pudo guardar la preferencia de tema:', e);
    }
    toggleIcon.className = next === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
};

// Event Listeners e Inicialización
document.addEventListener('DOMContentLoaded', () => {
    const resultsBody = document.getElementById('resultsBody');

    // 1. Delegación para escritura manual en los inputs
    resultsBody.addEventListener('input', (e) => {
        const target = e.target;
        if (!target.classList.contains('position-input') && !target.classList.contains('initial-value-input')) return;

        const row = target.closest('tr');
        const index = Number(row.dataset.index);

        if (!isNaN(index) && tableDataState[index]) {
            if (target.classList.contains('position-input')) {
                tableDataState[index].position = parseInt(target.value, 10) || 0;
            } else if (target.classList.contains('initial-value-input')) {
                tableDataState[index].value = parseFloat(target.value) || 0;
            }
            calculateAndDisplay();
        }
    });

    // 2. Delegación para clics en los botones Stepper (+ y -)
    resultsBody.addEventListener('click', (e) => {
        const btn = e.target.closest('.step-btn');
        if (!btn) return;

        const row = btn.closest('tr');
        const index = Number(row.dataset.index);
        const field = btn.dataset.field;
        const action = btn.dataset.action;

        if (isNaN(index) || !tableDataState[index]) return;

        const item = tableDataState[index];

        if (field === 'position') {
            const step = 1;
            item.position = action === 'increment'
                ? Math.min(36, item.position + step)
                : Math.max(1, item.position - step);
            row.querySelector('.position-input').value = item.position;
        } else if (field === 'value') {
            const step = 50; // Salto de $50 para agilizar en móvil
            item.value = action === 'increment'
                ? item.value + step
                : Math.max(0, item.value - step);
            row.querySelector('.initial-value-input').value = item.value;
        }

        calculateAndDisplay();
    });

    document.getElementById('addRowBtn').addEventListener('click', () => {
        const lastItem = tableDataState.length > 0 ? tableDataState[tableDataState.length - 1] : { position: 14, value: DEFAULT_INITIAL_VALUES[0] };
        tableDataState.push({
            position: 14,
            value: lastItem.value * 2
        });
        generateRows();
    });

    document.getElementById('addTopRowBtn').addEventListener('click', () => {
        const firstItem = tableDataState.length > 0 ? tableDataState[0] : { position: 14, value: DEFAULT_INITIAL_VALUES[0] };
        tableDataState.unshift({
            position: 14,
            value: Math.max(50, Math.round(firstItem.value / 2))
        });
        generateRows();
    });

    document.getElementById('removeRowBtn').addEventListener('click', () => {
        if (tableDataState.length > 0) {
            tableDataState.pop();
            generateRows();
        }
    });

    document.getElementById('removeTopRowBtn').addEventListener('click', () => {
        if (tableDataState.length > 0) {
            tableDataState.shift();
            generateRows();
        }
    });

    document.getElementById('resetBtn').addEventListener('click', () => {
        tableDataState = DEFAULT_INITIAL_VALUES.map(val => ({
            position: 14,
            value: val
        }));
        generateRows();
    });

    document.getElementById('saveBtn').addEventListener('click', () => {
        const blob = new Blob([JSON.stringify(tableDataState, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'calculadora_gc_datos.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });

    document.getElementById('predefinedFileSelect').addEventListener('change', (e) => {
        const selected = e.target.value;
        const preset = PREDEFINED_DATA[selected];

        if (preset) {
            tableDataState = preset.values.map((val, idx) => ({
                value: val,
                position: preset.positions[idx] || 14
            }));
        } else {
            tableDataState = DEFAULT_INITIAL_VALUES.map(val => ({
                position: 14,
                value: val
            }));
        }
        generateRows();
    });

    document.getElementById('darkModeToggle').addEventListener('click', toggleTheme);

    // Bootstrap
    initTheme();
    generateRows();
});
