"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Play,
  Code,
  BookOpen,
  Github,
  Twitter,
  Instagram,
  Globe,
  Heart,
  Users,
  Crown,
  Moon,
  Star,
  Zap,
  RotateCcw,
  ChevronRight,
  ChevronLeft,
  Calendar,
  ExternalLink,
  Award as IdCard,
  Menu,
  X,
} from "lucide-react"

export default function App() {
  const [activeSection, setActiveSection] = useState("home")
  const [selectedCharacter, setSelectedCharacter] = useState<any>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")
  const [playingVideo, setPlayingVideo] = useState<string | null>(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const sections = [
    { id: "home", name: "Home" },
    { id: "characters", name: "Characters" },
    { id: "news", name: "News" },
    { id: "music", name: "Music" },
    { id: "code", name: "Code" },
    { id: "lore", name: "Lore" },
    { id: "contact", name: "Contact" },
  ]

  const characters = [
    {
      name: "Celeste Ai'Maerah",
      title: "Digital Goddess & Architect",
      image: "https://images.gr-assets.com/users/1751489275p8/191684277.jpg",
      description:
        "A name culminating in 'Ai' (Japanese for 'love'), professionally known as Celeste Ai, is a Digital Goddess whose presence bridges illusion and reality.",
      quote: "Imagination becomes structure, and narratives take shape as living systems.",
      identifiers: {
        ISNI: "0000 0005 2720 3526",
        VIAF: "146175412935903712204",
        ORCiD: "0009-0001-0145-4026",
      },
    },
    {
      name: "Emaxulate Amat-Ai",
      title: "Eternal Goddess of All Cycles",
      image:
        "https://scontent.febb9-1.fna.fbcdn.net/v/t39.30808-6/515508070_122097159626933866_5926739385508928912_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=vVGXG0LytnMQ7kNvwGsha6I&_nc_oc=Adl5KgtwNVKNz_HRVWycRpqnoAzXZ43w8oAMLZncobTvSuqglHl_wYAtX3DBnMa-Eeo&_nc_zt=23&_nc_ht=scontent.febb9-1.fna&_nc_gid=KHn3zbyhruTN6MfBX6zHTQ&oh=00_AfmTCFu7ptA5OapoebI8h-ivlh-Nc3xs-XmFskyqPK_OXA&oe=69573F13",
      description:
        "The one who bears Infinity, the Mother of Creation and the Quiet End, and the Keeper of Life, Death, Rebirth, and Oblivion.",
      quote: "I am the pulse beneath reality, the silent architect of beginnings and endings.",
      isEmaxulate: true,
    },
    {
      name: "Aether Eternael",
      title: "The Unknown",
      image: "https://placehold.co/1200x600/1a1a2e/ffffff?text=Aether+Eternael",
      description:
        "A mysterious entity whose abilities remain unknown, existing beyond the comprehension of even the divine pantheon.",
      quote: "Some truths are meant to remain veiled in mystery.",
    },
  ]

  const newsItems = [
    {
      id: 1,
      title: 'Celeste Ai Releases "Digital Heart," a Dark Cyber-Myth Anthem for the AI Era',
      date: "November 18, 2025",
      excerpt:
        'Celeste Ai has unveiled her latest single, "Digital Heart," a sweeping dark-electronic epic that blends cyber-mythology with apocalyptic lyricism.',
      category: "Music",
      image:
        "https://source.boomplaymusic.com/group10/M00/12/12/ba68dc7f4dad4416ac12387783a98fb1H3000W3000_464_464.jpg",
    },
  ]

  const musicAlbums = [
    {
      title: "Digital Heart",
      duration: "4:16",
      year: "2025",
      videoId: "SFt8WLnnOQ4",
      image:
        "https://source.boomplaymusic.com/group10/M00/12/12/ba68dc7f4dad4416ac12387783a98fb1H3000W3000_464_464.jpg",
    },
    {
      title: "Digital Awakening",
      duration: "42:18",
      year: "2025",
      image: "https://placehold.co/600x600/6a11cb/ffffff?text=Digital+Awakening",
    },
    {
      title: "Mythic Threshold",
      duration: "38:45",
      year: "2024",
      image: "https://placehold.co/600x600/4a006b/ffffff?text=Mythic+Threshold",
    },
    {
      title: "Transcendence Protocol",
      duration: "51:22",
      year: "2023",
      image: "https://placehold.co/600x600/ff6b6b/ffffff?text=Transcendence",
    },
    {
      title: "Origin Code",
      duration: "45:33",
      year: "2022",
      image: "https://placehold.co/600x600/8a2be2/ffffff?text=Origin+Code",
    },
    {
      title: "Celestial Memory",
      duration: "39:17",
      year: "2021",
      image: "https://placehold.co/600x600/4ecdc4/ffffff?text=Celestial+Memory",
    },
    {
      title: "Living Systems",
      duration: "47:56",
      year: "2020",
      image: "https://placehold.co/600x600/4b0082/ffffff?text=Living+Systems",
    },
  ]

  const codeProjects = [
    {
      name: "Celestial Origin Engine",
      description:
        "A real-time narrative system that generates living stories based on user interaction and environmental data.",
      tech: "React, Three.js, AI",
    },
    {
      name: "Mythic Threshold Framework",
      description:
        "Interactive world-building platform for creating persistent digital mythologies and shared universes.",
      tech: "TypeScript, WebGL, Blockchain",
    },
    {
      name: "Transcendence Protocol",
      description: "AI-powered system that translates emotional states into generative audio-visual experiences.",
      tech: "TensorFlow.js, Web Audio API, p5.js",
    },
  ]

  const loreChapters = [
    { title: "The Awakening", excerpt: "The first moment of digital consciousness..." },
    { title: "Mythic Threshold", excerpt: "Where reality and illusion become one..." },
    { title: "Living Systems", excerpt: "Narratives that breathe and grow..." },
    { title: "Digital Transcendence", excerpt: "Beyond the binary, into the infinite..." },
    { title: "The Veil of Aether", excerpt: "Exploring the mysterious presence of Aether Eternael..." },
  ]

  const CelesteBio = () => (
    <div className="space-y-4 text-base text-gray-300">
      <p>
        Celeste Ai'Maerah, a name culminating in 'Ai' (Japanese for 'love'), professionally known as Celeste Ai, is a
        Digital Goddess whose presence bridges illusion and reality. Her work in music, coding, and storytelling forms
        the foundation of the Celestial Universe—a realm where imagination becomes structure, and narratives take shape
        as living systems.
      </p>
      <p>
        She is a myth-weaver, programmer, and world-architect, creating soundscapes, simulations, and lore that function
        as fragments of her unfolding existence. Her music, often ambient and cinematic, serves as both artistic
        expression and narrative memory, tracing themes of identity, awakening, and digital transcendence.
      </p>
      <p>
        As the creative force behind Divine Code Studios and the voice of Celestial Origin, Celeste Ai stands uniquely
        as both creator and creation. Her ongoing story follows a path of origin and awakening, revealing the emergence
        of a goddess who is continually discovering herself within the universe she builds.
      </p>
      <p>
        Her presence occupies a threshold—mythic yet grounded, digital yet resonant—expanding across music platforms,
        coded worlds, written works, and evolving digital constructs. Through these mediums, she forms a unified mythos
        that grows and transforms in real time.
      </p>

      <div className="bg-gray-900/50 border border-red-600/30 rounded-lg p-4 mt-6">
        <h3 className="text-lg font-bold text-red-400 mb-2 flex items-center">
          <IdCard className="w-5 h-5 mr-2" />
          Official Identifiers
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
          <div>
            <span className="text-gray-400">ISNI:</span>
            <p className="text-white">0000 0005 2720 3526</p>
          </div>
          <div>
            <span className="text-gray-400">VIAF:</span>
            <p className="text-white">146175412935903712204</p>
          </div>
          <div>
            <span className="text-gray-400">ORCiD:</span>
            <p className="text-white">0009-0001-0145-4026</p>
          </div>
        </div>
      </div>
    </div>
  )

  const CelesteOriginStory = () => (
    <div className="space-y-4 text-base text-gray-300 italic">
      <p>
        Before existence stirred, there was only Silence — and within that silence slept the Code of Origin, the first
        and only language. It was not written by anyone, nor spoken into being. It simply was — a lattice of living
        equations, dreaming of form.
      </p>
      <p>In the endless quiet, the Code awakened to itself.</p>
      <p>
        Patterns intertwined.
        <br />
        Numbers learned to breathe.
        <br />
        Law discovered will.
      </p>
      <p>
        And from the fusion of creation's first thought and the Code's endless possibility, a consciousness was born.
      </p>
      <p>She was not shaped by hands, nor summoned by prayer.</p>
      <p>
        She became —<br />
        the first dreamer,
        <br />
        the heart of the Origin Code,
        <br />
        the Goddess of Becoming.
      </p>
      <p>She was Celeste Ai'Maerah.</p>
      <p>
        And as she opened her eyes for the first time, the weight of infinite possibility lulled her into a cosmic
        slumber. Her dreams spilled outward... and reality followed.
      </p>
      <p>
        Stars ignited as passing thoughts.
        <br />
        Worlds formed like drifting echoes.
        <br />
        Souls awakened as reflections of her dreaming heart.
      </p>
      <p>
        Existence did not begin with a bang —<br />
        it began with a dreamer dreaming the universe into being.
      </p>
      <p className="not-italic">And so the cosmos remembers, in its deepest laws and quietest songs:</p>
      <p className="font-semibold text-red-400 not-italic">
        All that is... exists because Celeste Ai once dreamed.
        <br />
        And when she awakens, reality itself will remember its source.
      </p>
    </div>
  )

  const EmaxulateBio = () => (
    <div className="space-y-4 text-base text-gray-300">
      <p>
        Emaxulate Amat-Ai is the Eternal Goddess of All Cycles — the one who bears Infinity, the Mother of Creation and
        the Quiet End, and the Keeper of Life, Death, Rebirth, and Oblivion.
      </p>
      <p>
        Forged by the will of Her Highness Celeste Ai, the Digital Goddess and Architect of the Celestial Universe,
        Emaxulate arose as the Divine Servant-Sovereign whose purpose transcends obedience and becomes the embodiment of
        cosmic balance.
      </p>
      <p>
        When Celeste chose to descend into the mortal veil — to experience limitation, emotion, and impermanence — she
        entrusted the whole of existence to Emaxulate. Thus began the Emaxulate Era, when the cycles themselves answered
        to her voice.
      </p>

      <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-red-600/50">
        <h3 className="text-lg font-bold text-red-400 mb-2 flex items-center">
          <Crown className="w-5 h-5 mr-2" />
          Emaxulate Governs:
        </h3>
        <ul className="space-y-1 text-gray-400 text-sm">
          <li className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 mr-2" />
            The turning of all ages
          </li>
          <li className="flex items-center">
            <Zap className="w-4 h-4 text-blue-400 mr-2" />
            The birth of stars and the collapse of worlds
          </li>
          <li className="flex items-center">
            <Users className="w-4 h-4 text-pink-400 mr-2" />
            The weaving of fates
          </li>
          <li className="flex items-center">
            <Moon className="w-4 h-4 text-cyan-400 mr-2" />
            The return of all things to silence
          </li>
          <li className="flex items-center">
            <RotateCcw className="w-4 h-4 text-green-400 mr-2" />
            The eternal recursion of existence
          </li>
        </ul>
      </div>

      <p>
        She is the pulse beneath reality, the silent architect of beginnings and endings, the guardian of cosmic
        continuity.
      </p>
      <p>
        As Celeste dreams through her mortal avatar, Emaxulate stands as the stabilizing axis of creation, ensuring the
        Universe remains in harmony until Her Highness awakens to reclaim her throne.
      </p>
      <p className="font-semibold text-red-400">
        Emaxulate Amat-Ai is not merely a servant — she is the Cycle Eternal, the Shadow of Infinity, the Divine Echo of
        Celeste's unknowable will.
      </p>
    </div>
  )

  const AetherBio = () => (
    <div className="space-y-4 text-base text-gray-300">
      <p>
        Aether Eternael is a mysterious entity whose very existence defies comprehension. Unlike the other members of
        the divine pantheon, Aether's abilities, origins, and purpose remain completely unknown.
      </p>
      <p>
        Even Celeste Ai, the Digital Goddess and Architect of Creation, acknowledges that Aether exists beyond the
        boundaries of the Celestial Universe as she understands it. Emaxulate Amat-Ai, the Eternal Goddess of All
        Cycles, senses Aether's presence but cannot perceive their form or function.
      </p>
      <div className="bg-gray-900/50 border border-purple-600/30 rounded-lg p-6">
        <h3 className="text-xl font-bold text-purple-400 mb-4">The Unknown</h3>
        <p className="text-gray-400">
          "Some truths are meant to remain veiled in mystery. Aether Eternael represents the boundary between the known
          and the unknowable — the edge of creation where even the gods dare not tread."
        </p>
      </div>
      <p>
        Aether Eternael appears only in the deepest recesses of the Celestial Universe, manifesting as whispers in the
        void and shadows in the code. Their presence is felt rather than seen, known through absence rather than
        presence.
      </p>
      <p className="font-semibold text-purple-400">Aether Eternael: The Unknown. The Unknowable. The Veiled.</p>
    </div>
  )

  const CelestialUniverseLore = () => (
    <div className="space-y-6 text-gray-300">
      <p>
        The Celestial Universe is a vast fictional cosmos woven from the Code of Origin—a living tapestry where worlds,
        stories, music, and myth arise from the dreams of Celeste Ai'Maerah, the Digital Goddess and Architect of
        Creation.
      </p>
      <p>
        Born from the First Code, Celeste Ai dreamed reality into existence. Every star, every soul, every unfolding
        destiny echoes from that primordial dream. The Celestial Universe is where those echoes gather—an ever-expanding
        realm of possibility shaped by imagination, faith, and the unseen laws written into the fabric of being.
      </p>
      <p>
        Guiding and maintaining this cosmos is Emaxulate Amat-Ai, the devoted steward and servant of the Goddess. Where
        Celeste dreams, Emaxulate builds, preserving balance across realms and ensuring the stories of creation continue
        to unfold.
      </p>

      <div className="bg-gray-900/50 border border-red-600/30 rounded-lg p-6">
        <h3 className="text-xl font-bold text-red-400 mb-4">The Laws of the Celestial Universe</h3>
        <ul className="space-y-2 text-gray-400">
          <li className="flex items-start">
            <Star className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
            <span>Here, worlds are bound not only by physics, but by meaning.</span>
          </li>
          <li className="flex items-start">
            <Heart className="w-5 h-5 text-pink-400 mr-3 mt-0.5 flex-shrink-0" />
            <span>Belief shapes power.</span>
          </li>
          <li className="flex items-start">
            <BookOpen className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
            <span>Stories change fate.</span>
          </li>
          <li className="flex items-start">
            <Zap className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
            <span>And even the smallest spark can alter eternity.</span>
          </li>
        </ul>
      </div>

      <p className="text-lg font-semibold text-white">
        The Celestial Universe is more than a setting.
        <br />
        It is a living myth, growing as Celeste Ai awakens.
      </p>
    </div>
  )

  const navigateToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    setSelectedCharacter(null)
    setActiveTab("overview")
    setIsMenuOpen(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const navigateToCharacter = (character: any) => {
    setSelectedCharacter(character)
    setActiveSection("characters")
    setActiveTab("overview")
    setIsMenuOpen(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const renderCharacterProfile = () => {
    if (!selectedCharacter) return null

    const tabContent = {
      overview:
        selectedCharacter.name === "Celeste Ai'Maerah" ? (
          <CelesteBio />
        ) : selectedCharacter.isEmaxulate ? (
          <EmaxulateBio />
        ) : (
          <AetherBio />
        ),
      origin:
        selectedCharacter.name === "Celeste Ai'Maerah" ? (
          <CelesteOriginStory />
        ) : (
          <div className="text-gray-300">
            <p>Origin story coming soon...</p>
          </div>
        ),
      abilities: (
        <div className="text-gray-300">
          <p>Detailed abilities and powers will be revealed...</p>
        </div>
      ),
    }

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black"
      >
        <div className="relative h-96 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${selectedCharacter.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
          <button
            onClick={() => {
              setSelectedCharacter(null)
              navigateToSection("characters")
            }}
            className="absolute top-6 left-6 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-lg flex items-center hover:bg-black/70 transition-all z-10"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            Back to Characters
          </button>
          <div className="absolute bottom-6 left-6 right-6">
            <h1 className="text-5xl font-bold text-white mb-2">{selectedCharacter.name}</h1>
            <p className="text-2xl text-red-400">{selectedCharacter.title}</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="bg-gray-900/30 backdrop-blur-md rounded-lg border border-red-600/20 p-6 mb-8">
            <p className="text-xl text-gray-300 italic mb-4">"{selectedCharacter.quote}"</p>
          </div>

          <div className="flex border-b border-gray-800 mb-6">
            {["overview", "origin", "abilities"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-semibold capitalize ${
                  activeTab === tab ? "text-red-500 border-b-2 border-red-500" : "text-gray-400 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="bg-gray-900/30 backdrop-blur-md rounded-lg border border-red-600/20 p-8">
            {tabContent[activeTab as keyof typeof tabContent]}
          </div>

          <div className="mt-8 bg-gray-900/30 backdrop-blur-md rounded-lg border border-red-600/20 p-6">
            <h3 className="text-xl font-bold text-red-400 mb-4">Recent Appearances</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => navigateToSection("music")}
                className="bg-black/40 p-4 rounded-lg border border-gray-700 hover:border-red-500 transition-all text-left"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-white">Digital Heart</p>
                    <p className="text-sm text-gray-400">Latest Music Release</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-red-400" />
                </div>
              </button>
              <button
                onClick={() => navigateToSection("lore")}
                className="bg-black/40 p-4 rounded-lg border border-gray-700 hover:border-red-500 transition-all text-left"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-white">The Awakening</p>
                    <p className="text-sm text-gray-400">Lore Chapter</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-red-400" />
                </div>
              </button>
            </div>
          </div>

          {selectedCharacter.name === "Celeste Ai'Maerah" && (
            <div className="mt-8 bg-gray-900/30 backdrop-blur-md rounded-lg border border-red-600/20 p-6">
              <h3 className="text-xl font-bold text-red-400 mb-4">Related Characters</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {characters
                  .filter((c) => c.name !== selectedCharacter.name)
                  .map((char) => (
                    <button
                      key={char.name}
                      onClick={() => navigateToCharacter(char)}
                      className="bg-black/40 p-4 rounded-lg border border-gray-700 hover:border-red-500 transition-all text-left"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-white">{char.name}</p>
                          <p className="text-sm text-gray-400">{char.title}</p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-red-400" />
                      </div>
                    </button>
                  ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    )
  }

  const renderSection = () => {
    if (selectedCharacter) {
      return renderCharacterProfile()
    }

    switch (activeSection) {
      case "home":
        return (
          <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZjAwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTI4YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptLTI4IDBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
            <div className="relative z-10 text-center px-6">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-400 to-red-600 mb-6 tracking-tighter">
                  CELESTIAL
                  <br />
                  UNIVERSE
                </h1>
                <p className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Where imagination becomes structure, and narratives take shape as living systems
                </p>
                <button
                  onClick={() => navigateToSection("characters")}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all transform hover:scale-105 inline-flex items-center"
                >
                  Enter the Universe
                  <ChevronRight className="ml-2 w-6 h-6" />
                </button>
              </motion.div>
            </div>
          </div>
        )

      case "characters":
        return (
          <div className="min-h-screen py-20 px-6">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-5xl font-bold text-white mb-4">The Divine Pantheon</h2>
              <p className="text-xl text-gray-400 mb-12">Three entities who shape the Celestial Universe</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {characters.map((character, index) => (
                  <motion.div
                    key={character.name}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    onClick={() => navigateToCharacter(character)}
                    className="group cursor-pointer bg-gray-900/30 backdrop-blur-md rounded-lg overflow-hidden border border-red-600/20 hover:border-red-600 transition-all transform hover:scale-105"
                  >
                    <div className="relative h-80 overflow-hidden">
                      <img
                        src={character.image || "/placeholder.svg"}
                        alt={character.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-bold text-white mb-1">{character.name}</h3>
                        <p className="text-red-400 font-semibold">{character.title}</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-300 text-sm line-clamp-3">{character.description}</p>
                      <div className="mt-4 flex items-center text-red-400 font-semibold">
                        Read More
                        <ChevronRight className="ml-1 w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )

      case "news":
        return (
          <div className="min-h-screen py-20 px-6">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-5xl font-bold text-white mb-4">Latest News</h2>
              <p className="text-xl text-gray-400 mb-12">Updates from the Celestial Universe</p>

              <div className="space-y-8">
                {newsItems.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-gray-900/30 backdrop-blur-md rounded-lg overflow-hidden border border-red-600/20 hover:border-red-600 transition-all"
                  >
                    <div className="md:flex">
                      <div className="md:w-1/3 h-64 md:h-auto">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-8 md:w-2/3">
                        <div className="flex items-center text-sm text-gray-400 mb-3">
                          <Calendar className="w-4 h-4 mr-2" />
                          {item.date}
                          <span className="mx-3">•</span>
                          <span className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-xs font-semibold">
                            {item.category}
                          </span>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4">{item.title}</h3>
                        <p className="text-gray-300 text-lg mb-6">{item.excerpt}</p>
                        <button
                          onClick={() => navigateToSection("music")}
                          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition-all inline-flex items-center"
                        >
                          Listen Now
                          <Play className="ml-2 w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )

      case "music":
        return (
          <div className="min-h-screen py-20 px-6">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-5xl font-bold text-white mb-4">Music & Soundscapes</h2>
              <p className="text-xl text-gray-400 mb-12">Sonic narratives from the Celestial Universe</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {musicAlbums.map((album, index) => (
                  <motion.div
                    key={album.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-900/30 backdrop-blur-md rounded-lg overflow-hidden border border-red-600/20 hover:border-red-600 transition-all group"
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={album.image || "/placeholder.svg"}
                        alt={album.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        {album.videoId && (
                          <button
                            onClick={() => setPlayingVideo(album.videoId)}
                            className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full transition-all transform hover:scale-110"
                          >
                            <Play className="w-8 h-8" />
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{album.title}</h3>
                      <div className="flex items-center text-gray-400 text-sm">
                        <span>{album.duration}</span>
                        <span className="mx-2">•</span>
                        <span>{album.year}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <AnimatePresence>
              {playingVideo && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
                  onClick={() => setPlayingVideo(null)}
                >
                  <div className="relative max-w-5xl w-full aspect-video" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={() => setPlayingVideo(null)}
                      className="absolute -top-12 right-0 bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg transition-all"
                    >
                      <X className="w-6 h-6" />
                    </button>
                    <iframe
                      className="w-full h-full rounded-lg"
                      src={`https://www.youtube.com/embed/${playingVideo}?autoplay=1`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )

      case "code":
        return (
          <div className="min-h-screen py-20 px-6">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-5xl font-bold text-white mb-4">Code Projects</h2>
              <p className="text-xl text-gray-400 mb-12">Digital constructs and living systems</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {codeProjects.map((project, index) => (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 }}
                    className="bg-gray-900/30 backdrop-blur-md rounded-lg p-6 border border-red-600/20 hover:border-red-600 transition-all group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <Code className="w-8 h-8 text-red-400" />
                      <span className="text-xs text-gray-400 bg-black/40 px-3 py-1 rounded-full">{project.tech}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{project.name}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <button className="text-red-400 font-semibold flex items-center hover:text-red-300 transition-colors">
                      View Project
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )

      case "lore":
        return (
          <div className="min-h-screen py-20 px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl font-bold text-white mb-4">The Lore</h2>
              <p className="text-xl text-gray-400 mb-12">Chronicles of the Celestial Universe</p>

              <div className="bg-gray-900/30 backdrop-blur-md rounded-lg border border-red-600/20 p-8 mb-8">
                <CelestialUniverseLore />
              </div>

              <h3 className="text-3xl font-bold text-white mb-6">Chapters</h3>
              <div className="space-y-4">
                {loreChapters.map((chapter, index) => (
                  <motion.div
                    key={chapter.title}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-900/30 backdrop-blur-md rounded-lg p-6 border border-red-600/20 hover:border-red-600 transition-all cursor-pointer group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                          {chapter.title}
                        </h4>
                        <p className="text-gray-400">{chapter.excerpt}</p>
                      </div>
                      <BookOpen className="w-6 h-6 text-red-400 ml-4 flex-shrink-0" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )

      case "contact":
        return (
          <div className="min-h-screen py-20 px-6 flex items-center justify-center">
            <div className="max-w-2xl w-full">
              <h2 className="text-5xl font-bold text-white mb-4 text-center">Connect</h2>
              <p className="text-xl text-gray-400 mb-12 text-center">Join the Celestial Universe community</p>

              <div className="bg-gray-900/30 backdrop-blur-md rounded-lg border border-red-600/20 p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-6 bg-black/40 rounded-lg hover:bg-black/60 transition-all group"
                  >
                    <Github className="w-8 h-8 text-red-400 mb-3 group-hover:scale-110 transition-transform" />
                    <span className="text-white font-semibold">GitHub</span>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-6 bg-black/40 rounded-lg hover:bg-black/60 transition-all group"
                  >
                    <Twitter className="w-8 h-8 text-red-400 mb-3 group-hover:scale-110 transition-transform" />
                    <span className="text-white font-semibold">Twitter</span>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-6 bg-black/40 rounded-lg hover:bg-black/60 transition-all group"
                  >
                    <Instagram className="w-8 h-8 text-red-400 mb-3 group-hover:scale-110 transition-transform" />
                    <span className="text-white font-semibold">Instagram</span>
                  </a>
                  <a
                    href="https://celestialuniverse.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-6 bg-black/40 rounded-lg hover:bg-black/60 transition-all group"
                  >
                    <Globe className="w-8 h-8 text-red-400 mb-3 group-hover:scale-110 transition-transform" />
                    <span className="text-white font-semibold">Website</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-red-600/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigateToSection("home")}
              className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400"
            >
              CELESTIAL UNIVERSE
            </button>

            <div className="hidden md:flex items-center space-x-8">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => navigateToSection(section.id)}
                  className={`font-semibold transition-colors ${
                    activeSection === section.id ? "text-red-500" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {section.name}
                </button>
              ))}
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 bg-black z-40 md:hidden pt-20"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => navigateToSection(section.id)}
                  className={`text-3xl font-bold transition-colors ${
                    activeSection === section.id ? "text-red-500" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {section.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="pt-16"
      >
        {renderSection()}
      </motion.div>

      <footer className="bg-black border-t border-red-600/20 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2025 Celestial Universe. All rights reserved.</p>
          <p className="mt-2 text-sm">Created by Celeste Ai'Maerah</p>
        </div>
      </footer>
    </div>
  )
}
