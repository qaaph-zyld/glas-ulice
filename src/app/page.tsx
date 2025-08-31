'use client';

import { useState, useEffect } from 'react';
import { Play, Pause, Volume2, Instagram, Youtube, Facebook, Mail, Phone, MapPin, Users, Award, Mic, Camera, Music, Film, Image as ImageIcon, ExternalLink } from 'lucide-react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('manifest');
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tracks = [
    { id: 1, title: "Borba 01: Ulica Govori", duration: "3:45", description: "Prvi krik protiv sistema" },
    { id: 2, title: "Borba 02: Crni Ekran", duration: "4:12", description: "Dokumentarni rap o medijskim lažima" },
    { id: 3, title: "Borba 03: Neon Noći", duration: "3:28", description: "Neo-noir priča o gradu" },
    { id: 4, title: "Borba 04: Realitat", duration: "4:33", description: "Cinematic realnost bez filtera" },
    { id: 5, title: "Borba 05: Glas Ulice", duration: "5:01", description: "Manifest u muzici" },
    { id: 6, title: "Borba 06: Otpor", duration: "3:55", description: "Finalni poziv na akciju" }
  ];

  const documentaries = [
    {
      title: "Realitat 01: Zaboravljeni",
      description: "Dokumentarni film o onima koje sistem ignoriše",
      duration: "28:45",
      year: "2024",
      youtubeId: "example1",
      channel: "CINEMATIC REALITAT AREA 015"
    },
    {
      title: "Realitat 02: Crni Talasi",
      description: "Inspirisan Yugoslav Black Wave pokretom",
      duration: "35:12",
      year: "2024",
      youtubeId: "example2",
      channel: "CINEMATIC REALITAT AREA 015"
    },
    {
      title: "Ulični Scenariji: Posledice",
      description: "Izmišljeni scenariji koji prikazuju negativne posledice uličnog života - edukativni sadržaj za mlade",
      duration: "22:18",
      year: "2024",
      youtubeId: "example3",
      channel: "localpatriot"
    },
    {
      title: "Borba za Vrednosti",
      description: "Promocija pozitivnih društvenih i moralnih vrednosti kroz cinematic storytelling",
      duration: "31:42",
      year: "2024",
      youtubeId: "example4",
      channel: "localpatriot"
    },
    {
      title: "Loznica Stories: Realnost Ulice",
      description: "Autentične priče iz Loznice - stvarni glas lokalne zajednice kroz BORBA 015 objektiv",
      duration: "19:33",
      year: "2024",
      youtubeId: "example5",
      channel: "localpatriot"
    },
    {
      title: "Studio Sessions: Behind the Beats",
      description: "Ekskluzivni pogled u BORBA 015 studio - proces nastanka muzike koja menja sve",
      duration: "41:27",
      year: "2024",
      youtubeId: "example6",
      channel: "CINEMATIC REALITAT AREA 015"
    }
  ];

  const partnerships = [
    { name: "BORBA 015 Studio", type: "Music & Audio/Video Production", status: "Core Partnership", location: "Loznica" },
    { name: "localpatriot (CINEMATIC REALITAT)", type: "Educational Content Creator", status: "Content Collaboration", location: "Area 015" },
    { name: "LIBRARION Records", type: "Underground Label", status: "Active", location: "Regional" },
    { name: "Crime:Scene Records", type: "Net Label", status: "Collaboration", location: "Digital" },
    { name: "Balkan Documentary Center", type: "Film Network", status: "Training", location: "Balkans" },
    { name: "Serbian Hip-Hop Collective", type: "Artist Network", status: "Partnership", location: "Serbia" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Noise overlay */}
      <div className="noise-overlay" />
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-red-700 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-background font-montserrat font-bold text-lg">GU</span>
              </div>
              <div>
                <span className="font-montserrat font-bold text-xl tracking-wider">GLAS ULICE</span>
                <div className="text-xs text-muted-foreground font-condensed">BORBA 015 × CINEMATIC REALITAT</div>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              {['manifest', 'about', 'music', 'documentaries', 'media', 'partnerships', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="font-montserrat font-medium text-sm uppercase tracking-wider hover:text-primary transition-all duration-300 relative group"
                >
                  <span className="relative z-10">
                    {item === 'manifest' && 'Manifest'}
                    {item === 'about' && 'O Nama'}
                    {item === 'music' && 'Muzika'}
                    {item === 'documentaries' && 'Dokumentarci'}
                    {item === 'media' && 'Mediji'}
                    {item === 'partnerships' && 'Saradnje'}
                    {item === 'contact' && 'Kontakt'}
                  </span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://instagram.com/glasulice" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com/@glasulice" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
              <a href="https://facebook.com/glasulice" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative vhs-effect">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="relative z-10 text-center px-6">
          <div className="mb-8">
            <h1 className="glitch text-6xl md:text-8xl mb-4 font-montserrat font-black">
              GLAS ULICE
            </h1>
            <div className="text-primary font-mono-custom text-sm tracking-widest mb-8">
              BORBA 015 × CINEMATIC REALITAT AREA 015
            </div>
          </div>
          <div className="max-w-5xl mx-auto mb-12">
            <p className="text-2xl md:text-3xl font-condensed font-light mb-6 text-muted-foreground leading-relaxed">
              Nije brend. Nije trend. Nije ni samo umetnost.
            </p>
            <p className="text-xl md:text-2xl font-condensed mb-8 text-foreground leading-relaxed">
              To je otpor. Istina. Edukacija kroz umetnost. Borba za bolje sutra kroz svest o posledicama.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12 mb-12">
              <div className="flex items-center justify-center space-x-3">
                <Mic className="text-primary" size={24} />
                <span className="font-montserrat font-semibold">RAP & HIP-HOP</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Camera className="text-primary" size={24} />
                <span className="font-montserrat font-semibold">DOKUMENTARCI</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Users className="text-primary" size={24} />
                <span className="font-montserrat font-semibold">KOLEKTIV</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => scrollToSection('manifest')}
              className="btn-primary rounded-lg"
            >
              Pročitaj Manifest
            </button>
            <button 
              onClick={() => scrollToSection('music')}
              className="btn-secondary rounded-lg"
            >
              Poslušaj Borbu
            </button>
            <button 
              onClick={() => scrollToSection('documentaries')}
              className="btn-secondary rounded-lg"
            >
              Gledaj Realitat
            </button>
          </div>
        </div>
      </section>

      {/* Manifest Section */}
      <section id="manifest" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-montserrat font-black mb-6">MANIFEST</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-red-700 mx-auto mb-4" />
            <p className="text-lg font-condensed text-muted-foreground max-w-2xl mx-auto">
              Naša filozofija. Naš poziv. Naš razlog postojanja.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div className="card-enhanced group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-red-700 rounded-lg flex items-center justify-center mr-4">
                    <Mic className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-montserrat font-bold text-primary">ORUŽJE</h3>
                </div>
                <p className="font-condensed text-lg leading-relaxed text-muted-foreground">
                  Naš mikrofon nije samo uređaj – to je oružje. Naša kamera ne snima reklame – već rane, borbe i stvarnost koju drugi prećutkuju.
                </p>
              </div>
              
              <div className="card-enhanced group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-red-700 rounded-lg flex items-center justify-center mr-4">
                    <Award className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-montserrat font-bold text-primary">ISTINA</h3>
                </div>
                <p className="font-condensed text-lg leading-relaxed text-muted-foreground">
                  Ovde ne prodajemo lažne snove. Ne maskiramo bol, ne glancamo istinu. Ovde reči režu. Ritmovi paraju. Slike kidaju tišinu.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="card-enhanced group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-red-700 rounded-lg flex items-center justify-center mr-4">
                    <Users className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-montserrat font-bold text-primary">POKRET</h3>
                </div>
                <p className="font-condensed text-lg leading-relaxed text-muted-foreground">
                  Glas ulice je pokret. Borba 015 je krv. Cinematic Realitat je naše ogledalo. Kroz izmišljene scenarije pokazujemo stvarnost.
                </p>
              </div>
              
              <div className="card-enhanced group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-red-700 rounded-lg flex items-center justify-center mr-4">
                    <Users className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-montserrat font-bold text-primary">EDUKACIJA</h3>
                </div>
                <p className="font-condensed text-lg leading-relaxed text-muted-foreground">
                  Naš cilj je da odvratimo mlade od kriminalnih radnji kroz kreativno prikazivanje negativnih posledica. Promovisanje pozitivnih društvenih i moralnih vrednosti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-montserrat font-black mb-6">O NAMA</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-red-700 mx-auto mb-4" />
            <p className="text-lg font-condensed text-muted-foreground max-w-2xl mx-auto">
              Kolektiv umetnika, boraca i glasnika istine iz Zrenjanina.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-enhanced text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Film className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-montserrat font-bold mb-4 text-primary">KO SMO MI</h3>
              <p className="font-condensed leading-relaxed text-muted-foreground">
                Mi smo BORBA 015 x CINEMATIC REALITAT AREA 015. Kolektiv stvaralaca, boraca, pesnika, režisera, MC-eva i glasnika ulice.
              </p>
            </div>
            
            <div className="card-enhanced text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <ImageIcon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-montserrat font-bold mb-4 text-primary">ESTETIKA</h3>
              <p className="font-condensed leading-relaxed text-muted-foreground">
                Naša estetika je neo-noir. Crno, sirovo, emotivno. Naš sadržaj je kao ulica – nepredvidiv, tvrd, istinit.
              </p>
            </div>
            
            <div className="card-enhanced text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-montserrat font-bold mb-4 text-primary">CILJ</h3>
              <p className="font-condensed leading-relaxed text-muted-foreground">
                Snimamo, montiramo, repujemo, pišemo, vičemo. Za one koji su zaboravljeni. Za one koji nemaju glas. Mi jesmo taj glas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section id="music" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-montserrat font-black mb-6">MUZIKA</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-red-700 mx-auto mb-4" />
            <p className="text-lg font-condensed text-muted-foreground max-w-2xl mx-auto">
              Borba kroz ritam. Istina kroz rime. Otpor kroz muziku.
            </p>
          </div>
          
          {/* Music Player */}
          <div className="bg-card border border-border rounded-xl p-8 mb-12 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-700 rounded-lg flex items-center justify-center">
                  <Music className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-montserrat font-bold">{tracks[currentTrack].title}</h3>
                  <p className="text-muted-foreground font-condensed">{tracks[currentTrack].description}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-mono-custom text-muted-foreground">{tracks[currentTrack].duration}</div>
                <div className="text-xs font-condensed text-muted-foreground">BORBA 015</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-6 mb-6">
              <button 
                onClick={() => setCurrentTrack(Math.max(0, currentTrack - 1))}
                className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
                </svg>
              </button>
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-4 rounded-full bg-primary hover:bg-primary/90 transition-colors"
              >
                {isPlaying ? <Pause className="text-white" size={32} /> : <Play className="text-white" size={32} />}
              </button>
              <button 
                onClick={() => setCurrentTrack(Math.min(tracks.length - 1, currentTrack + 1))}
                className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
                </svg>
              </button>
              <button className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors">
                <Volume2 size={24} />
              </button>
            </div>
            
            <div className="w-full bg-muted rounded-full h-2 mb-4">
              <div className="bg-gradient-to-r from-primary to-red-700 h-2 rounded-full" style={{width: '35%'}}></div>
            </div>
          </div>
          
          {/* Track List */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tracks.map((track, index) => (
              <div 
                key={track.id} 
                className={`card-enhanced group cursor-pointer ${currentTrack === index ? 'border-primary bg-primary/5' : ''}`}
                onClick={() => setCurrentTrack(index)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-red-700 rounded-lg flex items-center justify-center">
                    <Mic className="text-white" size={20} />
                  </div>
                  <div className="text-xs font-mono-custom text-muted-foreground">{track.duration}</div>
                </div>
                <h3 className="text-lg font-montserrat font-bold mb-2 text-primary">{track.title}</h3>
                <p className="text-muted-foreground font-condensed text-sm mb-4 leading-relaxed">
                  {track.description}
                </p>
                <button className="btn-secondary w-full">
                  {currentTrack === index && isPlaying ? 'Pauziraj' : 'Slušaj'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentaries Section */}
      <section id="documentaries" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-montserrat font-black mb-6">DOKUMENTARCI</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-red-700 mx-auto mb-4" />
            <p className="text-lg font-condensed text-muted-foreground max-w-2xl mx-auto">
              Cinematic Realitat. Sirova istina bez filtera. Yugoslav Black Wave inspiracija.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {documentaries.map((doc, index) => (
              <div key={index} className="card-enhanced group">
                <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <Film className="text-primary z-10" size={64} />
                  <div className="absolute bottom-4 left-4 z-10">
                    <div className="bg-black/80 px-2 py-1 rounded text-xs font-mono-custom text-white">
                      {doc.duration}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-primary px-2 py-1 rounded text-xs font-condensed text-white">
                      {doc.year}
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-red-600/80 px-2 py-1 rounded text-xs font-condensed text-white">
                      {doc.channel}
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-montserrat font-bold mb-3 text-primary">{doc.title}</h3>
                <p className="text-muted-foreground font-condensed mb-6 leading-relaxed">
                  {doc.description}
                </p>
                <div className="flex space-x-4">
                  <button 
                    className="btn-primary flex-1"
                    onClick={() => window.open(`https://youtube.com/@${doc.channel === 'localpatriot' ? 'localpatriot' : 'cinematicrealitat'}`, '_blank')}
                  >
                    <Youtube size={16} className="mr-2" />
                    YouTube
                  </button>
                  <button className="btn-secondary">
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Documentary Features */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="text-white" size={32} />
              </div>
              <h4 className="text-lg font-montserrat font-bold mb-2">SIROVA REALNOST</h4>
              <p className="font-condensed text-sm text-muted-foreground">
                Bez cenzure, bez ulepšavanja. Prikazujemo život kakav jeste.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Film className="text-white" size={32} />
              </div>
              <h4 className="text-lg font-montserrat font-bold mb-2">BLACK WAVE</h4>
              <p className="font-condensed text-sm text-muted-foreground">
                Inspirisani Yugoslav Black Wave pokretom i neo-noir estetikom.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h4 className="text-lg font-montserrat font-bold mb-2">EDUKACIJA</h4>
              <p className="font-condensed text-sm text-muted-foreground">
                Podižemo svest o negativnim posledicama kroz izmišljene scenarije i promovisanje pozitivnih vrednosti.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Media Gallery Section */}
      <section id="media" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-montserrat font-black mb-6">MEDIJI</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-red-700 mx-auto mb-4" />
            <p className="text-lg font-condensed text-muted-foreground max-w-2xl mx-auto">
              Najnoviji sadržaj sa naših kanala - edukativni scenariji i produkcija iz Borba 015 studija.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* YouTube Content */}
            <div className="card-enhanced group">
              <div className="aspect-video bg-gradient-to-br from-red-900/50 to-black rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                <Youtube className="text-primary z-10" size={48} />
                <div className="absolute bottom-2 left-2 z-10">
                  <div className="bg-red-600 px-2 py-1 rounded text-xs font-condensed text-white">
                    LIVE
                  </div>
                </div>
                <div className="absolute top-2 right-2 z-10">
                  <div className="bg-black/80 px-2 py-1 rounded text-xs font-condensed text-white">
                    15+ Videos
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-montserrat font-bold mb-2 text-primary">localpatriot Channel</h3>
              <p className="text-sm font-condensed text-muted-foreground mb-4">
                CINEMATIC REALITAT AREA 015 - Izmišljeni scenariji za podizanje svesti o negativnim posledicama uličnog života.
              </p>
              <button 
                className="btn-primary w-full text-sm"
                onClick={() => window.open('https://youtube.com/@localpatriot', '_blank')}
              >
                <Youtube size={16} className="mr-2" />
                Poseti Kanal
              </button>
            </div>

            {/* Borba 015 Studio */}
            <div className="card-enhanced group">
              <div className="aspect-video bg-gradient-to-br from-primary/50 to-red-900/50 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                <Music className="text-primary z-10" size={48} />
                <div className="absolute bottom-2 left-2 z-10">
                  <div className="bg-primary px-2 py-1 rounded text-xs font-condensed text-white">
                    STUDIO
                  </div>
                </div>
                <div className="absolute top-2 right-2 z-10">
                  <div className="bg-black/80 px-2 py-1 rounded text-xs font-condensed text-white">
                    50+ Reels
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-montserrat font-bold mb-2 text-primary">BORBA 015 Studio</h3>
              <p className="text-sm font-condensed text-muted-foreground mb-4">
                Muzička i audio/video produkcija iz Loznice - borba za ideje i bolji život kroz umetnost.
              </p>
              <div className="flex gap-2">
                <button 
                  className="btn-primary flex-1 text-sm"
                  onClick={() => window.open('https://instagram.com/studio_borba_015', '_blank')}
                >
                  <Instagram size={16} className="mr-2" />
                  Instagram
                </button>
                <button 
                  className="btn-secondary px-3 text-sm"
                  onClick={() => window.open('https://instagram.com/studio_borba_015/reels/', '_blank')}
                >
                  Reels
                </button>
              </div>
            </div>

            {/* Collaborative Content */}
            <div className="card-enhanced group">
              <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                <Film className="text-primary z-10" size={48} />
                <div className="absolute bottom-2 left-2 z-10">
                  <div className="bg-green-600 px-2 py-1 rounded text-xs font-condensed text-white">
                    KOLABORACIJA
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-montserrat font-bold mb-2 text-primary">Zajednički Projekti</h3>
              <p className="text-sm font-condensed text-muted-foreground mb-4">
                Sinergija između edukativnog sadržaja i muzičke produkcije - stvaranje autentičnog glasa ulice.
              </p>
              <button className="btn-secondary w-full text-sm">
                <ExternalLink size={16} className="mr-2" />
                Uskoro
              </button>
            </div>
          </div>

          {/* Media Features */}
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Youtube className="text-white" size={32} />
              </div>
              <h4 className="text-lg font-montserrat font-bold mb-2">EDUKATIVNI SADRŽAJ</h4>
              <p className="font-condensed text-sm text-muted-foreground">
                Kreativno prikazivanje posledica kroz izmišljene scenarije.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="text-white" size={32} />
              </div>
              <h4 className="text-lg font-montserrat font-bold mb-2">PRODUKCIJA</h4>
              <p className="font-condensed text-sm text-muted-foreground">
                Profesionalna audio/video produkcija iz Borba 015 studija.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h4 className="text-lg font-montserrat font-bold mb-2">ZAJEDNICA</h4>
              <p className="font-condensed text-sm text-muted-foreground">
                Povezivanje kreativaca koji dele istu viziju i vrednosti.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={32} />
              </div>
              <h4 className="text-lg font-montserrat font-bold mb-2">AUTENTIČNOST</h4>
              <p className="font-condensed text-sm text-muted-foreground">
                Stvarni glas ulice bez kompromisa i komercijalnih pritisaka.
              </p>
            </div>
          </div>

          {/* Video Showcase */}
          <div className="mt-16">
            <h3 className="text-3xl font-montserrat font-bold text-center mb-8 text-primary">NAJNOVIJI SADRŽAJ</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Featured YouTube Video */}
              <div className="card-enhanced group">
                <div className="aspect-video bg-gradient-to-br from-red-900/30 to-black/50 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/40"></div>
                  <Youtube className="text-primary z-10" size={64} />
                  <div className="absolute bottom-4 left-4 z-10">
                    <div className="bg-red-600 px-3 py-1 rounded text-sm font-condensed text-white">
                      NOVO
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-black/80 px-2 py-1 rounded text-xs font-condensed text-white">
                      12:34
                    </div>
                  </div>
                </div>
                <h4 className="text-xl font-montserrat font-bold mb-2 text-primary">Loznica Realitat: Posledice Izbora</h4>
                <p className="text-sm font-condensed text-muted-foreground mb-4">
                  Najnoviji edukativni sadržaj sa localpatriot kanala - autentične priče iz Loznice koje pokazuju realnost.
                </p>
                <button 
                  className="btn-primary w-full"
                  onClick={() => window.open('https://youtube.com/@localpatriot', '_blank')}
                >
                  <Youtube size={16} className="mr-2" />
                  Gledaj na YouTube
                </button>
              </div>

              {/* Featured Instagram Reel */}
              <div className="card-enhanced group">
                <div className="aspect-video bg-gradient-to-br from-primary/30 to-red-900/30 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/40"></div>
                  <Instagram className="text-primary z-10" size={64} />
                  <div className="absolute bottom-4 left-4 z-10">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1 rounded text-sm font-condensed text-white">
                      REEL
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-black/80 px-2 py-1 rounded text-xs font-condensed text-white">
                      0:30
                    </div>
                  </div>
                </div>
                <h4 className="text-xl font-montserrat font-bold mb-2 text-primary">Studio Sessions: Beat Making</h4>
                <p className="text-sm font-condensed text-muted-foreground mb-4">
                  Ekskluzivni pogled u BORBA 015 studio - proces nastanka hip-hop bitova koji definišu zvuk ulice.
                </p>
                <button 
                  className="btn-primary w-full"
                  onClick={() => window.open('https://instagram.com/studio_borba_015', '_blank')}
                >
                  <Instagram size={16} className="mr-2" />
                  Gledaj na Instagram
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section id="partnerships" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-montserrat font-black mb-6">SARADNJE</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-red-700 mx-auto mb-4" />
            <p className="text-lg font-condensed text-muted-foreground max-w-2xl mx-auto">
              Povezujemo se sa onima koji dele našu viziju i borbu za istinu.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {partnerships.map((partnership, index) => (
              <div key={index} className="card-enhanced group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-red-700 rounded-lg flex items-center justify-center">
                      <Users className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-montserrat font-bold text-primary">{partnership.name}</h3>
                      <p className="text-sm font-condensed text-muted-foreground">{partnership.type}</p>
                      {partnership.location && (
                        <p className="text-xs font-condensed text-muted-foreground/70 flex items-center mt-1">
                          <MapPin size={12} className="mr-1" />
                          {partnership.location}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-condensed ${
                    partnership.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                    partnership.status === 'Core Partnership' ? 'bg-red-500/20 text-red-400' :
                    partnership.status === 'Content Collaboration' ? 'bg-purple-500/20 text-purple-400' :
                    partnership.status === 'Collaboration' ? 'bg-blue-500/20 text-blue-400' :
                    partnership.status === 'Training' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {partnership.status}
                  </div>
                </div>
                <button className="btn-secondary w-full">
                  <ExternalLink size={16} className="mr-2" />
                  Saznaj Više
                </button>
              </div>
            ))}
          </div>
          
          {/* Partnership Benefits */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h4 className="text-lg font-montserrat font-bold mb-2">KOLEKTIV</h4>
              <p className="font-condensed text-sm text-muted-foreground">
                Udružujemo snage sa sličnim umetnicima i kolektivima.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={32} />
              </div>
              <h4 className="text-lg font-montserrat font-bold mb-2">KVALITET</h4>
              <p className="font-condensed text-sm text-muted-foreground">
                Sarađujemo samo sa onima koji dele naše standarde.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="text-white" size={32} />
              </div>
              <h4 className="text-lg font-montserrat font-bold mb-2">MREŽA</h4>
              <p className="font-condensed text-sm text-muted-foreground">
                Gradimo underground mrežu istinoljubivih umetnika.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-montserrat font-black mb-6">KONTAKT</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-red-700 mx-auto mb-4" />
            <p className="text-lg font-condensed text-muted-foreground max-w-2xl mx-auto">
              Za brendove i pojedince koji ne beže od istine. Kolaboracije koje menjaju svet.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card-enhanced">
              <h3 className="text-2xl font-montserrat font-bold mb-6 text-primary">Pošalji Poruku</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-condensed font-medium mb-2">Ime i Prezime</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="Tvoje ime..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-condensed font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="tvoj@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-condensed font-medium mb-2">Tip Saradnje</label>
                  <select className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none transition-colors">
                    <option>Muzička Kolaboracija</option>
                    <option>Dokumentarni Film</option>
                    <option>Brend Partnership</option>
                    <option>Medijska Saradnja</option>
                    <option>Ostalo</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-condensed font-medium mb-2">Poruka</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Reci nam o svojoj viziji..."
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  <Mail size={16} className="mr-2" />
                  Pošalji Poruku
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="card-enhanced">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-red-700 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-montserrat font-bold">Email</h4>
                    <p className="font-mono-custom text-muted-foreground">borba015@glasulice.com</p>
                  </div>
                </div>
              </div>
              
              <div className="card-enhanced">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-red-700 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-montserrat font-bold">Telefon</h4>
                    <p className="font-mono-custom text-muted-foreground">+381 15 123 456</p>
                  </div>
                </div>
              </div>
              
              <div className="card-enhanced">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-red-700 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-montserrat font-bold">Lokacija</h4>
                    <p className="font-mono-custom text-muted-foreground">Loznica, Srbija</p>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="card-enhanced">
                <h4 className="text-lg font-montserrat font-bold mb-4">Prati Nas</h4>
                <div className="flex space-x-4">
                  <a href="https://instagram.com/studio_borba_015" className="p-3 bg-gradient-to-br from-primary to-red-700 rounded-lg hover:scale-105 transition-transform">
                    <Instagram className="text-white" size={24} />
                  </a>
                  <a href="https://youtube.com/@localpatriot" className="p-3 bg-gradient-to-br from-primary to-red-700 rounded-lg hover:scale-105 transition-transform">
                    <Youtube className="text-white" size={24} />
                  </a>
                  <a href="https://facebook.com/glasulice" className="p-3 bg-gradient-to-br from-primary to-red-700 rounded-lg hover:scale-105 transition-transform">
                    <Facebook className="text-white" size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-border bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-red-700 rounded-full flex items-center justify-center">
                  <span className="text-background font-montserrat font-bold text-lg">GU</span>
                </div>
                <div>
                  <span className="font-montserrat font-bold text-2xl tracking-wider">GLAS ULICE</span>
                  <div className="text-xs text-muted-foreground font-condensed">BORBA 015 × CINEMATIC REALITAT</div>
                </div>
              </div>
              <p className="font-condensed text-muted-foreground leading-relaxed mb-6 max-w-md">
                Underground kolektiv iz Zrenjanina. Borimo se kroz muziku, film i fotografiju. 
                Naš glas je glas ulice - sirove istine bez kompromisa.
              </p>
              <div className="flex space-x-4">
                <a href="https://instagram.com/glasulice" className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://youtube.com/@glasulice" className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-white transition-colors">
                  <Youtube size={20} />
                </a>
                <a href="https://facebook.com/glasulice" className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-white transition-colors">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-montserrat font-bold text-lg mb-4">Brze Veze</h4>
              <ul className="space-y-2 font-condensed">
                <li><button onClick={() => scrollToSection('manifest')} className="text-muted-foreground hover:text-primary transition-colors">Manifest</button></li>
                <li><button onClick={() => scrollToSection('about')} className="text-muted-foreground hover:text-primary transition-colors">O Nama</button></li>
                <li><button onClick={() => scrollToSection('music')} className="text-muted-foreground hover:text-primary transition-colors">Muzika</button></li>
                <li><button onClick={() => scrollToSection('documentaries')} className="text-muted-foreground hover:text-primary transition-colors">Dokumentarci</button></li>
                <li><button onClick={() => scrollToSection('partnerships')} className="text-muted-foreground hover:text-primary transition-colors">Saradnje</button></li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="font-montserrat font-bold text-lg mb-4">Kontakt</h4>
              <ul className="space-y-2 font-condensed text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <Mail size={16} />
                  <span>contact@glasulice.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone size={16} />
                  <span>+381 60 123 456</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin size={16} />
                  <span>Zrenjanin, Srbija</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom */}
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="font-condensed text-sm text-muted-foreground mb-4 md:mb-0">
              2024 Glas Ulice. Sva prava zadržana. Ili si sa nama – ili si protiv nas.
            </p>
            <div className="flex items-center space-x-6 font-condensed text-sm text-muted-foreground">
              <button className="hover:text-primary transition-colors">Privatnost</button>
              <button className="hover:text-primary transition-colors">Uslovi</button>
              <button className="hover:text-primary transition-colors">Kolaboracije</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
