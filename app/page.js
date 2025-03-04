"use client"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import TestimonialsSection from "../app/components/TestimonialsSection"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { IoCalendarOutline } from "react-icons/io5"
import ServicesCarousel from "../app/components/ServicesCarousel"
import CardSlider from "../app/components/CardSlider"
import Navbar from "../app/components/Navbar"
import Footer from "../app/components/Footer"
import ContactForm from "../app/components/ContactForm"
import { useEffect, useState, useRef } from "react"

// Counter animation component
const AnimatedCounter = ({ target, duration = 2000, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0)
  const counterRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const currentRef = counterRef.current // Store ref value in a variable

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        // Use the stored variable in cleanup
        observer.unobserve(currentRef)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTimestamp = null
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      const currentCount = Math.floor(progress * target)

      setCount(currentCount)

      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }

    window.requestAnimationFrame(step)
  }, [target, duration, isVisible])

  return (
    <div ref={counterRef} className="inline-block">
      <span className="text-5xl font-bold mb-2">
        {prefix}
        {count}
        {suffix}
      </span>
    </div>
  )
}

// Updated Event component with fixed register button position
const Event = ({ date, time, title, description, registerLink }) => {
  return (
    <div className="text-center p-6 border rounded-lg bg-white flex flex-col h-full">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
        <IoCalendarOutline className="inline pr-1 text-stone-400 size-6" />
        {date} at {time}
      </div>
      <h3 className="text-xl font-bold text-black-600 mt-2">{title}</h3>
      <div className="text-gray-600 p-5 flex-grow">{description}</div>
      <div className="mt-auto">
        <Link href={registerLink} className="block w-full bg-purple-600 text-white py-2 px-5 rounded-full">
          Register
        </Link>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="container max-w-full mx-auto">
        <Head>
          <title>Study Abroad</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* navbar */}
        <Navbar />

        {/* Home Section */}
        <main className="pt-12">
          <section className="relative h-[500px] lg:h-[600px] bg-purple-50">
            <div className="absolute inset-0 opacity-75 overflow-hidden">
              <Image
                src="/study-abroad.png"
                alt="Students in graduation gowns"
                layout="fill"
                objectFit="cover"
                priority
                className="object-center"
              />
            </div>
            <div className="container max-w-9xl mx-auto px-6 lg:px-12">
              <div className="relative flex items-center justify-start h-full text-left px-4 sm:px-6 lg:px-12">
                <div className="w-full md:w-3/5 lg:w-1/2 backdrop-blur-sm bg-black/40 p-5 sm:p-6 md:p-8 rounded-lg shadow-lg border border-white/10 mt-10">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    HIGHER EDUCATION ABROAD
                  </h1>
                  <div className="mt-4 md:mt-5">
                    <p className="text-sm sm:text-base md:text-lg text-white/90">
                      Studying abroad opens the door to new possibilities for personal and professional growth. It
                      allows you to gain a unique educational experience in some of the world&apos;s leading
                      universities while exploring diverse cultures.
                    </p>
                  </div>
                  <Link
                    href="https://example.com/event1"
                    className="inline-flex items-center mt-6 md:mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium"
                  >
                    Register Now <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* About Section */}
        <section id="about" className="pt-20 px-3 container max-w-9xl mx-auto px-6 lg:px-12">
          <h2 className="text-xl font-bold">About us</h2>
        </section>
        <section className="relative h-96 sm:h-72 md:h-96 rounded-[10px] bg-purple-50">
          <div className="relative flex flex-col items-center justify-center h-full text-left px-4">
            <div className="container max-w-9xl mx-auto px-6 lg:px-12">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-purple-400 leading-tight">
                Hello we are HEA
              </h2>
              <h2 className="text-xl sm:text-2xl md:text-3xl mt-1 font-bold text-purple-400 leading-tight">
                Higher Education Abroad
              </h2>
              <p className="mt-5 text-base sm:text-base md:text-lg font-bold">
                &quot;Embark on a journey of learning beyond borders! Studying abroad opens doors to new cultures,
                knowledge, and opportunities. Whether it&apos;s gaining international experience or broadening your
                global perspective, this experience will shape your future.&quot;
              </p>
            </div>
          </div>
        </section>

        {/* experience */}
        <section className="p-6 bg-white rounded-lg shadow-sm my-12">
          <div className="container max-w-9xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-100 p-8 rounded-lg flex flex-col items-center justify-center">
                <AnimatedCounter target={16} suffix={"+"} />
                <p className="text-gray-700">Years of Experience</p>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg flex flex-col items-center justify-center">
                <AnimatedCounter target={1200} suffix={"+"} />
                <p className="text-gray-700">University Partners</p>
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg flex flex-col items-center justify-center">
              <AnimatedCounter target={10000} suffix={"+"} />
              <p className="text-gray-700">Students Enrolled Successfully Across Globe</p>
            </div>
          </div>
        </section>

        {/* How we work */}
        <section className="bg-purple-50 py-6 px-3">
          <div className="container max-w-9xl mx-auto px-6 lg:px-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 md:mb-10 text-center">How we work</h2>
            <div className="bg-white rounded-lg shadow-sm mb-4 p-3 flex flex-col md:flex-row justify-between items-center">
              <div className="text-xl md:text-3xl text-gray-500 font-bold mb-2 md:mb-0">Step 1</div>
              <div className="text-3xl md:text-5xl text-gray-800 font-medium">CONSULT</div>
              <div className="mt-3 md:mt-0">
                <Image
                  src="/Student-Counseling.jpg"
                  alt="Consultation meeting"
                  width={300}
                  height={200}
                  className="rounded-lg w-full md:w-64 h-auto"
                />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm mb-4 p-3 flex flex-col md:flex-row justify-between items-center">
              <div className="text-xl md:text-3xl text-gray-500 font-bold mb-2 md:mb-0">Step 2</div>
              <div className="text-3xl md:text-5xl text-gray-800 font-medium">APPLY</div>
              <div className="mt-3 md:mt-0">
                <Image
                  src="/apply.png"
                  alt="Application process"
                  width={300}
                  height={200}
                  className="rounded-lg w-full md:w-64 h-auto"
                />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-3 flex flex-col md:flex-row justify-between items-center">
              <div className="text-xl md:text-3xl text-gray-500 font-bold mb-2 md:mb-0">Step 3</div>
              <div className="text-3xl md:text-5xl text-gray-800 font-medium">FLY</div>
              <div className="mt-3 md:mt-0">
                <Image
                  src="/fly.png"
                  alt="final process"
                  width={300}
                  height={200}
                  className="rounded-lg w-full md:w-64 h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <ServicesCarousel />

        {/* Events */}
        <section id="events" className="pt-20 px-3 container max-w-9xl mx-auto px-6 lg:px-12">
          <h2 className="text-xl font-bold">Events</h2>
        </section>
        <section className="p-4 bg-stone-50 mt-2 rounded-[10px]">
          <div className="container max-w-9xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Event
                date="March 25, 2025"
                time="10:00 AM"
                title="In-House Canadian Edu Expo"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                registerLink="https://example.com/event1"
              />
              <Event
                date="April 15, 2025"
                time="2:00 PM"
                title="Canadian Edu Expo"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                registerLink="https://example.com/event1"
              />
              <Event
                date="May 5, 2025"
                time="11:00 AM"
                title="TRU Exclusive Application Day"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                registerLink="https://example.com/event1"
              />
              <Event
                date="June 10, 2025"
                time="4:00 PM"
                title="Pre-departure briefing"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                registerLink="https://example.com/event4"
              />
            </div>
          </div>
        </section>

        <TestimonialsSection />

        <h3 className="text-2xl font-bold mb-8 text-center mt-5 pt-2">Discover our top rated universities</h3>
        <CardSlider />

        {/* FAQ section */}
        <section id="events" className="pt-10 px-3 container max-w-9xl mx-auto px-6 lg:px-12">
          <h2 className="text-xl font-bold">Frequently Asked Questions</h2>
        </section>
        <section className="py-5 bg-gradient-to-r from-pink-200 to-blue-200">
          <div className="pl-6 pr-6">
            <div className="container max-w-9xl mx-auto px-6 lg:px-12">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Do UK universities and courses have quality assurance?</AccordionTrigger>
                  <AccordionContent>
                    Yes, the universities in the UK are expected to meet the standards set by the quality assurance
                    system in the UK. Their universities are globally recognised for the strong academic and research
                    departments that offer a diverse range of courses and for the friendly, multicultural communities in
                    the campuses that offer a space where everyone can belong.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How do I find and apply for a course to study at a UK university?</AccordionTrigger>
                  <AccordionContent>
                    You can search for courses through the UCAS website or individual university websites. The
                    application process typically involves submitting your academic qualifications, English language
                    proficiency test scores, a personal statement, and letters of recommendation through UCAS or
                    directly to the university.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    Where can I find scholarships and financial support for studying in the UK?
                  </AccordionTrigger>
                  <AccordionContent>
                    There are various scholarship opportunities available including university-specific scholarships,
                    government scholarships like Chevening, and external funding organizations. You can check university
                    websites, scholarship databases, and consult with our education advisors for personalized guidance.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>What are the visa requirements for studying in the UK?</AccordionTrigger>
                  <AccordionContent>
                    To study in the UK, you&apos;ll need a Student visa formerly Tier 4. Requirements include an offer
                    from a licensed education provider, proof of English language proficiency, and evidence of
                    sufficient funds to support yourself. Our visa preparation service can guide you through the entire
                    process.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
        <ContactForm />

        <Footer />
      </div>
    </div>
  )
}

