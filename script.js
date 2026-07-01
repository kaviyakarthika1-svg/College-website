document.addEventListener('DOMContentLoaded', () => {

    // Mobile Navigation Controls
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => navLinks.classList.toggle('active'));
    }

    // Interactive Stats Counting Script
    const statsCounters = document.querySelectorAll('.counter');
    if (statsCounters.length > 0) {
        const runCounters = () => {
            statsCounters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'), 10);
                const step = Math.ceil(target / 50);
                const updateValue = () => {
                    const current = parseInt(counter.innerText, 10);
                    if (current < target) {
                        counter.innerText = Math.min(current + step, target);
                        setTimeout(updateValue, 30);
                    } else {
                        counter.innerText = target.toLocaleString('en-IN') + (target === 98 ? "%" : "+");
                    }
                };
                updateValue();
            });
        };
        runCounters();
    }

    // Dynamic Academic Filtration Loop
    const filterBtns = document.querySelectorAll('.btn-filter');
    const courseBoxes = document.querySelectorAll('.course-box');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filter = btn.getAttribute('data-filter');

                courseBoxes.forEach(box => {
                    if (filter === 'all' || box.classList.contains(filter)) {
                        box.style.display = 'flex';
                    } else {
                        box.style.display = 'none';
                    }
                });
            });
        });
    }

    // Dynamic Syllabus Database Matrix Array
    const syllabusData = {
        "ai-ds": { title: "B.Tech Artificial Intelligence & Data Science", sub: "Faculties of Machine Intelligence", subjects: ["Deep Learning Models", "Natural Language Processing", "Big Data Architecture", "Computer Vision Systems"], careers: ["AI Research Scientist", "Data Architect", "ML Operations Lead"] },
        "cyber": { title: "B.Tech Cybersecurity & Penetration Testing", sub: "Threat Intelligence Labs", subjects: ["Advanced Penetration Testing", "Zero-Trust Infrastructures", "Digital Forensic Tracks", "Cryptographic Protocols"], careers: ["Chief Security Auditor", "Incident Response Manager", "SecOps Lead"] },
        "quantum": { title: "B.Tech Quantum Computing & Systems", sub: "Computational Science Wing", subjects: ["Quantum Logic Circuits", "Cryogenic Stacks", "Algorithmic Error Frameworks", "Subatomic Structures"], careers: ["Quantum Developer", "Subatomic Hardware Specialist", "Research Physicist"] },
        "cloud": { title: "B.Tech Cloud Computing & DevOps Infra", sub: "Distributed Systems Labs", subjects: ["Kubernetes Micro-clusters", "DevOps Pipelines", "SRE Architecture Optimization", "Cloud Security Isolation"], careers: ["Solutions Architect", "DevOps Infrastructure Director", "Site Reliability Engineer"] },
        "aero": { title: "B.E. Aerospace & Autonomous Drones", sub: "Flight Systems Wing", subjects: ["Supersonic Fluid Kinematics", "Avionics Management Arrays", "Autonomous Flight Controls", "CFD Simulation Labs"], careers: ["Aerodynamic Flight Engineer", "Drone Controls Programmer", "Defense Contractor"] },
        "biomed": { title: "B.E. Biomedical Robotics & Cybernetics", sub: "Bio-Engineering Laboratory", subjects: ["Neural Prosthetic Arrays", "Robotic Surgical Mechanics", "Sensory Interface Systems", "Biomaterial Synthesis"], careers: ["Automation Architect", "Surgical Tool Engineer", "Clinical Informatics Lead"] },
        "mechatronics": { title: "B.E. Mechatronics & Industry 4.0 Grids", sub: "Automation Controls Division", subjects: ["Programmable Logic Controls", "Industrial IoT Pipelines", "Smart Factory Arrays", "Kinematics Analysis"], careers: ["Robotics Systems Integrator", "Automation Architect", "Plant Operations Lead"] },
        "ev-tech": { title: "B.E. Electric Vehicle Architecture", sub: "Automotive Power Lab", subjects: ["Lithium Thermal Array Controls", "Regenerative Power Distribution", "Drivetrain Configurations", "EV Diagnostic Frameworks"], careers: ["Powertrain Design Engineer", "Battery Systems Programmer", "EV System Architect"] },
        "mba-prod": { title: "MBA Digital Product Operations", sub: "Graduate Business School", subjects: ["Agile Metric Optimization", "Consumer Metrics Engine", "Venture Capital Financing", "Enterprise Scaling Strategy"], careers: ["Global Product Director", "Growth Operations Manager", "Venture Partner"] },
        "mba-fin": { title: "MBA FinTech & Blockchain Strategy", sub: "Financial Systems School", subjects: ["Decentralized Finance Infrastructures", "Algorithmic Trading Systems", "Smart Contract Audits", "Risk Optimization Matrix"], careers: ["FinTech Vice President", "Blockchain Risk Architect", "Quantitative Analyst"] },
        "mtech-ds": { title: "M.Tech Data Science & Neural Systems", sub: "Advanced Research Centre", subjects: ["Advanced Topologies Optimization", "Transformer System Designs", "Predictive Systems Engineering", "Patent Drafting Workspaces"], careers: ["Principal Data Scientist", "Senior R&D Researcher", "Neural Modeler Consultant"] }
    };

    // Syllabus Slide Out Drawer Operations Trigger
    const syllabusDrawer = document.getElementById('syllabusDrawer');
    const drawerDynamicBody = document.getElementById('drawerDynamicBody');
    const closeDrawerBtn = document.getElementById('closeDrawerBtn');
    const drawerOverlay = document.getElementById('drawerOverlay');

    if (courseBoxes.length > 0 && syllabusDrawer) {
        courseBoxes.forEach(box => {
            box.addEventListener('click', () => {
                const courseKey = box.getAttribute('data-course');
                const course = syllabusData[courseKey];
                if (course) {
                    drawerDynamicBody.innerHTML = `
                        <div class="drawer-body-data">
                            <h2>${course.title}</h2>
                            <span class="drawer-subtitle">${course.sub}</span>
                            <div class="drawer-section">
                                <h4>Core Specialization Syllabus</h4>
                                <ul class="drawer-list">${course.subjects.map(s => `<li><i class="fas fa-circle-check"></i> ${s}</li>`).join('')}</ul>
                            </div>
                            <div class="drawer-section" style="margin-top:2rem;">
                                <h4>Career Pathways</h4>
                                <ul class="drawer-list">${course.careers.map(c => `<li><i class="fas fa-briefcase" style="color:var(--teal-green);"></i> ${c}</li>`).join('')}</ul>
                            </div>
                        </div>
                    `;
                    syllabusDrawer.classList.add('open');
                }
            });
        });

        const closeDrawer = () => syllabusDrawer.classList.remove('open');
        if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
        if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);
    }

    // Net Tuition Fee Projections Engine
    const btnCalculate = document.getElementById('btnCalculate');
    if (btnCalculate) {
        btnCalculate.addEventListener('click', () => {
            const baseCostValue = parseFloat(document.getElementById('calcStream').value);
            const discountPercentage = parseFloat(document.getElementById('calcMerit').value);
            const hostelOptionFee = document.getElementById('calcHostel').checked ? parseFloat(document.getElementById('calcHostel').value) : 0;

            const finalCalculatedFee = (baseCostValue * (1 - discountPercentage)) + hostelOptionFee;

            document.getElementById('finalFeeDisplay').innerText = "₹ " + finalCalculatedFee.toLocaleString('en-IN');
            document.getElementById('calculatorResult').style.display = 'block';
        });
    }
});