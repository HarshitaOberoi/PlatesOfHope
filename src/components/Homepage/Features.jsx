import React from 'react'

const Features = () => {
    const features = [
        {
          title: "Smart Food Donation",
          description: "List your surplus food in minutes and connect with local organizations. Our AI-powered system matches donations with the right recipients based on location, quantity, and food type.",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="Fork-Knife-Line--Streamline-Mingcute" height={24} width={24} ><desc>{"Fork Knife Line Streamline Icon: https://streamlinehq.com"}</desc><g fill="none" fillRule="evenodd"><path d="M24 0v24H0V0h24ZM12.594 23.258l-0.012 0.002 -0.071 0.035 -0.02 0.004 -0.014 -0.004 -0.071 -0.036c-0.01 -0.003 -0.019 0 -0.024 0.006l-0.004 0.01 -0.017 0.428 0.005 0.02 0.01 0.013 0.104 0.074 0.015 0.004 0.012 -0.004 0.104 -0.074 0.012 -0.016 0.004 -0.017 -0.017 -0.427c-0.002 -0.01 -0.009 -0.017 -0.016 -0.018Zm0.264 -0.113 -0.014 0.002 -0.184 0.093 -0.01 0.01 -0.003 0.011 0.018 0.43 0.005 0.012 0.008 0.008 0.201 0.092c0.012 0.004 0.023 0 0.029 -0.008l0.004 -0.014 -0.034 -0.614c-0.003 -0.012 -0.01 -0.02 -0.02 -0.022Zm-0.715 0.002a0.023 0.023 0 0 0 -0.027 0.006l-0.006 0.014 -0.034 0.614c0 0.012 0.007 0.02 0.017 0.024l0.015 -0.002 0.201 -0.093 0.01 -0.008 0.003 -0.011 0.018 -0.43 -0.003 -0.012 -0.01 -0.01 -0.184 -0.092Z" strokeWidth={1} /><path fill="#000000" d="M18.41 3.287a1 1 0 0 1 -0.233 1.395l-2.101 1.501a1.965 1.965 0 0 0 -0.762 2.089l3.343 -3.343a1 1 0 1 1 1.414 1.414l-3.343 3.343a1.965 1.965 0 0 0 2.089 -0.762l1.501 -2.101a1 1 0 0 1 1.627 1.162l-1.5 2.102a3.967 3.967 0 0 1 -5.234 1.116l-1.736 1.736 4.803 4.804a1 1 0 0 1 -1.414 1.414l-4.803 -4.803 -4.718 4.717a1 1 0 1 1 -1.414 -1.414l4.717 -4.718 -1.56 -1.56 -1.414 1.414a1 1 0 0 1 -1.414 0l-2.205 -2.204a5 5 0 0 1 -0.936 -5.772c0.188 -0.376 0.403 -0.715 0.859 -0.79a1 1 0 0 1 0.867 0.28L9.79 9.255l0.004 0.003 2.268 2.268 1.736 -1.736a3.967 3.967 0 0 1 1.116 -5.233l2.102 -1.501a1 1 0 0 1 1.395 0.232Zm-13.816 3.6a3 3 0 0 0 0.874 2.288l1.497 1.497 0.707 -0.707 -3.078 -3.079Z" strokeWidth={1} /></g></svg>
          ),
          benefits: ["Quick listing process", "Smart matching algorithm", "Real-time notifications", "Donation history tracking"]
        },
        {
          title: "Real-time Tracking System",
          description: "Track your donations from pickup to delivery in real-time. Our advanced tracking system ensures transparency and accountability throughout the entire donation process.",
          icon: (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Share-Location-Fill--Streamline-Rounded-Fill-Material" height={24} width={24} ><desc>{"Share Location Fill Streamline Icon: https://streamlinehq.com"}</desc><path fill="#000000" d="M13.9751 21.825c-0.23335 0.03335 -0.43335 -0.02085 -0.6 -0.1625 -0.16665 -0.14165 -0.25 -0.3375 -0.25 -0.5875 0 -0.18335 0.05835 -0.34165 0.175 -0.475 0.11665 -0.13335 0.26665 -0.21665 0.45 -0.25 0.53335 -0.11665 1.05415 -0.27915 1.5625 -0.4875 0.50835 -0.20835 0.99585 -0.47085 1.4625 -0.7875 0.15 -0.1 0.31665 -0.14165 0.5 -0.125 0.18335 0.01665 0.33335 0.09165 0.45 0.225 0.16665 0.18335 0.24165 0.38335 0.225 0.6 -0.01665 0.21665 -0.11665 0.39165 -0.3 0.525 -0.56665 0.38335 -1.15415 0.7 -1.7625 0.95s-1.24585 0.44165 -1.9125 0.575Zm5.25 -4.175c-0.13335 -0.11665 -0.20835 -0.26665 -0.225 -0.45 -0.01665 -0.18335 0.025 -0.35 0.125 -0.5 0.3 -0.45 0.55415 -0.925 0.7625 -1.425 0.20835 -0.5 0.37915 -1.03335 0.5125 -1.6 0.03335 -0.18335 0.125 -0.33335 0.275 -0.45 0.15 -0.11665 0.31665 -0.175 0.5 -0.175 0.23335 0 0.425 0.08335 0.575 0.25 0.15 0.16665 0.2 0.36665 0.15 0.6 -0.13335 0.68335 -0.33335 1.33335 -0.6 1.95 -0.26665 0.61665 -0.58335 1.19165 -0.95 1.725 -0.13335 0.18335 -0.30835 0.28335 -0.525 0.3 -0.21665 0.01665 -0.41665 -0.05835 -0.6 -0.225Zm1.95 -6.7c-0.18335 0 -0.35 -0.05835 -0.5 -0.175 -0.15 -0.11665 -0.24165 -0.26665 -0.275 -0.45 -0.13335 -0.55 -0.30415 -1.075 -0.5125 -1.575 -0.20835 -0.5 -0.4625 -0.98335 -0.7625 -1.45 -0.1 -0.15 -0.1375 -0.31665 -0.1125 -0.5 0.025 -0.18335 0.10415 -0.34165 0.2375 -0.475 0.18335 -0.16665 0.37915 -0.2375 0.5875 -0.2125 0.20835 0.025 0.37915 0.12915 0.5125 0.3125 0.38335 0.58335 0.7 1.17085 0.95 1.7625s0.45 1.22915 0.6 1.9125c0.05 0.23335 0.00415 0.43335 -0.1375 0.6 -0.14165 0.16665 -0.3375 0.25 -0.5875 0.25Zm-11.025 10.875c-2.33335 -0.46665 -4.25835 -1.6125 -5.775 -3.4375 -1.51667 -1.825 -2.275 -3.95415 -2.275 -6.3875 0 -2.43335 0.75833 -4.5625 2.275 -6.3875 1.51665 -1.825 3.44165 -2.970835 5.775 -3.4375 0.23335 -0.05 0.43335 0 0.6 0.15 0.16665 0.15 0.25 0.341665 0.25 0.575 0 0.183335 -0.05835 0.345835 -0.175 0.4875 -0.11665 0.141665 -0.26665 0.229165 -0.45 0.2625 -1.96665 0.416665 -3.5875 1.40835 -4.8625 2.975S3.6001 9.98335 3.6001 12s0.6375 3.80835 1.9125 5.375c1.275 1.56665 2.89585 2.55835 4.8625 2.975 0.18335 0.03335 0.33335 0.12085 0.45 0.2625 0.11665 0.14165 0.175 0.30415 0.175 0.4875 0 0.23335 -0.08335 0.425 -0.25 0.575 -0.16665 0.15 -0.36665 0.2 -0.6 0.15Zm6.65 -16.875c-0.48335 -0.3 -0.975 -0.554165 -1.475 -0.7625 -0.5 -0.208335 -1.00835 -0.379165 -1.525 -0.5125 -0.18335 -0.033335 -0.33335 -0.125 -0.45 -0.275 -0.11665 -0.15 -0.175 -0.316665 -0.175 -0.5 0 -0.233335 0.07915 -0.420835 0.2375 -0.5625 0.15835 -0.141665 0.35415 -0.1875 0.5875 -0.1375 0.63335 0.133335 1.25835 0.320835 1.875 0.5625 0.61665 0.241665 1.20835 0.554165 1.775 0.9375 0.18335 0.133335 0.2875 0.308335 0.3125 0.525 0.025 0.216665 -0.04585 0.416665 -0.2125 0.6 -0.11665 0.133335 -0.26665 0.20835 -0.45 0.225 -0.18335 0.01665 -0.35 -0.01665 -0.5 -0.1Zm-4.725 11.95c-0.13335 0 -0.2625 -0.025 -0.3875 -0.075 -0.125 -0.05 -0.2375 -0.11665 -0.3375 -0.2 -1.16665 -1.06665 -2.0375 -2.05835 -2.6125 -2.975 -0.575 -0.91665 -0.8625 -1.775 -0.8625 -2.575 0 -1.23335 0.4 -2.25835 1.2 -3.075 0.8 -0.81665 1.8 -1.225 3 -1.225s2.2 0.40835 3 1.225c0.8 0.81665 1.2 1.84165 1.2 3.075 0 0.8 -0.2875 1.65835 -0.8625 2.575 -0.575 0.91665 -1.44585 1.90835 -2.6125 2.975 -0.1 0.08335 -0.2125 0.15 -0.3375 0.2 -0.125 0.05 -0.25415 0.075 -0.3875 0.075Zm0 -4.875c0.31665 0 0.58335 -0.1125 0.8 -0.3375 0.21665 -0.225 0.325 -0.49585 0.325 -0.8125s-0.10835 -0.58335 -0.325 -0.8 -0.48335 -0.325 -0.8 -0.325c-0.31665 0 -0.58335 0.10835 -0.8 0.325s-0.325 0.48335 -0.325 0.8c0 0.31665 0.10835 0.5875 0.325 0.8125 0.21665 0.225 0.48335 0.3375 0.8 0.3375Z" strokeWidth={0.5} /></svg>
          ),
          benefits: ["GPS tracking", "Status updates", "Delivery confirmations", "Route optimization"]
        },
        {
          title: "Volunteer Network",
          description: "Join our extensive network of volunteers to help collect and distribute food. Get notified about nearby opportunities and make a real difference in your community.",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Volunteer-Activism--Streamline-Rounded-Material" height={24} width={24} ><desc>{"Volunteer Activism Streamline Icon: https://streamlinehq.com"}</desc><path fill="#000000" d="m14.05 21.25 6.2 -1.95c0 -0.33335 -0.12915 -0.61665 -0.3875 -0.85 -0.25835 -0.23335 -0.5625 -0.34165 -0.9125 -0.325H13.725c-0.26665 0.01665 -0.52915 0 -0.7875 -0.05 -0.25835 -0.05 -0.5125 -0.11665 -0.7625 -0.2l-1.65 -0.5c-0.2 -0.06665 -0.35 -0.2 -0.45 -0.4 -0.1 -0.2 -0.11665 -0.4 -0.05 -0.6 0.06665 -0.2 0.194 -0.35 0.382 -0.45 0.188 -0.1 0.38565 -0.10835 0.593 -0.025l1.6 0.525c0.18335 0.06665 0.37085 0.11665 0.5625 0.15 0.19165 0.03335 0.37915 0.05 0.5625 0.05h1.4c0.03335 0 0.03335 0 0 0 0 -0.35 -0.11665 -0.65415 -0.35 -0.9125 -0.23335 -0.25835 -0.51665 -0.45415 -0.85 -0.5875l-5.45 -2.075h-2.1V19l7.675 2.25Zm-0.325 1.425 -7.35 -2.1c-0.03335 0.45 -0.22085 0.8 -0.5625 1.05S5.15835 22 4.875 22H2.5c-0.4125 0 -0.765585 -0.1469 -1.05925 -0.44075C1.146915 21.2656 1 20.9125 1 20.5V13.05c0 -0.4125 0.146915 -0.76565 0.44075 -1.0595C1.734415 11.69685 2.0875 11.55 2.5 11.55h5.95c0.08885 0 0.17775 0.00835 0.26675 0.025 0.08885 0.01665 0.1749 0.04165 0.25825 0.075l5.45 2.05c0.7 0.26665 1.25415 0.65 1.6625 1.15 0.40835 0.5 0.6125 1.09165 0.6125 1.775h2.25c0.84715 0 1.56735 0.30835 2.1605 0.925C21.7035 18.16665 22 18.9 22 19.75c0 0.18335 -0.04585 0.35 -0.1375 0.5 -0.09165 0.15 -0.22085 0.25 -0.3875 0.3l-6.9 2.125c-0.13615 0.03335 -0.2786 0.05 -0.42725 0.05 -0.1485 0 -0.2894 -0.01665 -0.42275 -0.05ZM2.5 20.5h2.35V13.05H2.5V20.5Zm13.65 -8.5c-0.1875 0 -0.37185 -0.0354 -0.553 -0.10625 -0.18135 -0.07085 -0.347 -0.1771 -0.497 -0.31875l-3.05 -2.975c-0.48865 -0.46235 -0.9025 -0.97475 -1.2415 -1.53725 -0.339 -0.5625 -0.5085 -1.1751 -0.5085 -1.83775 0 -0.883335 0.29165 -1.641665 0.875 -2.275S12.48335 2 13.35 2c0.56665 0 1.08335 0.145835 1.55 0.4375s0.88335 0.654165 1.25 1.0875c0.36665 -0.433335 0.78335 -0.795835 1.25 -1.0875 0.46665 -0.291665 0.98335 -0.4375 1.55 -0.4375 0.86665 0 1.59165 0.316665 2.175 0.95C21.70835 3.583335 22 4.341665 22 5.225c0 0.661 -0.17085 1.2721 -0.5125 1.83325 -0.34165 0.56115 -0.75415 1.0751 -1.2375 1.54175l-3.05 2.975c-0.15 0.14165 -0.3156 0.2479 -0.49675 0.31875 -0.18135 0.07085 -0.36575 0.10625 -0.55325 0.10625Zm0 -1.475 3 -2.975c0.33535 -0.33085 0.64415 -0.6835 0.9265 -1.058 0.28235 -0.3745 0.4235 -0.79685 0.4235 -1.267 0 -0.466665 -0.14585 -0.870835 -0.4375 -1.2125C19.77085 3.670835 19.4 3.5 18.95 3.5c-0.33335 0 -0.64165 0.091665 -0.925 0.275 -0.28335 0.183335 -0.53335 0.408335 -0.75 0.675l-0.5415 0.6785c-0.14935 0.181 -0.34225 0.2715 -0.57875 0.2715s-0.43035 -0.0905 -0.5815 -0.2715L15.025 4.45c-0.21665 -0.266665 -0.46665 -0.491665 -0.75 -0.675 -0.28335 -0.183335 -0.59165 -0.275 -0.925 -0.275 -0.45 0 -0.82085 0.170835 -1.1125 0.5125 -0.29165 0.341665 -0.4375 0.745835 -0.4375 1.2125 0 0.47015 0.14115 0.8925 0.4235 1.267 0.28235 0.3745 0.59115 0.72715 0.9265 1.058l3 2.975Z" strokeWidth={0.5} /></svg>
          ),
          benefits: ["Flexible scheduling", "Impact tracking", "Community recognition", "Training provided"]
        },
        {
          title: "Quality Assurance",
          description: "Our comprehensive food safety protocols ensure that all donations meet the highest quality standards. We provide guidelines and training for proper food handling and storage.",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id="Three-Stars--Streamline-Iconoir" height={24} width={24} ><desc>{"Three Stars Streamline Icon: https://streamlinehq.com"}</desc><path d="m3.943 15.189 1.1366 -2.41c0.1459 -0.3094 0.5674 -0.3094 0.7134 0l1.1366 2.41 2.5418 0.3889c0.3262 0.0499 0.4561 0.4694 0.22 0.7102l-1.8389 1.8746 0.434 2.6483c0.0557 0.3402 -0.2854 0.5994 -0.5772 0.4388l-2.273 -1.251 -2.273 1.251c-0.2919 0.1606 -0.633 -0.0986 -0.5772 -0.4388l0.434 -2.6483 -1.839 -1.8746c-0.2361 -0.2408 -0.1061 -0.6603 0.22 -0.7102l2.5419 -0.3889Z" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} /><path d="m17.0704 15.189 1.1367 -2.41c0.1458 -0.3094 0.5674 -0.3094 0.7133 0l1.1367 2.41 2.5418 0.3889c0.3261 0.0499 0.4561 0.4694 0.22 0.7102l-1.839 1.8746 0.434 2.6483c0.0558 0.3402 -0.2853 0.5994 -0.5772 0.4388l-2.273 -1.251 -2.273 1.251c-0.2919 0.1606 -0.6329 -0.0986 -0.5772 -0.4388l0.434 -2.6483 -1.8389 -1.8746c-0.2361 -0.2408 -0.1061 -0.6603 0.22 -0.7102l2.5418 -0.3889Z" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} /><path d="m10.5067 5.3435 1.1367 -2.4101c0.1458 -0.3093 0.5674 -0.3093 0.7132 0l1.1368 2.4101 2.5418 0.3888c0.3261 0.0499 0.456 0.4695 0.22 0.7102l-1.839 1.8746 0.434 2.6484c0.0558 0.3401 -0.2853 0.5993 -0.5772 0.4388L12 10.1532l-2.273 1.251c-0.2918 0.1606 -0.6329 -0.0986 -0.5772 -0.4387l0.434 -2.6484 -1.839 -1.8746c-0.2361 -0.2407 -0.1061 -0.6603 0.2201 -0.7102l2.5417 -0.3888Z" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} /></svg>
          ),
          benefits: ["Safety guidelines", "Quality checks", "Temperature monitoring", "Compliance tracking"]
        },
        {
          title: "Community Engagement",
          description: "Build stronger communities through food sharing. Our platform facilitates connections between donors, volunteers, and recipients, creating lasting social impact.",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Diversity-3--Streamline-Rounded-Material" height={24} width={24} ><desc>{"Diversity 3 Streamline Icon: https://streamlinehq.com"}</desc><path fill="#000000" d="M1 19.25V16c0 -0.48335 0.170835 -0.89585 0.5125 -1.2375S2.266665 14.25 2.75 14.25h3.525c0.28335 0 0.55415 0.07085 0.8125 0.2125 0.25835 0.14165 0.47915 0.3375 0.6625 0.5875 0.48335 0.7 1.1 1.24165 1.85 1.625 0.75 0.38335 1.55 0.575 2.4 0.575 0.85 0 1.65 -0.19165 2.4 -0.575 0.75 -0.38335 1.375 -0.925 1.875 -1.625 0.18335 -0.25 0.4 -0.44585 0.65 -0.5875s0.51665 -0.2125 0.8 -0.2125h3.525c0.48335 0 0.89585 0.17085 1.2375 0.5125C22.82915 15.10415 23 15.51665 23 16v3.25c0 0.21665 -0.07085 0.39585 -0.2125 0.5375S22.46665 20 22.25 20h-5c-0.21665 0 -0.39585 -0.07085 -0.5375 -0.2125S16.5 19.46665 16.5 19.25v-2.225c-0.6 0.55 -1.2875 0.975 -2.0625 1.275 -0.775 0.3 -1.5875 0.45 -2.4375 0.45 -0.85 0 -1.65835 -0.15 -2.425 -0.45 -0.76665 -0.3 -1.45835 -0.725 -2.075 -1.275v2.225c0 0.21665 -0.07085 0.39585 -0.2125 0.5375S6.96665 20 6.75 20h-5c-0.216665 0 -0.395835 -0.07085 -0.5375 -0.2125C1.070835 19.64585 1 19.46665 1 19.25Zm11 -3.5c-0.58335 0 -1.14585 -0.1375 -1.6875 -0.4125 -0.54165 -0.275 -0.97915 -0.65415 -1.3125 -1.1375 -0.26665 -0.38335 -0.5875 -0.69165 -0.9625 -0.925 -0.375 -0.23335 -0.77915 -0.39165 -1.2125 -0.475 0.48335 -0.5 1.24165 -0.88335 2.275 -1.15 1.03335 -0.26665 2 -0.4 2.9 -0.4 0.9 0 1.87085 0.13335 2.9125 0.4 1.04165 0.26665 1.80415 0.65 2.2875 1.15 -0.43335 0.08335 -0.8375 0.24165 -1.2125 0.475 -0.375 0.23335 -0.69585 0.54165 -0.9625 0.925 -0.33335 0.48335 -0.77085 0.8625 -1.3125 1.1375 -0.54165 0.275 -1.1125 0.4125 -1.7125 0.4125ZM4 12.5c-0.75 0 -1.395835 -0.27085 -1.9375 -0.8125C1.520835 11.14585 1.25 10.5 1.25 9.75c0 -0.76665 0.270835 -1.41665 0.8125 -1.95C2.604165 7.26665 3.25 7 4 7c0.766665 0 1.41665 0.26665 1.95 0.8s0.8 1.18335 0.8 1.95c0 0.75 -0.26665 1.39585 -0.8 1.9375S4.766665 12.5 4 12.5Zm16 0c-0.75 0 -1.39585 -0.27085 -1.9375 -0.8125S17.25 10.5 17.25 9.75c0 -0.76665 0.27085 -1.41665 0.8125 -1.95S19.25 7 20 7c0.76665 0 1.41665 0.26665 1.95 0.8s0.8 1.18335 0.8 1.95c0 0.75 -0.26665 1.39585 -0.8 1.9375S20.76665 12.5 20 12.5Zm-8 -3c-0.75 0 -1.39585 -0.27085 -1.9375 -0.8125S9.25 7.5 9.25 6.75c0 -0.76665 0.27085 -1.41665 0.8125 -1.95C10.60415 4.266665 11.25 4 12 4c0.76665 0 1.41665 0.266665 1.95 0.8 0.53335 0.53335 0.8 1.18335 0.8 1.95 0 0.75 -0.26665 1.39585 -0.8 1.9375S12.76665 9.5 12 9.5Z" strokeWidth={0.5} /></svg>
          ),
          benefits: ["Community events", "Social networking", "Impact reporting", "Recognition programs"]
        },
        {
          title: "Analytics Dashboard",
          description: "Access detailed insights about your donations, impact, and community engagement. Make data-driven decisions to maximize your contribution to food waste reduction.",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Grid-View--Streamline-Rounded-Material" height={24} width={24} ><desc>{"Grid View Streamline Icon: https://streamlinehq.com"}</desc><path fill="#000000" d="M4.5 11.25c-0.4125 0 -0.765585 -0.1469 -1.05925 -0.44075C3.146915 10.5156 3 10.1625 3 9.75V4.5c0 -0.4125 0.146915 -0.765665 0.44075 -1.0595C3.734415 3.146835 4.0875 3 4.5 3h5.25c0.4125 0 0.76565 0.146835 1.0595 0.4405 0.29365 0.293835 0.4405 0.647 0.4405 1.0595v5.25c0 0.4125 -0.14685 0.7656 -0.4405 1.05925 -0.29385 0.29385 -0.647 0.44075 -1.0595 0.44075H4.5ZM4.5 21c-0.4125 0 -0.765585 -0.1469 -1.05925 -0.44075C3.146915 20.2656 3 19.9125 3 19.5V14.25c0 -0.4125 0.146915 -0.76565 0.44075 -1.0595C3.734415 12.89685 4.0875 12.75 4.5 12.75h5.25c0.4125 0 0.76565 0.14685 1.0595 0.4405 0.29365 0.29385 0.4405 0.647 0.4405 1.0595V19.5c0 0.4125 -0.14685 0.7656 -0.4405 1.05925 -0.29385 0.29385 -0.647 0.44075 -1.0595 0.44075H4.5Zm9.75 -9.75c-0.4125 0 -0.7656 -0.1469 -1.05925 -0.44075 -0.29385 -0.29365 -0.44075 -0.64675 -0.44075 -1.05925V4.5c0 -0.4125 0.1469 -0.765665 0.44075 -1.0595C13.4844 3.146835 13.8375 3 14.25 3H19.5c0.4125 0 0.76565 0.146835 1.0595 0.4405C20.85315 3.734335 21 4.0875 21 4.5v5.25c0 0.4125 -0.14685 0.7656 -0.4405 1.05925 -0.29385 0.29385 -0.647 0.44075 -1.0595 0.44075H14.25Zm0 9.75c-0.4125 0 -0.7656 -0.1469 -1.05925 -0.44075C12.8969 20.2656 12.75 19.9125 12.75 19.5V14.25c0 -0.4125 0.1469 -0.76565 0.44075 -1.0595 0.29365 -0.29365 0.64675 -0.4405 1.05925 -0.4405H19.5c0.4125 0 0.76565 0.14685 1.0595 0.4405 0.29365 0.29385 0.4405 0.647 0.4405 1.0595V19.5c0 0.4125 -0.14685 0.7656 -0.4405 1.05925C20.26565 20.8531 19.9125 21 19.5 21H14.25ZM4.5 9.75h5.25V4.5H4.5v5.25Zm9.75 0H19.5V4.5H14.25v5.25Zm0 9.75H19.5V14.25H14.25V19.5ZM4.5 19.5h5.25V14.25H4.5V19.5Z" strokeWidth={0.5} /></svg>
          ),
          benefits: ["Real-time metrics", "Custom reports", "Trend analysis", "Goal tracking"]
        }
      ];
  return (
    <>
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-[#B7B1F2] font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-dark sm:text-5xl">
            Powerful Tools for Food Waste Reduction
          </p>
          <p className="mt-4 max-w-3xl text-xl text-gray-500 lg:mx-auto">
            Our comprehensive platform provides everything you need to make a difference in food waste reduction and community support.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="relative p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="absolute -top-4 left-4">
                  <div className="inline-flex p-3 bg-[#B1AFFF] rounded-xl shadow-lg">
                    {feature.icon}
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-dark mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-500">
                        <svg className="h-4 w-4 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Features