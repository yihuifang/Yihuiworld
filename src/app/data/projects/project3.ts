import { ProjectData } from '../projectTypes';

export const project3: ProjectData = {
  id: 3,
  title: "Save Pattern",
  subtitle: "Establishing a comprehensive design system for data persistence in web tools",
  category: "Design Pattern",
  image: "https://qhstatic-us-s3.coohom.com/image/png/1765534235989/6A16B034C111EA35DD821B262FF64E98.png",
  description: "A systematic approach to designing save mechanisms for web-based creative tools.",
  timeline: "2023 - 2024",
  roleDetails: ["UX Research", "Interaction Design", "Design Systems", "Technical Writing"],
  teamSize: 1,
  heroImage: "https://images.unsplash.com/photo-1693045181254-08462917f681?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBkb2N1bWVudGF0aW9ufGVufDF8fHx8MTc2NjI2MjM1MHww&ixlib=rb-4.1.0&q=80&w=1080",
  heroImageAspectRatio: "3/2",
  sections: [
    {
      type: 'text',
      title: 'Overview',
      content: "In web-based creative tools, data persistence is a foundational feature that's often established early in development and rarely revisited. This project emerged from recognizing a critical gap: designers frequently overlook save mechanisms in daily iterations, yet struggle with save design when creating new modules or products. I set out to create a comprehensive design pattern library that bridges the gap between design thinking and technical implementation."
    },
    {
      type: 'text',
      title: 'Challenge',
      content: "Data saving is heavily constrained by technical limitations, yet designers often lack the fundamental understanding of save technologies needed to make informed design decisions. The challenge was to create a framework that helps designers understand when to use different save mechanisms (auto-save vs. manual save vs. prompted save), how to balance user control with data safety, and how to design appropriate feedback for various save states—all while accounting for technical constraints like network dependency, performance impact, and storage limitations."
    },
    {
      type: 'text',
      title: 'Solution',
      content: "I developed a comprehensive design pattern system that categorizes saves across three dimensions: save objects (file data, settings data, user behavior data), save locations (backend vs. frontend/IndexedDB), and trigger mechanisms (auto-save, manual save, prompted save). The framework establishes two core design principles: error prevention and state visibility. For trigger design, I differentiated between system triggers (timed, conditional, real-time) and manual triggers, providing specific guidance on when to use each. The pattern library includes detailed feedback design guidelines for both success and error states, ensuring designers can create robust save experiences that prevent data loss while minimizing user disruption."
    },
    {
      type: 'text',
      title: 'Impact',
      content: "This design pattern research has been widely shared within the design community through a WeChat article, helping product designers think more systematically about save mechanisms. The framework has been applied to multiple projects at Coohom, including the cloud design tool's save system optimization. By establishing clear design principles and interaction patterns, the work has helped teams reduce data loss incidents while improving user confidence in the platform's reliability. The systematic approach has become a reference for designing similar critical but often-overlooked interactions in web tools."
    }
  ],
  tags: ["Design Systems", "Interaction Design", "UX Research", "Technical Design"],
  theme: {
    primaryColor: '#51e9d6',
    primaryColorDark: '#2e8b7a',
    cardBackground: '#2d4a3e',
    cardBackgroundAlt: '#2a3a36',
    accentBackground: '#1a2e2a',
    glowColor: '#51e9d6'
  },
  features: {
    enableEmojiReveal: true,
    enableTeamTooltips: true,
    enableSpecialImageLayouts: true
  }
};
