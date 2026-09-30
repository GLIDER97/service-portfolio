// Google Form embed sizing.
// A cross-origin iframe can't report its content height, so the height is set to fit the
// form's first page (measured at each width Google Forms lays out differently). Longer pages
// scroll inside the form. Re-measure these if you add or remove questions on page 1.
const PAGE1_HEIGHTS = [ // [min iframe width, height]
  [641, 1160],
  [600, 1182],
  [460, 1204],
  [430, 1228],
  [370, 1310],
  [335, 1356],
  [320, 1378],
  [0, 1395],
];

document.addEventListener('DOMContentLoaded', () => {
  const frame = document.getElementById('order-form');
  if (!frame) return;

  const fit = () => {
    const w = frame.clientWidth;
    const [, h] = PAGE1_HEIGHTS.find(([min]) => w >= min);
    frame.style.height = `${h}px`;
  };
  fit();
  new ResizeObserver(fit).observe(frame);

  // Each Next/Back/Submit reloads the iframe. Bring the top of the form back into view
  // so the visitor starts the new page at its first question.
  let loads = 0;
  frame.addEventListener('load', () => {
    if (++loads === 1) return;
    if (frame.getBoundingClientRect().top < 0) frame.scrollIntoView({ block: 'start' });
  });
});

// Sample videos: show the YouTube thumbnail, load the player only when clicked.
// Without JavaScript (or with Ctrl/Cmd-click) the link opens the video on YouTube.
document.addEventListener('click', (e) => {
  const link = e.target.closest('a.yt[data-yt]');
  if (!link || e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0) return;
  e.preventDefault();
  const iframe = document.createElement('iframe');
  iframe.src = `https://www.youtube-nocookie.com/embed/${link.dataset.yt}?autoplay=1&rel=0&playsinline=1`;
  iframe.title = link.getAttribute('aria-label').replace(/^Play /, '');
  iframe.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
  iframe.allowFullscreen = true;
  const box = document.createElement('div');
  box.className = 'yt';
  box.style.aspectRatio = link.style.aspectRatio;
  box.append(iframe);
  link.replaceWith(box);
});
