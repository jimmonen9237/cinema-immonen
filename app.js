const STORE = 'cinema-immonen-v1';
let saved = {};
try {
    saved = JSON.parse(localStorage.getItem(STORE) || '{}');
}
catch (e) { }
;
let page = 0, activeFilm = null;
const $ = id => document.getElementById(id), esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const all = [...films, ...suggestions.filter(r => !films.some(f => f.title.toLowerCase() === r.title.toLowerCase()))];
const state = f => saved[f.id] || {};
const status = f => state(f).status || (films.some(x => x.id === f.id) ? 'watched' : 'to-watch');
function persist() { localStorage.setItem(STORE, JSON.stringify(saved)); }
function toast(s) { $('toast').textContent = s; $('toast').style.display = 'block'; setTimeout(() => $('toast').style.display = 'none', 1800); }
function changePage(p) { document.querySelectorAll('.section').forEach(x => x.classList.toggle('active', x.id === p)); document.querySelectorAll('nav button').forEach(x => x.classList.toggle('active', x.dataset.page === p)); if (p === 'collection')
    renderLibrary(); if (p === 'recommendations')
    renderRecommendations(); if (p === 'watchlist')
    renderWatchlist(); window.scrollTo(0, 0); }
document.querySelectorAll('nav button').forEach(b => b.onclick = () => changePage(b.dataset.page));
function counts(field) { let o = {}; films.forEach(f => (field === 'countries' ? f.countries : field === 'genres' ? f.genres : [field === 'decade' ? Math.floor(f.year / 10) * 10 + 's' : f.director]).forEach(x => o[x] = (o[x] || 0) + 1)); return Object.entries(o).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])); }
function bars(id, data, limit, kind) { let arr = data.slice(0, limit), max = arr[0]?.[1] || 1; $(id).innerHTML = arr.map(([name, n]) => `<div class="barrow"><button data-name="${esc(name)}" data-kind="${kind}">${esc(name)}</button><div class="track"><div class="fill" style="width:${n / max * 100}%"></div></div><div class="number">${n}</div></div>`).join(''); $(id).querySelectorAll('button').forEach(b => b.onclick = () => filterBy(b.dataset.kind, b.dataset.name)); }
function filterBy(kind, name) { ['search', 'countryFilter', 'directorFilter', 'genreFilter', 'decadeFilter', 'statusFilter'].forEach(id => $(id).value = ''); let target = { director: 'directorFilter', country: 'countryFilter', genre: 'genreFilter', decade: 'decadeFilter' }[kind]; if (target)
    $(target).value = name; page = 0; changePage('collection'); }
function init() { let directors = counts('director'), countries = counts('countries'), genres = counts('genres'), decades = counts('decade'); $('stats').innerHTML = [[films.length, 'Films in the archive'], [directors.length, 'Distinct directors'], [countries.length, 'Countries & regions'], [Math.min(...films.map(f => f.year)) + '–' + Math.max(...films.map(f => f.year)), 'Release-year range']].map(([n, l]) => `<div class="stat"><small>${l}</small><strong>${n}</strong></div>`).join(''); bars('directorsChart', directors, 10, 'director'); bars('countriesChart', countries, 10, 'country'); bars('genresChart', genres, 10, 'genre'); bars('decadesChart', decades, 12, 'decade'); bars('allDirectors', directors, 1000, 'director'); bars('allCountries', countries, 1000, 'country'); for (let [id, values] of [['countryFilter', countries.map(x => x[0])], ['directorFilter', directors.map(x => x[0]).sort()], ['genreFilter', genres.map(x => x[0])], ['decadeFilter', decades.map(x => x[0]).sort()]])
    values.forEach(v => $(id).insertAdjacentHTML('beforeend', `<option value="${esc(v)}">${esc(v)}</option>`)); let months = {}; films.forEach(f => { let m = f.date.match(/(?:^|\.)(\d{1,2})\.(20\d{2})$/); if (m) {
    let k = m[2] + '-' + m[1].padStart(2, '0');
    months[k] = (months[k] || 0) + 1;
} }); let keys = Object.keys(months).sort(), mx = Math.max(1, ...Object.values(months)); $('timeline').innerHTML = keys.length ? `<div class="timeline">${keys.map(k => `<div class="timecol" title="${k}: ${months[k]} films"><div class="column" style="height:${months[k] / mx * 125}px"></div><label>${k.slice(2)}</label></div>`).join('')}</div>` : '<p class="empty">No viewing dates recorded.</p>'; $('insights').innerHTML = `<p>Most represented director: <b>${esc(directors[0][0])}</b> (${directors[0][1]} films). Most represented country: <b>${esc(countries[0][0])}</b> (${countries[0][1]} films).</p><p>Most represented release decade: <b>${esc(decades[0][0])}</b> (${decades[0][1]} films). Median release year: <b>${[...films].map(f => f.year).sort((a, b) => a - b)[Math.floor(films.length / 2)]}</b>.</p><p class="note">Genres are curated editorial tags rather than metadata from your original sheet. Ratings represent your own scores, not public ratings. Blank viewing dates are treated as unknown, not unwatched.</p>`; renderLibrary(); renderRecommendations(); renderWatchlist(); }
function filmCard(f) { return `<button class="film" data-id="${esc(f.id)}"><div class="year">${f.year} · ${status(f) === 'watched' ? 'WATCHED' : 'TO WATCH'}</div><h3>${esc(f.title)}</h3><div class="meta">${esc(f.director)}<br>${esc(f.countries?.join(', ') || f.country)}</div><span class="pill">${state(f).rating ? '★ ' + state(f).rating.toFixed(1) + ' / 5' : f.genres.slice(0, 2).join(' · ')}</span></button>`; }
function bindCards(el) { el.querySelectorAll('[data-id]').forEach(b => b.onclick = () => openFilm(all.find(f => f.id === b.dataset.id))); }
function filtered() { let q = $('search').value.trim().toLowerCase(), country = $('countryFilter').value, dir = $('directorFilter').value, genre = $('genreFilter').value, decade = $('decadeFilter').value, st = $('statusFilter').value; let arr = films.filter(f => (!q || [f.title, f.director, ...f.countries, ...f.genres].join(' ').toLowerCase().includes(q)) && (!country || f.countries.includes(country)) && (!dir || f.director === dir) && (!genre || f.genres.includes(genre)) && (!decade || Math.floor(f.year / 10) * 10 + 's' === decade) && (!st || status(f) === st)); let sort = $('sort').value; arr.sort((a, b) => sort === 'newest' ? b.year - a.year : sort === 'oldest' ? a.year - b.year : sort === 'director' ? a.director.localeCompare(b.director) : sort === 'rating' ? (state(b).rating || 0) - (state(a).rating || 0) : a.title.localeCompare(b.title)); return arr; }
function renderLibrary() { let arr = filtered(), size = 24, pages = Math.max(1, Math.ceil(arr.length / size)); page = Math.min(page, pages - 1); $('results').textContent = `${arr.length} of ${films.length} films`; $('filmgrid').innerHTML = arr.slice(page * size, (page + 1) * size).map(filmCard).join('') || '<div class="empty">No matching films.</div>'; bindCards($('filmgrid')); $('pager').innerHTML = `<button id="prev" ${page === 0 ? 'disabled' : ''}>← Previous</button><span>${page + 1} / ${pages}</span><button id="next" ${page >= pages - 1 ? 'disabled' : ''}>Next →</button>`; $('prev').onclick = () => { page--; renderLibrary(); scrollTo(0, 0); }; $('next').onclick = () => { page++; renderLibrary(); scrollTo(0, 0); }; }
document.querySelectorAll('.filters input,.filters select').forEach(x => x.addEventListener(x.tagName === 'INPUT' ? 'input' : 'change', () => { page = 0; renderLibrary(); }));
$('reset').onclick = () => { document.querySelectorAll('.filters input,.filters select').forEach(x => x.value = ''); page = 0; renderLibrary(); };
function recScore(r) { let genre = counts('genres'), dir = counts('director'), country = counts('countries'); let ratingBoost = films.filter(f => state(f).rating >= 4).flatMap(f => f.genres); return r.genres.reduce((a, g) => a + (genre.find(x => x[0] === g)?.[1] || 0) * 1.5 + ratingBoost.filter(x => x === g).length * 5, 0) + (dir.find(x => x[0] === r.director)?.[1] || 0) * 8 + (country.find(x => x[0] === r.country)?.[1] || 0) * .4; }
function renderRecommendations() { let arr = suggestions.filter(r => status(r) !== 'watched' && !films.some(f => f.title.toLowerCase() === r.title.toLowerCase())).sort((a, b) => recScore(b) - recScore(a)); $('recommendgrid').innerHTML = arr.map(r => `<button class="recommend" data-id="${esc(r.id)}"><div class="year">${r.year} · ${esc(r.country)}</div><h3>${esc(r.title)}</h3><div class="meta">${esc(r.director)}</div><p>${esc(r.summary)}</p><p class="reason">${esc(r.why)}</p><span class="pill">${status(r) === 'to-watch' && state(r).status ? '✓ On watchlist' : '＋ Add to watchlist'}</span></button>`).join('') || '<div class="empty">All current recommendations are marked watched.</div>'; bindCards($('recommendgrid')); }
$('refreshRecs').onclick = () => { renderRecommendations(); toast('Recommendations updated'); };
function renderWatchlist() { let arr = all.filter(f => state(f).status === 'to-watch'); $('watchgrid').innerHTML = arr.map(filmCard).join('') || '<p class="empty">No films saved to your watchlist yet.</p>'; bindCards($('watchgrid')); let rated = all.filter(f => state(f).rating).sort((a, b) => state(b).rating - state(a).rating); $('ratedgrid').innerHTML = rated.map(filmCard).join('') || '<p class="empty">No personal ratings yet.</p>'; bindCards($('ratedgrid')); }
function openFilm(f) { if (!f)
    return; activeFilm = f; $('detailKind').textContent = films.some(x => x.id === f.id) ? 'THE ARCHIVE' : 'RECOMMENDED FILM'; $('detailTitle').textContent = f.title; $('detailMeta').textContent = [f.year, f.director, (f.countries || [f.country]).join(', '), f.genres.join(' · ')].join('  ·  '); $('detailSummary').textContent = f.summary || 'Loading film synopsis…'; $('detailWhy').textContent = f.why || ''; let url = f.url && /^https:\/\//.test(f.url) ? f.url : 'https://en.wikipedia.org/wiki/Special:Search?search=' + encodeURIComponent(f.title + ' ' + f.year + ' film'); $('sourceLink').href = url; drawActions(); drawStars(); $('modal').classList.add('open'); document.body.style.overflow = 'hidden'; if (!f.summary)
    loadSummary(f); }
async function loadSummary(f) { try {
    let wiki = f.url?.match(/^https:\/\/en\.wikipedia\.org\/wiki\/([^#?]+)/)?.[1];
    if (!wiki)
        throw 0;
    let response = await fetch('https://en.wikipedia.org/api/rest_v1/page/summary/' + wiki);
    if (!response.ok)
        throw 0;
    let j = await response.json();
    if (activeFilm?.id !== f.id)
        return;
    $('detailSummary').textContent = j.extract || 'No synopsis available.';
}
catch (e) {
    if (activeFilm?.id === f.id)
        $('detailSummary').textContent = 'Synopsis unavailable offline. Use “Read more” for the film’s source page.';
} }
function drawActions() { $('detailActions').innerHTML = ['watched', 'to-watch'].map(s => `<button data-status="${s}" class="${status(activeFilm) === s ? 'selected' : ''}">${s === 'watched' ? '✓ Watched' : '＋ To Watch'}</button>`).join(''); $('detailActions').querySelectorAll('button').forEach(b => b.onclick = () => { saved[activeFilm.id] = { ...state(activeFilm), status: b.dataset.status }; persist(); drawActions(); renderLibrary(); renderRecommendations(); renderWatchlist(); toast('Status saved'); }); }
function drawStars() { let r = state(activeFilm).rating || 0; $('stars').innerHTML = Array.from({ length: 10 }, (_, i) => { let n = (i + 1) / 2; return `<button class="${n <= r ? 'lit' : ''}" data-rating="${n}" title="${n} stars" aria-label="Rate ${n} stars">${i % 2 === 0 ? '◐' : '★'}</button>`; }).join('') + `<small>${r ? r.toFixed(1) + ' / 5' : 'Not rated'}</small><button id="clearRating" style="font-size:12px;color:#c6aaa6">Clear</button>`; $('stars').querySelectorAll('[data-rating]').forEach(b => b.onclick = () => setRating(+b.dataset.rating)); $('clearRating').onclick = () => setRating(null); }
function setRating(r) { saved[activeFilm.id] = { ...state(activeFilm), rating: r }; persist(); drawStars(); renderLibrary(); renderRecommendations(); renderWatchlist(); toast('Rating saved'); }
function closeModal() { $('modal').classList.remove('open'); document.body.style.overflow = ''; }
$('close').onclick = closeModal;
$('modal').onclick = e => { if (e.target === $('modal'))
    closeModal(); };
document.addEventListener('keydown', e => { if (e.key === 'Escape')
    closeModal(); });
$('export').onclick = () => { let blob = new Blob([JSON.stringify({ version: 1, saved }, null, 2)], { type: 'application/json' }), a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'cinema-immonen-ratings.json'; a.click(); URL.revokeObjectURL(a.href); };
$('importBtn').onclick = () => $('importFile').click();
$('importFile').onchange = async (e) => { try {
    let data = JSON.parse(await e.target.files[0].text());
    if (!data.saved || typeof data.saved !== 'object' || Array.isArray(data.saved))
        throw 0;
    saved = data.saved;
    persist();
    renderLibrary();
    renderRecommendations();
    renderWatchlist();
    toast('Data imported');
}
catch (err) {
    toast('Invalid backup file');
} };
init();

