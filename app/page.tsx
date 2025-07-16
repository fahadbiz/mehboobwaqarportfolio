"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Code,
  Smartphone,
  Database,
  Award,
  GraduationCap,
  Briefcase,
  User,
  Menu,
  X,
  ChevronDown,
  ExternalLink,
  Globe,
  Star,
  Zap,
  Brain,
  Lightbulb,
  Send,
  ArrowRight,
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)

      const sections = ["hero", "about", "experience", "skills", "projects", "achievements", "education", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 150 && rect.bottom >= 150
        }
        return false
      })
      if (current) {
        setActiveSection(current)
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("mousemove", handleMouseMove, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setIsMenuOpen(false)
  }, [])

  const navItems = [
    { id: "hero", label: "Home", icon: User },
    { id: "about", label: "About", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "skills", label: "Skills", icon: Code },
    { id: "projects", label: "Projects", icon: Lightbulb },
    { id: "achievements", label: "Achievements", icon: Award },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "contact", label: "Contact", icon: Mail },
  ]

  const topSkills = [
    { name: "Complex Problem Solving", icon: Brain, color: "from-indigo-500 to-purple-600" },
    { name: "Firebase", icon: Database, color: "from-orange-500 to-red-500" },
    { name: "Dart", icon: Code, color: "from-blue-500 to-cyan-500" },
  ]

  const skills = {
    "Programming Languages": ["Dart", "JavaScript", "Java", "Python"],
    "Frontend Development": ["ReactJS", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
    "Backend Development": ["Firebase", "API Integration", "SQL", "Node.js"],
    "Mobile Development": ["Flutter", "Android Development"],
    "Tools & Platforms": ["Git", "VS Code", "Android Studio", "Google Colab", "MySQL"],
    "Core CS Concepts": ["OOP", "Data Structures", "Algorithms", "Software Architecture"],
  }

  const experience = [
    {
      title: "Software Engineering Fellow",
      company: "Headstarter",
      duration: "July 2024 - September 2024",
      description:
        "Intensive 3-month software engineering fellowship program focusing on practical development skills, real-world project experience, and industry best practices. Collaborated with cross-functional teams to build scalable applications.",
      type: "Fellowship",
      skills: ["React", "Node.js", "MongoDB", "Team Collaboration"],
    },
  ]

  const projects = [
    {
      title: "QuickCare (Final Year Project)",
      description:
        "A comprehensive public-services app delivering emergency medical assistance, AI-powered first-aid guidance, and community blood-donation network. Features voice/text/image inputs, GPS-based donor matching, real-time notifications, and offline capabilities.",
      technologies: ["Flutter", "Firebase", "AI Integration", "Google Maps API", "GPS"],
      category: "Mobile App",
      featured: true,
      impact: "Potential to save lives through emergency response",
    },
    {
      title: "FAM Hospital Management System",
      description:
        "Flutter-Firebase hospital management system with role-based portals for Admins, Doctors, and Patients. Integrated ZegoCloud SDK for secure video consultations and Firebase for authentication and database management.",
      technologies: ["Flutter", "Firebase", "ZegoCloud SDK", "Real-time Communication"],
      category: "Healthcare",
      featured: true,
      impact: "Streamlined healthcare operations",
    },
    {
      title: "HarvestHub Agricultural Platform",
      description:
        "Platform connecting farmers directly with buyers and suppliers. Features real-time machinery booking, labor network with verified profiles, weather updates, and offline functionality for low-literacy users.",
      technologies: ["Flutter", "Firebase", "Real-time Database", "Weather API"],
      category: "Agriculture",
      featured: false,
      impact: "Empowering farmers with technology",
    },
    {
      title: "Pharmacy Management System",
      description:
        "Java-SQL desktop application with role-based access for Admin, Pharmacist, and Sales users. Features inventory management, prescription processing, sales reports, and encrypted database connections.",
      technologies: ["Java", "SQL", "Desktop Application", "Database Security"],
      category: "Desktop App",
      featured: false,
      impact: "Improved pharmacy operations efficiency",
    },
  ]

  const achievements = [
    {
      title: "Category Winner: Most Innovative Idea",
      event: "Innovate 4.0 - ITCN Asia 2024",
      description:
        "Emerged as category winner for most innovative idea at the pitching hackathon at Expo Center Lahore, competing against 200+ participants.",
      year: "2024",
      type: "Competition",
      icon: "🏆",
    },
    {
      title: "Winner at the Innovate 4.0",
      event: "Innovate 4.0 Hackathon",
      description:
        "Overall winner at the Innovate 4.0 hackathon with innovative solution and exceptional presentation skills.",
      year: "2024",
      type: "Hackathon",
      icon: "🥇",
    },
  ]

  const certificates = [
    { title: "Data Structures", issuer: "Coursera", date: "2024", category: "Computer Science" },
    { title: "Web Design for Everybody Capstone", issuer: "Coursera", date: "2024", category: "Web Development" },
    { title: "Mathematical Thinking in Computer Science", issuer: "Coursera", date: "2024", category: "Mathematics" },
    { title: "Business Model Innovation", issuer: "Coursera", date: "2024", category: "Business" },
    { title: "Object Oriented Programming in Java", issuer: "Coursera", date: "2023", category: "Programming" },
  ]

  const education = [
    {
      degree: "Bachelor's degree, Computer Science",
      institution: "Riphah International University",
      duration: "2021 - 2025",
      type: "University",
      status: "Current",
    },
    {
      degree: "Fsc Pre-engineering",
      institution: "Punjab Group of College Khanewal",
      duration: "April 2018 - May 2020",
      type: "College",
      status: "Completed",
    },
    {
      degree: "Matric, Computer Science",
      institution: "Govt. Islamia High School Khanewal",
      duration: "April 2016 - April 2018",
      type: "School",
      status: "Completed",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-x-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[800px] h-[800px] bg-gradient-to-r from-blue-400/8 to-purple-400/8 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          style={{ top: "10%", left: "10%" }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-purple-400/8 to-pink-400/8 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * -0.01,
            y: mousePosition.y * -0.01,
          }}
          transition={{ type: "spring", stiffness: 30, damping: 20 }}
          style={{ top: "60%", right: "10%" }}
        />
      </div>

      {/* Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-gray-900/95 backdrop-blur-xl shadow-lg border-b border-gray-700/50" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Mehboob Waqar
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-2">
              {navItems.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 font-medium ${
                      activeSection === item.id
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                        : "text-gray-200 hover:text-white hover:bg-gray-800/50"
                    }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <IconComponent size={18} />
                    <span>{item.label}</span>
                  </motion.button>
                )
              })}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-xl hover:bg-gray-800/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div animate={{ rotate: isMenuOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50 shadow-xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item, index) => {
                  const IconComponent = item.icon
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`flex items-center space-x-3 w-full px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                        activeSection === item.id
                          ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                          : "text-gray-200 hover:text-white hover:bg-gray-800/50"
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconComponent size={20} />
                      <span>{item.label}</span>
                    </motion.button>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, type: "spring", stiffness: 100 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6"
              >
                <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 text-sm font-semibold shadow-lg">
                  🏆 Hackathon Winner & Innovation Leader
                </Badge>
              </motion.div>

              <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Mehboob
                </span>
              </motion.h1>

              <motion.div
                className="space-y-3 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h2 className="text-3xl sm:text-4xl text-gray-100 font-bold">Associate Software Engineer</h2>
                <h3 className="text-xl sm:text-2xl text-blue-400 font-semibold">
                  Flutter Developer | Mobile App Specialist
                </h3>
                <p className="text-lg text-purple-400 font-medium">
                  Transforming Ideas into Exceptional Mobile Experiences
                </p>
              </motion.div>

              <motion.p
                className="text-lg text-gray-200 mb-10 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                I'm a passionate mobile app developer specializing in Flutter, with a proven track record of creating
                innovative and user-friendly applications. I transform creative ideas into exceptional mobile
                experiences that make a real impact.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group"
                  size="lg"
                >
                  <Send className="mr-2 group-hover:translate-x-1 transition-transform" size={20} />
                  Get In Touch
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection("projects")}
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 group"
                  size="lg"
                >
                  <Lightbulb className="mr-2 group-hover:rotate-12 transition-transform" size={20} />
                  View Projects
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 100 }}
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
              >
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-4 border-white shadow-2xl relative">
                  <img
                    src="/images/profile.png"
                    alt="Mehboob Waqar - Associate Software Engineer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-xl"
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Code className="text-white" size={36} />
                </motion.div>
                <motion.div
                  className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-xl"
                  animate={{
                    y: [0, 15, 0],
                    rotate: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  <Smartphone className="text-white" size={28} />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.div
            animate={{
              y: [0, 20, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="cursor-pointer p-4 rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm border border-gray-700/30 hover:border-gray-600/50"
            onClick={() => scrollToSection("about")}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronDown size={32} className="text-gray-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-800/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">About Me</h2>
            <div className="w-32 h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
              Passionate about creating innovative solutions that make a difference
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-10 shadow-2xl border border-gray-700/50 bg-gradient-to-br from-gray-800/90 to-slate-700/90 backdrop-blur-sm">
                <CardContent className="p-0">
                  <p className="text-lg text-gray-100 leading-relaxed mb-6">
                    I'm Mehboob Waqar, a passionate mobile app developer with expertise in creating innovative and
                    user-friendly applications. Specializing in Flutter, I transform creative ideas into exceptional
                    mobile experiences that solve real-world problems.
                  </p>
                  <p className="text-lg text-gray-100 leading-relaxed mb-6">
                    With experience in developing robust mobile applications, I stay updated with the latest technology
                    trends to provide cutting-edge solutions. My approach combines technical excellence with
                    user-centered design to create applications that users love.
                  </p>
                  <p className="text-lg text-gray-100 leading-relaxed">
                    I thrive in collaborative environments and am always eager to take on new challenges. Whether you're
                    looking to build a groundbreaking mobile app or need a dedicated developer for your team, I'm here
                    to help bring your vision to life.
                  </p>
                </CardContent>
              </Card>

              {/* Top Skills */}
              <motion.div
                className="mt-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Star className="mr-3 text-yellow-400" size={28} />
                  Core Strengths
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {topSkills.map((skill, index) => {
                    const IconComponent = skill.icon
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`p-6 rounded-2xl bg-gradient-to-r ${skill.color} text-white shadow-xl hover:shadow-2xl transition-all duration-300`}
                        whileHover={{ scale: 1.05, y: -5 }}
                      >
                        <div className="flex items-center space-x-4">
                          <IconComponent size={28} />
                          <span className="font-bold text-lg">{skill.name}</span>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div
                className="flex items-center space-x-6 p-6 rounded-2xl bg-gray-800/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700/50"
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Mail className="text-white" size={28} />
                </div>
                <div>
                  <p className="font-bold text-white text-lg">Email</p>
                  <a
                    href="mailto:themehbboobwaqar@gmail.com"
                    className="text-blue-400 hover:text-blue-300 transition-colors text-lg"
                  >
                    themehbboobwaqar@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-6 p-6 rounded-2xl bg-gray-800/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700/50"
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Phone className="text-white" size={28} />
                </div>
                <div>
                  <p className="font-bold text-white text-lg">Phone</p>
                  <a href="tel:+923042292019" className="text-green-400 hover:text-green-300 transition-colors text-lg">
                    +92-304-2292019
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-6 p-6 rounded-2xl bg-gray-800/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700/50"
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Globe className="text-white" size={28} />
                </div>
                <div>
                  <p className="font-bold text-white text-lg">Portfolio</p>
                  <a
                    href="https://mehboobwaqar.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors flex items-center text-lg"
                  >
                    mehboobwaqar.vercel.app
                    <ExternalLink size={18} className="ml-2" />
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-6 p-6 rounded-2xl bg-gray-800/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700/50"
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <MapPin className="text-white" size={28} />
                </div>
                <div>
                  <p className="font-bold text-white text-lg">Location</p>
                  <p className="text-gray-300 text-lg">Lahore, Punjab, Pakistan</p>
                </div>
              </motion.div>

              <div className="flex space-x-4 pt-8">
                <motion.a
                  href="https://github.com/mehboobwaqar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center hover:bg-gray-800 transition-all duration-300 shadow-xl hover:shadow-2xl"
                  whileHover={{ scale: 1.15, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="text-white" size={28} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/mehboobwaqar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl"
                  whileHover={{ scale: 1.15, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="text-white" size={28} />
                </motion.a>
                <motion.a
                  href="https://mehboobwaqar.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-xl hover:shadow-2xl"
                  whileHover={{ scale: 1.15, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Globe className="text-white" size={28} />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Professional Experience</h2>
            <div className="w-32 h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
              Building expertise through hands-on experience and continuous learning
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative mb-12"
              >
                <Card className="p-10 shadow-2xl border border-gray-700/50 bg-gradient-to-br from-gray-800/90 to-slate-700/90 backdrop-blur-sm hover:shadow-3xl transition-all duration-500">
                  <CardHeader className="p-0 mb-8">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                      <div className="flex-1">
                        <CardTitle className="text-3xl font-bold text-white mb-3">{exp.title}</CardTitle>
                        <CardDescription className="text-2xl font-bold text-blue-600 mb-4">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col lg:items-end space-y-2">
                        <Badge variant="outline" className="text-purple-600 border-purple-600 text-lg px-4 py-2">
                          {exp.duration}
                        </Badge>
                        <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg px-4 py-2">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-lg text-gray-100 leading-relaxed mb-6">{exp.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {exp.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-gray-700/80 text-gray-200 hover:bg-gray-600/80 transition-all duration-300 cursor-default px-3 py-2 font-medium border border-gray-600/50"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-800/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Skills & Technologies</h2>
            <div className="w-32 h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
              Comprehensive technical expertise across multiple domains
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-500 border border-gray-700/50 bg-gradient-to-br from-gray-800/90 to-slate-700/90 backdrop-blur-sm group">
                  <CardHeader className="pb-6">
                    <CardTitle className="text-xl font-bold text-white flex items-center group-hover:text-blue-600 transition-colors">
                      {category === "Programming Languages" && <Code className="mr-3 text-blue-600" size={28} />}
                      {category === "Mobile Development" && <Smartphone className="mr-3 text-green-600" size={28} />}
                      {category === "Backend Development" && <Database className="mr-3 text-purple-600" size={28} />}
                      {!["Programming Languages", "Mobile Development", "Backend Development"].includes(category) && (
                        <Zap className="mr-3 text-orange-600" size={28} />
                      )}
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      {skillList.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <Badge
                            variant="secondary"
                            className="bg-gray-700/80 text-gray-200 hover:bg-gray-600/80 transition-all duration-300 cursor-default px-3 py-2 font-medium border border-gray-600/50"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Featured Projects</h2>
            <div className="w-32 h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
              Innovative solutions that solve real-world problems
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`h-full hover:shadow-2xl transition-all duration-500 group border border-gray-700/50 bg-gradient-to-br from-gray-800/90 to-slate-700/90 backdrop-blur-sm ${
                    project.featured ? "ring-2 ring-blue-400/50 shadow-xl" : ""
                  }`}
                >
                  <CardHeader className="pb-6">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center space-x-3">
                        <Badge variant="outline" className="text-sm font-medium px-3 py-1">
                          {project.category}
                        </Badge>
                        {project.featured && (
                          <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-medium px-3 py-1">
                            <Star size={14} className="mr-1" />
                            Featured
                          </Badge>
                        )}
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-white group-hover:text-blue-600 transition-colors duration-300 mb-3">
                      {project.title}
                    </CardTitle>
                    <p className="text-sm text-purple-600 font-semibold mb-4">{project.impact}</p>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-200 mb-8 leading-relaxed text-lg">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <Badge
                            variant="secondary"
                            className="bg-gray-700/80 text-gray-200 hover:bg-gray-600/80 transition-all duration-300 px-3 py-2 font-medium border border-gray-600/50"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-800/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Achievements & Recognition</h2>
            <div className="w-32 h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
              Recognition for innovation and excellence in software development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 mb-20">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-500 border-l-4 border-l-yellow-400 border border-gray-700/50 bg-gradient-to-br from-gray-800/90 to-slate-700/90 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl text-2xl">
                        {achievement.icon}
                      </div>
                      <div className="flex flex-col space-y-2">
                        <Badge
                          variant="outline"
                          className="text-yellow-600 border-yellow-500 w-fit px-3 py-1 font-medium"
                        >
                          {achievement.year}
                        </Badge>
                        <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white w-fit px-3 py-1 font-medium">
                          {achievement.type}
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-white mb-3">{achievement.title}</CardTitle>
                    <CardDescription className="text-blue-600 font-bold text-xl mb-4">
                      {achievement.event}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-100 leading-relaxed text-lg">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-gray-800/90 to-slate-700/90 backdrop-blur-sm border border-gray-700/50 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-white flex items-center">
                  <GraduationCap className="mr-4 text-blue-400" size={36} />
                  Professional Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {certificates.map((cert, index) => (
                    <motion.div
                      key={cert.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-800/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700/50"
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <div className="mb-4">
                        <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 text-sm font-medium">
                          {cert.category}
                        </Badge>
                      </div>
                      <h4 className="font-bold text-white mb-4 leading-tight text-lg">{cert.title}</h4>
                      <p className="text-blue-400 font-bold mb-2 text-lg">{cert.issuer}</p>
                      <p className="text-gray-400 font-medium">{cert.date}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Educational Journey</h2>
            <div className="w-32 h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
              Building a strong foundation through quality education
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-indigo-600 rounded-full"></div>
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative mb-16"
                >
                  <motion.div
                    className={`absolute left-7 w-8 h-8 rounded-full border-4 border-white shadow-xl ${
                      edu.type === "University"
                        ? "bg-blue-600"
                        : edu.type === "College"
                          ? "bg-purple-600"
                          : "bg-indigo-600"
                    }`}
                    whileHover={{ scale: 1.3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  />
                  <div className="ml-24">
                    <Card className="hover:shadow-2xl transition-all duration-500 border border-gray-700/50 bg-gradient-to-br from-gray-800/90 to-slate-700/90 backdrop-blur-sm">
                      <CardHeader>
                        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                          <div className="flex-1">
                            <CardTitle className="text-2xl font-bold text-white mb-3">{edu.degree}</CardTitle>
                            <CardDescription className="text-xl font-bold text-blue-600 mb-2">
                              {edu.institution}
                            </CardDescription>
                          </div>
                          <div className="flex flex-col lg:items-end space-y-2">
                            <Badge
                              variant="outline"
                              className={`w-fit px-4 py-2 text-lg font-medium ${
                                edu.type === "University"
                                  ? "text-blue-600 border-blue-600"
                                  : edu.type === "College"
                                    ? "text-purple-600 border-purple-600"
                                    : "text-indigo-600 border-indigo-600"
                              }`}
                            >
                              {edu.duration}
                            </Badge>
                            <Badge
                              className={`w-fit px-4 py-2 text-lg font-medium ${
                                edu.type === "University"
                                  ? "bg-blue-600"
                                  : edu.type === "College"
                                    ? "bg-purple-600"
                                    : "bg-indigo-600"
                              }`}
                            >
                              {edu.type}
                            </Badge>
                            <Badge
                              variant="outline"
                              className={`w-fit px-3 py-1 text-sm font-medium ${
                                edu.status === "Current"
                                  ? "text-green-600 border-green-600"
                                  : "text-gray-600 border-gray-600"
                              }`}
                            >
                              {edu.status}
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-800/80 via-slate-700/80 to-gray-800/80 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Let's Connect</h2>
            <div className="w-32 h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to bring your ideas to life? I'm always excited to discuss new opportunities, collaborations, or
              just chat about technology and innovation. Let's create something amazing together!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div whileHover={{ scale: 1.05, x: 10 }} transition={{ type: "spring", stiffness: 400 }}>
                <Card className="p-8 hover:shadow-2xl transition-all duration-300 border border-gray-700/50 bg-gray-800/90 backdrop-blur-sm">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                      <Mail className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-xl mb-2">Email</h3>
                      <a
                        href="mailto:themehbboobwaqar@gmail.com"
                        className="text-blue-400 hover:text-blue-300 transition-colors text-lg font-medium"
                      >
                        themehbboobwaqar@gmail.com
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05, x: 10 }} transition={{ type: "spring", stiffness: 400 }}>
                <Card className="p-8 hover:shadow-2xl transition-all duration-300 border border-gray-700/50 bg-gray-800/90 backdrop-blur-sm">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
                      <Phone className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-xl mb-2">Phone</h3>
                      <a
                        href="tel:+923042292019"
                        className="text-green-400 hover:text-green-300 transition-colors text-lg font-medium"
                      >
                        +92-304-2292019
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05, x: 10 }} transition={{ type: "spring", stiffness: 400 }}>
                <Card className="p-8 hover:shadow-2xl transition-all duration-300 border border-gray-700/50 bg-gray-800/90 backdrop-blur-sm">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-xl">
                      <Globe className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-xl mb-2">Portfolio</h3>
                      <a
                        href="https://mehboobwaqar.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 transition-colors flex items-center text-lg font-medium"
                      >
                        mehboobwaqar.vercel.app
                        <ExternalLink size={18} className="ml-2" />
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <div className="flex space-x-4 pt-8">
                <motion.a
                  href="https://github.com/mehboobwaqar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center hover:bg-gray-800 transition-all duration-300 shadow-xl hover:shadow-2xl"
                  whileHover={{ scale: 1.15, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="text-white" size={28} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/mehboobwaqar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl"
                  whileHover={{ scale: 1.15, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="text-white" size={28} />
                </motion.a>
                <motion.a
                  href="https://mehboobwaqar.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-xl hover:shadow-2xl"
                  whileHover={{ scale: 1.15, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Globe className="text-white" size={28} />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <Card className="p-12 shadow-2xl border border-gray-700/50 bg-gradient-to-br from-gray-800/90 to-slate-700/90 backdrop-blur-sm">
                <CardContent className="p-0">
                  <h3 className="text-3xl font-bold text-white mb-8">Ready to Start a Project?</h3>
                  <p className="text-lg text-gray-100 leading-relaxed mb-10">
                    I'm currently available for new opportunities and exciting projects. Whether you need a mobile app,
                    want to discuss a collaboration, or just want to connect, I'd love to hear from you!
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 font-semibold">Available for new projects</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      <span className="text-blue-400 font-semibold">Quick response time</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                      <span className="text-purple-400 font-semibold">Flexible collaboration</span>
                    </div>
                  </div>
                  <Button
                    onClick={() => window.open("mailto:themehbboobwaqar@gmail.com", "_blank")}
                    className="w-full mt-10 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group"
                    size="lg"
                  >
                    <Send className="mr-3 group-hover:translate-x-1 transition-transform" size={20} />
                    Start a Conversation
                    <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 border-t border-gray-800/50">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-[400px] h-[400px] bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-full blur-3xl top-10 left-10"></div>
          <div className="absolute w-[300px] h-[300px] bg-gradient-to-r from-purple-600/5 to-pink-600/5 rounded-full blur-3xl bottom-10 right-10"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            {/* Main Footer Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Mehboob Waqar
              </h3>
              <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
                Associate Software Engineer | Flutter Developer | Mobile App Specialist
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Passionate about creating innovative mobile solutions that make a real difference in people's lives.
              </p>
            </motion.div>

            {/* Contact Info Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8 mb-12"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <Mail className="text-blue-400 mx-auto mb-4" size={32} />
                <h4 className="text-white font-bold mb-2">Email</h4>
                <a
                  href="mailto:themehbboobwaqar@gmail.com"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                >
                  themehbboobwaqar@gmail.com
                </a>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-green-500/50 transition-all duration-300"
              >
                <Phone className="text-green-400 mx-auto mb-4" size={32} />
                <h4 className="text-white font-bold mb-2">Phone</h4>
                <a href="tel:+923042292019" className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                  +92-304-2292019
                </a>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <MapPin className="text-purple-400 mx-auto mb-4" size={32} />
                <h4 className="text-white font-bold mb-2">Location</h4>
                <p className="text-gray-300 text-sm">Lahore, Punjab, Pakistan</p>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h4 className="text-white font-bold mb-6 text-lg">Connect With Me</h4>
              <div className="flex justify-center space-x-6">
                {[
                  {
                    href: "https://github.com/mehboobwaqar",
                    icon: Github,
                    color: "hover:text-gray-300",
                    bg: "hover:bg-gray-800",
                  },
                  {
                    href: "https://www.linkedin.com/in/mehboobwaqar",
                    icon: Linkedin,
                    color: "hover:text-blue-400",
                    bg: "hover:bg-blue-900/30",
                  },
                  {
                    href: "mailto:themehbboobwaqar@gmail.com",
                    icon: Mail,
                    color: "hover:text-purple-400",
                    bg: "hover:bg-purple-900/30",
                  },
                  {
                    href: "https://mehboobwaqar.vercel.app/",
                    icon: Globe,
                    color: "hover:text-green-400",
                    bg: "hover:bg-green-900/30",
                  },
                ].map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <motion.a
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-14 h-14 bg-gray-800/50 backdrop-blur-sm rounded-2xl flex items-center justify-center text-gray-400 ${social.color} ${social.bg} transition-all duration-300 border border-gray-700/50 hover:border-gray-600`}
                      whileHover={{ scale: 1.2, y: -8, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <IconComponent size={24} />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h4 className="text-white font-bold mb-6 text-lg">Quick Navigation</h4>
              <div className="flex flex-wrap justify-center gap-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-xl text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50 hover:border-gray-600 text-sm font-medium"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 + index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
              className="border-t border-gray-800/50 pt-8 mb-8"
            />

            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm"
            >
              <p className="mb-4 md:mb-0">© 2025 Mehboob Waqar. All rights reserved. Made with ❤️ in Pakistan.</p>
              <div className="flex space-x-6">
                <motion.span
                  whileHover={{ scale: 1.1, color: "#60a5fa" }}
                  className="cursor-pointer hover:text-blue-400 transition-colors"
                >
                  Privacy Policy
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.1, color: "#a78bfa" }}
                  className="cursor-pointer hover:text-purple-400 transition-colors"
                >
                  Terms of Service
                </motion.span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
