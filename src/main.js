import { chapters } from './chapters/index.js';

const select = document.querySelector('#sketch-select');
const chapterTitle = document.querySelector('#chapter-title');
const title = document.querySelector('#sketch-title');
const container = document.querySelector('#app');

let currentInstance;

const examples = chapters.flatMap((chapter) =>
  chapter.examples.map((example) => ({
    ...example,
    chapterId: chapter.id,
    chapterTitle: chapter.title,
  })),
);

for (const chapter of chapters) {
  const group = document.createElement('optgroup');
  group.label = chapter.title;

  for (const example of chapter.examples) {
    const option = document.createElement('option');
    option.value = `${chapter.id}/${example.id}`;
    option.textContent = example.title;
    group.append(option);
  }

  select.append(group);
}

function loadSketch(id) {
  const selected = examples.find(
    (example) => `${example.chapterId}/${example.id}` === id,
  );

  if (!selected) {
    return;
  }

  currentInstance?.remove();
  container.replaceChildren();
  chapterTitle.textContent = selected.chapterTitle;
  title.textContent = selected.title;
  currentInstance = new p5(selected.sketch, container);
}

select.addEventListener('change', () => {
  loadSketch(select.value);
});

loadSketch(`${examples[0].chapterId}/${examples[0].id}`);
