// Project data for TechVision portfolio
import glozic from '../assets/glozic.png';
import medeloop from '../assets/medeloop.png';
import freyja from '../assets/freyja.png';
import lifecell from '../assets/lifecell.png';
import helpscout from '../assets/helpscout.png';
import sketch from '../assets/sketch.png';

export const projects = [
  {
    id: 1,
    title: 'TechVision CRM',
    subtitle: 'Customer Relationship Management',
    description: 'Comprehensive CRM solution designed to streamline customer interactions, sales processes, and business relationships. Features advanced analytics, automated workflows, and real-time reporting capabilities.',
    image: glozic,
    category: 'react',
    technologies: ['React.js', 'Node.js', 'PostgreSQL', 'Express.js', 'Material-UI', 'Chart.js'],
    liveUrl: 'https://techvision-crm-demo.vercel.app/',
    githubUrl: 'https://github.com/techvision/crm-system',
    featured: true,
    year: '2024'
  },
  {
    id: 2,
    title: 'Smart Analytics Dashboard',
    subtitle: 'Business Intelligence Platform',
    description: 'Advanced business intelligence platform that transforms raw data into actionable insights. Features real-time data visualization, predictive analytics, and customizable reporting tools for enterprise decision-making.',
    image: medeloop,
    category: 'react',
    technologies: ['React.js', 'TypeScript', 'D3.js', 'Node.js', 'MongoDB', 'AWS'],
    liveUrl: 'https://techvision-analytics.vercel.app/',
    githubUrl: 'https://github.com/techvision/analytics-dashboard',
    featured: true,
    year: '2024'
  },
  {
    id: 3,
    title: 'E-Learning Platform',
    subtitle: 'Online Education System',
    description: 'Modern e-learning platform offering interactive courses, live sessions, and progress tracking. Built with scalable architecture to support thousands of concurrent users with seamless video streaming.',
    image: freyja,
    category: 'react',
    technologies: ['React.js', 'Next.js', 'WebRTC', 'Tailwind CSS', 'Firebase', 'Stripe API'],
    liveUrl: 'https://techvision-learn.vercel.app/',
    githubUrl: 'https://github.com/techvision/e-learning-platform',
    featured: true,
    year: '2024'
  },
  {
    id: 4,
    title: 'IoT Device Manager',
    subtitle: 'Internet of Things Portal',
    description: 'Centralized IoT device management platform enabling real-time monitoring, remote control, and data analytics for connected devices across multiple industries and use cases.',
    image: lifecell,
    category: 'react',
    technologies: ['React.js', 'Redux', 'MQTT', 'Node.js', 'InfluxDB', 'Docker'],
    liveUrl: 'https://techvision-iot.vercel.app/',
    githubUrl: 'https://github.com/techvision/iot-manager',
    featured: true,
    year: '2024'
  },
  {
    id: 5,
    title: 'Digital Banking Solution',
    subtitle: 'Fintech Application',
    description: 'Secure digital banking platform with advanced security features, real-time transactions, and comprehensive financial management tools for modern banking needs.',
    image: helpscout,
    category: 'fintech',
    technologies: ['React.js', 'Node.js', 'Blockchain', 'PostgreSQL', 'JWT', 'Encryption'],
    liveUrl: 'https://techvision-bank.vercel.app/',
    githubUrl: 'https://github.com/techvision/digital-banking',
    featured: false,
    year: '2023'
  },
  {
    id: 6,
    title: 'Healthcare Management System',
    subtitle: 'Medical Records Platform',
    description: 'Comprehensive healthcare management system for hospitals and clinics, featuring patient records, appointment scheduling, and telemedicine capabilities.',
    image: sketch,
    category: 'healthcare',
    technologies: ['React.js', 'TypeScript', 'FHIR', 'Node.js', 'MongoDB', 'WebRTC'],
    liveUrl: 'https://techvision-health.vercel.app/',
    githubUrl: 'https://github.com/techvision/healthcare-system',
    featured: false,
    year: '2023'
  },
  {
    id: 7,
    title: 'Supply Chain Optimizer',
    subtitle: 'Logistics Management',
    description: 'AI-powered supply chain optimization platform that streamlines logistics operations, reduces costs, and improves delivery efficiency through predictive analytics.',
    image: glozic,
    category: 'ai',
    technologies: ['React.js', 'Python', 'TensorFlow', 'FastAPI', 'PostgreSQL', 'Redis'],
    liveUrl: 'https://techvision-supply.vercel.app/',
    githubUrl: 'https://github.com/techvision/supply-chain',
    featured: false,
    year: '2023'
  },
  {
    id: 8,
    title: 'Smart City Dashboard',
    subtitle: 'Urban Management Platform',
    description: 'Integrated smart city management platform monitoring traffic, utilities, and public services in real-time to improve urban living quality and operational efficiency.',
    image: medeloop,
    category: 'iot',
    technologies: ['React.js', 'Vue.js', 'Node.js', 'InfluxDB', 'Grafana', 'Kubernetes'],
    liveUrl: 'https://techvision-smartcity.vercel.app/',
    githubUrl: 'https://github.com/techvision/smart-city',
    featured: false,
    year: '2023'
  }
];

export const categories = [
  { id: 'all', label: 'All Projects', count: projects.length },
  { id: 'react', label: 'React.js', count: projects.filter(p => p.category === 'react').length },
  { id: 'fintech', label: 'Fintech', count: projects.filter(p => p.category === 'fintech').length },
  { id: 'healthcare', label: 'Healthcare', count: projects.filter(p => p.category === 'healthcare').length },
  { id: 'ai', label: 'AI/ML', count: projects.filter(p => p.category === 'ai').length },
  { id: 'iot', label: 'IoT', count: projects.filter(p => p.category === 'iot').length }
];

export const featuredProjects = projects.filter(project => project.featured);
