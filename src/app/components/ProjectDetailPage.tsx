import React, { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Layers,
  Eye,
  Heart,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  TrendingUp,
  Users,
  Briefcase,
  FileText,
  Lightbulb,
} from "lucide-react";
import { GridBackground } from "./GridBackground";
import {
  projectsData,
  ProjectSection,
  ProjectData,
  ProjectTheme,
} from "../data/projects";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "./ui/tooltip";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { BrowserFrame } from "./BrowserFrame";
import { FlipCard } from "./FlipCard";
import { MetricCard } from "./MetricCard";
import { HeroImage, GifImage, SkeletonImage } from "./SkeletonImage";
import SystemVsUsersDiagram from "../../imports/Img";

interface ProjectDetailPageProps {
  project: ProjectData;
}

export function ProjectDetailPage({
  project,
}: ProjectDetailPageProps) {
  const [showEmojis, setShowEmojis] = useState(false);
  const [viewMode, setViewMode] = useState<"list" | "column">(
    "list",
  );
  const [imageModalUrl, setImageModalUrl] = useState<string | null>(null);
  const gifRef = useRef<HTMLDivElement>(null);
  const thresholdScrollY = useRef<number | null>(null);

  // Extract theme and features for easier access with defaults
  const theme = project.theme || {
    primaryColor: '#51e9d6',
    primaryColorDark: '#2e8b7a',
    cardBackground: '#2d4a3e',
    cardBackgroundAlt: '#2a3a36',
    accentBackground: '#1a2e2a',
    glowColor: '#51e9d6'
  };
  const features = project.features || {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Scroll listener for emoji reveal on GIF
  useEffect(() => {
    const handleScroll = () => {
      if (gifRef.current && features.enableEmojiReveal) {
        const rect = gifRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const currentScrollY = window.scrollY;

        // Check if 2/3 of the image is visible
        const imageHeight = rect.height;
        const visibleHeight =
          Math.min(rect.bottom, windowHeight) -
          Math.max(rect.top, 0);
        const visibleRatio = visibleHeight / imageHeight;

        // Record the threshold scroll position when GIF first reaches 2/3 visibility
        if (
          visibleRatio >= 0.66 &&
          thresholdScrollY.current === null
        ) {
          thresholdScrollY.current = currentScrollY;
        }

        // Show emojis if we've scrolled past the threshold
        if (thresholdScrollY.current !== null) {
          setShowEmojis(
            currentScrollY >= thresholdScrollY.current,
          );
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, [project.id]);

  // Calculate next project ID - Toggle between project 1 and 2
  const nextProjectId = project.id === 1 ? 2 : 1;
  const nextProject = projectsData.find(
    (p) => p.id === nextProjectId,
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen bg-gradient-to-br from-[#1a2e2a] via-[#2e2e2e] to-[#2a2e2e]"
    >
      {/* 环境光效果层 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{ backgroundColor: `${theme.primaryColor}0D` }} // 5% opacity
        ></div>
        <div 
          className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] rounded-full blur-[100px]"
          style={{ backgroundColor: `${theme.primaryColorDark}14` }} // 8% opacity
        ></div>
      </div>

      {/* Hero Section */}
      <section className="relative px-4 md:px-8 pt-[200px] pb-20 overflow-hidden">
        <GridBackground />

        {/* 主题色渐变装饰层 */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] blur-3xl pointer-events-none z-0"
          style={{ 
            background: `linear-gradient(to bottom, ${theme.primaryColor}33, ${theme.primaryColor}0D, transparent)` 
          }}
        ></div>

        <div className="relative z-10 max-w-[1100px] w-full mx-auto">
          {/* Main Title */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-16 md:mb-20"
          >
            <h1 className="font-['Nunito_Sans'] font-black text-[96px] text-[rgb(255,255,255)] leading-[1.2] mb-6 text-center">
              {project.title}
            </h1>
          </motion.div>

          {/* Meta Info Grid */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className={
              project.id === 3
                ? "text-center max-w-[680px] mx-auto"
                : "grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-[680px] mx-auto"
            }
          >
            {project.id === 3 ? (
              <a
                href="https://www.woshipm.com/pd/5654934.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block group cursor-pointer"
              >
                <div className="text-white/70 font-['Nunito_Sans'] text-lg space-y-2">
                  <div>
                    Independent UX pattern exploration, 2022
                  </div>
                  <div>
                    The{" "}
                    <span 
                      className="group-hover:underline transition-colors duration-200"
                      style={{ color: 'inherit' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = theme.primaryColor}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
                    >
                      article
                    </span>{" "}
                    from this study has been syndicated across
                    multiple websites.
                  </div>
                </div>
              </a>
            ) : (
              <>
                {/* Timeline */}
                <div>
                  <div className="text-white/50 text-sm font-['Nunito_Sans'] mb-3">
                    Timeline
                  </div>
                  <div className="text-white font-['Nunito_Sans'] text-lg">
                    {project.timeline}
                  </div>
                </div>

                {/* Team */}
                <div>
                  <div className="text-white/50 text-sm font-['Nunito_Sans'] mb-3">
                    Team
                  </div>
                  <div className="flex items-center gap-3">
                    {features.enableTeamTooltips ? (
                      // Team members with initials and tooltips
                      <>
                        {(project.id === 2 ? [
                          {
                            initials: "YH",
                            bg: "#1a7a6a",
                            role: "Designer",
                          },
                          {
                            initials: "NM",
                            bg: "#0891b2",
                            role: "Designer",
                          },
                          {
                            initials: "RZ",
                            bg: "#7c3aed",
                            role: "PM",
                          },
                          {
                            initials: "QL",
                            bg: "#ea580c",
                            role: "Developer",
                          },
                        ] : [
                          {
                            initials: "YH",
                            bg: "#1a7a6a",
                            role: "Designer",
                          },
                          {
                            initials: "XF",
                            bg: "#6d28d9",
                            role: "PM",
                          },
                          {
                            initials: "BX",
                            bg: "#d97706",
                            role: "PM",
                          },
                          {
                            initials: "SK",
                            bg: "#dc2626",
                            role: "Developer",
                          },
                        ]).map((member, i) => (
                          <Tooltip key={i}>
                            <TooltipTrigger asChild>
                              <div
                                className="w-8 h-8 rounded-full border-2 border-white/30 flex items-center justify-center cursor-pointer"
                                style={{
                                  marginLeft:
                                    i > 0 ? "-12px" : "0",
                                  backgroundColor: member.bg,
                                }}
                              >
                                <span className="text-white text-[10px] font-['Nunito_Sans'] font-bold">
                                  {member.initials}
                                </span>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent className="bg-black text-white border-black">
                              {member.role}
                            </TooltipContent>
                          </Tooltip>
                        ))}
                      </>
                    ) : project.id === 2 ? (
                      // Second project team members with initials and tooltips
                      <>
                        {[
                          {
                            initials: "YH",
                            bg: "#1a7a6a",
                            role: "Designer",
                          },
                          {
                            initials: "NM",
                            bg: "#0891b2",
                            role: "Designer",
                          },
                          {
                            initials: "RZ",
                            bg: "#7c3aed",
                            role: "PM",
                          },
                          {
                            initials: "QL",
                            bg: "#ea580c",
                            role: "Developer",
                          },
                        ].map((member, i) => (
                          <Tooltip key={i}>
                            <TooltipTrigger asChild>
                              <div
                                className="w-8 h-8 rounded-full border-2 border-white/30 flex items-center justify-center cursor-pointer"
                                style={{
                                  marginLeft:
                                    i > 0 ? "-12px" : "0",
                                  backgroundColor: member.bg,
                                }}
                              >
                                <span className="text-white text-[10px] font-['Nunito_Sans'] font-bold">
                                  {member.initials}
                                </span>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent className="bg-black text-white border-black">
                              {member.role}
                            </TooltipContent>
                          </Tooltip>
                        ))}
                      </>
                    ) : (
                      // Other projects - generic avatars
                      Array.from({
                        length: Math.min(project.teamSize, 4),
                      }).map((_, i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full border-2 border-white/30"
                          style={{
                            marginLeft: i > 0 ? "-12px" : "0",
                            background: `linear-gradient(to bottom right, ${theme.primaryColor}, ${theme.primaryColorDark})`
                          }}
                        />
                      ))
                    )}
                  </div>
                </div>

                {/* Role */}
                <div>
                  <div className="text-white/50 text-sm font-['Nunito_Sans'] mb-3">
                    Role
                  </div>
                  <div className="text-white font-['Nunito_Sans'] text-lg leading-relaxed">
                    {project.id === 2 ? "Product Designer" : project.roleDetails.join(", ")}
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </div>

        {/* 渐变过渡层 - 让网格平滑过渡到下方内容 */}
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
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <HeroImage
              src={project.heroImage}
              alt={project.title}
              className="w-full"
              aspectRatio={project.heroImageAspectRatio}
            />
          </div>
        </div>
      </motion.section>

      {/* Content Sections - Dynamic rendering based on sections array */}
      <div className="max-w-[1100px] mx-auto px-4 md:px-8 space-y-24 pb-32">
        {project.sections?.map(
          (section: ProjectSection, index: number) => (
            <motion.section
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={
                section.type === "text"
                  ? "max-w-[680px] mx-auto"
                  : ""
              }
            >
              {section.type === "vibe-coding-demos" ? (
                <>
                  <div className="max-w-[680px] mx-auto -mt-8">
                    <h3 className="font-bold text-text-heading mb-4 text-[20px]">
                      {section.title}
                    </h3>
                    <p className="text-text-body mb-6 text-left text-[16px] opacity-80">
                      Scenario 1 demonstrates how external models can be leveraged for style and aesthetic enhancement, while Scenario 2 illustrates how the tool supports users with space planning needs, enabling a complete workflow from layout to 3D modeling and final rendering.
                    </p>
                    {/* Demo tabs switch */}
                    <div className="flex items-center justify-center mb-8 pt-[20px] pr-[0px] pb-[0px] pl-[0px] relative">
                      <div className="inline-flex rounded-lg bg-white/10 p-1 gap-2">
                        <button
                          onClick={() => setViewMode("list")}
                          className={`px-6 py-2.5 rounded-md font-['Nunito_Sans'] font-semibold text-sm transition-all duration-300 w-[140px] cursor-pointer ${
                            viewMode === "list"
                              ? ""
                              : "bg-transparent text-white/60 hover:text-white"
                          }`}
                          style={viewMode === "list" ? {
                            backgroundColor: theme.primaryColor,
                            color: theme.accentBackground
                          } : {}}
                        >
                          Scenario 1
                        </button>
                        <button
                          onClick={() => setViewMode("column")}
                          className={`px-6 py-2.5 rounded-md font-['Nunito_Sans'] font-semibold text-sm transition-all duration-300 w-[140px] cursor-pointer ${
                            viewMode === "column"
                              ? ""
                              : "bg-transparent text-white/60 hover:text-white"
                          }`}
                          style={viewMode === "column" ? {
                            backgroundColor: theme.primaryColor,
                            color: theme.accentBackground
                          } : {}}
                        >
                          Scenario 2
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ) : section.type === "exploring-interaction" ? (
                <>
                  <div className="max-w-[680px] mx-auto">
                    <h2 className="font-bold text-text-heading mb-6 text-[40px]">
                      {section.title}
                    </h2>
                    {/* Description paragraph */}
                    <p className="text-text-body font-['Nunito_Sans'] font-light leading-relaxed text-[20px] mb-8">
                      Based on the design strategy, I explored
                      multiple design concepts and created
                      interactive prototypes to compare and
                      evaluate the user experience.
                    </p>
                    {/* View mode switch */}
                    <div className="flex items-center justify-center mb-8 pt-[20px] pr-[0px] pb-[0px] pl-[0px] relative">
                      <div className="inline-flex rounded-lg bg-white/10 p-1 gap-2">
                        <button
                          onClick={() => setViewMode("list")}
                          className={`px-6 py-2.5 rounded-md font-['Nunito_Sans'] font-semibold text-sm transition-all duration-300 w-[140px] cursor-pointer ${
                            viewMode === "list"
                              ? ""
                              : "bg-transparent text-white/60 hover:text-white"
                          }`}
                          style={viewMode === "list" ? {
                            backgroundColor: theme.primaryColor,
                            color: theme.accentBackground
                          } : {}}
                        >
                          List View
                        </button>
                        <button
                          onClick={() => setViewMode("column")}
                          className={`px-6 py-2.5 rounded-md font-['Nunito_Sans'] font-semibold text-sm transition-all duration-300 w-[140px] cursor-pointer ${
                            viewMode === "column"
                              ? ""
                              : "bg-transparent text-white/60 hover:text-white"
                          }`}
                          style={viewMode === "column" ? {
                            backgroundColor: theme.primaryColor,
                            color: theme.accentBackground
                          } : {}}
                        >
                          Column View
                        </button>
                      </div>

                      {/* Handwritten arrow and text */}
                      <motion.div
                        className="absolute left-[calc(50%+170px)] top-1/2 -translate-y-1/2 flex items-center gap-2 pt-[8px] pr-[0px] pb-[0px] pl-[0px]"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{
                          once: true,
                          margin: "-50px",
                        }}
                        transition={{
                          delay: 0.5,
                          duration: 0.6,
                          ease: "easeOut",
                        }}
                      >
                        <motion.svg
                          width="60"
                          height="40"
                          viewBox="0 0 60 40"
                          fill="none"
                          style={{ color: `${theme.primaryColor}99` }}
                          animate={{
                            x: [0, 5, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <path
                            d="M5 20 Q 20 15, 35 20 T 50 22 L 48 18 M 50 22 L 48 26"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                          />
                        </motion.svg>
                        <motion.span
                          className="font-['Caveat'] text-lg whitespace-nowrap text-[32px]"
                          style={{ color: `${theme.primaryColor}99` }}
                          animate={{
                            opacity: [0.6, 1, 0.6],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          Try switch
                        </motion.span>
                      </motion.div>
                    </div>
                  </div>
                </>
              ) : section.type === "user-testing" ? (
                <>
                  <div className="max-w-[680px] mx-auto">
                    <h2 className="font-bold text-text-heading mb-6 text-[40px]">
                      {section.title}
                    </h2>
                    {section.content && (
                      <p className="text-text-body font-['Nunito_Sans'] font-light leading-relaxed text-[20px] whitespace-pre-line">
                        {section.content
                          .split(/(93%)/)
                          .map((part, i) =>
                            part === "93%" ? (
                              <span
                                key={i}
                                className="font-bold"
                                style={{ color: theme.primaryColor }}
                              >
                                {part}
                              </span>
                            ) : (
                              part
                            ),
                          )}
                      </p>
                    )}
                  </div>
                </>
              ) : section.type === "text" && section.title === "Insights" ? (
                <div className="max-w-[680px] mx-auto -mt-2">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-2xl p-8 relative overflow-hidden"
                    style={{
                      backgroundColor: `${theme.cardBackground}80`,
                      border: `1px solid ${theme.primaryColor}40`
                    }}
                  >
                    {/* Decorative gradient background */}
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        background: `radial-gradient(circle at top right, ${theme.primaryColor}20 0%, transparent 70%)`
                      }}
                    ></div>
                    
                    {/* Content */}
                    <div className="relative z-10 flex gap-4">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{
                            backgroundColor: `${theme.primaryColor}20`,
                            border: `1px solid ${theme.primaryColor}40`
                          }}
                        >
                          <Lightbulb 
                            className="w-6 h-6" 
                            style={{ color: theme.primaryColor }}
                          />
                        </div>
                      </div>
                      
                      {/* Text content */}
                      <div className="flex-1 pt-[6px] pr-[0px] pb-[0px] pl-[0px]">
                        <h3 
                          className="font-bold text-[20px] mb-4"
                          style={{ color: theme.primaryColor }}
                        >
                          {section.title}
                        </h3>
                        <p className="text-text-body font-['Nunito_Sans'] font-light leading-relaxed text-[18px]">
                          {section.content}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ) : section.type === "text" ? (
                <>
                  {section.title && (
                    <div className="max-w-[680px] mx-auto">
                      {section.title.match(/^[12]\./) || section.title.includes("Agent + Design Tool") || section.title.includes("Agent + Infinite Canvas") ? (
                        <h3 className="font-bold text-text-heading mb-6 text-[20px] -mt-8">
                          {section.title}
                        </h3>
                      ) : (
                        <h2 className="font-bold text-text-heading mb-6 text-[40px]">
                          {section.title}
                        </h2>
                      )}
                    </div>
                  )}
                  {section.content && (
                    <div className="max-w-[680px] mx-auto">
                      <p className="text-text-body font-['Nunito_Sans'] font-light leading-relaxed text-[20px] whitespace-pre-line">
                        {section.content
                          .split(
                            /(\[\[.*?\|.*?\]\]|\*\*.*?\*\*|\b(?:survey|Survey|surveys|Surveys)\b|93%)/,
                          )
                          .map((part, i) => {
                            // Handle [[text|imageUrl]] pattern for modal images
                            const modalMatch = part.match(/\[\[(.*?)\|(.*?)\]\]/);
                            if (modalMatch) {
                              const [, text, imageUrl] = modalMatch;
                              return (
                                <button
                                  key={i}
                                  onClick={() => setImageModalUrl(imageUrl)}
                                  className="underline underline-offset-4 transition-colors cursor-pointer hover:opacity-80 text-[20px]"
                                  style={{ 
                                    textDecorationColor: theme.primaryColor,
                                    color: 'inherit'
                                  }}
                                >
                                  {text}
                                </button>
                              );
                            }
                            
                            // Handle **text** pattern for bold text
                            const boldMatch = part.match(/\*\*(.*?)\*\*/);
                            if (boldMatch) {
                              return (
                                <strong 
                                  key={i} 
                                  className="font-bold"
                                  style={{ color: theme.primaryColor }}
                                >
                                  {boldMatch[1]}
                                </strong>
                              );
                            }
                            
                            if (part === "93%") {
                              return (
                                <span
                                  key={i}
                                  className="font-bold"
                                  style={{ color: theme.primaryColor }}
                                >
                                  {part}
                                </span>
                              );
                            } else if (
                              /\b(?:survey|Survey|surveys|Surveys)\b/.test(
                                part,
                              )
                            ) {
                              return (
                                <a
                                  key={i}
                                  href="https://kujiale.wjx.cn/vm/h4RFZsN.aspx#"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="underline underline-offset-4 transition-colors inline-flex items-center gap-1"
                                  style={{ 
                                    textDecorationColor: theme.primaryColor
                                  }}
                                  onMouseEnter={(e) => e.currentTarget.style.color = theme.primaryColor}
                                  onMouseLeave={(e) => e.currentTarget.style.color = ''}
                                >
                                  {part}
                                  <ArrowUpRight className="w-4 h-4 inline-block" />
                                </a>
                              );
                            } else {
                              return part;
                            }
                          })}
                      </p>
                      {section.title === 'Results' && (
                        <p className="text-text-body font-['Nunito_Sans'] font-light leading-relaxed text-[20px] mt-6">
                          Based on comprehensive user feedback, I optimized the Column View design by integrating Popular with other model resources into the Explore module. I also optimized multiple experience details.
                        </p>
                      )}
                    </div>
                  )}
                  {/* Render subsections with tight spacing */}
                  {section.subsections && section.subsections.length > 0 && (
                    <div className="max-w-[680px] mx-auto space-y-[40px] mt-[40px]">
                      {section.subsections.map((subsection, subIndex) => (
                        <div key={subIndex} className="space-y-[40px]">
                          {/* Subsection title (h3) */}
                          {subsection.title && (
                            <h3 className="font-bold text-text-heading text-[20px]">
                              {subsection.title}
                            </h3>
                          )}
                          
                          {/* Subsection content */}
                          {subsection.content && (
                            <p className="text-text-body font-['Nunito_Sans'] font-light leading-relaxed text-[20px]">
                              {subsection.content}
                            </p>
                          )}
                          
                          {/* Subsection image */}
                          {subsection.image && (
                            <div className="relative left-1/2 -translate-x-1/2 w-screen max-w-[1032px] rounded-2xl overflow-hidden border border-white/10">
                              <img
                                src={subsection.image}
                                alt={subsection.title || 'Subsection image'}
                                className="w-full h-auto"
                              />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : section.type === "challenge-cards" && section.challenges ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 -mt-6 max-w-[750px] mx-auto">
                  {section.challenges.map((challenge, challengeIndex) => {
                    const IconComponent = challenge.icon === 'Briefcase' ? Briefcase : Users;
                    // Define vibrant colors for each card
                    const cardColors = [
                      { bg: '#a8b9e8', iconBg: '#7a8fd8', iconColor: '#2d4078' }, // Blue-purple for Business
                      { bg: '#a8e8b9', iconBg: '#78d88f', iconColor: '#2d7840' }  // Green for User
                    ];
                    const colors = cardColors[challengeIndex] || cardColors[0];
                    
                    return (
                      <motion.div
                        key={challengeIndex}
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: challengeIndex * 0.15, duration: 0.5 }}
                        className="rounded-2xl p-8 border-0 transition-all duration-300 hover:-translate-y-1 w-[360px]"
                        style={{ backgroundColor: colors.bg }}
                      >
                        <div className="flex items-center gap-3 mb-[60px]">
                          <div 
                            className="w-10 h-10 rounded-lg flex items-center justify-center"
                            style={{ backgroundColor: colors.iconBg }}
                          >
                            <IconComponent 
                              className="w-5 h-5" 
                              style={{ color: colors.iconColor }}
                            />
                          </div>
                          <h3 className="font-bold text-[24px] whitespace-nowrap" style={{ color: '#1a1a1a' }}>
                            {challenge.title}
                          </h3>
                        </div>
                        <p className="font-['Nunito_Sans'] font-light leading-relaxed text-[16px] whitespace-pre-line -mt-5" style={{ color: '#1a1a1a' }}>
                          {challenge.content}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              ) : section.type === "homeowner-needs" && section.needs ? (
                <div className="max-w-[680px] mx-auto -mt-6">
                  <div className="space-y-3">
                    {section.needs.map((need, needIndex) => (
                      <motion.div
                        key={needIndex}
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: needIndex * 0.1, duration: 0.4 }}
                        className="grid grid-cols-[200px_1fr] gap-6 items-start py-4 border-b border-white/10 last:border-b-0"
                      >
                        <div className="font-['Nunito_Sans'] font-semibold text-[16px]" style={{ color: theme.primaryColor }}>
                          {need.type}
                        </div>
                        <div className="font-['Nunito_Sans'] font-light text-[16px] text-text-body leading-relaxed">
                          {need.examples}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ) : section.type === "table" && section.tableData ? (
                <div className="max-w-[1100px] mx-auto -mt-16 mb-12">
                  {/* Legend for AI applicability */}
                  <div className="flex items-center justify-center gap-6 mb-4 text-[12px] font-['Nunito_Sans']">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded" style={{ backgroundColor: theme.primaryColor }}></div>
                      <span className="text-white/70">AI-Assisted</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded" style={{ backgroundColor: '#fca5a5' }}></div>
                      <span className="text-white/70">AI Not Applicable</span>
                    </div>
                  </div>
                  <div className="overflow-x-auto rounded-lg border border-white/10">
                    <table className="w-full border-collapse table-fixed">
                      <thead>
                        <tr>
                          {section.tableData.headers.map((header, index) => (
                            <th
                              key={index}
                              className="px-4 py-4 text-left font-bold text-[13px] border-r border-white/10 last:border-r-0"
                              style={{ 
                                backgroundColor: index >= 3 ? '#3a2020' : theme.cardBackground,
                                color: index >= 3 ? '#fca5a5' : theme.primaryColor, 
                                width: `${100 / section.tableData.headers.length}%` 
                              }}
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.tableData.rows.map((row, rowIndex) => (
                          <tr key={rowIndex}>
                            {row.items.map((item, itemIndex) => (
                              <td
                                key={itemIndex}
                                className="px-4 py-4 text-[13px] font-['Nunito_Sans'] font-light leading-relaxed border-r border-white/10 last:border-r-0 align-top"
                                style={{ 
                                  backgroundColor: itemIndex >= 3 ? '#2a1818' : theme.accentBackground,
                                  color: '#ffffff' 
                                }}
                              >
                                <div className="space-y-2">
                                  {item.split('\n').map((line, lineIndex) => (
                                    <div key={lineIndex} className="flex items-start gap-1.5">
                                      <FileText className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: itemIndex >= 3 ? '#fca5a5' : theme.primaryColor }} />
                                      <span className="flex-1">{line}</span>
                                    </div>
                                  ))}
                                </div>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : section.type === "design-goals" &&
                section.goals ? (
                <div>
                  {section.title && (
                    <h2 className="font-bold text-text-heading mb-6 text-[40px] max-w-[680px] mx-auto">
                      {section.title}
                    </h2>
                  )}
                  <p className="text-text-body font-['Nunito_Sans'] font-light leading-relaxed text-[20px] max-w-[680px] mx-auto mb-12">
                    Design goals vary for users at different
                    stages, guiding new users to explore,
                    growing users to build habits, and
                    experienced users to achieve maximum
                    efficiency.
                  </p>
                  <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 md:gap-4">
                    {section.goals.map((goal, goalIndex) => {
                      // Vibrant color scheme inspired by reference image
                      const colorSchemes = [
                        {
                          bg: "#F4E4A6", // Vibrant yellow
                          text: "#1F2937", // Dark gray for text
                          accent: "#C87A0A", // Darker orange accent
                          accentLight: "#FCD34D", // Light yellow
                        },
                        {
                          bg: "#D4BBFF", // Vibrant purple
                          text: "#1F2937", // Dark gray for text
                          accent: "#7C3AED", // Darker purple accent
                          accentLight: "#C084FC", // Light purple
                        },
                        {
                          bg: "#B8E4CF", // Vibrant mint green
                          text: "#1F2937", // Dark gray for text
                          accent: "#059669", // Darker green accent
                          accentLight: "#6EE7B7", // Light green
                        },
                      ];

                      const colors =
                        colorSchemes[goalIndex] ||
                        colorSchemes[0];

                      return (
                        <div
                          key={goalIndex}
                          className="contents"
                        >
                          {/* Goal Card */}
                          <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{
                              once: true,
                              amount: 0.6,
                            }}
                            transition={{
                              delay: goalIndex * 0.4,
                              duration: 0.7,
                              ease: "easeOut",
                            }}
                            style={{
                              backgroundColor: colors.bg,
                            }}
                            className="flex-1 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group flex flex-col"
                          >
                            {/* Decorative gradient overlay */}
                            <div
                              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                              style={{
                                background: `linear-gradient(135deg, ${colors.accentLight}40 0%, transparent 50%, transparent 100%)`,
                              }}
                            ></div>

                            {/* Decorative corner element */}
                            <div
                              className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-2xl"
                              style={{
                                backgroundColor: `${colors.accent}15`,
                              }}
                            ></div>

                            {/* Content */}
                            <div className="relative z-10 flex-1">
                              <div className="mb-4">
                                <span
                                  className="text-xs font-['Nunito_Sans'] font-bold tracking-wider inline-block text-[15px]"
                                  style={{
                                    color: colors.accent,
                                  }}
                                >
                                  {goal.stage}
                                </span>
                              </div>
                              <h3
                                className="font-['Nunito_Sans'] font-bold text-xl mb-6 leading-tight"
                                style={{ color: colors.text }}
                              >
                                {goal.title}
                              </h3>
                              <p
                                className="font-['Nunito_Sans'] font-light text-base leading-relaxed"
                                style={{
                                  color: colors.text,
                                  opacity: 0.7,
                                }}
                              >
                                {goal.description}
                              </p>
                            </div>

                            {/* Step Indicator */}
                            <div className="relative z-10 flex items-center justify-center gap-2 mt-8">
                              {[0, 1, 2].map((dotIndex) => (
                                <div
                                  key={dotIndex}
                                  className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                                  style={{
                                    backgroundColor:
                                      dotIndex <= goalIndex
                                        ? `${colors.accent}60`
                                        : `${colors.text}20`,
                                  }}
                                />
                              ))}
                            </div>
                          </motion.div>

                          {/* Arrow between cards (not after the last card) */}
                          {goalIndex <
                            section.goals.length - 1 && (
                            <motion.div
                              initial={{
                                opacity: 0,
                                scale: 0.5,
                              }}
                              whileInView={{
                                opacity: 1,
                                scale: 1,
                              }}
                              viewport={{
                                once: true,
                                amount: 0.6,
                              }}
                              transition={{
                                delay: goalIndex * 0.4 + 0.5,
                                duration: 0.5,
                                ease: "easeOut",
                              }}
                              className="hidden md:flex items-center justify-center flex-shrink-0"
                            >
                              <motion.div
                                animate={{ x: [0, 8, 0] }}
                                transition={{
                                  duration: 1.5,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                              >
                                <ArrowRight className="w-8 h-8" style={{ color: theme.primaryColor }} />
                              </motion.div>
                            </motion.div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : section.type === "design-strategy" &&
                section.strategies ? (
                <div>
                  {section.title && (
                    <h2 className="font-bold text-text-heading mb-6 text-[40px] max-w-[680px] mx-auto">
                      {section.title}
                    </h2>
                  )}
                  {section.content && (
                    <p className="text-text-body font-['Nunito_Sans'] font-light leading-relaxed text-[20px] max-w-[680px] mx-auto mb-12">
                      {section.content}
                    </p>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1100px] mx-auto">
                    {section.strategies.map(
                      (strategy, strategyIndex) => {
                        // Vibrant color scheme matching the goals section
                        const colorSchemes = [
                          {
                            bg: "#F4E4A6", // Vibrant yellow
                            text: "#1F2937", // Dark gray for text
                            accent: "#C87A0A", // Darker orange accent
                            accentLight: "#FCD34D", // Light yellow
                          },
                          {
                            bg: "#D4BBFF", // Vibrant purple
                            text: "#1F2937", // Dark gray for text
                            accent: "#7C3AED", // Darker purple accent
                            accentLight: "#C084FC", // Light purple
                          },
                        ];

                        const colors =
                          colorSchemes[strategyIndex] ||
                          colorSchemes[0];

                        return (
                          <motion.div
                            key={strategyIndex}
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: strategyIndex * 0.15,
                              duration: 0.6,
                            }}
                            style={{
                              backgroundColor: colors.bg,
                            }}
                            className="rounded-3xl p-10 transition-all duration-500 relative overflow-hidden group min-h-[380px] flex flex-col"
                          >
                            {/* Animated gradient background */}
                            <div
                              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                              style={{
                                background: `linear-gradient(135deg, ${colors.accentLight}40 0%, transparent 50%, ${colors.accentLight}30 100%)`,
                              }}
                            ></div>

                            {/* Decorative geometric shapes */}
                            <div
                              className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"
                              style={{
                                backgroundColor: `${colors.accent}15`,
                              }}
                            ></div>
                            <div
                              className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full blur-2xl"
                              style={{
                                backgroundColor: `${colors.accent}20`,
                              }}
                            ></div>

                            {/* Grid pattern overlay */}
                            <div
                              className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-500"
                              style={{
                                backgroundImage: `linear-gradient(${colors.accent}4D 1px, transparent 1px), linear-gradient(90deg, ${colors.accent}4D 1px, transparent 1px)`,
                                backgroundSize: "20px 20px",
                              }}
                            ></div>

                            <div className="relative z-10 flex flex-col gap-6 flex-1">
                              {/* Top - Icon */}
                              <div className="flex-shrink-0">
                                <div
                                  className="w-16 h-16 rounded-2xl flex items-center justify-center border group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                                  style={{
                                    background: `linear-gradient(135deg, ${colors.accent}33 0%, ${colors.accent}0D 100%)`,
                                    borderColor: `${colors.accent}33`,
                                  }}
                                >
                                  {strategyIndex === 0 ? (
                                    <Layers
                                      className="w-8 h-8"
                                      style={{
                                        color: colors.accent,
                                      }}
                                    />
                                  ) : (
                                    <Eye
                                      className="w-8 h-8"
                                      style={{
                                        color: colors.accent,
                                      }}
                                    />
                                  )}
                                </div>
                              </div>

                              {/* Bottom - Content */}
                              <div className="flex-1 flex flex-col">
                                <h3
                                  className="font-['Nunito_Sans'] font-bold text-3xl mb-5 leading-tight transition-colors duration-300"
                                  style={{ color: colors.text }}
                                >
                                  {strategy.title}
                                </h3>
                                <p
                                  className="font-['Nunito_Sans'] font-light text-lg leading-relaxed"
                                  style={{
                                    color: colors.text,
                                    opacity: 0.8,
                                  }}
                                >
                                  {strategy.description}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        );
                      },
                    )}
                  </div>
                </div>
              ) : section.type === "user-testing-results" &&
                section.testingResults ? (
                <div className="max-w-[900px] mx-auto -mt-14">
                  {section.testingResults.rounds.map(
                    (round, roundIndex) => (
                      <motion.div
                        key={roundIndex}
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="rounded-3xl p-10 md:p-12 relative overflow-hidden"
                        style={{
                          background: `linear-gradient(to bottom right, ${theme.cardBackground}, ${theme.cardBackgroundAlt})`
                        }}
                      >
                        <div
                          className="absolute inset-0 opacity-[0.03]"
                          style={{
                            backgroundImage:
                              `linear-gradient(${theme.primaryColor}4D 1px, transparent 1px), linear-gradient(90deg, ${theme.primaryColor}4D 1px, transparent 1px)`,
                            backgroundSize: "20px 20px",
                          }}
                        ></div>

                        <div className="relative z-10 space-y-8">
                          {/* Round header with stats */}
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                            {/* Left - Round info */}
                            <div>
                              <div 
                                className="font-['Nunito_Sans'] font-bold text-[18px] tracking-[0.15em] mb-2"
                                style={{ color: theme.primaryColor }}
                              >
                                ROUND {round.roundNumber}
                              </div>
                              <div className="text-text-body font-['Nunito_Sans'] font-light text-[19px]">
                                {round.location}
                              </div>
                            </div>

                            {/* Right - Big stat */}
                            <div 
                              className="flex items-center gap-6 rounded-2xl px-8 py-6 shadow-lg"
                              style={{
                                backgroundColor: `${theme.accentBackground}99`,
                                borderColor: `${theme.primaryColor}33`,
                                borderWidth: '1px',
                                boxShadow: `0 10px 15px -3px ${theme.primaryColor}0D`
                              }}
                            >
                              <div className="flex items-baseline gap-2">
                                <div 
                                  className="font-['Nunito_Sans'] font-extrabold text-[64px] leading-none tracking-tight"
                                  style={{ color: theme.primaryColor }}
                                >
                                  {round.preferNewVersion}
                                </div>
                                <div className="font-['Nunito_Sans'] font-bold text-[32px] text-text-body/40 leading-none pb-1">
                                  /{round.totalUsers}
                                </div>
                              </div>
                              <div 
                                className="h-20 w-[1.5px]"
                                style={{
                                  background: `linear-gradient(to bottom, transparent, ${theme.primaryColor}4D, transparent)`
                                }}
                              ></div>
                              <div className="text-text-heading font-['Nunito_Sans'] font-semibold text-[19px] leading-snug max-w-[140px]">
                                preferred
                                <br />
                                new Column
                                <br />
                                View
                              </div>
                            </div>
                          </div>

                          {/* User quotes */}
                          <div className="space-y-4 pt-2">
                            {round.quotes.map(
                              (quote, quoteIndex) => (
                                <motion.div
                                  key={quoteIndex}
                                  initial={{
                                    x: -20,
                                    opacity: 0,
                                  }}
                                  whileInView={{
                                    x: 0,
                                    opacity: 1,
                                  }}
                                  viewport={{ once: true }}
                                  transition={{
                                    delay: quoteIndex * 0.1,
                                    duration: 0.5,
                                  }}
                                  className="border rounded-2xl p-7 transition-all duration-300"
                                  style={{
                                    backgroundColor: `${theme.accentBackground}4D`,
                                    borderColor: 'rgba(255, 255, 255, 0.06)'
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = `${theme.primaryColor}4D`;
                                    e.currentTarget.style.backgroundColor = `${theme.accentBackground}66`;
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                                    e.currentTarget.style.backgroundColor = `${theme.accentBackground}4D`;
                                  }}
                                >
                                  <div className="flex gap-5 items-start">
                                    {/* Heart icon with animation */}
                                    <motion.div
                                      initial={{ scale: 0 }}
                                      whileInView={{ scale: 1 }}
                                      viewport={{ once: true }}
                                      transition={{
                                        delay:
                                          quoteIndex * 0.1 +
                                          0.3,
                                        duration: 0.4,
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 10,
                                      }}
                                      className="flex-shrink-0 mt-1"
                                    >
                                      <motion.div
                                        animate={{
                                          scale: [1, 1.2, 1],
                                        }}
                                        transition={{
                                          duration: 1.5,
                                          repeat: Infinity,
                                          repeatDelay: 3,
                                          ease: "easeInOut",
                                        }}
                                      >
                                        <Heart 
                                          className="w-5 h-5" 
                                          style={{ 
                                            color: `${theme.primaryColor}99`,
                                            fill: `${theme.primaryColor}33`
                                          }} 
                                        />
                                      </motion.div>
                                    </motion.div>

                                    <p className="text-text-body/90 font-['Nunito_Sans'] font-light italic text-[17px] leading-[1.7] flex-1 pt-0.5">
                                      {quote}
                                    </p>
                                  </div>
                                </motion.div>
                              ),
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ),
                  )}

                  {/* Bridge text between Round 1 and Round 2 */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-[900px] mx-auto my-10"
                  >
                    <p className="text-text-body/80 font-['Nunito_Sans'] font-light text-[20px] leading-relaxed p-[0px] max-w-[680px] mx-auto">
                      All participants in the first round
                      were from the same region and most
                      were experienced users. To eliminate
                      bias, we recruited 5 users—primarily new users—from
                      Europe, Asia, and Africa via email,
                      and conducted the second round of
                      testing through online interviews.
                    </p>
                  </motion.div>

                  {/* Round 2 Testing - Complete Section */}
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="rounded-3xl p-10 md:p-12 relative overflow-hidden mt-10"
                    style={{
                      background: `linear-gradient(to bottom right, ${theme.cardBackground}, ${theme.cardBackgroundAlt})`
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-[0.03]"
                      style={{
                        backgroundImage:
                          `linear-gradient(${theme.primaryColor}4D 1px, transparent 1px), linear-gradient(90deg, ${theme.primaryColor}4D 1px, transparent 1px)`,
                        backgroundSize: "20px 20px",
                      }}
                    ></div>

                    <div className="relative z-10">
                      {/* Round 2 Header */}
                      <div className="mb-10 relative">
                        <div 
                          className="font-['Nunito_Sans'] font-bold text-[18px] tracking-[0.15em] mb-3"
                          style={{ color: theme.primaryColor }}
                        >
                          ROUND 2
                        </div>
                        <div className="text-text-body font-['Nunito_Sans'] font-light text-[19px]">
                          5 users users from Asia, Europe and Africa
                        </div>
                        
                        {/* Detailed Feedback Button */}
                        <a
                          href="https://drive.google.com/file/d/1SHaLCEEBq4_PfcWy4nyvTgIGaVmguwv7/view?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute top-0 right-0 flex items-center gap-2 px-4 py-2 rounded-lg font-['Nunito_Sans'] font-semibold text-[14px] transition-all duration-200 hover:scale-105 group"
                          style={{
                            backgroundColor: `${theme.primaryColor}1A`,
                            border: `1px solid ${theme.primaryColor}40`,
                            color: theme.primaryColor,
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = `${theme.primaryColor}33`;
                            e.currentTarget.style.borderColor = `${theme.primaryColor}80`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = `${theme.primaryColor}1A`;
                            e.currentTarget.style.borderColor = `${theme.primaryColor}40`;
                          }}
                        >
                          Detailed feedback
                          <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      </div>

                      {/* Key Findings */}
                      <div className="relative px-[28px] py-[0px] mx-[-30px] my-[0px]">
                        <div 
                          ref={(el) => {
                            if (el && !el.dataset.scrollerInitialized) {
                              el.dataset.scrollerInitialized = 'true';
                              const prevBtn = el.parentElement?.querySelector('[data-scroll-prev]') as HTMLButtonElement;
                              const nextBtn = el.parentElement?.querySelector('[data-scroll-next]') as HTMLButtonElement;
                              
                              const updateButtons = () => {
                                if (prevBtn && nextBtn) {
                                  prevBtn.style.opacity = el.scrollLeft <= 0 ? '0.3' : '1';
                                  prevBtn.style.pointerEvents = el.scrollLeft <= 0 ? 'none' : 'auto';
                                  nextBtn.style.opacity = el.scrollLeft >= (el.scrollWidth - el.clientWidth - 10) ? '0.3' : '1';
                                  nextBtn.style.pointerEvents = el.scrollLeft >= (el.scrollWidth - el.clientWidth - 10) ? 'none' : 'auto';
                                }
                              };
                              
                              el.addEventListener('scroll', updateButtons);
                              updateButtons();
                            }
                          }}
                          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent hover:scrollbar-thumb-white/30 scroll-smooth"
                        >
                        <FlipCard
                          title="First Impression"
                          summary="User preferences varied significantly with no unified preference"
                          details={
                            <div className="space-y-3">
                              <div>
                                <span className="font-semibold" style={{ color: theme.primaryColor }}>
                                  2 users
                                </span>{" "}
                                preferred current card view -
                                more intuitive with large images
                              </div>
                              <div>
                                <span className="font-semibold" style={{ color: theme.primaryColor }}>
                                  1 user
                                </span>{" "}
                                preferred new column view -
                                familiar from other software
                              </div>
                              <div>
                                <span className="font-semibold" style={{ color: theme.primaryColor }}>
                                  2 users
                                </span>{" "}
                                preferred new list view -
                                clearer categorization and more
                                efficient browsing
                              </div>
                            </div>
                          }
                        />

                        <FlipCard
                          title="Model Search Path"
                          summary="All users agreed the new design simplified the model search path"
                          details={
                            <p className="italic">
                              "I experienced frustration with
                              the double-click workflow in the
                              old version, sometimes forgetting
                              my position in the library. I
                              appreciate the new list view's
                              reduction in clicks." - Anni
                            </p>
                          }
                        />

                        <FlipCard
                          title="Popular Module"
                          summary="All users found the Popular module helpful, most supported it as default"
                          details={
                            <div className="space-y-3">
                              <p>
                                Helps reduce design pressure by
                                gathering essential "basic"
                                models
                              </p>
                              <p>
                                Provides quick access to
                                frequently used items and
                                current trends
                              </p>
                              <p className="italic">
                                "Popular should be visually
                                distinct but doesn't need to be
                                default" - Darko
                              </p>
                            </div>
                          }
                        />

                        <FlipCard
                          title="Three-level Filter"
                          summary="All users supported adding graphics to the third-level filter"
                          details={
                            <p>
                              Preferences split between designs
                              prioritizing model display space
                              vs. complete information
                              visibility when collapsed
                            </p>
                          }
                        />

                        <FlipCard
                          title="Text & Image Size"
                          summary="Most users found the new design's image and text sizes recognizable"
                          details={
                            <p className="italic">
                              "For categories, icon + text is
                              more suitable than images - icons
                              take up less space and are easier
                              to recognize than small images" -
                              Sheik
                            </p>
                          }
                        />

                        <FlipCard
                          title="Panel Width Preference"
                          summary="User preferences were polarized"
                          details={
                            <div className="space-y-3">
                              <div>
                                <span className="font-semibold" style={{ color: theme.primaryColor }}>
                                  3 users
                                </span>{" "}
                                chose widest panel - wanted to
                                see more models
                              </div>
                              <div>
                                <span className="font-semibold" style={{ color: theme.primaryColor }}>
                                  2 users
                                </span>{" "}
                                chose narrowest panel -
                                preferred more canvas space
                              </div>
                            </div>
                          }
                        />

                        <FlipCard
                          title="My Features"
                          summary="All users considered My features essential and supported making them more accessible"
                          details={
                            <p className="italic">
                              "Moving My to the outside is a
                              good idea - makes these functions
                              easier to find and use compared to
                              the current tab design" - Sheik
                            </p>
                          }
                        />

                        <FlipCard
                          title="Classification Standard"
                          summary="All users agreed that models should be classified by space"
                          details={
                            <p className="italic">
                              "Space-based classification is
                              better because designers typically
                              focus on one space at a time" -
                              Anni
                            </p>
                          }
                        />
                      </div>
                      
                      {/* Navigation Arrows */}
                      <button
                        data-scroll-prev
                        onClick={(e) => {
                          const container = e.currentTarget.parentElement;
                          const scroller = container?.querySelector('.flex.gap-6.overflow-x-auto') as HTMLElement;
                          if (scroller) {
                            scroller.scrollBy({ left: -350, behavior: 'smooth' });
                          }
                        }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 z-10"
                        style={{ opacity: 0.3, pointerEvents: 'none' }}
                      >
                        <ChevronLeft className="w-5 h-5 text-white/60" />
                      </button>
                      
                      <button
                        data-scroll-next
                        onClick={(e) => {
                          const container = e.currentTarget.parentElement;
                          const scroller = container?.querySelector('.flex.gap-6.overflow-x-auto') as HTMLElement;
                          if (scroller) {
                            scroller.scrollBy({ left: 350, behavior: 'smooth' });
                          }
                        }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 z-10"
                      >
                        <ChevronRight className="w-5 h-5 text-white/60" />
                      </button>
                    </div>
                    </div>
                  </motion.div>
                </div>
              ) : section.type === "image" && section.images ? (
                <div
                  className={`space-y-8 ${
                    features.enableSpecialImageLayouts &&
                    index > 0 &&
                    project.sections[index - 1]?.type ===
                      "exploring-interaction"
                      ? "-mt-[76px]"
                      : features.enableSpecialImageLayouts &&
                          index > 0 &&
                          project.sections[index - 1]?.type ===
                            "text" &&
                          project.sections[index - 1]?.title ===
                            "Results"
                        ? "-mt-12"
                        : index > 0 &&
                          project.sections[index - 1]?.type === "text" &&
                          project.sections[index - 1]?.title?.includes("Agent + Design Tool")
                        ? "-mt-8"
                        : ""
                  }`}
                >
                  {section.images.map((image, imgIndex) => {
                    // Check if this is the Problem GIF with emoji reveal enabled
                    const isContextGif =
                      features.enableEmojiReveal &&
                      index > 0 &&
                      project.sections[index - 1]?.type === "text" &&
                      project.sections[index - 1]?.title === "Problem" &&
                      imgIndex === 0;

                    // Check if this is the "Exploring interaction" image section with special layouts
                    const isExploringLayoutImage =
                      features.enableSpecialImageLayouts &&
                      index > 0 &&
                      project.sections[index - 1]?.type ===
                        "exploring-interaction";

                    // Check if this is the "Vibe coding demos" video section
                    const isVibeCodingDemoVideo =
                      index > 0 &&
                      project.sections[index - 1]?.type ===
                        "vibe-coding-demos";

                    // Check if this is the Results image section with special layouts
                    const isResultsImage =
                      features.enableSpecialImageLayouts &&
                      index > 0 &&
                      project.sections[index - 1]?.type ===
                        "text" &&
                      project.sections[index - 1]?.title ===
                        "Results";

                    // Check if this is the Agent + Design Tool image
                    const isAgentDesignToolImage =
                      index > 0 &&
                      project.sections[index - 1]?.type === "text" &&
                      project.sections[index - 1]?.title?.includes("Agent + Design Tool");

                    // Check if this is the Agent + Infinite Canvas image
                    const isAgentInfiniteCanvasImage =
                      index > 0 &&
                      project.sections[index - 1]?.type === "text" &&
                      project.sections[index - 1]?.title?.includes("Agent + Infinite Canvas");

                    // Determine which image/video to display based on viewMode
                    const imageToDisplay =
                      isExploringLayoutImage
                        ? viewMode === "list"
                          ? section.images[0]
                          : section.images[1]
                        : isVibeCodingDemoVideo
                        ? viewMode === "list"
                          ? section.images[0]
                          : section.images[1]
                        : image;

                    // Skip rendering the second image/video if we're showing it conditionally
                    if ((isExploringLayoutImage || isVibeCodingDemoVideo) && imgIndex > 0)
                      return null;

                    // Check if this is a video file
                    const isVideo = imageToDisplay.endsWith('.mp4') || imageToDisplay.endsWith('.webm') || imageToDisplay.endsWith('.mov');

                    return (
                      <div key={imgIndex} className={(isAgentDesignToolImage || isAgentInfiniteCanvasImage) ? "max-w-[640px] mx-auto" : ""}>
                        {isExploringLayoutImage ? (
                          <BrowserFrame>
                            <motion.img
                              key={viewMode}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.3 }}
                              src={imageToDisplay}
                              alt={`${project.title} - Image ${imgIndex + 1}`}
                              className="w-full h-auto"
                            />
                          </BrowserFrame>
                        ) : isVibeCodingDemoVideo ? (
                          <div className="rounded-2xl overflow-hidden border border-white/10 relative -mt-[76px]">
                            {isVideo ? (
                              <motion.video
                                key={viewMode}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                src={imageToDisplay}
                                className="w-full h-auto"
                                controls
                                autoPlay
                                loop
                                muted
                                playsInline
                              />
                            ) : (
                              <motion.img
                                key={viewMode}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                src={imageToDisplay}
                                alt={`${project.title} - Demo ${imgIndex + 1}`}
                                className="w-full h-auto"
                              />
                            )}
                          </div>
                        ) : (
                          <div
                            ref={isContextGif ? gifRef : null}
                            className={`rounded-2xl overflow-hidden border border-white/10 relative ${(isAgentDesignToolImage || isAgentInfiniteCanvasImage) ? "-mt-8" : ""}`}
                          >
                            <motion.img
                              key={viewMode}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.3 }}
                              src={imageToDisplay}
                              alt={`${project.title} - Image ${imgIndex + 1}`}
                              className="w-full h-auto pt-[1px] pr-[0px] pb-[0px] pl-[0px] p-[0px]"
                            />
                          </div>
                        )}

                        {/* Caption for Agent + Design Tool image */}
                        {isAgentDesignToolImage && (
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                              duration: 0.3,
                              delay: 0.1,
                            }}
                            className="text-white/60 font-['Nunito_Sans'] text-sm mt-3 text-center leading-relaxed max-w-[680px] mx-auto"
                          >
                            Agent + Design Tool cannot solve the problem
                          </motion.p>
                        )}

                        {/* Caption for Agent + Infinite Canvas image */}
                        {isAgentInfiniteCanvasImage && (
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                              duration: 0.3,
                              delay: 0.1,
                            }}
                            className="text-white/60 font-['Nunito_Sans'] text-sm mt-3 text-center leading-relaxed max-w-[680px] mx-auto"
                          >
                            Infinite canvas enables unlimited design exploration
                          </motion.p>
                        )}

                        {/* Caption for Results image */}
                        {isResultsImage && (
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                              duration: 0.3,
                              delay: 0.1,
                            }}
                            className="text-white/60 font-['Nunito_Sans'] text-sm mt-3 text-center leading-relaxed max-w-[680px] mx-auto"
                          >
                            Built on the Column View foundation,
                            incorporating advantages from List
                            View, such as the Popular section
                          </motion.p>
                        )}

                        {/* Body text for Results image */}
                        {isResultsImage && (
                          <>
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                              duration: 0.3,
                              delay: 0.2,
                            }}
                            className="text-text-body font-['Nunito_Sans'] font-light leading-relaxed text-[20px] max-w-[680px] mx-auto mt-[60px] mr-[178px] mb-[0px] ml-[178px]"
                          >
                           <span className="font-bold" style={{ color: theme.primaryColor }}>Canvas Space Optimization:</span> User testing revealed that canvas space was critical for some users. To address this, I redesigned the panel collapse behavior by adding a collapsible category tree with hover-based expansion, enabling efficient category switching while keeping the model library compact.
                          </motion.p>

                          {/* Image for Canvas Space Optimization */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.5,
                              delay: 0.3,
                            }}
                            className="flex flex-col items-center mt-10"
                          >
                            <div className="border border-white/10 w-[1034px]">
                              <SkeletonImage
                                src="https://qhstaticssl.kujiale.com/image/gif/1766387615492/0446073040413B1AF75078EADFABC01B.gif"
                                alt="Canvas space optimization with collapsible category tree"
                                className="w-full"
                                objectFit="contain"
                              />
                            </div>
                          </motion.div>

                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                              duration: 0.3,
                              delay: 0.2,
                            }}
                            className="text-text-body font-['Nunito_Sans'] font-light leading-relaxed text-[20px] max-w-[680px] mx-auto mt-[60px] mr-[178px] mb-[0px] ml-[178px]"
                          >
                           <span className="font-bold" style={{ color: theme.primaryColor }}>Optimized Search Functionality:</span> Multiple users noted that after entering a specific category, search queries were limited to that category’s scope which caused problem. 
                          To streamline the global search workflow, I’ve introduced closable category tabs. Users only need to click the close button on the active category tab to remove the scope restriction
                          </motion.p>
                          </>
                        )}

                        {/* Additional image for Results section */}
                        {isResultsImage && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.5,
                              delay: 0.3,
                            }}
                            className="flex flex-col items-center mt-10"
                          >
                            <div className="border border-white/10 w-[448px]">
                              <SkeletonImage
                                src="https://qhstaticssl.kujiale.com/image/png/1766373388970/65343DCEFC1E5EB465538D80047EC3B3.png"
                                alt="Search within category results"
                                className="w-full"
                                objectFit="contain"
                              />
                            </div>
                            <motion.p
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{
                                duration: 0.3,
                                delay: 0.4,
                              }}
                              className="text-white/60 font-['Nunito_Sans'] text-sm mt-3 text-center leading-relaxed max-w-[448px]"
                            >
                              When searching within a category,
                              the category tag is visible. Click
                              the close icon to automatically
                              execute a global search.
                            </motion.p>
                          </motion.div>
                        )}

                        {/* Value section title */}
                        {isResultsImage && (
                          <div className="max-w-[680px] mx-auto mt-[60px]">
                            <h2 className="font-bold text-text-heading mb-6 text-[40px]">
                              Value
                            </h2>
                          </div>
                        )}

                        {/* Body text for Results metrics */}
                        {isResultsImage && (
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                              duration: 0.3,
                              delay: 0.5,
                            }}
                            className="text-text-body font-['Nunito_Sans'] font-light leading-relaxed text-[20px] max-w-[680px] mx-auto mr-[178px] mb-[0px] ml-[178px]"
                          >
                            The new model library was gradually
                            launched from October 2025. New user
                            model conversion rate increased from
                            41% to 61%, and existing users'
                            average model drag actions grew by
                            15%. Most importantly, the redesign
                            rollout was extremely smooth,
                            achieving nearly zero customer
                            complaints.
                          </motion.p>
                        )}

                        {/* Metric cards for Results section */}
                        {isResultsImage && (
                          <div className="flex gap-6 justify-center mt-12 mb-8">
                            <MetricCard
                              from={41}
                              to={61}
                              suffix="%"
                              label="New user model conversion rate"
                              bgColor="bg-yellow-200"
                              textColor="text-gray-900"
                            />
                            <MetricCard
                              from={0}
                              to={15}
                              suffix="%"
                              label="Increase in average model drag actions"
                              bgColor="bg-purple-300"
                              textColor="text-gray-900"
                            />
                          </div>
                        )}

                        {/* Caption for Exploring layout images */}
                        {isExploringLayoutImage && (
                          <motion.p
                            key={viewMode}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                              duration: 0.3,
                              delay: 0.1,
                            }}
                            className="text-white/60 font-['Nunito_Sans'] text-sm mt-3 text-center leading-relaxed max-w-[680px] mx-auto"
                          >
                            {viewMode === "list"
                              ? 'Level 1 are at the top. Level 2 and models placed below as lists. Click "See all" will show all models within the second level category.'
                              : "Show Level 1 and Level 2 in the left column. Once a category is selected, the models within that category are displayed on the right column."}
                          </motion.p>
                        )}

                        {/* Body text for Exploring layout images */}
                        {isExploringLayoutImage && (
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                              duration: 0.3,
                              delay: 0.2,
                            }}
                            className="text-text-body font-['Nunito_Sans'] font-light leading-relaxed text-[20px] max-w-[680px] mx-auto mt-[60px] mr-[178px] mb-[0px] ml-[178px]"
                          >
                            Both List View and Column View were
                            designed to prioritize the most
                            commonly used model categories on
                            the first screen, accelerating
                            drag-and-drop activation for new
                            users.
                          </motion.p>
                        )}

                        {/* Popular concept images - side by side */}
                        {isExploringLayoutImage && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.5,
                              delay: 0.3,
                            }}
                            className="flex items-start justify-center gap-4 max-w-[1100px] mx-auto mt-10"
                          >
                            <div className="overflow-hidden border border-white/10 relative">
                              <SkeletonImage
                                src="https://qhstaticssl.kujiale.com/image/png/1766373048104/31777A2F1677E39E0BE7DD63BFD35E65.png"
                                alt="Popular concept - List View"
                                className="h-[640px] w-auto"
                                objectFit="contain"
                              />
                              <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-md">
                                <span className="text-white text-sm font-['Nunito_Sans']">
                                  List View
                                </span>
                              </div>
                            </div>
                            <div className="overflow-hidden border border-white/10 relative">
                              <SkeletonImage
                                src="https://qhstaticssl.kujiale.com/image/png/1766373236789/3BA131F708964B8437CCF282B9F86894.png"
                                alt="Popular concept - Column View"
                                className="h-[640px] w-auto"
                                objectFit="contain"
                              />
                              <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-md">
                                <span className="text-white text-sm font-['Nunito_Sans']">
                                  Column View
                                </span>
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {/* Additional explanation text for Level 3 categories */}
                        {isExploringLayoutImage && (
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                              duration: 0.3,
                              delay: 0.4,
                            }}
                            className="text-text-body font-['Nunito_Sans'] font-light leading-relaxed text-[20px] max-w-[680px] mx-auto mt-[72px] mr-[178px] mb-[0px] ml-[178px]"
                          >
                            Data showed that Level 3 categories
                            had minimal usage. The previous
                            version displayed them expanded
                            above the model list, taking up
                            valuable screen space. I managed to
                            address this issue.
                          </motion.p>
                        )}

                        {/* Before/After comparison - Level 3 categories */}
                        {isExploringLayoutImage && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.5,
                              delay: 0.5,
                            }}
                            className="flex items-start justify-center max-w-[1100px] mx-auto mt-10"
                            style={{ gap: "100px" }}
                          >
                            {/* Before section */}
                            <div className="flex flex-col gap-3">
                              <div className="text-center">
                                <span className="inline-block bg-red-500/20 text-red-300 px-4 py-1.5 rounded-full text-sm font-['Nunito_Sans'] font-semibold border border-red-500/30">
                                  Before
                                </span>
                              </div>
                              <div className="overflow-hidden inline-block">
                                <GifImage
                                  src="https://qhstaticssl.kujiale.com/image/gif/1766373736836/BD5E72D8D249FF30362988D983A8FEFE.gif"
                                  alt="Before - Level 3 categories at top"
                                  className="h-auto max-h-[600px]"
                                  objectFit="contain"
                                />
                              </div>
                            </div>

                            {/* Concepts section */}
                            <div
                              className="flex items-start"
                              style={{ gap: "28px" }}
                            >
                              <div className="flex flex-col gap-3">
                                <div className="text-center">
                                  <span 
                                    className="inline-block px-4 py-1.5 rounded-full text-sm font-['Nunito_Sans'] font-semibold"
                                    style={{
                                      backgroundColor: `${theme.primaryColor}33`,
                                      color: theme.primaryColor,
                                      borderColor: `${theme.primaryColor}4D`,
                                      borderWidth: '1px'
                                    }}
                                  >
                                    New Design 1
                                  </span>
                                </div>
                                <div className="overflow-hidden inline-block">
                                  <GifImage
                                    src="https://qhstaticssl.kujiale.com/image/gif/1766373857232/2CA2126B373767B736461C653AD2AF13.gif"
                                    alt="Concept 1 - Filter approach"
                                    className="h-auto max-h-[600px]"
                                    objectFit="contain"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col gap-3">
                                <div className="text-center">
                                  <span 
                                    className="inline-block px-4 py-1.5 rounded-full text-sm font-['Nunito_Sans'] font-semibold"
                                    style={{
                                      backgroundColor: `${theme.primaryColor}33`,
                                      color: theme.primaryColor,
                                      borderColor: `${theme.primaryColor}4D`,
                                      borderWidth: '1px'
                                    }}
                                  >
                                    New Design 2
                                  </span>
                                </div>
                                <div className="overflow-hidden inline-block">
                                  <GifImage
                                    src="https://qhstaticssl.kujiale.com/image/gif/1766373856263/3E647EF0DFC59C609C83D172751654C6.gif"
                                    alt="Concept 2 - Tree structure approach"
                                    className="h-auto max-h-[600px]"
                                    objectFit="contain"
                                  />
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {/* Quick Navigation explanation */}
                        {isExploringLayoutImage && (
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                              duration: 0.3,
                              delay: 0.6,
                            }}
                            className="text-text-body font-['Nunito_Sans'] font-light leading-relaxed text-[20px] max-w-[680px] mx-auto mt-[72px] mr-[178px] mb-[0px] ml-[178px]"
                          >
                            Additionally, I explored a Quick
                            Navigation feature for the List
                            View, enabling more intuitive and
                            efficient switching between
                            different categories compared to the
                            previous version.
                          </motion.p>
                        )}

                        {/* Quick Navigation Before/After comparison */}
                        {isExploringLayoutImage && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.5,
                              delay: 0.7,
                            }}
                            className="flex items-start justify-center max-w-[1100px] mx-auto mt-10"
                            style={{ gap: "100px" }}
                          >
                            {/* Before section */}
                            <div className="flex flex-col gap-3">
                              <div className="text-center">
                                <span className="inline-block bg-red-500/20 text-red-300 px-4 py-1.5 rounded-full text-sm font-['Nunito_Sans'] font-semibold border border-red-500/30">
                                  Before
                                </span>
                              </div>
                              <div className="overflow-hidden inline-block">
                                <GifImage
                                  src="https://qhstaticssl.kujiale.com/image/gif/1766373604645/E94FC043BDB6D9446F3D6D2223BCF184.gif"
                                  alt="Before - Quick Navigation"
                                  className="h-[640px] w-auto"
                                  objectFit="contain"
                                />
                              </div>
                            </div>

                            {/* Concept section */}
                            <div className="flex flex-col gap-3">
                              <div className="text-center">
                                <span 
                                  className="inline-block px-4 py-1.5 rounded-full text-sm font-['Nunito_Sans'] font-semibold"
                                  style={{
                                    backgroundColor: `${theme.primaryColor}33`,
                                    color: theme.primaryColor,
                                    borderColor: `${theme.primaryColor}4D`,
                                    borderWidth: '1px'
                                  }}
                                >
                                  New Design
                                </span>
                              </div>
                              <div className="overflow-hidden inline-block">
                                <GifImage
                                  src="https://qhstaticssl.kujiale.com/image/gif/1766373599103/C497404702202FE13B8613A0FC4A6B29.gif"
                                  alt="Concept - Quick Navigation"
                                  className="h-[640px] w-auto"
                                  objectFit="contain"
                                />
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {/* My (Personal) section explanation */}
                        {isExploringLayoutImage && (
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                              duration: 0.3,
                              delay: 0.8,
                            }}
                            className="text-text-body font-['Nunito_Sans'] font-light leading-relaxed text-[20px] max-w-[680px] mx-auto mt-[72px] mr-[178px] mb-[0px] ml-[178px]"
                          >
                            Through user analysis across
                            different stages, we found that
                            growing users and experienced users
                            had significantly higher favoriting
                            and uploading frequency compared to
                            new users, and these behaviors are
                            key factors in promoting model
                            usage. In the Column View, I
                            redesigned the My (Personal) entry
                            and layout to encourage new and
                            growing users to engage more with
                            their personal library.
                          </motion.p>
                        )}

                        {/* My (Personal) Before/After comparison */}
                        {isExploringLayoutImage && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.5,
                              delay: 0.9,
                            }}
                            className="flex items-start justify-center max-w-[1100px] mx-auto mt-10"
                            style={{ gap: "100px" }}
                          >
                            {/* Before section */}
                            <div className="flex flex-col gap-3">
                              <div className="text-center">
                                <span className="inline-block bg-red-500/20 text-red-300 px-4 py-1.5 rounded-full text-sm font-['Nunito_Sans'] font-semibold border border-red-500/30">
                                  Before
                                </span>
                              </div>
                              <div className="overflow-hidden inline-block">
                                <GifImage
                                  src="https://qhstaticssl.kujiale.com/image/gif/1766373484064/EA51687B94611A65B7272B77C7F0F251.gif"
                                  alt="Before - My (Personal)"
                                  className="h-[640px] w-auto"
                                  objectFit="contain"
                                />
                              </div>
                            </div>

                            {/* Concept section */}
                            <div className="flex flex-col gap-3">
                              <div className="text-center">
                                <span 
                                  className="inline-block px-4 py-1.5 rounded-full text-sm font-['Nunito_Sans'] font-semibold"
                                  style={{
                                    backgroundColor: `${theme.primaryColor}33`,
                                    color: theme.primaryColor,
                                    borderColor: `${theme.primaryColor}4D`,
                                    borderWidth: '1px'
                                  }}
                                >
                                  New Design
                                </span>
                              </div>
                              <div className="overflow-hidden inline-block">
                                <GifImage
                                  src="https://qhstaticssl.kujiale.com/image/gif/1766373483745/93B56DD45B38AD41E6BC00CAA81F9A81.gif"
                                  alt="Concept - My (Personal)"
                                  className="h-[640px] w-auto"
                                  objectFit="contain"
                                />
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {/* Sticky notes for Context GIF problems */}
                        {isContextGif && showEmojis && (
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                              delay: 0.3,
                              duration: 0.6,
                            }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 -mt-10 relative z-10"
                          >
                            {[
                              {
                                text: "Long path to find models",
                                bg: "#B4A5E8",
                                rotate: -2,
                                emoji: "😥",
                              },
                              {
                                text: "Loss of orientation during browsing",
                                bg: "#A5E8D4",
                                rotate: 1,
                                emoji: "😰",
                              },
                              {
                                text: "Tedious category switching",
                                bg: "#F5C89B",
                                rotate: -1.5,
                                emoji: "😩",
                              },
                              {
                                text: "Messy classification",
                                bg: "#B4D4F5",
                                rotate: 2,
                                emoji: "😵‍💫",
                              },
                            ].map((note, i) => (
                              <motion.div
                                key={i}
                                initial={{
                                  y: 20,
                                  opacity: 0,
                                  rotate: 0,
                                }}
                                animate={{
                                  y: 0,
                                  opacity: 1,
                                  rotate: note.rotate,
                                }}
                                transition={{
                                  delay: 0.4 + i * 0.1,
                                  duration: 0.5,
                                  ease: "easeOut",
                                }}
                                whileHover={{
                                  rotate: 0,
                                  y: -12,
                                  scale: 1.05,
                                  filter:
                                    "drop-shadow(0 20px 25px rgba(0, 0, 0, 0.3))",
                                  transition: {
                                    duration: 0.15,
                                    ease: "easeOut",
                                  },
                                }}
                                className="p-4 flex flex-col items-center justify-center gap-2"
                                style={{
                                  backgroundColor: note.bg,
                                  minHeight: "100px",
                                  filter:
                                    "drop-shadow(0 10px 15px rgba(0, 0, 0, 0.2))",
                                  willChange:
                                    "transform, filter",
                                  transform: "translateZ(0)",
                                }}
                              >
                                <span className="text-4xl leading-none">
                                  {note.emoji}
                                </span>
                                <p className="text-gray-800 font-['Nunito_Sans'] font-bold text-center text-base leading-tight">
                                  {note.text}
                                </p>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : section.type === "funnel-chart" &&
                section.funnelData ? (
                <div className="max-w-[900px] mx-auto">
                  {/* Chart container */}
                  <div className="bg-[#1a2e2a]/30 rounded-2xl border border-white/10 pt-[54px] pr-[32px] pb-[-1px] pl-[32px] pb-[0px]">
                    {section.funnelData.paths.map(
                      (path, pathIndex) => {
                        // Prepare data for chart
                        const chartData = path.steps.map(
                          (step, i) => ({
                            name: step.label,
                            rate: step.rate,
                            stepNumber: i + 1,
                          }),
                        );

                        return (
                          <motion.div
                            key={pathIndex}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: pathIndex * 0.2,
                              duration: 0.6,
                            }}
                            className={
                              pathIndex > 0 ? "mt-12" : ""
                            }
                          >
                            {/* Path title with total conversion rate */}
                            <div className="mb-6 flex items-center justify-between">
                              <h3 className="text-white font-['Nunito_Sans'] font-semibold text-lg">
                                {path.name}
                              </h3>
                              <div className="text-white/70 font-['Nunito_Sans']">
                                Total Conversion:{" "}
                                <span className="font-bold text-xl" style={{ color: theme.primaryColor }}>
                                  {path.totalRate}%
                                </span>
                              </div>
                            </div>

                            {/* Bar Chart */}
                            <ResponsiveContainer
                              width="100%"
                              height={300}
                            >
                              <BarChart
                                data={chartData}
                                margin={{
                                  top: 20,
                                  right: 30,
                                  left: 20,
                                  bottom: 60,
                                }}
                              >
                                <CartesianGrid
                                  strokeDasharray="3 3"
                                  stroke="rgba(255,255,255,0.1)"
                                />
                                <XAxis
                                  dataKey="name"
                                  stroke="rgba(255,255,255,0.5)"
                                  tick={{
                                    fill: "rgba(255,255,255,0.7)",
                                    fontSize: 12,
                                  }}
                                  height={80}
                                />
                                <YAxis
                                  stroke="rgba(255,255,255,0.5)"
                                  tick={{
                                    fill: "rgba(255,255,255,0.7)",
                                  }}
                                  domain={[0, 100]}
                                  label={{
                                    value: "Conversion %",
                                    angle: -90,
                                    position:
                                      "insideBottomLeft",
                                    fill: "rgba(255,255,255,0.7)",
                                  }}
                                />
                                <RechartsTooltip
                                  cursor={{
                                    fill: "rgba(255,255,255,0.05)",
                                  }}
                                  contentStyle={{
                                    backgroundColor: "#1a1a1a",
                                    border:
                                      "1px solid rgba(255,255,255,0.2)",
                                    borderRadius: "8px",
                                    color: "#fff",
                                  }}
                                  labelStyle={{ color: "#fff" }}
                                  itemStyle={{ color: "#fff" }}
                                  formatter={(value: any) => [
                                    `${value}%`,
                                    "Conversion Rate",
                                  ]}
                                />
                                <Bar
                                  dataKey="rate"
                                  radius={[8, 8, 0, 0]}
                                >
                                  {chartData.map(
                                    (entry, index) => (
                                      <Cell
                                        key={`cell-${index}`}
                                        fill={path.color}
                                        opacity={
                                          0.8 + index * 0.1
                                        }
                                      />
                                    ),
                                  )}
                                </Bar>
                              </BarChart>
                            </ResponsiveContainer>
                          </motion.div>
                        );
                      },
                    )}
                  </div>
                </div>
              ) : section.type === "diagram" ? (
                <div className="max-w-[680px] mx-auto -mt-6">
                  {section.componentName === 'SystemVsUsersDiagram' && (
                    <SystemVsUsersDiagram />
                  )}
                </div>
              ) : null}
            </motion.section>
          ),
        )}

        {/* Next Project Recommendation */}
        {nextProject && (
          <motion.section
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="pt-12"
          >
            <div className="text-center mb-8">
              <h3 className="text-white/50 text-sm font-['Nunito_Sans'] uppercase tracking-wider">
                Next Project
              </h3>
            </div>
            <Link to={`/project/${nextProject.id}`}>
              <div className="group cursor-pointer">
                <div className="h-[280px] rounded-2xl overflow-hidden bg-[#1a1a1a] border border-white/10 flex items-stretch transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  {/* Left side - Image */}
                  <div className="flex-1 relative p-4">
                    <div className="w-full h-full rounded-lg overflow-hidden">
                      <SkeletonImage
                        src={nextProject.image}
                        alt={nextProject.title}
                        className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                        objectFit="cover"
                      />
                    </div>
                  </div>

                  {/* Right side - Text content */}
                  <div className="flex-1 p-8 flex flex-col justify-between">
                    <div>
                      <span 
                        className="text-xs font-['Nunito_Sans'] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full inline-block mb-4"
                        style={{
                          color: theme.primaryColor,
                          borderColor: theme.primaryColor,
                          borderWidth: '1px'
                        }}
                      >
                        {nextProject.category}
                      </span>
                      <h3 className="text-white font-['Nunito_Sans'] font-bold text-2xl mb-4 transition-colors leading-tight">
                        {nextProject.title}
                      </h3>
                      <p className="text-gray-400 font-['Nunito_Sans'] text-base leading-relaxed">
                        {nextProject.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-white transition-colors">
                      <span className="font-['Nunito_Sans'] font-semibold text-sm">
                        View Project
                      </span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.section>
        )}
      </div>

      {/* Image Modal */}
      {imageModalUrl && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
          onClick={() => setImageModalUrl(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={imageModalUrl} 
              alt="Categorization detail" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            <button
              onClick={() => setImageModalUrl(null)}
              className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-200"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}