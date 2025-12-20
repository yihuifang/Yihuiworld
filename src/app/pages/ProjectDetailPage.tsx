import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { GridBackground } from '../components/GridBackground';

const projects = [
  {
    id: 1,
    title: "EcoSmart Dashboard",
    subtitle: "Reimagining energy monitoring for the modern smart home",
    year: "2024",
    timeline: "Jan - Mar 2024",
    role: "Lead Product Designer",
    roleDetails: ["Product Strategy", "Interface Design", "User Research", "Prototyping"],
    company: "EcoSolutions Inc.",
    duration: "3 months",
    team: "2 Designers, 3 Engineers",
    teamSize: 5,
    heroImage: "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkYXNoYm9hcmQlMjB1aSUyMGRlc2lnbnxlbnwxfHx8fDE3NjYyMjA0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    overview: "EcoSmart Dashboard transforms complex energy data into actionable insights for homeowners. The challenge was to create an interface that makes IoT device management intuitive while providing real-time analytics that drive sustainable behavior.",
    challenge: "Modern smart homes generate massive amounts of energy consumption data, but most homeowners struggle to understand their usage patterns. Existing solutions were either too technical for average users or too simplified to provide real value. We needed to strike a balance between depth and accessibility.",
    solution: "We designed a dashboard that uses progressive disclosure to serve both casual users and power users. The main view provides at-a-glance insights with color-coded alerts, while detailed analytics are available through intuitive drill-downs. Predictive algorithms suggest optimization opportunities, and the interface adapts based on user behavior patterns.",
    impact: "Within three months of launch, EcoSmart users reduced their energy consumption by an average of 23%. The dashboard achieved a 4.8/5 rating on the App Store, with users praising its clarity and actionable recommendations.",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
    ],
    tags: ["Product Design", "Dashboard UI", "Data Visualization", "IoT"]
  },
  {
    id: 2,
    title: "Lumina Mobile App",
    subtitle: "Bringing the magic of light control to your fingertips",
    year: "2024",
    timeline: "Oct 2023 - Jan 2024",
    role: "UI/UX Designer",
    roleDetails: ["Mobile Design", "Interaction Design", "Visual Design", "User Testing"],
    company: "Lumina Home Labs",
    duration: "4 months",
    team: "1 Designer, 4 Engineers",
    teamSize: 5,
    heroImage: "https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzY2MTc3NzU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    overview: "Lumina reimagines smart lighting control by focusing on the emotional and tactile qualities of light. Rather than treating lights as simple on/off switches, we created an experience that celebrates the artistry of illumination.",
    challenge: "Most smart lighting apps feel cold and technical, missing the warmth and personality that light brings to our spaces. Users wanted something that felt more like a creative tool than a utility app. The challenge was to maintain precision control while evoking an emotional connection.",
    solution: "We developed a custom interface where users interact with light through gesture-based controls that feel natural and responsive. The app's UI adapts its color scheme to match the active lighting scene, creating an immersive experience. Scene creation uses a visual, mood-based approach rather than technical parameters.",
    impact: "Lumina became the #1 smart lighting app in its category within two months. User engagement increased 3x compared to the previous version, with 67% of users creating custom scenes—far exceeding the industry average of 15%.",
    images: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
    ],
    tags: ["Mobile Design", "Interaction Design", "iOS", "Smart Home"]
  },
  {
    id: 3,
    title: "Aura Brand Identity",
    subtitle: "Crafting a visual language for modern wellness",
    year: "2023",
    timeline: "Nov - Dec 2023",
    role: "Brand Designer",
    roleDetails: ["Brand Strategy", "Visual Identity", "Typography", "Print Design"],
    company: "Aura Wellness",
    duration: "2 months",
    team: "Solo Project",
    teamSize: 1,
    heroImage: "https://images.unsplash.com/photo-1760444748414-fc25608ff568?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGlkZW50aXR5JTIwZGVzaWduJTIwY2xlYW58ZW58MXx8fHwxNzY2MjIwNDA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    overview: "Aura Wellness needed a brand identity that would position them as a premium leader in the crowded wellness space. The identity had to communicate calm, clarity, and transformation while remaining approachable and human.",
    challenge: "The wellness industry is saturated with similar visual approaches—soft pastels, minimalist sans-serifs, and nature imagery. Aura needed to stand out while still feeling familiar and trustworthy to their target audience of busy professionals seeking balance.",
    solution: "We created a distinctive identity system centered around a custom wordmark that balances elegance with warmth. The color palette uses unexpected combinations—deep forest green paired with warm terracotta—that feel grounding rather than clinical. Typography choices emphasize readability and sophistication.",
    impact: "The rebrand led to a 45% increase in premium membership sign-ups within the first quarter. Brand recognition in key demographics improved by 38%, and the visual system has been successfully applied across 15+ touchpoints from digital to physical spaces.",
    images: [
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
    ],
    tags: ["Branding", "Visual Identity", "Typography", "Print Design"]
  },
  {
    id: 4,
    title: "Zenith Productivity",
    subtitle: "Designing focus in a world of distraction",
    year: "2023",
    timeline: "May - Sep 2023",
    role: "Product Designer",
    roleDetails: ["Product Design", "UX Research", "Information Architecture", "Usability Testing"],
    company: "Zenith Labs",
    duration: "5 months",
    team: "2 Designers, 5 Engineers, 1 Researcher",
    teamSize: 8,
    heroImage: "https://images.unsplash.com/photo-1706509511838-4b101f379ef3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwZGVzaWduJTIwdWklMjB1eCUyMHdlYiUyMG1vYmlsZSUyMGFwcCUyMG1pbmltYWxpc3QlMjBjbGVhbnxlbnwxfHx8fDE3NjYyMjA0MDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    overview: "Zenith reimagines productivity tools for the age of deep work. Instead of adding more features, we focused on reducing digital noise and helping knowledge workers enter and maintain flow states.",
    challenge: "Research showed that the average knowledge worker is interrupted every 11 minutes, and it takes 23 minutes to refocus. Most productivity tools ironically contribute to this problem with notifications, badges, and attention-grabbing UI. We needed to create a tool that actively protects focus.",
    solution: "We introduced 'Monk Mode'—a contextual awareness system that intelligently manages notifications across all integrated apps. The UI is intentionally sparse, using subtle motion and typography to guide attention without distraction. Sessions are tracked with gentle visual cues rather than intrusive timers.",
    impact: "Early adopters reported a 30% increase in daily 'deep work' sessions. The average session length increased from 45 minutes to 78 minutes. Zenith has been featured in several productivity publications and maintains a 4.7/5 rating with over 50,000 active users.",
    images: [
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
    ],
    tags: ["Product Design", "UX Research", "Productivity", "Web App"]
  }
];

export function ProjectDetailPage() {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id || ''));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <p>Project not found</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#2e2e2e] min-h-screen"
    >
      {/* Full Screen Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-4 md:px-8 pt-24 pb-20 overflow-hidden">
        {/* 网格背景 */}
        <GridBackground />
        
        <div className="relative z-10 max-w-[1100px] w-full mx-auto flex-1 flex flex-col justify-center">
          {/* Main Title */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-20 md:mb-32"
          >
            <h1 className="font-['Nunito_Sans'] font-black text-6xl md:text-8xl lg:text-9xl text-[#51e9d6] leading-[0.9] mb-6">
              {project.title}.
            </h1>
          </motion.div>

          {/* Meta Info Grid */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16"
          >
            {/* Timeline */}
            <div>
              <div className="text-white/50 text-sm font-['Nunito_Sans'] mb-3">Timeline</div>
              <div className="text-white font-['Nunito_Sans'] text-lg">{project.timeline}</div>
            </div>

            {/* Team */}
            <div>
              <div className="text-white/50 text-sm font-['Nunito_Sans'] mb-3">Team</div>
              <div className="flex items-center gap-3">
                {/* Team member circles */}
                {Array.from({ length: Math.min(project.teamSize, 4) }).map((_, i) => (
                  <div 
                    key={i} 
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-[#51e9d6] to-[#2e8b7a] border-2 border-[#2e2e2e]"
                    style={{ marginLeft: i > 0 ? '-8px' : '0' }}
                  />
                ))}
                {project.teamSize > 4 && (
                  <span className="text-white/70 text-sm font-['Nunito_Sans'] ml-2">
                    +{project.teamSize - 4}
                  </span>
                )}
              </div>
            </div>

            {/* Role */}
            <div>
              <div className="text-white/50 text-sm font-['Nunito_Sans'] mb-3">Role</div>
              <div className="text-white font-['Nunito_Sans'] text-lg leading-relaxed">
                {project.roleDetails.join(', ')}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="relative z-10 mt-16"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 bg-white/40 rounded-full"
            />
          </div>
        </motion.div>
        
        {/* 渐变过渡层 */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#2e2e2e] pointer-events-none z-20"></div>
      </section>

      {/* Hero Image */}
      <motion.section
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="px-4 md:px-8 mb-24"
      >
        <div className="max-w-[1100px] mx-auto">
          <div className="rounded-2xl overflow-hidden aspect-video border border-white/10">
            <img 
              src={project.heroImage} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* Content Sections */}
      <div className="max-w-[1100px] mx-auto px-4 md:px-8 space-y-24 pb-32">
        {/* Overview */}
        <motion.section
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#51e9d6] mb-6">Overview</h2>
          <p className="text-2xl md:text-3xl text-white font-['Nunito_Sans'] leading-relaxed">
            {project.overview}
          </p>
        </motion.section>

        {/* Challenge */}
        <motion.section
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#51e9d6]">Challenge</h2>
          <p className="text-lg text-gray-300 font-['Nunito_Sans'] leading-relaxed">
            {project.challenge}
          </p>
        </motion.section>

        {/* Solution */}
        <motion.section
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#51e9d6]">Solution</h2>
          <p className="text-lg text-gray-300 font-['Nunito_Sans'] leading-relaxed">
            {project.solution}
          </p>
        </motion.section>

        {/* Additional Images */}
        <motion.section
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {project.images.map((image, index) => (
            <div key={index} className="rounded-2xl overflow-hidden border border-white/10">
              <img 
                src={image} 
                alt={`${project.title} - Image ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </motion.section>

        {/* Impact */}
        <motion.section
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#51e9d6]">Impact</h2>
          <p className="text-lg text-gray-300 font-['Nunito_Sans'] leading-relaxed">
            {project.impact}
          </p>
        </motion.section>

        {/* Tags */}
        <motion.section
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-wrap gap-3">
            {project.tags.map(tag => (
              <span 
                key={tag}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/80 font-['Nunito_Sans']"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
}