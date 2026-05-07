const fs = require('fs');

const icerikler = fs.readFileSync('src/icerikler.txt', 'utf8');
const lines = icerikler.split(/\r?\n/);

const parsedData = {};
let currentCourse = null;
let currentWeek = null;
let currentDesc = [];
let currentPdf = '';
let currentYoutube = '';
let parsingDesc = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  const courseMatch = line.match(/^##\s+(.+?)\s+##$/);
  if (courseMatch) {
    // Save previous
    if (currentCourse && currentWeek) {
      if (!parsedData[currentCourse]) parsedData[currentCourse] = {};
      parsedData[currentCourse][currentWeek] = {
        description: currentDesc.join('\n').trim(),
        pdf: currentPdf,
        youtube: currentYoutube
      };
    }
    currentCourse = courseMatch[1].trim();
    currentWeek = null;
    currentDesc = [];
    currentPdf = '';
    currentYoutube = '';
    parsingDesc = false;
    continue;
  }

  const weekMatch = line.match(/^(\d+)\.\s+Hafta\s+Konu\s*:\s*(.*)$/);
  if (weekMatch) {
    if (currentCourse && currentWeek) {
      if (!parsedData[currentCourse]) parsedData[currentCourse] = {};
      parsedData[currentCourse][currentWeek] = {
        description: currentDesc.join('\n').trim(),
        pdf: currentPdf,
        youtube: currentYoutube
      };
    }
    currentWeek = parseInt(weekMatch[1]);
    currentDesc = [weekMatch[2].trim()]; // Add the topic to description? No, wait. In the previous parser, was the topic part of description?
    // Let's check existing TS. BMB103 week 1: "Bilgisayar mühendisliği serüvenine başlarken..."
    // Wait, the topic is not in the description. The description is just the 'description :' part.
    currentDesc = [];
    parsingDesc = false;
    continue;
  }

  if (line.startsWith('description :')) {
    parsingDesc = true;
    currentDesc.push(line.substring('description :'.length).trim());
    continue;
  }

  if (line.startsWith('pdf link :')) {
    parsingDesc = false;
    currentPdf = line.substring('pdf link :'.length).trim();
    continue;
  }

  if (line.startsWith('youtube link :')) {
    parsingDesc = false;
    currentYoutube = line.substring('youtube link :'.length).trim();
    continue;
  }

  if (parsingDesc && line.trim() !== '' && line.trim() !== '---') {
    currentDesc.push(line);
  }
}

if (currentCourse && currentWeek) {
  if (!parsedData[currentCourse]) parsedData[currentCourse] = {};
  parsedData[currentCourse][currentWeek] = {
    description: currentDesc.join('\n').trim(),
    pdf: currentPdf,
    youtube: currentYoutube
  };
}

// Now generate the TS string
let tsOutput = 'const WEEKLY_CONTENT_OVERRIDES: Partial<WeeklyContentByCourse> = {\n';

for (const [course, weeks] of Object.entries(parsedData)) {
  tsOutput += `  '${course}': {\n`;
  for (const [week, data] of Object.entries(weeks)) {
    // Ensure we escape backslashes, backticks, and template string interpolation
    const escapedDesc = data.description
      .replace(/\\/g, '\\\\')
      .replace(/\`/g, '\\`')
      .replace(/\$\{/g, '\\${');
    tsOutput += `    ${week}: {\n`;
    tsOutput += `      description: \`${escapedDesc}\`,\n`;
    tsOutput += `      resources: [\n`;
    tsOutput += `        { title: '${week}. Hafta Sunum', type: 'PDF', href: '${data.pdf || '#'}' },\n`;
    tsOutput += `        { title: '${week}. Hafta Ders Kaydi', type: 'Video', href: '${data.youtube || '#'}' },\n`;
    tsOutput += `      ],\n`;
    tsOutput += `    },\n`;
  }
  tsOutput += `  },\n`;
}
// removed invalid export

// Read the original TS file to replace the block
const tsFile = 'src/data/weeklyContent.ts';
let originalTs = fs.readFileSync(tsFile, 'utf8');

const startRegex = /const WEEKLY_CONTENT_OVERRIDES:\s*Partial<WeeklyContentByCourse>\s*=\s*\{/;
const match = originalTs.match(startRegex);
const endRegex = /};\s*export const weeklyContentByCourse/;
  const endMatch = originalTs.match(endRegex);

  if (match && endMatch) {
    const bottomPart = originalTs.substring(endMatch.index + 2); // after };
    const newTs = originalTs.substring(0, match.index) + tsOutput + '};\n\n' + bottomPart.trimStart();
    fs.writeFileSync(tsFile, newTs);
    console.log("Successfully updated " + tsFile);
  } else {
    console.log("Could not find WEEKLY_CONTENT_OVERRIDES or bottom part in ts file.");
  }
