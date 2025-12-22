import { ProjectData } from '../projectTypes';

export const project1: ProjectData = {
  id: 1,
  title: "Redesign Model Library in Coohom",
  subtitle: "Optimizing new user activation through streamlined model discovery",
  category: "TOOL REDESIGN",
  image: "https://qhstaticssl.kujiale.com/image/png/1766380294103/8049BE7E494EE27A97853C328C56FFAF.png",
  description: "A redesigned model library that reduces friction in model discovery and increases new user activation.",
  timeline: "Jun - Nov 2025",
  roleDetails: ["Product Design", "User Research"],
  teamSize: 5,
  heroImage: "https://qhstaticssl.kujiale.com/image/webp/1766313066797/2D4DADD67BACAB2169B91A2AE74EEBF6.webp",
  heroImageAspectRatio: "16/9",
  sections: [
    {
      type: 'text',
      title: 'Overview',
      content: "This project redesigned the model library to address stagnating new user activation (41%) and increasing friction for experienced users. By flattening the category hierarchy and optimizing model exposure, we aimed to reduce early-stage decision friction while improving discovery efficiency for all user segments."
    },
    {
      type: 'text',
      title: 'Problem',
      content: "In Coohom, placing models on the canvas is the core activation behavior for new users. At the same time, the model library must also support experienced designers who prioritize speed and precision.\n\nHowever, the existing library—largely inherited from the domestic version (Kujiale)—had become a limiting factor. New users often lost their sense of orientation when browsing, while experienced users reported increasing friction navigating the category structure."
    },
    {
      type: 'image',
      images: [
        "https://qhstaticssl.kujiale.com/image/gif/1766317341861/EA3B0F2B20E923969D9E3D9D140DE683.gif"
      ]
    },
    {
      type: 'text',
      content: "As a result, experienced users faced growing friction, while new user activation plateaued at around 40%, signaling a clear opportunity to rethink the model library as a lever for both first-time engagement and long-term efficiency."
    },
    {
      type: 'design-goals',
      title: 'Design goal',
      goals: [
        {
          stage: 'New Users',
          title: 'Activate & Guide',
          description: "Help new users understand the model library and activate drag-and-drop behavior"
        },
        {
          stage: 'Growing Users',
          title: 'Build behavioral patterns',
          description: "Through repeated interactions, guide users to become experienced designers"
        },
        {
          stage: 'Experienced Users',
          title: 'Improve efficiency',
          description: "Optimize model discovery workflow for power users who prioritize speed and precision"
        }
      ]
    },
    {
      type: 'text',
      title: 'Data analysis for new users',
      content: "Behavioral data from new users revealed a distinct pattern: the largest drop always happened at the first step—entering the public library and choosing a category."
    },
    {
      type: 'funnel-chart',
      funnelData: {
        paths: [
          {
            name: 'Public Library → Level 1 → Level 2 → Drag Model',
            color: '#8b5cf6',
            steps: [
              { label: 'Public Library → Level 1', rate: 55.15 },
              { label: 'Level 1 → Level 2', rate: 85.45 },
              { label: 'Level 2 → Drag Model', rate: 87.47 }
            ],
            totalRate: 41.22
          }
        ]
      }
    },
    {
      type: 'text',
      content: "Interestingly, when users searched directly, the drag-and-drop conversion rate reached 93%, indicating that the core issue was not model quality but early-stage decision friction.\n\nAnalysis of model usage revealed strong common patterns among new users: most interactions focused on primary furniture items within the Furniture category—such as closets, beds, and sofas—all of which are Level 2 categories. Usage of Level 3 categories was minimal, on a similar scale to filters for style or color."
    },
    {
      type: 'design-strategy',
      title: 'Design strategy',
      content: 'Based on the data insights, the strategy for new users focuses on reducing early-stage friction and making high-value models more visible:',
      strategies: [
        {
          number: '1',
          title: 'Flatten the hierarchy',
          description: "Allow users to drag and drop models directly from the first screen, eliminating the need to click through Level 1 and Level 2 categories. This reduces decision friction and accelerates initial activation."
        },
        {
          number: '2',
          title: 'Optimize category exposure',
          description: "Promote the most commonly used Level 2 categories (e.g., closets, beds, sofas) to more prominent positions, while de-emphasizing Level 3 categories and less frequently used filters. This ensures new users immediately see the models that matter most."
        }
      ]
    },
    {
      type: 'exploring-interaction',
      title: 'Exploring interaction',
    },
    {
      type: 'image',
      images: [
        "https://qhstaticssl.kujiale.com/image/gif/1766372489061/4F100DC87AC16C3FEC5477BC9F2F6B88.gif",
        "https://qhstaticssl.kujiale.com/image/gif/1766372488388/88AF9F9671F90ADE0F71E0C4BE38D655.gif",
      ]
    },
    {
      type: 'user-testing',
      title: 'User testing',
      content: "Given the significant scope and investment in this redesign, we conducted two rounds of user testing—not only to validate the overall approach, but also to ensure detailed design changes (e.g. image size, panel width) would not introduce unforeseen issues."
    },
    {
      type: 'user-testing-results',
      testingResults: {
        rounds: [
          {
            roundNumber: 1,
            location: '7 users at offline Coohom designer event',
            totalUsers: 7,
            preferNewVersion: 6,
            quotes: [
              "The new version is easier to see and understand. The Favorites/Uploads/Recently Used is more reasonable because the Upload part has been brought out more clear and as said above that part is important to me.",
              "To me the new UI is easy to see, not messy.",
              "The new UI is clearer and more structured, easy for me to find model in library."
            ]
          }
        ]
      }
    },
    {
      type: 'text',
      title: 'Results',
      content: "After two rounds of testing, we gained greater confidence in the new approach and decided to move forward with the Column view—the lower-risk option. Its key advantages: smaller deviation from the existing structure, higher scalability, and better support for multilingual interfaces."

    },
    {
      type: 'image',
      images: [
        "https://qhstaticssl.kujiale.com/image/webp/1766313066797/2D4DADD67BACAB2169B91A2AE74EEBF6.webp"
      ]
    },
    {
      type: 'text',
      title: 'What\'s next',
      content: "We aim to further help users solve the challenge of finding models. Based on the latest version, we are conducting in-depth user research, including surveys and usability testing, to uncover new opportunities and continue refining the experience."
    }
  ],
  tags: ["Product Design", "User Research", "Interaction Design", "User Testing"],
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
