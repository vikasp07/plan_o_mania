import React, { useEffect } from "react";
import "./About.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "aos/dist/aos.css";

const teamMembers = [
  {
    name: "Ananya Sharma",
    role: "Founder & Creative Director",
    bio: "5+ years planning premium events with an eye for detail and storytelling.",
    img: "/team/ananya.jpg",
  },
  {
    name: "Rohit Mehra",
    role: "Operations Head",
    bio: "Makes sure every event runs like clockwork — logistics, vendors & onsite execution.",
    img: "/team/rohit.jpg",
  },
  {
    name: "Priya Desai",
    role: "Lead Designer",
    bio: "Designs stunning themes and visual experiences that guests remember.",
    img: "/team/priya.jpg",
  },
  {
    name: "Karan Patel",
    role: "Client Relations",
    bio: "Your point-of-contact from first call through follow-up; client happiness is priority.",
    img: "/team/karan.jpg",
  },
];

export default function AboutUs() {
  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import("aos")).default;
      AOS.init({
        duration: 800,
        easing: "ease-out-cubic",
        once: true,
        offset: 80,
      });
    };
    initAOS();
  }, []);

  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="container hero-inner" data-aos="fade-up">
          <div className="hero-text">
            <span className="eyebrow">About Plan-O-Mania</span>
            <h1 className="hero-title">
              We design memorable events that feel{" "}
              <span className="accent">personal</span> and{" "}
              <span className="accent">magical</span>.
            </h1>
            <p className="hero-sub">
              Founded with a passion for storytelling and celebration, we blend
              creativity, logistics and heart to craft experiences that your
              guests will talk about for years.
            </p>

            <div className="hero-quickstats" aria-hidden>
              <div className="stat">
                <div className="num">350+</div>
                <div className="label">Events Delivered</div>
              </div>
              <div className="stat">
                <div className="num">5+</div>
                <div className="label">Years of Experience</div>
              </div>
              <div className="stat">
                <div className="num">98%</div>
                <div className="label">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="hero-media" data-aos="zoom-in" data-aos-delay="120">
            <div className="media-card">
              <img src="/images/about-hero.jpg" alt="Event preview" />
            </div>
          </div>
        </div>
      </section>

      <section className="mission-section section">
        <div className="container" data-aos="fade-up">
          <div className="split-grid">
            <div className="card mission-card">
              <h2>Our Mission</h2>
              <p>
                To design events that connect people, celebrate individuality,
                and create timeless memories — combining premium design,
                seamless operations, and a client-first approach.
              </p>
              <ul className="mission-list">
                <li>Personalized concepts tailored to your story</li>
                <li>Transparent collaboration & budgeting</li>
                <li>Trusted vendor partnerships & flawless execution</li>
              </ul>
            </div>

            <div className="card vision-card">
              <h2>Our Vision</h2>
              <p>
                To be the region’s most trusted creative event partner — known
                for unique experiences, impeccable delivery, and lasting client
                relationships.
              </p>
              <div className="cta-row">
                <a href="/services" className="btn btn-primary">
                  Explore Services
                </a>
                <a href="/contact" className="btn btn-outline">
                  Get a Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section section bg-soft">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Meet the Team</h2>
            <p>
              Creative minds & operational experts who bring your event to life.
            </p>
          </div>

          <div className="team-grid" data-aos="fade-up" data-aos-delay="80">
            {teamMembers.map((m, i) => (
              <article
                className="team-card"
                key={m.name}
                data-aos="flip-left"
                data-aos-delay={120 + i * 80}
              >
                <div className="avatar-wrap">
                  <img
                    src={m.img}
                    alt={m.name}
                    onError={(e) => {
                      e.target.src = "/images/team-placeholder.jpg";
                    }}
                  />
                </div>
                <div className="team-body">
                  <h3>{m.name}</h3>
                  <div className="role">{m.role}</div>
                  <p className="bio">{m.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="timeline-section section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Our Journey</h2>
            <p>Milestones that shaped who we are today.</p>
          </div>

          <ol className="timeline" data-aos="fade-up" data-aos-delay="80">
            <li className="timeline-item">
              <div className="dot" />
              <div className="time">2020</div>
              <div className="content">
                <h4>Founded</h4>
                <p>
                  Plan-O-Mania started as a two-person boutique studio focused
                  on intimate celebrations.
                </p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="dot" />
              <div className="time">2021</div>
              <div className="content">
                <h4>Growth</h4>
                <p>
                  Expanded services to corporate events and grew the vendor
                  network.
                </p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="dot" />
              <div className="time">2023</div>
              <div className="content">
                <h4>Recognition</h4>
                <p>
                  Featured in local press and reached 200+ events delivered
                  milestone.
                </p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="dot" />
              <div className="time">2025</div>
              <div className="content">
                <h4>Top-tier services</h4>
                <p>
                  Launched luxury-tier event experiences and strategic
                  partnerships.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="values-section section bg-soft">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Core Values</h2>
            <p>
              What we stand for — the principles at the heart of every event.
            </p>
          </div>

          <div className="values-grid" data-aos="fade-up" data-aos-delay="60">
            <div className="value-card">
              <h4>Creativity</h4>
              <p>
                Fresh concepts and timeless designs shaped around your story.
              </p>
            </div>
            <div className="value-card">
              <h4>Reliability</h4>
              <p>
                Meticulous planning and on-site problem solving for stress-free
                events.
              </p>
            </div>
            <div className="value-card">
              <h4>Integrity</h4>
              <p>
                Transparent pricing, honest communication and trusted partners.
              </p>
            </div>
            <div className="value-card">
              <h4>Excellence</h4>
              <p>A relentless focus on delivery and client satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-cta section">
        <div className="container" data-aos="fade-up">
          <div className="contact-card">
            <div className="contact-left">
              <h3>Let's plan something beautiful together</h3>
              <p>
                Contact our team for a matching call and we'll create a custom
                proposal.
              </p>
            </div>

            <div className="contact-right">
              <a href="tel:+918355846853" className="contact-pill">
                <FaPhoneAlt /> <span>+91 83558 46853</span>
              </a>
              <a href="mailto:hello@planomania.com" className="contact-pill">
                <FaEnvelope /> <span>hello@planomania.com</span>
              </a>
              <a href="/contact" className="btn btn-primary">
                Request Proposal
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
