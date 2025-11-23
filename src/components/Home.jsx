import React from 'react';
import '../styles/Home.css';

const Home = () => {
	return (
		<>
			<div className="home-container">
		
			<section className="hero">
				<div className="hero-background"></div>
				<div className="hero-content">
					<div className="hero-badge">✨ Welcome to Your Success Journey</div>
					<h1>Build Your Future Together</h1>
					<h2>GROW, LEARN, AND EXCEL WITH OUR TEAM</h2>
					<p>Your Career Journey Starts Here - Where Talent Meets Opportunity</p>
					<div className="hero-buttons">
						<button className="cta-btn primary">Start Your Journey</button>
						<button className="cta-btn secondary">Learn More</button>
					</div>
					<div className="hero-stats">
						<div className="stat-item">
							<span className="stat-number">500+</span>
							<span className="stat-label">Team Members</span>
						</div>
						<div className="stat-item">
							<span className="stat-number">95%</span>
							<span className="stat-label">Placement Success</span>
						</div>
						<div className="stat-item">
							<span className="stat-number">10+</span>
							<span className="stat-label">Years Growth</span>
						</div>
					</div>
				</div>
			</section>

			<section className="services">
				<h2>Why Join Our Team</h2>
				<div className="services-grid">
					<div className="service-card">
						<div className="card-icon">👥</div>
						<h3>Strong Teamwork Culture</h3>
						<p>Collaborate with talented professionals who are passionate about innovation and excellence. Together, we achieve extraordinary results.</p>
					</div>
					<div className="service-card">
						<div className="card-icon">📈</div>
						<h3>Career Growth Opportunities</h3>
						<p>Unlock unlimited potential with continuous learning programs, mentorship, and clear advancement paths for your career.</p>
					</div>
					<div className="service-card">
						<div className="card-icon">🎯</div>
						<h3>Placement & Staffing Support</h3>
						<p>Get matched with the right opportunities that align with your skills and aspirations. We ensure your success at every step.</p>
					</div>
					<div className="service-card">
						<div className="card-icon">⭐</div>
						<h3>Inclusive & Supportive Environment</h3>
						<p>Work in an environment where diversity is celebrated, and every team member's contribution is valued and recognized.</p>
					</div>
					<div className="service-card">
						<div className="card-icon">💰</div>
						<h3>Competitive Compensation & Benefits</h3>
						<p>Receive industry-leading salaries, comprehensive health benefits, flexible work arrangements, and performance-based bonuses.</p>
					</div>
					<div className="service-card">
						<div className="card-icon">🌍</div>
						<h3>Global Opportunities & Exposure</h3>
						<p>Work on diverse projects with international exposure, collaborate across borders, and expand your professional network globally.</p>
					</div>
				</div>
			</section>

	
			<section className="technologies">
				<h2>Our Core Values</h2>
				<div className="tech-list">
					<span>Teamwork</span>
					<span>Innovation</span>
					<span>Growth</span>
					<span>Integrity</span>
					<span>Excellence</span>
				</div>
			</section>

			<section className="testimonial">
				<div className="testimonial-content">
					<p className="testimonial-text">
						"This platform transformed how I view my career. The support, mentorship, and opportunities for growth are unmatched. I'm proud to be part of a team that truly invests in their people."
					</p>
					<p className="testimonial-author">— Success Story: Employee Growth</p>
				</div>
			</section>

		
			<section className="cta-section">
				<h2>Ready to Transform Your Career?</h2>
				<p>Join a community of talented professionals committed to growth, innovation, and success. Let us help you reach your full potential.</p>
				<button className="cta-btn">Explore Your Opportunities</button>
			</section>

			{/* New Motivational Section */}
			<section className="motivation-section">
				<h2>Your Success Story Starts Now</h2>
				<div className="motivation-grid">
					<div className="motivation-card">
						<h3>🌱 Continuous Learning</h3>
						<p>Access training programs, certifications, and workshops designed to enhance your skills and keep you ahead in the industry.</p>
					</div>
					<div className="motivation-card">
						<h3>🤝 Mentorship Programs</h3>
						<p>Learn from experienced professionals who are invested in your growth and success. Personalized guidance for your career path.</p>
					</div>
					<div className="motivation-card">
						<h3>🚀 Career Advancement</h3>
						<p>Clear promotion paths, performance recognition, and opportunities to take on leadership roles that match your ambitions.</p>
					</div>
				</div>
			</section>

			{/* Placement & Staffing Guide */}
			<section className="placement-guide">
				<h2>Placement & Career Guidance</h2>
				<div className="placement-content">
					<div className="placement-item">
						<h3>Step 1: Profile Assessment</h3>
						<p>Complete your professional profile with skills, certifications, and career goals. Our system analyzes your strengths and matches them with opportunities.</p>
					</div>
					<div className="placement-item">
						<h3>Step 2: Skill Development</h3>
						<p>Identify skill gaps and access curated learning resources. Upskill in areas that matter for your dream role.</p>
					</div>
					<div className="placement-item">
						<h3>Step 3: Opportunity Matching</h3>
						<p>Get matched with positions that align with your profile, expectations, and career aspirations. Increase your chances of success.</p>
					</div>
					<div className="placement-item">
						<h3>Step 4: Interview & Success</h3>
						<p>Prepare with interview coaching, resume reviews, and confidence building. We celebrate your success every step of the way.</p>
					</div>
				</div>
			</section>

			
			</div>
		</>
	);
};

export default Home;
