'use client';

import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowUpRight,
  AudioLines,
  Camera,
  ExternalLink,
  Film,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Mic2,
  Sparkles,
  Users,
  X,
  Youtube,
} from 'lucide-react';
import dynamic from 'next/dynamic';

const RadioPlayer = dynamic(() => import('@/components/RadioPlayer'), {
  ssr: false,
  loading: () => <div className="radio-loading">Ucitavanje radio signala...</div>,
});

type NavItem = { id: string; label: string };
type ManifestCard = { title: string; description: string; icon: LucideIcon };
type MusicRelease = { title: string; detail: string; duration: string };
type Documentary = { title: string; detail: string; duration: string; channel: string };
type MediaChannel = { name: string; summary: string; metric: string; href: string; icon: LucideIcon };
type Partner = { name: string; role: string; area: string };
type ContactItem = { label: string; value: string; icon: LucideIcon };

const navItems: NavItem[] = [
  { id: 'manifest', label: 'Manifest' },
  { id: 'projekti', label: 'Projekti' },
  { id: 'mediji', label: 'Mediji' },
  { id: 'saradnje', label: 'Saradnje' },
  { id: 'kontakt', label: 'Kontakt' },
];

const manifestCards: ManifestCard[] = [
  {
    title: 'Oruzje',
    description:
      'Mikrofon i kamera nisu dekor. To je alat za secenje laznih narativa i vracanje fokusa na realan zivot.',
    icon: Mic2,
  },
  {
    title: 'Istina',
    description:
      'Ne peglamo ivice. Ne glancamo bol. Na ovom mestu reci ostaju ostre, a slike govore pre nego slogan.',
    icon: Sparkles,
  },
  {
    title: 'Pokret',
    description:
      'Glas Ulice nije solo projekat. To je kolektivna energija ljudi koji odbijaju da budu nemi.',
    icon: Users,
  },
  {
    title: 'Edukacija',
    description:
      'Kroz izmisljene scenarije pokazujemo posledice kriminala i gradimo jasnu poruku za mlade: biraj zivot.',
    icon: Camera,
  },
];

const releases: MusicRelease[] = [
  { title: 'Borba 01: Ulica Govori', detail: 'Prvi krik protiv sistema i medijske buke.', duration: '3:45' },
  { title: 'Borba 02: Crni Ekran', detail: 'Dokumentarni rap bez kompromisa.', duration: '4:12' },
  { title: 'Borba 03: Neon Noci', detail: 'Neo-noir prica o gradu koji ne spava.', duration: '3:28' },
  { title: 'Borba 04: Realitat', detail: 'Cinematic ritam za tvrdu realnost.', duration: '4:33' },
];

const documentaries: Documentary[] = [
  {
    title: 'Realitat 01: Zaboravljeni',
    detail: 'Prica o ljudima koje sistem vidi tek kad bude kasno.',
    duration: '28:45',
    channel: 'CINEMATIC REALITAT',
  },
  {
    title: 'Ulicni Scenariji: Posledice',
    detail: 'Edukativni format koji razbija romantizaciju ulice.',
    duration: '22:18',
    channel: 'localpatriot',
  },
  {
    title: 'Borba za Vrednosti',
    detail: 'Moralni konflikti i izbori ispred mladih.',
    duration: '31:42',
    channel: 'localpatriot',
  },
  {
    title: 'Studio Sessions',
    detail: 'Kako nastaje muzika kada poruka vodi produkciju.',
    duration: '41:27',
    channel: 'CINEMATIC REALITAT',
  },
];

const mediaChannels: MediaChannel[] = [
  {
    name: 'localpatriot / YouTube',
    summary: 'Edukativni video scenariji sa jasnom drustvenom porukom.',
    metric: '28+ videa',
    href: 'https://youtube.com/@localpatriot',
    icon: Youtube,
  },
  {
    name: 'studio_borba_015 / Instagram',
    summary: 'Studio sesije, kratki formati i proces rada iznutra.',
    metric: 'Reels + studio dnevnik',
    href: 'https://instagram.com/studio_borba_015',
    icon: Instagram,
  },
  {
    name: 'borba015.com',
    summary: 'Centralna tacka za muziku, film i produkcijske saradnje.',
    metric: 'Music + video produkcija',
    href: 'https://borba015.com',
    icon: ExternalLink,
  },
];

const partners: Partner[] = [
  { name: 'BORBA 015 Studio', role: 'Audio/Video produkcija', area: 'Loznica' },
  { name: 'CINEMATIC REALITAT', role: 'Dokumentarni i edukativni format', area: 'Area 015' },
  { name: 'LIBRARION Records', role: 'Underground label', area: 'Regionalno' },
  { name: 'Crime:Scene Records', role: 'Net label kolaboracije', area: 'Digitalno' },
  { name: 'Balkan Documentary Center', role: 'Film mreza i trening', area: 'Balkan' },
  { name: 'Serbian Hip-Hop Collective', role: 'Mreza autora', area: 'Srbija' },
];

const contactItems: ContactItem[] = [
  { label: 'Email', value: 'locpathriot@gmail.com', icon: Mail },
  { label: 'Lokacija', value: 'Loznica, Srbija', icon: MapPin },
  { label: 'Kolektiv', value: 'BORBA 015 x CINEMATIC REALITAT', icon: Users },
];

const withDelay = (index: number, base = 0): CSSProperties => ({
  animationDelay: `${base + index * 0.08}s`,
});

export default function HomeRedesign() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false);
    }
  };

  return (
    <div className="site-shell">
      <div className="ambient-noise" />

      <header className={`main-nav ${isScrolled ? 'main-nav--solid' : ''}`}>
        <div className="container-limit main-nav__row">
          <button type="button" className="brand-lockup" onClick={() => scrollToSection('manifest')}>
            <span className="brand-lockup__mark">GU</span>
            <span className="brand-lockup__text">
              <strong>GLAS ULICE</strong>
              <small>BORBA 015 x CINEMATIC REALITAT</small>
            </span>
          </button>

          <nav className="main-nav__links" aria-label="Main navigation">
            {navItems.map((item) => (
              <button key={item.id} type="button" className="nav-pill" onClick={() => scrollToSection(item.id)}>
                {item.label}
              </button>
            ))}
          </nav>

          <div className="main-nav__social" aria-label="Social links">
            <a className="icon-link" href="https://instagram.com/studio_borba_015" target="_blank" rel="noreferrer">
              <Instagram size={16} />
            </a>
            <a className="icon-link" href="https://youtube.com/@localpatriot" target="_blank" rel="noreferrer">
              <Youtube size={16} />
            </a>
          </div>

          <button
            type="button"
            className="main-nav__menu-btn"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Zatvori meni' : 'Otvori meni'}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {menuOpen && (
          <div className="container-limit main-nav__mobile reveal">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className="nav-pill"
                style={withDelay(index, 0.04)}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      <main className="content-shell">
        <section id="manifest" className="container-limit section-block">
          <div className="hero-frame">
            <div className="reveal">
              <p className="eyebrow">
                <Sparkles size={14} />
                OTVOREN SIGNAL IZ LOZNICE
              </p>
              <h1 className="hero-title">GLAS ULICE</h1>
              <p className="hero-subtitle">Nije brend. Nije trend. Nije pozadina.</p>
              <p className="hero-description">
                Ovo je front koji spaja rap, dokumentarni kadar i edukaciju. Pravimo radove koji upozoravaju,
                pokrecu i drze fokus na realnim posledicama ulice.
              </p>

              <div className="hero-actions">
                <button type="button" className="btn-main" onClick={() => scrollToSection('projekti')}>
                  Pogledaj projekte
                </button>
                <button type="button" className="btn-ghost" onClick={() => scrollToSection('kontakt')}>
                  Pokreni saradnju
                </button>
              </div>

              <div className="hero-stats">
                <article className="stat-tile">
                  <h3>015</h3>
                  <p>Loznica kao centar zvuka i slike</p>
                </article>
                <article className="stat-tile">
                  <h3>2</h3>
                  <p>Stuba: muzika i dokumentarac</p>
                </article>
                <article className="stat-tile">
                  <h3>1</h3>
                  <p>Jasna poruka: biraj zivot, ne mit</p>
                </article>
              </div>
            </div>

            <div className="reveal" style={withDelay(2, 0.1)}>
              <RadioPlayer />
              <p className="hero-footnote">
                Radio je live ulaz u atmosferu kolektiva. Bez bele podloge, bez sterilnog dizajna, bez kompromisa.
              </p>
            </div>
          </div>
        </section>

        <section className="container-limit section-block">
          <div className="section-heading reveal">
            <p>FILOZOFIJA</p>
            <h2>Cetiri stuba pokreta</h2>
          </div>
          <div className="manifest-grid">
            {manifestCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="manifest-card reveal" style={withDelay(index, 0.04)}>
                  <span className="manifest-card__icon">
                    <Icon size={17} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="projekti" className="container-limit section-block">
          <div className="section-heading reveal">
            <p>PROJEKTI</p>
            <h2>Muzika i dokumentarci</h2>
          </div>

          <div className="split-grid">
            <article className="section-card reveal">
              <header className="section-card__header">
                <span className="manifest-card__icon">
                  <AudioLines size={17} />
                </span>
                <div>
                  <h3>BORBA 015 / TRACKLIST</h3>
                  <p>Ritam kao jezik otpora</p>
                </div>
              </header>
              <ul className="project-list">
                {releases.map((track, index) => (
                  <li key={track.title} className="project-row" style={withDelay(index, 0.06)}>
                    <div>
                      <strong>{track.title}</strong>
                      <p>{track.detail}</p>
                    </div>
                    <span className="project-row__meta">{track.duration}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="section-card reveal" style={withDelay(1, 0.08)}>
              <header className="section-card__header">
                <span className="manifest-card__icon">
                  <Film size={17} />
                </span>
                <div>
                  <h3>CINEMATIC REALITAT / FORMATI</h3>
                  <p>Scenariji koji razbijaju romantizaciju</p>
                </div>
              </header>
              <ul className="project-list">
                {documentaries.map((doc, index) => (
                  <li key={doc.title} className="project-row" style={withDelay(index, 0.06)}>
                    <div>
                      <strong>{doc.title}</strong>
                      <p>{doc.detail}</p>
                    </div>
                    <span className="project-row__meta">{doc.duration}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section id="mediji" className="container-limit section-block">
          <div className="section-heading reveal">
            <p>MEDIJI</p>
            <h2>Kanali koji nose poruku</h2>
          </div>

          <div className="media-grid">
            {mediaChannels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <article key={channel.name} className="media-card reveal" style={withDelay(index, 0.06)}>
                  <span className="media-card__icon">
                    <Icon size={18} />
                  </span>
                  <h3>{channel.name}</h3>
                  <p>{channel.summary}</p>
                  <div className="media-card__footer">
                    <span>{channel.metric}</span>
                    <a href={channel.href} target="_blank" rel="noreferrer">
                      Otvori <ArrowUpRight size={15} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="saradnje" className="container-limit section-block">
          <div className="section-heading reveal">
            <p>SARADNJE</p>
            <h2>Mreza ljudi koji rade stvarno</h2>
          </div>

          <div className="partners-grid">
            {partners.map((partner, index) => (
              <article key={partner.name} className="partner-row reveal" style={withDelay(index, 0.05)}>
                <div>
                  <h3>{partner.name}</h3>
                  <p>{partner.role}</p>
                </div>
                <span className="tag">{partner.area}</span>
              </article>
            ))}
          </div>

          <div className="note-banner reveal">
            Sadrzaj se koristi edukativno - cilj je da mladi prepoznaju posledice pogresnih izbora pre nego sto ih
            plate u stvarnom zivotu.
          </div>
        </section>

        <section id="kontakt" className="container-limit section-block">
          <div className="section-heading reveal">
            <p>KONTAKT</p>
            <h2>Posalji predlog saradnje</h2>
          </div>

          <div className="split-grid">
            <article className="section-card reveal">
              <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
                <div className="field-row">
                  <label htmlFor="full-name">Ime i prezime</label>
                  <input id="full-name" className="field" type="text" placeholder="Tvoje ime" />
                </div>
                <div className="field-row">
                  <label htmlFor="email">Email</label>
                  <input id="email" className="field" type="email" placeholder="ime@email.com" />
                </div>
                <div className="field-row">
                  <label htmlFor="collab-type">Tip saradnje</label>
                  <select id="collab-type" className="field" defaultValue="Muzicka kolaboracija">
                    <option>Muzicka kolaboracija</option>
                    <option>Dokumentarni film</option>
                    <option>Video produkcija</option>
                    <option>Edukativni format</option>
                  </select>
                </div>
                <div className="field-row">
                  <label htmlFor="message">Poruka</label>
                  <textarea id="message" rows={5} className="field" placeholder="Opisi ideju i cilj saradnje" />
                </div>
                <button type="submit" className="btn-main">
                  Posalji poruku
                </button>
              </form>
            </article>

            <article className="section-card reveal" style={withDelay(1, 0.08)}>
              <div className="contact-stack">
                {contactItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="contact-item" style={withDelay(index, 0.04)}>
                      <span className="contact-item__icon">
                        <Icon size={16} />
                      </span>
                      <div>
                        <h4>{item.label}</h4>
                        <p>{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="social-row">
                <a className="social-link" href="https://instagram.com/studio_borba_015" target="_blank" rel="noreferrer">
                  <Instagram size={16} /> Instagram
                </a>
                <a className="social-link" href="https://youtube.com/@localpatriot" target="_blank" rel="noreferrer">
                  <Youtube size={16} /> YouTube
                </a>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="container-limit footer-line">
        <div>
          <strong>GLAS ULICE</strong>
          <p>BORBA 015 x CINEMATIC REALITAT - underground kolektiv koji radi bez filtera.</p>
        </div>
        <div className="footer-line__meta">
          <span>Loznica, Srbija</span>
          <span>2026</span>
        </div>
      </footer>
    </div>
  );
}
