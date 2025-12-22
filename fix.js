const fs = require('fs');
const filePath = '/src/app/components/ProjectDetailPage.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Replace the exact line
content = content.replace(
  'section.title === "Agent + Design Tool" || section.title === "Agent + Infinite Canvas"',
  'section.title.includes("Agent + Design Tool") || section.title.includes("Agent + Infinite Canvas")'
);

fs.writeFileSync(filePath, content);
console.log('Fixed!');
