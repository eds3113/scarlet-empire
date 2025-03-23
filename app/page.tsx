"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { ChevronRight, Users, Server, Trophy, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  // Görünürlük için ref ve useEffect kullanımı
  const joinSectionRef = useRef<HTMLElement>(null)
  const aboutSectionRef = useRef<HTMLElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false) // Başlangıçta müzik çalmıyor
  const [volume, setVolume] = useState(0.25) // 0.25 = %25 ses
  const [showVolumeControl, setShowVolumeControl] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  
  // Base path for assets
  const basePath = "/scarlet-empire"

  useEffect(() => {
    // Sayfa yüklendiğinde animasyon için
    setIsLoaded(true)
    
    // Intersection Observer oluştur
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Görünür olduğunda sınıf ekle
            entry.target.classList.add("section-visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    // Bölümleri gözlemle
    if (joinSectionRef.current) observer.observe(joinSectionRef.current)
    if (aboutSectionRef.current) observer.observe(aboutSectionRef.current)

    // Şarkı bittiğinde durumu güncelle
    if (audioRef.current) {
      audioRef.current.addEventListener('ended', () => {
        setIsPlaying(false)
      })
    }

    // Temizleme
    return () => {
      if (joinSectionRef.current) observer.unobserve(joinSectionRef.current)
      if (aboutSectionRef.current) observer.unobserve(aboutSectionRef.current)
      if (audioRef.current) {
        audioRef.current.pause() // Component unmount olduğunda müziği durdur
        audioRef.current.removeEventListener('ended', () => {
          setIsPlaying(false)
        })
      }
    }
  }, [])

  const togglePlayback = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        // Eğer şarkı bitmişse baştan başlat
        if (audioRef.current.ended) {
          audioRef.current.currentTime = 0
        }
        audioRef.current.play().catch(e => console.log("Müzik çalma hatası:", e))
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
  }

  const toggleVolumeControl = () => {
    setShowVolumeControl(!showVolumeControl)
  }

  return (
    <main className="min-h-screen">
      {/* Background Audio */}
      <audio 
        ref={audioRef} 
        src={`${basePath}/scarlet.MP3`}
        preload="auto"
        className="hidden" 
      />
      
      {/* Sound Control Button */}
      <div className="fixed bottom-4 right-4 z-50 flex items-end gap-2">
        <button 
          onClick={togglePlayback} 
          className="p-3 rounded-full bg-red-900/60 backdrop-blur-sm hover:bg-red-800 transition-all duration-300 shadow-lg flex items-center justify-center"
          aria-label={isPlaying ? "Müziği durdur" : "Müziği başlat"}
        >
          {isPlaying ? (
            <VolumeX className="w-5 h-5 text-white" />
          ) : (
            <Volume2 className="w-5 h-5 text-white" />
          )}
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative w-full min-h-screen overflow-hidden bg-black flex flex-col items-center justify-center py-16">
        {/* Yeni arka plan tasarımı */}
        {/* Ana arka plan gradient - daha derin ve çarpıcı */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-zinc-950 via-red-950/30 to-black"></div>
        
        {/* Dinamik ağ (net) deseni */}
        <div className="absolute inset-0 z-0 opacity-20" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(220 38 38 / 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(220 38 38 / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            backgroundPosition: 'center',
          }}
        ></div>
        
        {/* Büyük kırmızı gradient daire */}
        <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-red-900/10 to-red-700/5 blur-3xl"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-gradient-to-tr from-red-800/10 to-red-700/5 blur-3xl"></div>
        
        {/* Noktasal desen üst katman */}
        <div className="absolute inset-0 z-0 opacity-10" 
          style={{
            backgroundImage: `radial-gradient(circle at center, rgb(220 38 38 / 0.6) 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        ></div>
        
        {/* Hareketli ışık efektleri */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-900/0 via-red-700/40 to-red-900/0 animate-[shimmer_4s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-900/0 via-red-700/40 to-red-900/0 animate-[shimmer_4s_ease-in-out_infinite_1s]"></div>
        
        {/* Siber/teknolojik köşe vurguları */}
        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-red-700/30"></div>
        <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-red-700/30"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-red-700/30"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-red-700/30"></div>
        
        {/* Büyük diyagonal çizgi */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 left-[-100%] w-[300%] h-full bg-red-700/5 rotate-[20deg]"></div>
          <div className="absolute top-0 left-[-100%] w-[300%] h-full bg-red-800/5 rotate-[40deg]"></div>
        </div>

        <div className={`container relative z-10 mx-auto px-4 py-4 md:px-6 flex flex-col items-center md:mt-[-5%] gap-5 md:gap-6 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          {/* Logo ve İçerik Bölümü */}
          <div className="w-full flex flex-col items-center text-center space-y-8 pt-0 pb-4">
            {/* Logo - geliştirilmiş parlama efekti */}
            <div className="w-full max-w-[220px] sm:max-w-[240px] md:max-w-[250px] relative group animate-fadeIn mt-6 md:mt-0 mb-1 px-4">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600/20 via-red-600/40 to-red-600/20 blur-lg rounded-full opacity-75 group-hover:opacity-100 transition duration-1500 group-hover:duration-1200 animate-[pulse_8s_ease-in-out_infinite]"></div>
              <Image
                src={`${basePath}/SZIVP8d.png`}
                width={240}
                height={140}
                alt="Scarlet Empire Logo"
                className="w-full h-auto relative z-10 transition-all duration-700 group-hover:scale-105 drop-shadow-[0_5px_15px_rgba(220,38,38,0.4)]"
                priority
              />
            </div>

            {/* Tagline ve altyazı tek container içinde */}
            <div className="flex flex-col items-center space-y-0 px-4">
              {/* Tagline - geliştirilmiş animasyon efekti */}
              <div className="max-w-[600px] text-lg text-gray-300 md:text-xl">
                <div className="relative overflow-hidden">
                  <span className="inline-block font-bold text-red-500 text-xl sm:text-2xl md:text-3xl animate-pulse">
                    Conquer. Dominate. Rule.
                  </span>
                </div>
              </div>
              
              <div className="max-w-[600px] text-sm sm:text-base text-gray-300 md:text-lg">
                <span className="inline-block font-light text-gray-300/90">
                  Join the elite gaming community.
                </span>
              </div>
            </div>
            
            {/* Video kartı - artık slogan altında */}
            <div className="overflow-hidden rounded-lg border border-red-800/30 shadow-[0_0_25px_rgba(185,28,28,0.2)] transition-all duration-500 hover:shadow-[0_0_35px_rgba(185,28,28,0.4)] backdrop-blur-md bg-black/40 group w-full max-w-[95%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[60%] xl:max-w-[50%] mx-auto mb-6 sm:mb-10">
              <div className="aspect-video w-full">
                <div className="flex h-full items-center justify-center relative">
                  <Image
                    src={`${basePath}/deneme.webp`}
                    alt="Scarlet Empire Preview"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Oynat butonu - geliştirilmiş hover efekti */}
                  <div className="flex flex-col items-center gap-2 transition-all duration-500 group-hover:scale-105 absolute z-10">
                    <div className="relative">
                      <div className="absolute -inset-1 rounded-full bg-red-600/20 blur-md animate-ping opacity-75 group-hover:opacity-100"></div>
                      <div className="relative z-10 flex h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-red-800 text-white shadow-[inset_0_0_15px_rgba(0,0,0,0.5)] group-hover:from-red-500 group-hover:to-red-700 transition-all duration-300">
                        <svg
                          className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 ml-1 group-hover:ml-2 transition-all duration-300"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <polygon points="10 8 16 12 10 16 10 8" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-xs text-gray-200 group-hover:text-white transition-colors duration-300 group-hover:tracking-wider font-medium drop-shadow-md">
                      Watch Our Epic Trailer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll göstergesi - geliştirilmiş animasyon */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer" onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})}>
          <span className="text-red-500/70 text-[10px] mb-1 animate-fadeIn tracking-wider font-medium uppercase">Explore</span>
          <div className="w-4 h-7 border border-red-500/40 rounded-full flex justify-center p-1">
            <div className="w-1 h-1.5 bg-red-500/80 rounded-full animate-scrollDown"></div>
          </div>
        </div>
      </section>

      {/* Who Are We bölümünü geliştirelim */}
      <section ref={aboutSectionRef} id="about" className="relative bg-zinc-900 py-20 overflow-hidden section-animate">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.red.900/5)_0,transparent_70%)] opacity-70"></div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-2 text-3xl font-bold text-white md:text-4xl relative inline-block section-item hover:scale-105 transition-transform duration-300">
              <span className="relative z-10">Who Are We?</span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></span>
            </h2>

            <div className="mt-8 mb-8 text-lg text-gray-300 leading-relaxed space-y-6 section-item">
              <p>
                We are thrilled to introduce <span className="text-red-500 font-semibold">Scarlet Empire</span>, a brand-new server and community project launching soon in Age of Empires Mobile! Built by a team of experienced players and strategists, Scarlet Empire is designed to bring together like-minded individuals who share a passion for conquest, diplomacy, and empire-building.
              </p>

              <div className="bg-zinc-800/50 backdrop-blur-sm p-6 rounded-lg border-l-4 border-red-700 hover:shadow-lg hover:shadow-red-900/10 transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl font-bold text-white mb-3">What to Expect:</h3>
                <ul className="list-disc pl-6 space-y-2 text-left">
                  <li>A dynamic and competitive environment for seasoned commanders and rising stars alike.</li>
                  <li>Opportunities to forge alliances, wage epic battles, and carve your legacy into history.</li>
                  <li>A community-driven experience where strategy and teamwork reign supreme.</li>
                </ul>
              </div>

              <p>
                <span className="text-xl font-bold text-red-500 hover:text-red-400 transition-colors duration-300 cursor-default">Prepare to claim your place in the Scarlet Empire.</span><br />
                Stay tuned for the official launch date and get ready to dominate the battlefield!
              </p>

              <p>
                Follow us for updates and be part of the empire's rise.<br />
                Let's build an empire that will be remembered for ages!
              </p>

              <p className="italic text-gray-400 text-sm pt-2">
                #ScarletEmpire #AgeOfEmpiresMobile #ComingSoon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Can We Join Section */}
      <section ref={joinSectionRef} id="join" className="relative bg-black py-20 overflow-hidden section-animate">
        {/* Background radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.red.900/10)_0,transparent_70%)] opacity-70"></div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-2 text-3xl font-bold text-white md:text-4xl relative inline-block section-item">
              <span className="relative z-10">Can I Join?</span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></span>
            </h2>

            <p className="mt-8 mb-12 text-lg text-gray-300 leading-relaxed section-item">
              <span className="text-red-500 font-semibold">Scarlet Empire</span> welcomes dedicated gamers who share our
              values of teamwork, respect, and continuous improvement. Our application process ensures that new members
              will contribute positively to our community.
            </p>

            <div className="mb-16">
              <div className="rounded-lg bg-zinc-900/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-red-900/20 hover:shadow-xl transition-all duration-300 section-item hover:-translate-y-1 max-w-lg mx-auto">
                <h3 className="mb-4 text-2xl font-bold text-white">How to Join</h3>
                <p className="text-lg text-gray-300 flex items-center justify-center h-32">
                  <span className="text-red-500 font-semibold">Coming Soon</span>
                </p>
              </div>
            </div>

            <div
              className="rounded-lg bg-zinc-900/50 backdrop-blur-sm p-8 shadow-lg section-item hover:shadow-red-900/20 hover:shadow-lg transition-all duration-300"
              style={{ transitionDelay: "0.4s" }}
            >
              <h3 className="mb-6 text-2xl font-bold text-white">Notable Members</h3>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="flex flex-col items-center group">
                  <div className="mb-3 h-24 w-24 overflow-hidden rounded-full bg-gradient-to-br from-red-800 to-red-950 p-[3px] transition-all duration-300 group-hover:from-red-600 group-hover:to-red-800 hover:rotate-3">
                    <div className="h-full w-full overflow-hidden rounded-full">
                      <Image
                        src={`${basePath}/katou-megumi.gif`}
                        width={150}
                        height={150}
                        alt="Player Avatar"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                    Alpha - Scarlet Queen
                  </h4>
                  <p className="text-sm text-gray-400 hover:text-red-300 transition-colors duration-300">Community Owner</p>
                </div>

                <div className="flex flex-col items-center group">
                  <div className="mb-3 h-24 w-24 overflow-hidden rounded-full bg-gradient-to-br from-red-800 to-red-950 p-[3px] transition-all duration-300 group-hover:from-red-600 group-hover:to-red-800 hover:rotate-3">
                    <div className="h-full w-full overflow-hidden rounded-full">
                      <Image
                        src={`${basePath}/katou-megumi.gif`}
                        width={150}
                        height={150}
                        alt="Player Avatar"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                    Christoph
                  </h4>
                  <p className="text-sm text-gray-400 hover:text-red-300 transition-colors duration-300">Community Owner</p>
                </div>

                <div className="flex flex-col items-center group">
                  <div className="mb-3 h-24 w-24 overflow-hidden rounded-full bg-gradient-to-br from-red-800 to-red-950 p-[3px] transition-all duration-300 group-hover:from-red-600 group-hover:to-red-800 hover:rotate-3">
                    <div className="h-full w-full overflow-hidden rounded-full">
                      <Image
                        src={`${basePath}/katou-megumi.gif`}
                        width={150}
                        height={150}
                        alt="Player Avatar"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                    Exxel
                  </h4>
                  <p className="text-sm text-gray-400 hover:text-red-300 transition-colors duration-300">Territory Manager</p>
                </div>
              </div>
            </div>

            <div className="mt-12 section-item" style={{ transitionDelay: "0.6s" }}>
              <a href="https://discord.gg/szjHgEzFhQ" target="_blank" rel="noopener noreferrer">
                <Button className="relative overflow-hidden bg-red-700 text-white hover:bg-red-800 px-8 py-6 text-lg shadow-[0_0_15px_rgba(185,28,28,0.3)] group hover:scale-105 transition-all duration-300 ease-in-out">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-600 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="absolute -inset-x-1 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-30 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-300"></span>
                  <span className="relative z-10 flex items-center">
                    Join Our Discord to Apply{" "}
                    <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 py-8">
        <div className="container mx-auto px-4 text-center md:px-6">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Scarlet Empire. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

