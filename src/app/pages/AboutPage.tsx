import React from 'react';
import { motion } from 'motion/react';
import { Download, Mail, X, Phone } from 'lucide-react';
import profileImage from 'figma:asset/6408d50e4f0dc5ee35e17876429276ad2cb8ba7e.png';
import nextportLogo from 'figma:asset/32aa5d9c487f5658c70d6d88dd79b1058c55aae7.png';

export function AboutPage() {
  const [showContactCard, setShowContactCard] = React.useState(false);
  const [copiedItem, setCopiedItem] = React.useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    // Fallback method for clipboard API
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      document.execCommand('copy');
      setCopiedItem(label);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    } finally {
      document.body.removeChild(textArea);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative flex flex-col min-h-screen pt-[150px] px-8 items-center pb-20"
    >
      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#242424] via-[#1a1a1a] to-[#1a2020] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#51e9d6]/3 via-transparent to-[#51e9d6]/5 pointer-events-none" />
      
      {/* Large Radial Glows */}
      <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-[#51e9d6]/[0.08] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-[10%] w-[400px] h-[400px] bg-[#51e9d6]/[0.06] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[15%] w-[450px] h-[450px] bg-[#51e9d6]/[0.07] rounded-full blur-[110px] pointer-events-none" />
      
      {/* Geometric Lines */}
      <div 
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(81, 233, 214, 0.3) 1px, transparent 1px),
            linear-gradient(0deg, rgba(81, 233, 214, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />
      
      {/* Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />
      
      <div className="relative z-10 max-w-[1100px] w-full text-white">
        {/* Title */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="font-['Nunito_Sans'] font-black text-[64px] leading-none text-[#51e9d6] text-center">
            I'm Yihui. Nice to meet you.
          </h1>
        </motion.div>

        {/* Photo and Bio Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-24 grid grid-cols-1 md:grid-cols-[350px_1fr] gap-16 items-end"
        >
          {/* Circular Photo */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="relative w-full h-auto aspect-[267/319]"
          >
            <img src={profileImage} alt="Yihui" className="w-full h-full object-contain" />
          </motion.div>

          {/* Bio Text */}
          <div className="flex flex-col justify-between h-full">
            <div className="space-y-6 pt-[60px]">
              <h2 className="font-['Nunito_Sans'] font-bold text-[36px] leading-tight text-gray-100">
                I'm a Senior Product Designer based in Shanghai, China.
              </h2>
              
              <p className="font-['Nunito_Sans'] text-[18px] text-gray-300 leading-relaxed">
                Over the past 5+ years, I've specialized in product design, UX research, and design systems. 
                Currently at Coohom, I'm building AI-native design tools that transform traditional interfaces 
                into intelligent experiences. I believe great designers discover—or create—clear narratives from chaos.
              </p>
            </div>

            <div className="flex gap-3 items-center self-start mt-6 mb-2">
              <motion.a
                href="https://file.notion.so/f/f/e7cbf9cd-15fc-41fa-a0d8-6e4c94a195fa/46a3768b-2fb7-42d2-96c8-3baab6840911/CV_%E6%96%B9%E6%BC%AA%E5%8D%89_2025_%E4%B8%AD%E6%96%87%E7%89%88.pdf?table=block&id=2cfb337f-8e07-804c-99cb-f36b65dcb4a5&spaceId=e7cbf9cd-15fc-41fa-a0d8-6e4c94a195fa&expirationTimestamp=1766260800000&signature=-xMlJ_QsorETTMtks_AiL8qxAtC8NpfOzSuNpL_PQ7A&downloadName=CV_%E6%96%B9%E6%BC%AA%E5%8D%89_2025+%E4%B8%AD%E6%96%87%E7%89%88.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#51e9d6] text-black font-['Nunito_Sans'] font-bold rounded-lg hover:bg-[#3fd4c1] transition-colors duration-300 shadow-lg shadow-[#51e9d6]/20 hover:shadow-[#51e9d6]/40"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                <span>Resume</span>
              </motion.a>

              <motion.button
                onClick={() => setShowContactCard(true)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-['Nunito_Sans'] font-bold rounded-lg hover:bg-white/20 border border-white/20 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
                <span>Contact</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="font-['Nunito_Sans'] font-black text-[36px] text-[#51e9d6] mb-10">Journey</h2>
          
          <div className="space-y-8">
            {/* Coohom/KuJiaLe */}
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex gap-6 py-2"
            >
              {/* Company Logo */}
              <div className="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden bg-white flex items-center justify-center p-2">
                <img 
                  src="https://images.seeklogo.com/logo-png/61/1/coohom-logo-png_seeklogo-615437.png" 
                  alt="Coohom"
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-baseline gap-4 mb-3">
                  <h3 className="font-['Nunito_Sans'] font-bold text-[24px] text-white">Manycore Tech (Coohom)</h3>
                  <span className="font-['Nunito_Sans'] text-sm text-[#51e9d6] font-semibold">2019 - Present · Shanghai</span>
                </div>
                <p className="font-['Nunito_Sans'] text-[16px] text-gray-400 mb-4">Senior Experience Designer</p>
                <ul className="space-y-3 text-gray-300 font-['Nunito_Sans'] text-[15px] leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-[#51e9d6]">•</span>
                    <span>Led UX design for Coohom's core modules including onboarding, model library, rendering, and membership. Drove model library redesign that boosted activation rate by 50% in 6 months with zero customer complaints.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#51e9d6]">•</span>
                    <span>Built blueprint platform from 0 to 1, growing weekly active users to 150K+ and improving retention from 21% to 55% over 3 years through continuous UX optimization.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#51e9d6]">•</span>
                    <span>Currently rebuilding traditional fixed-layout tools into an AI-native infinite canvas product for international home design market (launch: Feb 2026).</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#51e9d6]">•</span>
                    <span>Led company-wide UX writing standards initiative as lead, managing a 4-person team to establish bilingual guidelines and terminology database. Core member of AI-powered multilingual compliance project.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* NextportChina */}
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex gap-6 py-2"
            >
              {/* Company Logo */}
              <div className="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center">
                <img 
                  src={nextportLogo} 
                  alt="NextportChina"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-baseline gap-4 mb-3">
                  <h3 className="font-['Nunito_Sans'] font-bold text-[20px] text-white">NextportChina B.V.</h3>
                  <span className="font-['Nunito_Sans'] text-sm text-gray-400">2019 · Amsterdam</span>
                </div>
                <p className="font-['Nunito_Sans'] text-[15px] text-gray-400 mb-3">Strategic Product Designer (Intern)</p>
                <p className="text-gray-300 font-['Nunito_Sans'] text-[15px] leading-relaxed">Conducted market and user research for Dutch design brands. Designed WeChat mini-programs connecting Chinese consumers with Dutch brands and travel experiences.</p>
              </div>
            </motion.div>

            {/* KLM */}
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex gap-6 py-2"
            >
              {/* Company Logo */}
              <div className="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden bg-white flex items-center justify-center p-2">
                <img 
                  src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc60300f7-b148-4c09-868b-5e36c1e86f34_1200x1200.jpeg" 
                  alt="KLM"
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-baseline gap-4 mb-3">
                  <h3 className="font-['Nunito_Sans'] font-bold text-[20px] text-white">KLM Royal Dutch Airlines</h3>
                  <span className="font-['Nunito_Sans'] text-sm text-gray-400">2018 · Amsterdam</span>
                </div>
                <p className="font-['Nunito_Sans'] text-[15px] text-gray-400 mb-3">Interaction Designer (Intern)</p>
                <p className="text-gray-300 font-['Nunito_Sans'] text-[15px] leading-relaxed">Conducted user research on ground staff iPad tools. Designed "Appy2Improve" feature to help employees adapt to frequent updates. Awarded 1st place in KLM Design Workshop.</p>
              </div>
            </motion.div>

            {/* NetEase */}
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-6 py-2"
            >
              {/* Company Logo */}
              <div className="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden bg-white flex items-center justify-center p-2">
                <img 
                  src="https://media.licdn.com/dms/image/v2/C510BAQEq55a369mthA/company-logo_100_100/company-logo_100_100/0/1631411965736/netease_logo?e=1767830400&v=beta&t=1Ml0CwbOXdNEeAyUMIbJQ1PyJsdKhmgQ61KBKCpvoLs" 
                  alt="NetEase"
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-baseline gap-4 mb-3">
                  <h3 className="font-['Nunito_Sans'] font-bold text-[20px] text-white">NetEase</h3>
                  <span className="font-['Nunito_Sans'] text-sm text-gray-400">2017 · Hangzhou</span>
                </div>
                <p className="font-['Nunito_Sans'] text-[15px] text-gray-400 mb-3">Interaction Designer (Intern)</p>
                <p className="text-gray-300 font-['Nunito_Sans'] text-[15px] leading-relaxed">Designed mobile interaction for Kaola e-commerce platform's baby & maternity channel and 618 promotion campaign.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Skills & Education Grid */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20"
        >
          {/* Skills */}
          <div>
            <h2 className="font-['Nunito_Sans'] font-black text-[36px] text-[#51e9d6] mb-8">Skills</h2>
            <div className="space-y-6">
              <div>
                <h4 className="font-['Nunito_Sans'] font-semibold text-white mb-3 text-lg">Design Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {['Figma', 'Sketch', 'Cursor', 'Figma Make'].map(skill => (
                    <span key={skill} className="bg-white/10 text-white border border-white/20 px-4 py-2 rounded-lg text-sm font-['Nunito_Sans']">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-['Nunito_Sans'] font-semibold text-white mb-3 text-lg">Code & Build</h4>
                <div className="flex flex-wrap gap-2">
                  {['Vibe Coding', 'HTML', 'CSS', 'JavaScript'].map(skill => (
                    <span key={skill} className="bg-white/10 text-white border border-white/20 px-4 py-2 rounded-lg text-sm font-['Nunito_Sans']">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-['Nunito_Sans'] font-semibold text-white mb-3 text-lg">Core Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {['Product Design', 'UX Research', 'Design Systems', 'Interaction Design', 'Data-Driven Design', 'AI Integration'].map(skill => (
                    <span key={skill} className="bg-white/10 text-white border border-white/20 px-4 py-2 rounded-lg text-sm font-['Nunito_Sans']">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="font-['Nunito_Sans'] font-black text-[36px] text-[#51e9d6] mb-8">Education</h2>
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="font-['Nunito_Sans'] font-bold text-white text-xl mb-2">Delft University of Technology</h3>
                <p className="font-['Nunito_Sans'] text-[#51e9d6] mb-2">MSc Strategic Product Design</p>
                <p className="font-['Nunito_Sans'] text-gray-400 text-sm">2017 - 2019 · Delft, Netherlands</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="font-['Nunito_Sans'] font-bold text-white text-xl mb-2">Zhejiang University</h3>
                <p className="font-['Nunito_Sans'] text-[#51e9d6] mb-2">Dual Bachelor of Engineering Degrees</p>
                <p className="font-['Nunito_Sans'] text-gray-300 text-sm mb-1">Civil Engineering & Industrial Design</p>
                <p className="font-['Nunito_Sans'] text-gray-400 text-sm">2013 - 2017 · Hangzhou, China</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Contact Card Modal Overlay */}
      {showContactCard && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowContactCard(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />
          
          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-[500px] bg-[#1a1a1a] border-2 border-[#51e9d6]/30 rounded-2xl p-8 shadow-2xl shadow-[#51e9d6]/20"
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-[#51e9d6] transition-colors"
              onClick={() => setShowContactCard(false)}
            >
              <X size={24} />
            </button>

            {/* Title */}
            <h2 className="font-['Nunito_Sans'] font-black text-[32px] text-[#51e9d6] mb-4">
              Let's Connect
            </h2>
            
            {/* Description */}
            <p className="font-['Nunito_Sans'] text-[16px] text-gray-300 leading-relaxed mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
            </p>

            {/* Contact Options */}
            <div className="space-y-4">
              <motion.button
                onClick={() => copyToClipboard('fyhzju@gmail.com', 'email')}
                className="w-full flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-[#51e9d6]/10 hover:border-[#51e9d6]/40 transition-all duration-300 group cursor-pointer"
                whileHover={{ x: 4 }}
              >
                <div className="w-12 h-12 bg-[#51e9d6]/20 rounded-full flex items-center justify-center group-hover:bg-[#51e9d6]/30 transition-colors">
                  <Mail size={24} className="text-[#51e9d6]" />
                </div>
                <div className="flex-1 text-left">
                  <p className="font-['Nunito_Sans'] font-semibold text-white">Email</p>
                  <p className="font-['Nunito_Sans'] text-sm text-gray-400">fyhzju@gmail.com</p>
                </div>
                {copiedItem === 'email' && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="font-['Nunito_Sans'] text-[#51e9d6] text-sm font-semibold"
                  >
                    Copied
                  </motion.span>
                )}
              </motion.button>

              <motion.a
                href="https://www.linkedin.com/in/yihui-fang/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-[#51e9d6]/10 hover:border-[#51e9d6]/40 transition-all duration-300 group"
                whileHover={{ x: 4 }}
              >
                <div className="w-12 h-12 bg-[#51e9d6]/20 rounded-full flex items-center justify-center group-hover:bg-[#51e9d6]/30 transition-colors">
                  <svg className="w-6 h-6 text-[#51e9d6]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-['Nunito_Sans'] font-semibold text-white">LinkedIn</p>
                  <p className="font-['Nunito_Sans'] text-sm text-gray-400">Connect with me</p>
                </div>
              </motion.a>

              <motion.button
                onClick={() => copyToClipboard('19121872610', 'phone')}
                className="w-full flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-[#51e9d6]/10 hover:border-[#51e9d6]/40 transition-all duration-300 group cursor-pointer"
                whileHover={{ x: 4 }}
              >
                <div className="w-12 h-12 bg-[#51e9d6]/20 rounded-full flex items-center justify-center group-hover:bg-[#51e9d6]/30 transition-colors">
                  <Phone size={24} className="text-[#51e9d6]" />
                </div>
                <div className="flex-1 text-left">
                  <p className="font-['Nunito_Sans'] font-semibold text-white">Phone</p>
                  <p className="font-['Nunito_Sans'] text-sm text-gray-400">191 2187 2610</p>
                </div>
                {copiedItem === 'phone' && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="font-['Nunito_Sans'] text-[#51e9d6] text-sm font-semibold"
                  >
                    Copied
                  </motion.span>
                )}
              </motion.button>
            </div>
          </motion.div>
        </>
      )}
    </motion.div>
  );
}