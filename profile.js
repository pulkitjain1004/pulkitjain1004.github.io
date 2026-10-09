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
profile.projects.forEach((project, index) => {
  const article = document.createElement('article'); article.className = 'project';
  const number = document.createElement('span'); number.className = 'project-number'; number.textContent = String(index + 1).padStart(2, '0');
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
  article.append(number, content);
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
