const formulaData = {
    opamp: [
        {
            title: "Ideal Non-Inverting Gain",
            desc: "A = 1 + \\frac{R_2}{R_1}",
            inputs: [{ id: "r1", label: "R1 (Ω)" }, { id: "r2", label: "R2 (Ω)" }],
            calc: (v) => 1 + (v.r2 / v.r1),
            unit: "V/V"
        },
        {
            title: "Ideal Inverting Gain",
            desc: "V_O = -\\frac{R_2}{R_1} V_I",
            inputs: [{ id: "vi", label: "Vi (V)" }, { id: "r1", label: "R1 (Ω)" }, { id: "r2", label: "R2 (Ω)" }],
            calc: (v) => -(v.r2 / v.r1) * v.vi,
            unit: "V"
        },
        {
            title: "Summing Amplifier",
            desc: "V_O = -\\left( \\frac{R_F}{R_1} V_1 + \\frac{R_F}{R_2} V_2 + \\frac{R_F}{R_3} V_3 \\right)",
            inputs: [
                { id: "rf", label: "Rf (Ω)" },
                { id: "r1", label: "R1 (Ω)" }, { id: "v1", label: "V1 (V)" },
                { id: "r2", label: "R2 (Ω)" }, { id: "v2", label: "V2 (V)" },
                { id: "r3", label: "R3 (Ω)" }, { id: "v3", label: "V3 (V)" }
            ],
            calc: (v) => -((v.rf/v.r1)*v.v1 + (v.rf/v.r2)*v.v2 + (v.rf/v.r3)*v.v3),
            unit: "V"
        },
        {
            title: "Gain Error (GE%)",
            desc: "GE\\% \\cong -\\frac{100}{a\\beta}",
            inputs: [{ id: "a", label: "Open-loop Gain (a)" }, { id: "beta", label: "Feedback Factor (β)" }],
            calc: (v) => -100 / (v.a * v.beta),
            unit: "%"
        }
    ],
    poweramp: [
        {
            title: "Class A Quiescent Power",
            desc: "P_{DQ} = I_{CQ} V_{CEQ}",
            inputs: [{ id: "icq", label: "ICQ (A)" }, { id: "vceq", label: "VCEQ (V)" }],
            calc: (v) => v.icq * v.vceq,
            unit: "W"
        },
        {
            title: "Class A Max Efficiency",
            desc: "\\eta_{max} = \\frac{P_{out}}{P_{DC}} = 0.25",
            inputs: [{ id: "icq", label: "ICQ (A)" }, { id: "vceq", label: "VCEQ (V)" }],
            calc: (v) => 0.25,
            unit: "η (25%)"
        },
        {
            title: "Class B/AB DC Power",
            desc: "P_{DC} = \\frac{I_{c(sat)} V_{CC}}{\\pi}",
            inputs: [{ id: "icsat", label: "Ic(sat) (A)" }, { id: "vcc", label: "VCC (V)" }],
            calc: (v) => (v.icsat * v.vcc) / Math.PI,
            unit: "W"
        }
    ],
    powerelectronics: [
        {
            title: "Line Regulation",
            desc: "\\text{Line Reg} = \\left( \\frac{\\Delta V_{OUT}}{\\Delta V_{IN}} \\right) 100\\%",
            inputs: [{ id: "d_vout", label: "ΔVout (V)" }, { id: "d_vin", label: "ΔVin (V)" }],
            calc: (v) => (v.d_vout / v.d_vin) * 100,
            unit: "%"
        },
        {
            title: "Load Regulation",
            desc: "\\text{Load Reg} = \\left( \\frac{V_{NL} - V_{FL}}{V_{FL}} \\right) 100\\%",
            inputs: [{ id: "vnl", label: "VNL (No Load)" }, { id: "vfl", label: "VFL (Full Load)" }],
            calc: (v) => ((v.vnl - v.vfl) / v.vfl) * 100,
            unit: "%"
        },
        {
            title: "Zener Current Limiter",
            desc: "R_S = \\frac{V_S - V_Z}{I_S}",
            inputs: [{ id: "vs", label: "VS (V)" }, { id: "vz", label: "VZ (V)" }, { id: "is", label: "IS (A)" }],
            calc: (v) => (v.vs - v.vz) / v.is,
            unit: "Ω"
        }
    ],
    semiconductor: [
        {
            title: "Half-Wave Rectifier Avg",
            desc: "V_{avg} = \\frac{V_p - 0.7}{\\pi}",
            inputs: [{ id: "vp", label: "Peak Voltage Vp (V)" }],
            calc: (v) => (v.vp - 0.7) / Math.PI,
            unit: "V (Avg)"
        },
        {
            title: "Full-Wave Bridge Output",
            desc: "V_{out} = V_{p(secondary)} - 1.4V",
            inputs: [{ id: "vp", label: "Secondary Peak Vp (V)" }],
            calc: (v) => v.vp - 1.4,
            unit: "V (Peak)"
        },
        {
            title: "Electron Shell Capacity",
            desc: "N_e = 2n^2",
            inputs: [{ id: "n", label: "Shell Number (n)" }],
            calc: (v) => 2 * Math.pow(v.n, 2),
            unit: "Electrons"
        }
    ],
    transistor: [
        {
            title: "JFET Drain Current (Sat)",
            desc: "i_D = \\frac{I_{DSS}}{V_P^2}(v_{GS} + V_P)^2",
            inputs: [
                { id: "idss", label: "IDSS (A)" },
                { id: "vgs", label: "VGS (V)" },
                { id: "vp", label: "Pinch-off Vp (V)" }
            ],
            calc: (v) => (v.idss / Math.pow(v.vp, 2)) * Math.pow(v.vgs + v.vp, 2),
            unit: "A"
        },
        {
            title: "E-MOSFET Drain Current",
            desc: "I_D = K(V_{GS} - V_{GS(th)})^2",
            inputs: [
                { id: "k", label: "K Constant (A/V²)" },
                { id: "vgs", label: "VGS (V)" },
                { id: "vgsth", label: "VGS(th) (V)" }
            ],
            calc: (v) => v.k * Math.pow(v.vgs - v.vgsth, 2),
            unit: "A"
        }
    ]
};

const grid = document.getElementById('formula-grid');
const navItems = document.querySelectorAll('nav li');
const categoryTitle = document.getElementById('category-title');
const modeSwitch = document.getElementById('mode-switch');

modeSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    modeSwitch.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
});

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        const cat = item.dataset.category;
        categoryTitle.textContent = item.textContent;
        renderCards(cat);
    });
});

function renderCards(category) {
    grid.innerHTML = '';
    const formulas = formulaData[category] || [];

    formulas.forEach((f, idx) => {
        const card = document.createElement('div');
        card.className = 'card';
        
        let inputsHtml = f.inputs.map(input => `
            <div class="input-group">
                <label for="${category}-${idx}-${input.id}">${input.label}</label>
                <input type="number" step="any" id="${category}-${idx}-${input.id}" placeholder="0">
            </div>
        `).join('');

        card.innerHTML = `
            <h3>${f.title}</h3>
            <div class="equation-box">
                \\[ ${f.desc} \\]
            </div>
            ${inputsHtml}
            <button class="calc-btn" onclick="handleCalculate('${category}', ${idx})">Calculate</button>
            <div class="result-area" id="res-${category}-${idx}">
                <div class="result-label">Output Result</div>
                <div class="result-val" id="val-${category}-${idx}">0</div>
                <div class="result-label">${f.unit}</div>
            </div>
        `;
        
        card.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleCalculate(category, idx);
        });

        grid.appendChild(card);
    });

    // TRIGGER KATEX RENDERING
    if (window.renderMathInElement) {
        renderMathInElement(grid, {
            delimiters: [
                {left: "\\[", right: "\\]", display: true},
                {left: "$", right: "$", display: false}
            ]
        });
    }
}

function handleCalculate(category, index) {
    const formula = formulaData[category][index];
    const vals = {};
    let valid = true;

    formula.inputs.forEach(input => {
        const el = document.getElementById(`${category}-${index}-${input.id}`);
        const val = parseFloat(el.value);
        if (isNaN(val)) {
            valid = false;
            el.style.border = "1px solid #ff453a";
        } else {
            el.style.border = "none";
            vals[input.id] = val;
        }
    });

    if (valid) {
        const result = formula.calc(vals);
        const resArea = document.getElementById(`res-${category}-${index}`);
        const resVal = document.getElementById(`val-${category}-${index}`);
        
        resVal.textContent = (Math.abs(result) < 0.0001 && result !== 0) ? result.toExponential(4) : (Number.isInteger(result) ? result : result.toFixed(4));
        resArea.classList.add('show');
        
        const btn = resArea.previousElementSibling;
        btn.style.transform = "scale(0.95)";
        setTimeout(() => btn.style.transform = "scale(1)", 100);
    }
}

renderCards('opamp');
