// Edit this object to personalize your website. Use null to omit a project link.
const profile = {
  name: 'Pulkit Jain',
  firstName: 'Pulkit',
  headline: ['From data to insight.', 'From insight to impact.'],
  bio: 'I’m an analytics and product leader based in Bengaluru, with 12 years of experience across consumer insights, marketing, data science, and supply-chain planning. At Target, I built analytics capabilities that helped teams understand customers and make better decisions. Today, I’m building with agentic AI.',
  about: 'My path has taken me from engineering projects at SAIL to healthcare data research at Texas A&M, entrepreneurship with Hexamania, and seven years at Target. I bring quantitative analysis and qualitative research together to understand complex problems—and turn that understanding into useful products and strategies.',
  education: 'Master of Engineering, Industrial Engineering · Texas A&M University, 2018',
  skills: ['SQL · R · Python · dbt', 'Consumer & growth analytics', 'Forecasting & A/B testing', 'Product management', 'RAG · LangGraph · MCP', 'Tableau · Power BI · Domo'],
  projects: [
    { title: 'Meet my AI counterpart', description: 'Built a chatbot that represents me and answers questions about my professional experience. Explore my background, projects, and career through a conversation with my AI counterpart.', tags: ['Live app', 'AI chatbot', 'Personal project'], url: 'https://udify.app/chat/Vu9K2nkXjRlBYlaO', actionLabel: 'Chat with me' },
    { title: 'RoastOps — inventory copilot', description: 'Built an AI inventory and supply-chain assistant for coffee roasteries and cafés. It combines an SQLite inventory database, retrieval of coffee supply-chain knowledge, and Python tools to calculate safety stock, reorder points, and days of runway.', tags: ['Live app', 'Python', 'Gradio', 'RAG', 'SQLite'], url: 'https://inventory-agent-ok4m.onrender.com/', source: 'https://github.com/pulkitjain1004/inventory_agent' },
    { title: 'Agentic AI for consumer insights', description: 'Built and deployed an AI application that combines qualitative consumer feedback, competitive intelligence, and internal sales data to investigate root causes. Designed an architecture that connects multiple agents and databases using LangGraph and MCP/A2A protocols.', tags: ['Personal project', 'Python', 'Agentic AI', 'RAG'], url: null },
    { title: 'Customer growth & retention', description: 'At Target, refreshed customer segmentation using PCA and K-means, connected voice-of-customer feedback with behavioral data, and led work to retain high-value customers. Targeted Beauty promotions delivered a 2% increase in retention and $40M in net annual profit.', tags: ['Target', 'Segmentation', 'Growth strategy'], url: null },
    { title: 'Digital demand forecasting', description: 'Owned Target’s Digital Consensus Plan, an annual volume forecast used by inventory, labor, and capital planning teams. Rebuilt an Excel-based process in R, reducing processing time from two weeks to four hours while keeping MAPE within 2.5%.', tags: ['Target', 'R', 'Forecasting', 'Supply chain'], url: null },
    { title: 'Category Health Tracker', description: 'Led the redesign of a consumer and brand health tracker at Target. Defined consumer-perception KPIs, managed the roadmap and research agency, and expanded the tracker’s outputs while reducing the annual budget by $200K.', tags: ['Target', 'Consumer research', 'Product ownership'], url: null },
    { title: 'Hexamania', description: 'Co-founded an arithmetic puzzle game to help children practice basic math. Developed the game, researched consumer needs, and ran school trials. The team secured seed funding, received pre-orders, and won recognition at Texas A&M entrepreneurship competitions.', tags: ['Founder', 'Education', 'Product development'], url: null },
    { title: 'Healthcare pattern mining', description: 'At Texas A&M’s Population Informatics Lab, applied ApproxMAP to study clinical pathways in cardiac surgery patients. Worked with R, SQL, and high-performance computing, and built a Shiny application to make the research package accessible.', tags: ['Texas A&M', 'R', 'Shiny', 'Data mining'], url: 'https://github.com/pulkitjain1004/ApproxMap_Shiny' },
  ],
  // Example: { label: 'Email', url: 'mailto:you@example.com' }
  links: [
    { label: 'Email', url: 'mailto:pulkitjain1004@gmail.com' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/pulkitjain1004/' },
    { label: 'GitHub', url: 'https://github.com/pulkitjain1004' },
  ],
};

document.title = `${profile.name} — Portfolio`;
document.querySelector('meta[name="description"]').content = `${profile.name}. ${profile.bio}`;
document.getElementById('brand').firstChild.textContent = profile.name;
document.getElementById('first-name').textContent = `${profile.firstName}.`;
const headline = document.getElementById('headline');
headline.replaceChildren();
profile.headline.forEach((line, index) => {
  if (index) headline.append(document.createElement('br'));
  headline.append(document.createTextNode(line));
});
document.getElementById('bio').textContent = profile.bio;
document.getElementById('about-detail').textContent = profile.about;
document.getElementById('education').textContent = profile.education;
profile.skills.forEach(skill => { const item = document.createElement('span'); item.className = 'tag'; item.textContent = skill; document.getElementById('skills').append(item); });
function validUrl(value) {
  try { const url = new URL(value); return ['https:', 'http:', 'mailto:'].includes(url.protocol); } catch { return false; }
}
// Original vector illustrations: light, crisp at any screen size, and no image downloads.
const projectArt = [
  { color: '#677b91', bg: '#e8edf2', drawing: '<rect x="40" y="35" width="116" height="77" rx="20" fill="white"/><path d="M65 110l-9 19 32-17" fill="white"/><circle cx="76" cy="73" r="5"/><circle cx="98" cy="73" r="5"/><circle cx="120" cy="73" r="5"/><path d="M147 23v20m-10-10h20" fill="none" stroke="currentColor" stroke-width="3"/>' },
  { color: '#9a7255', bg: '#f0e8df', drawing: '<ellipse cx="101" cy="127" rx="53" ry="7" fill="currentColor" opacity=".12"/><path d="M56 61h80v37c0 22-18 29-40 29S56 120 56 98z" fill="white"/><path d="M137 69h7c26 0 26 32 0 32h-9M75 45c-11-13 11-14 0-26M96 45c-11-13 11-14 0-26M117 45c-11-13 11-14 0-26" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><ellipse cx="96" cy="62" rx="40" ry="7" fill="currentColor" opacity=".6"/>' },
  { color: '#7c7398', bg: '#ece8f3', drawing: '<path d="M55 48l90 7-41 63z" fill="none" stroke="currentColor" stroke-width="2" opacity=".5"/><path d="M55 48l-15 56 64 14 50-9-9-54" fill="none" stroke="currentColor" stroke-width="2" opacity=".5"/><circle cx="55" cy="48" r="14" fill="white"/><circle cx="145" cy="55" r="12" fill="white"/><circle cx="40" cy="104" r="10"/><circle cx="104" cy="118" r="14" fill="white"/><circle cx="154" cy="109" r="10"/><path d="M92 62l8 17 18 8-18 8-8 18-8-18-18-8 18-8z"/>' },
  { color: '#6d855d', bg: '#e8eddf', drawing: '<rect x="37" y="33" width="126" height="95" rx="10" fill="white"/><path d="M55 109h89M55 109V52" fill="none" stroke="currentColor" opacity=".25" stroke-width="2"/><rect x="66" y="85" width="13" height="24" rx="3" opacity=".4"/><rect x="89" y="73" width="13" height="36" rx="3" opacity=".65"/><rect x="112" y="57" width="13" height="52" rx="3"/><path d="M65 66l25-14 21 3 30-23m-17 0h17v17" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>' },
  { color: '#658b8a', bg: '#e2eeee', drawing: '<path d="M35 120h130" stroke="currentColor" opacity=".25" stroke-width="2"/><path d="M40 110l24-17 23 7 28-38 26 5 22-28" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><path d="M40 110l24-17 23 7 28-38 26 5 22-28v81H40z" opacity=".1"/><circle cx="64" cy="93" r="5" fill="white" stroke="currentColor" stroke-width="2"/><circle cx="115" cy="62" r="5" fill="white" stroke="currentColor" stroke-width="2"/><path d="M145 37h20v20" fill="none" stroke="currentColor" stroke-width="3"/><path d="M53 40h30m-30 9h18" stroke="currentColor" opacity=".4" stroke-width="3" stroke-linecap="round"/>' },
  { color: '#b08850', bg: '#f3ecdc', drawing: '<rect x="43" y="29" width="113" height="103" rx="9" fill="white"/><path d="M60 50h43M60 60h25" stroke="currentColor" stroke-width="3" opacity=".5" stroke-linecap="round"/><circle cx="84" cy="96" r="20" fill="none" stroke="currentColor" stroke-width="9" opacity=".18"/><path d="M84 76a20 20 0 0119 26" fill="none" stroke="currentColor" stroke-width="9"/><rect x="120" y="92" width="8" height="24" rx="2" opacity=".45"/><rect x="134" y="78" width="8" height="38" rx="2"/>' },
  { color: '#ac796d', bg: '#f2e5df', drawing: '<path d="M100 24l40 23v46l-40 23-40-23V47z" fill="white"/><path d="M55 82l30 17v35l-30 17-30-17V99zM145 82l30 17v35l-30 17-30-17V99z" fill="currentColor" opacity=".18"/><path d="M91 68h18m-9-9v18M46 117h18M139 111l12 12m0-12l-12 12" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>' },
  { color: '#7b899d', bg: '#e7ebf2', drawing: '<rect x="39" y="31" width="123" height="101" rx="12" fill="white"/><path d="M52 84h24l10-25 16 48 15-34 8 11h24" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><path d="M56 47h22M56 117h47" stroke="currentColor" stroke-width="3" opacity=".25" stroke-linecap="round"/><circle cx="146" cy="47" r="4" opacity=".5"/>' },
];
profile.projects.forEach((project, index) => {
  const article = document.createElement('article'); article.className = 'project';
  const art = projectArt[index % projectArt.length];
  const thumbnail = document.createElement('div'); thumbnail.className = 'project-art'; thumbnail.style.background = art.bg; thumbnail.style.color = art.color; thumbnail.setAttribute('aria-hidden', 'true');
  thumbnail.innerHTML = `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><circle cx="166" cy="26" r="35" fill="white" opacity=".25"/><circle cx="19" cy="144" r="40" fill="white" opacity=".25"/>${art.drawing}</svg>`;
  const number = document.createElement('span'); number.className = 'project-number'; number.textContent = String(index + 1).padStart(2, '0');
  thumbnail.append(number);
  const content = document.createElement('div');
  const title = document.createElement('h3'); title.textContent = project.title;
  const description = document.createElement('p'); description.textContent = project.description;
  const tags = document.createElement('div'); tags.className = 'tags';
  project.tags.forEach(tag => { const el = document.createElement('span'); el.className = 'tag'; el.textContent = tag; tags.append(el); });
  content.append(title, description, tags);
  if ((project.source && validUrl(project.source)) || project.actionLabel) {
    const links = document.createElement('div'); links.className = 'project-actions';
    [[project.url, project.actionLabel || 'Try the app'], [project.source, 'View source']].forEach(([url, label]) => {
      if (!validUrl(url)) return;
      const link = document.createElement('a'); link.href = url; link.textContent = `${label} ↗`; links.append(link);
    });
    content.append(links);
  }
  article.append(thumbnail, content);
  if (project.url && validUrl(project.url)) {
    const link = document.createElement('a'); link.className = 'project-link'; link.href = project.url; link.textContent = '↗'; link.setAttribute('aria-label', `View ${project.title}`); article.append(link);
  }
  document.getElementById('project-list').append(article);
});
const contacts = document.getElementById('contact-links');
profile.links.forEach(item => {
  if (!validUrl(item.url)) return;
  const link = document.createElement('a'); link.href = item.url; link.textContent = `${item.label} ↗`; contacts.append(link);
});
if (!contacts.children.length) { const text = document.createElement('span'); text.className = 'placeholder'; text.textContent = 'Add your email and social links in profile.js.'; contacts.append(text); }
document.getElementById('copyright').textContent = `© ${new Date().getFullYear()} ${profile.name}`;
