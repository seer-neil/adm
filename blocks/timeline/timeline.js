export default function decorate(block) {
  const container = document.createElement('div');
  container.className = 'timeline-container';
  
  [...block.children].forEach((row, index) => {
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item';
    
    const content = document.createElement('div');
    content.className = 'timeline-content';
    
    const cells = row.querySelectorAll('div');
    if (cells.length >= 3) {
      content.innerHTML = `
        <div class="timeline-time">${cells[0].textContent}</div>
        <div class="timeline-title">${cells[1].textContent}</div>
        <div class="timeline-desc">${cells[2].textContent}</div>
      `;
    }
    
    timelineItem.appendChild(content);
    container.appendChild(timelineItem);
  });
  
  block.innerHTML = '';
  block.appendChild(container);
}