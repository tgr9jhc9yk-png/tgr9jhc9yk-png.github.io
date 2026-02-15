{\rtf1\ansi\ansicpg1252\cocoartf2867
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Mobile Menu Toggle\
const mobileMenuToggle = document.getElementById('mobileMenuToggle');\
const navMenu = document.getElementById('navMenu');\
\
mobileMenuToggle.addEventListener('click', () => \{\
    navMenu.classList.toggle('active');\
\});\
\
// Close mobile menu when clicking on a link\
const navLinks = document.querySelectorAll('.nav-link');\
navLinks.forEach(link => \{\
    link.addEventListener('click', () => \{\
        navMenu.classList.remove('active');\
    \});\
\});\
\
// Smooth Scrolling\
document.querySelectorAll('a[href^="#"]').forEach(anchor => \{\
    anchor.addEventListener('click', function (e) \{\
        e.preventDefault();\
        const target = document.querySelector(this.getAttribute('href'));\
        if (target) \{\
            target.scrollIntoView(\{\
                behavior: 'smooth',\
                block: 'start'\
            \});\
        \}\
    \});\
\});\
\
// Header Scroll Effect\
window.addEventListener('scroll', () => \{\
    const header = document.getElementById('header');\
    if (window.scrollY > 100) \{\
        header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';\
        header.style.padding = '0.5rem 0';\
    \} else \{\
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';\
        header.style.padding = '1rem 0';\
    \}\
\});\
\
// Form Submission\
const contactForm = document.getElementById('contactForm');\
if (contactForm) \{\
    contactForm.addEventListener('submit', (e) => \{\
        e.preventDefault();\
        alert('Thank you for your inquiry! We will contact you within 24 hours.');\
        contactForm.reset();\
    \});\
\}\
\
// Scroll\
}