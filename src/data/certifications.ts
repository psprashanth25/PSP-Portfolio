import { Certification } from '../types';

export const certifications: Certification[] = [
  {
    id: 'oci-genai-2025',
    title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
    issuer: 'Oracle',
    date: '2025',
    category: 'Cloud & Artificial Intelligence',
    description:
      'Demonstrates professional proficiency in Large Language Models (LLMs), Generative AI services on Oracle Cloud Infrastructure, prompt engineering, fine-tuning, retrieval-augmented generation (RAG), and deploying scalable AI solutions.',
    badgeColor: '#f97316'
  },
  {
    id: 'oci-foundations-2025',
    title: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
    issuer: 'Oracle',
    date: '2025',
    category: 'Cloud Computing & Infrastructure',
    description:
      'Validates foundational knowledge of Oracle Cloud Infrastructure core concepts, compute instances, virtual cloud networking (VCN), security architecture, identity and access management (IAM), and cloud database services.',
    badgeColor: '#ea580c'
  },
  {
    id: 'hedera-certification',
    title: 'Hedera Certified Associate / Developer',
    issuer: 'Hedera',
    date: '2024',
    category: 'Distributed Ledger & Web3',
    description:
      'Validates understanding of distributed consensus algorithms, the Hedera Hashgraph network architecture, token service, consensus service, and decentralized application fundamentals.',
    badgeColor: '#6366f1'
  },
  {
    id: 'rinex-internship',
    title: 'Software Development Internship Certification',
    issuer: 'Rinex Technologies',
    date: '2024',
    category: 'Practical Engineering & Industry Experience',
    description:
      'Certified completion of hands-on software development training and engineering assignments, focusing on web development fundamentals, teamwork, and system implementation.',
    badgeColor: '#10b981'
  },
  {
    id: 'rinex-course',
    title: 'MERN Full Stack Web Development',
    issuer: 'RINEX AI',
    date: '2024',
    category: 'Full-Stack Web Development',
    description:
      'Certified comprehensive training covering MERN full-stack development methodologies, core programming, React frontend components, Node/Express REST APIs, and MongoDB integration.',
    badgeColor: '#38bdf8'
  }
];
