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

document.addEventListener("DOMContentLoaded", function () {
  // Target the calculator element handles
  const btnCalculate = document.getElementById("btnCalculate");
  const calcStream = document.getElementById("calcStream");
  const calcMerit = document.getElementById("calcMerit");
  const calcHostel = document.getElementById("calcHostel");
  const calculatorResult = document.getElementById("calculatorResult");
  const finalFeeDisplay = document.getElementById("finalFeeDisplay");

  // Verify elements exist on the current subpage to prevent console errors
  if (btnCalculate && calcStream && calcMerit && calcHostel && calculatorResult && finalFeeDisplay) {
    
    btnCalculate.addEventListener("click", function (e) {
      e.preventDefault(); // Prevents page jumping if wrapped inside a form tag

      // 1. Get current form values
      const baseCombinedFee = parseFloat(calcStream.value);
      const scholarshipDiscountPercent = parseFloat(calcMerit.value);
      const isHostelSelected = calcHostel.checked;
      const hostelCost = parseFloat(calcHostel.value);

      // 2. Compute fee matrix math
      // Apply the merit aid waiver discount strictly to the core tuition/academic fees
      const discountedAcademicFee = baseCombinedFee * (1 - scholarshipDiscountPercent);
      
      // Calculate net aggregate tally (Add structural hostel fees if checkbox is active)
      let netAnnualPayable = discountedAcademicFee;
      if (isHostelSelected) {
        netAnnualPayable += hostelCost;
      }

      // 3. Round to closest whole number and format currency output
      const roundedFee = Math.round(netAnnualPayable);
      const formattedCurrency = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
      }).format(roundedFee);

      // 4. Update DOM tree and reveal block presentation wrapper cleanly
      finalFeeDisplay.textContent = formattedCurrency;
      calculatorResult.style.display = "block";
      
      // Smoothly scroll into view on smaller mobile layouts if needed
      calculatorResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  
  // ==========================================
  // 1. DATA DICTIONARY FOR SYLLABUS CONTENT
  // ==========================================
  const syllabusData = {
    "ai-ds": `
      <h2>B.Tech AI & Data Science</h2>
      <p class="drawer-subtitle">Faculties of AI • 4 Years Undergraduate</p>
      <hr>
      <h3>Core Curriculum Focus</h3>
      <ul>
        <li><strong>Semester I & II:</strong> Computational Matrix Mathematics, Python Foundation Arrays, Advanced Probability Loops.</li>
        <li><strong>Semester III & IV:</strong> Supervised Machine Learning Topologies, Data Architecture Systems, NLP Foundations.</li>
        <li><strong>Semester V & VI:</strong> Neural Networks & Deep Learning Models, Cloud Computing Pipelines, Computer Vision Frameworks.</li>
        <li><strong>Semester VII & VIII:</strong> Production MLOps Engineering, Capstone Applied AI Deployment, Research Milestones.</li>
      </ul>
    `,
    "cyber": `
      <h2>B.Tech Cybersecurity & Penetration Testing</h2>
      <p class="drawer-subtitle">Cyber Protection • 4 Years Undergraduate</p>
      <hr>
      <h3>Core Curriculum Focus</h3>
      <ul>
        <li><strong>Semester I & II:</strong> Hardware Disassembly Logistics, Fundamentals of C Linux Kernel Logic, Network Topology Systems.</li>
        <li><strong>Semester III & IV:</strong> Ethical Hacking Frameworks, Defensive Cryptography Standards, Reverse Engineering Vectors.</li>
        <li><strong>Semester V & VI:</strong> Advanced Penetration Testing Matrix, Web Protocol Security Mitigation, Digital Threat Intelligence.</li>
        <li><strong>Semester VII & VIII:</strong> Enterprise Zero-Trust Deployments, Incident Response Lab Execution, Automated Fuzzing Grids.</li>
      </ul>
    `,
    "quantum": `
      <h2>B.Tech Quantum Computing & Systems</h2>
      <p class="drawer-subtitle">Physics & Computing • 4 Years Undergraduate</p>
      <hr>
      <h3>Core Curriculum Focus</h3>
      <ul>
        <li><strong>Semester I & II:</strong> Advanced Subatomic Mechanics Physics, Linear Algebra Vector Formulations, Quantum Logic Gates.</li>
        <li><strong>Semester III & IV:</strong> Qubit Physical Infrastructure Mechanics, Cryogenic Engineering Systems, Quantum Error Loops.</li>
        <li><strong>Semester V & VI:</strong> Shor's and Grover's Algorithm Frameworks, Quantum Cryptographic Protocols, Circuit Scaling.</li>
        <li><strong>Semester VII & VIII:</strong> Hybrid Classical-Quantum Solutions, Quantum Hardware Integration Lab, Research Practicum.</li>
      </ul>
    `,
    "cloud": `
      <h2>B.Tech Cloud Computing & DevOps Infra</h2>
      <p class="drawer-subtitle">Cloud Architecture • 4 Years Undergraduate</p>
      <hr>
      <h3>Core Curriculum Focus</h3>
      <ul>
        <li><strong>Semester I & II:</strong> Operating Systems Interfacing, Fundamentals of Virtualization Systems, Networking Clusters.</li>
        <li><strong>Semester III & IV:</strong> Configuration State Automation Infrastructure, CI/CD Pipeline Architectures, Docker Toolsets.</li>
        <li><strong>Semester V & VI:</strong> Kubernetes Orchestration Systems, Distributed Microservices Grids, Site Reliability Tasks.</li>
        <li><strong>Semester VII & VIII:</strong> Multi-Cloud Provisioning Frameworks, Enterprise Scale FinOps Systems, Real-World Outage Modeling.</li>
      </ul>
    `,
    "aero": `
      <h2>B.E. Aerospace & Autonomous Drones</h2>
      <p class="drawer-subtitle">Aviation Wing • 4 Years Undergraduate</p>
      <hr>
      <h3>Core Curriculum Focus</h3>
      <ul>
        <li>Aerodynamic Flight Vector Mathematics, Supersonic Propulsion Configurations, Autonomous Flight Trajectory Logic, and Embedded Drone Flight Mechanics.</li>
      </ul>
    `,
    "biomed": `
      <h2>B.E. Biomedical Robotics & Cybernetics</h2>
      <p class="drawer-subtitle">Healthcare Tech • 4 Years Undergraduate</p>
      <hr>
      <h3>Core Curriculum Focus</h3>
      <ul>
        <li>Neural-Prosthetic Interface Frameworks, Bio-Sensory Array Integration, Automated Surgical Mechanical Robotics, and Cybernetic Feedback Loops.</li>
      </ul>
    `,
    "mechatronics": `
      <h2>B.E. Mechatronics & Industry 4.0 Grids</h2>
      <p class="drawer-subtitle">Automation Systems • 4 Years Undergraduate</p>
      <hr>
      <h3>Core Curriculum Focus</h3>
      <ul>
        <li>Programmable Logic Automation, Industrial Internet of Things (IIoT) Data Pipelines, Hydraulic-Pneumatic Controls, and Factory Sorting Grids.</li>
      </ul>
    `,
    "ev-tech": `
      <h2>B.E. Electric Vehicle Architecture</h2>
      <p class="drawer-subtitle">Automotive Tech • 4 Years Undergraduate</p>
      <hr>
      <h3>Core Curriculum Focus</h3>
      <ul>
        <li>Lithium-Ion Pack Thermal Control Configurations, Regenerative Braking Systems, Three-Phase Motor Controller Inverters, and Vehicle Dyno Simulation.</li>
      </ul>
    `,
    "mba-prod": `
      <h2>MBA Digital Product Operations</h2>
      <p class="drawer-subtitle">Business School • 2 Years Postgraduate</p>
      <hr>
      <h3>Core Curriculum Focus</h3>
      <ul>
        <li>Agile Product Strategy Optimization, Consumer Behavior Analysis Systems, Product Market Fit Metrics, and International Scale-Up Methodologies.</li>
      </ul>
    `,
    "mba-fin": `
      <h2>MBA FinTech & Blockchain Strategy</h2>
      <p class="drawer-subtitle">Business School • 2 Years Postgraduate</p>
      <hr>
      <h3>Core Curriculum Focus</h3>
      <ul>
        <li>Decentralized Ledger Operations, Quantitative Trading Systems, Smart Contract Logic, Cryptographic Asset Evaluation, and Financial Risk Auditing.</li>
      </ul>
    `,
    "mtech-ds": `
      <h2>M.Tech Data Science & Neural Systems</h2>
      <p class="drawer-subtitle">Advanced Research • 2 Years Postgraduate</p>
      <hr>
      <h3>Core Curriculum Focus</h3>
      <ul>
        <li>Transformer Model Optimization Metrics, Deep Learning Topology Layouts, Commercial Real-Time Data Pipelines, and Peer-Reviewed Thesis Research.</li>
      </ul>
    `
  };

  // ==========================================
  // 2. LIVE FILTERING LOGIC
  // ==========================================
  const filterButtons = document.querySelectorAll(".btn-filter");
  const courseItems = document.querySelectorAll(".filter-item");

  filterButtons.forEach(button => {
    button.addEventListener("click", function () {
      // Toggle active states on tabs
      filterButtons.forEach(btn => btn.classList.remove("active"));
      this.classList.add("active");

      const filterValue = this.getAttribute("data-filter");

      courseItems.forEach(item => {
        if (filterValue === "all" || item.classList.contains(filterValue)) {
          item.style.display = "flex"; // Restores card display configuration
        } else {
          item.style.display = "none"; // Hides filtered cards
        }
      });
    });
  });

  // ==========================================
  // 3. SLIDE-OUT SYLLABUS DRAWER LOGIC
  // ==========================================
  const syllabusDrawer = document.getElementById("syllabusDrawer");
  const drawerOverlay = document.getElementById("drawerOverlay");
  const closeDrawerBtn = document.getElementById("closeDrawerBtn");
  const drawerDynamicBody = document.getElementById("drawerDynamicBody");
  const courseBoxes = document.querySelectorAll(".course-box");

  // Open Drawer on Card Click
  courseBoxes.forEach(box => {
    box.addEventListener("click", function () {
      const courseKey = this.getAttribute("data-course");
      const contentHtml = syllabusData[courseKey] || `<h2>Syllabus Outline Missing</h2><p>Detailed program framework under review.</p>`;
      
      // Inject correct data block and fire layout animation state
      drawerDynamicBody.innerHTML = contentHtml;
      syllabusDrawer.classList.add("active");
      document.body.style.overflow = "hidden"; // Prevents background body scrolling
    });
  });

  // Close Drawer Helper function
  function closeDrawer() {
    syllabusDrawer.classList.remove("active");
    document.body.style.overflow = ""; // Restores document scrolling
  }

  if (closeDrawerBtn) closeDrawerBtn.addEventListener("click", closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener("click", closeDrawer);

  // Close Drawer on Escape key press
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && syllabusDrawer.classList.contains("active")) {
      closeDrawer();
    }
  });
});