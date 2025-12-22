export interface ProjectSection {
  type: 'text' | 'image' | 'design-goals' | 'funnel-chart' | 'design-strategy' | 'exploring-interaction' | 'user-testing' | 'user-testing-results' | 'challenge-cards' | 'table' | 'vibe-coding-demos' | 'homeowner-needs' | 'diagram';
  title?: string; // For text sections
  content?: string; // For text sections
  images?: string[]; // For image sections
  componentName?: string; // For diagram sections - name of the imported component to render
  subsections?: { // For sections with nested content (e.g., Solution with multiple sub-points)
    title?: string; // Subsection title (h3)
    content?: string; // Subsection content
    image?: string; // Subsection image URL
  }[];
  goals?: { // For design-goals sections
    stage: string;
    title: string;
    description: string;
  }[];
  funnelData?: { // For funnel-chart sections
    paths: {
      name: string;
      color: string;
      steps: {
        label: string;
        rate: number;
      }[];
      totalRate: number;
    }[];
  };
  strategies?: { // For design-strategy sections
    number: string;
    title: string;
    description: string;
  }[];
  testingResults?: { // For user-testing-results sections
    rounds: {
      roundNumber: number;
      location: string;
      totalUsers: number;
      preferNewVersion: number;
      quotes: string[];
    }[];
  };
  challenges?: { // For challenge-cards sections
    title: string;
    content: string;
    icon?: string; // Icon name from lucide-react
  }[];
  tableData?: { // For table sections
    headers: string[];
    rows: {
      phase: string;
      items: string[];
    }[];
  };
  needs?: { // For homeowner-needs sections
    type: string;
    examples: string;
  }[];
}

// Theme configuration for each project
export interface ProjectTheme {
  primaryColor: string;           // Main accent color (e.g., #51e9d6)
  primaryColorDark: string;        // Darker version for gradients (e.g., #2e8b7a)
  cardBackground: string;          // Background for cards (e.g., #2d4a3e)
  cardBackgroundAlt: string;       // Alternative card background (e.g., #2a3a36)
  accentBackground: string;        // Accent background color (e.g., #1a2e2a)
  glowColor: string;               // Color for glow effects
}

// Feature flags for special functionality
export interface ProjectFeatures {
  enableEmojiReveal?: boolean;          // Show emoji on scroll for specific sections
  enableTeamTooltips?: boolean;         // Show team member tooltips with initials
  enableSpecialImageLayouts?: boolean;  // Enable custom image layouts for specific sections
}

export interface ProjectData {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  description: string;
  timeline: string;
  roleDetails: string[];
  teamSize: number;
  heroImage: string;
  heroImageAspectRatio?: string; // Optional aspect ratio for hero image (e.g., "16/9", "21/9", "4/3")
  sections: ProjectSection[];
  tags: string[];
  theme: ProjectTheme;       // Theme colors for this project
  features?: ProjectFeatures; // Optional feature flags
}