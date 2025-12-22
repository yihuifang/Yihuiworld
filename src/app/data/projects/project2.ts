import { ProjectData } from '../projectTypes';

export const project2: ProjectData = {
  id: 2,
  title: "AI-Native Interior Design Tool",
  subtitle: "Reimagining design workflows through AI agents and infinite canvas",
  category: "0-1 Product",
  image: "https://qhstaticssl.kujiale.com/image/png/1766415300151/0BBFCCAFB83EDB18167527BBA683830D.png",
  description: "An AI-powered interior design tool built on an infinite canvas that transforms how designers work.",
  timeline: "Nov 2025 - Present",
  roleDetails: ["Product Design", "User Research", "Interaction Design", "Prototyping"],
  teamSize: 4,
  heroImage: "https://qhstaticssl.kujiale.com/image/png/1766404883209/BC2D0DE6E598A1B23D3D5907786D20AA.png",
  heroImageAspectRatio: "16/9",
  sections: [
    {
      type: 'text',
      title: 'Overview',
      content: "In this project, we're rebuilding the traditional interior design tool's layout and interaction flow, creating an AI-native tool based on an infinite canvas. We're exploring how AI agents can help users achieve goals within complex workflows, and how to rebuild user mental models in a completely new system freed from fixed UI layouts.\n\nThe product is expected to launch in February 2026."
    },
    {
      type: 'text',
      title: 'Context',
      content: "Technology are changing fast, but our fixed UI hasn't kept up. Retention is flat, AIGC is reshaping the industry. It's urgent to create an AI-native tool in the interior design space to address dual challenges and reshape the Coohom user experience."
    },
    {
      type: 'challenge-cards',
      challenges: [
        {
          title: 'Business challenges',
          content: "• New user weekly retention stagnant, far below 20% target\n• AIGC disrupting traditional modeling → rendering workflow\n• Need to explore AI-native design tool paradigm",
          icon: 'Briefcase'
        },
        {
          title: 'User challenges',
          content: "• Fragmented workflows across separate environments exhaust users\n• No efficient way to compare design iterations\n• Technical debt prevents fixing core UX issues",
          icon: 'Users'
        }
      ]
    },
    {
      type: 'text',
      title: 'Target users',
      content: "As a part of Coohom family, the new tool also targets at interior designers and homeowners."
    },
    {
      type: 'text',
      title: '1. Interior designers',
      content: "Due to the divergent and uncontrollable nature of AI-generated results, we deconstructed the interior designer's workflow stages. AI aligns best with the early-stage that emphasizes visual communication over precision."
    },
    {
      type: 'table',
      tableData: {
        headers: ['Client Intake', 'Space Planning', 'Concept Design', 'Design Development', 'Documentation'],
        rows: [
          {
            phase: 'Deliverables',
            items: [
              'Design brief\nFunctional requirements diagram',
              'Space list\nBubble diagram',
              'Mood board\nStyle direction\nPreliminary design overview',
              'Detailed drawings\nMaterial, furniture, window selection\nComplete illustrations',
              'Construction drawings\nSpecs'
            ]
          }
        ]
      }
    },
    {
      type: 'text',
      title: '2. Homeowners',
      content: "We collected extensive homeowner requests from Reddit channels. After [[categorization|https://qhstaticssl.kujiale.com/image/jpeg/1766411669010/D7181ED82E695A78063C106428E7799C.jpg]], approximately 80% fall into two main types:"
    },
    {
      type: 'homeowner-needs',
      needs: [
        {
          type: 'Style and aesthetic enhancement',
          examples: 'e.g. Hoping to transform a living room into mid-century modern style; bathroom cabinet color replacement and plant pairing.'
        },
        {
          type: 'Space planning and functional optimization',
          examples: 'e.g. Seeking living-dining room layout solutions with existing furniture; safety design to prevent children from approaching the stove.'
        }
      ]
    },
    {
      type: 'text',
      title: 'Insights',
      content: "The two types of homeowner needs correspond to Interior Designer's stages 2 and 3, representing core user demands. Style and aesthetic-related needs can now be well-assisted by state-of-the-art image generation models (such as Nano Banana 3), while space planning-related needs present a distinct opportunity for our product, as Coohom has a solid foundation in spatial intelligent layout algorithms."
    },
    {
      type: 'text',
      title: 'Pattern',
      content: "After defining target users and their needs, we entered the product design phase. First question: What design pattern should we adopt for AI and our tool?"
    },
    {
      type: 'text',
      title: 'Option 1: Agent + Design Tool (❌)',
      content: "This pattern adds a chatbot to traditional interfaces. Although it can help through conversation, the problems of fragmented environments and inability to display iterations together remain unsolved. This wasn't our goal."
    },
    {
      type: 'image',
      images: [
        "https://qhstaticssl.kujiale.com/image/png/1766413329649/80B0BE1C63E3AF5A30E7A85FA2AC7177.png"
      ]
    },
    {
      type: 'text',
      title: 'Option 2: Agent + Infinite Canvas (✅)',
      content: "Inspired by creative tools like Lovart, we believe the infinite canvas format perfectly aligns with our goals. No more fixed UI patterns—all design resources appear on the canvas as users envision. No more environment distinctions or separated options. Design becomes unlimited.\n\nThis format also facilitates integration with external AI models, offering excellent scalability: image generation, video generation, model generation, space generation, and more."
    },
    {
      type: 'image',
      images: [
        "https://qhstaticssl.kujiale.com/image/png/1766418370303/D62FDC0E8FC4DBC035B71166633C9CAE.png"
      ]
    },
    {
      type: 'text',
      title: 'Design challenge',
      content: "Although key patterns emerged, moving a stage-based interior design workflow onto an infinite canvas introduced new connections between previously isolated resources, leaving several uncertainties to explore.\n\nWith no clear answers within the team, I took the initiative as the product designer to explore possible directions. I used vibe coding to prototype user workflows and build interactive demos, which served as concrete artifacts for team discussion and alignment."
    },
    {
      type: 'vibe-coding-demos',
      title: 'Vibe coding demos',
    },
    {
      type: 'image',
      images: [
        "https://qhstaticva-cos.kujiale.com/media/yun/help/video/UID_ad864c89_f1d5_4820_1766419483536.mp4",
        "https://qhstaticva-cos.kujiale.com/media/yun/help/video/UID_b37d44d2_695f_4d04_1766420244120.mp4"
      ]
    },
    {
      type: 'text',
      content: "Through the demo process, several challenges received detailed consideration and discussion. The core design challenge is obvious: the disconnect between system behavior and user understanding. \n\nThe system **progresses sequentially based on a finite set of rules**, while users **explore in a non-linear, iterative manner**—freely moving back and forth as they refine ideas and test possibilities."
    },
    {
      type: 'diagram',
      componentName: 'SystemVsUsersDiagram'
    },
    {
      type: 'text',
      title: 'Solution',
      subsections: [
        {
          title: '1. Guide at the right moment',
          content: "Instead of relying on a single control surface, guidance is distributed across the canvas, dialogs, and select menus—appearing only when it is relevant to the user's current state.",
          image: "https://qhstaticssl.kujiale.com/image/png/1766428166395/5319F5DC07BB6AC8BBE1E10CEBABEF08.png"
        },
        {
          title: '2. Externalize state to the canvas',
          content: "All AI-generated results and asset states are surfaced directly on the canvas as editable objects. This allows users to see, understand, and manipulate AI outputs in context.",
          image: "https://qhstaticssl.kujiale.com/image/png/1766429224585/7AEC89B7822F9FDAF06ADCEEC2E03A02.png"
        },
        {
          title: '3. Support iteration and backtracking',
          content: "Users can freely iterate, revise, or revert AI-assisted steps without penalty.\nRelated resources are visually linked to externalize iteration paths. Assets with the same origin are automatically organized into sections, providing structure by default while allowing users full control to reorganize and customize them.",
          image: "https://qhstaticssl.kujiale.com/image/png/1766430296772/0A62125E57DF01CD7AE499D2EC79E0D1.png"
        }
      ]
    },
    {
      type: 'text',
      title: "What's next",
      content: "Currently, we're in intensive development, including AI prompt refinement and brand definition. We're looking forward to a successful launch in 2026."
    }
  ],
  tags: ["Product Design", "AI/ML", "Interaction Design", "Prototyping"],
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