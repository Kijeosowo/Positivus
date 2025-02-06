/* eslint-disable no-unused-vars */
import React from 'react';
import './Style.css';
import johnSmithImage from './images/johnSmith.jpg';
import janeDoeImage from './images/jane-doe.jpg';
import michaelBrownImage from './images/michael-brown.jpg';
import emilyJohnsonImage from './images/emily-johnson.png';
import brianWilliamsImage from './images/brian-williams.jpg';
import sarahKimImage from './images/sarah-kim.jpg';

const johnSmith = {
  name: 'John Smith',
  title: 'CEO and Founder',
  experience: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy.',
  linkedIn: true,
  image: johnSmithImage,
  linkedInUrl: 'https://linkedin.com/in/johnsmith',
};

const janeDoe = {
  name: 'Jane Doe',
  title: 'Director of Operations',
  experience: '7+ years of experience in project management and team leadership. Strong organizational and communication skills.',
  linkedIn: true,
  image: janeDoeImage,
  linkedInUrl: 'https://linkedin.com/in/janedoe',
};

const michaelBrown = {
  name: 'Michael Brown',
  title: 'Senior SEO Specialist',
  experience: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization.',
  linkedIn: true,
  image: michaelBrownImage,
  linkedInUrl: 'https://linkedin.com/in/michaelbrown',
};

const emilyJohnson = {
  name: 'Emily Johnson',
  title: 'PPC Manager',
  experience: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis.',
  linkedIn: true,
  image: emilyJohnsonImage,
  linkedInUrl: 'https://linkedin.com/in/emilyjohnson',
};

const brianWilliams = {
  name: 'Brian Williams',
  title: 'Social Media Specialist',
  experience: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement.',
  linkedIn: true,
  image: brianWilliamsImage,
  linkedInUrl: 'https://linkedin.com/in/brianwilliams',
};

const sarahKim = {
  name: 'Sarah Kim',
  title: 'Content Creator',
  experience: '2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries.',
  linkedIn: true,
  image: sarahKimImage,
  linkedInUrl: 'https://linkedin.com/in/sarahkim',
};

const Team = () => (
  <div className="team-section">
    <div className="teams">
      <div className="sub">
        <h2>Team</h2>
      </div>
      <p>Meet the skilled and experienced team behind our <br /> successful digital marketing strategies.</p>
    </div>

    <div className="team-grid">
      <div className="phase-1">
        <div className="team-member-1">
          <div className="content">
            <img src={johnSmith.image} alt={johnSmith.name} className="profile-pic" />
            <div className="title-1">
              <div className="cont">John Smith <br />
              CEO and Founder
              </div>
            </div>
            <div className="icon-1">
              {johnSmith.linkedIn && (
                <a href={johnSmith.linkedInUrl} className="linkedin-icon" target="_blank" rel="noopener noreferrer">in</a>
              )}
            </div>
          </div>
          <hr />
          <div className="member-info-1">
            <p>10+ years of experience in digital <br />
             marketing. Expertise in SEO, PPC, <br />
              and content strategy.
            </p>
          </div>
        </div>

        <div className="team-member-2">
          <div className="content">
            <img src={janeDoe.image} alt={janeDoe.name} className="profile-pic" />
            <div className="title-2">
              <div className="cont">
                Jane Doe <br />
                Director of Operations
              </div>
            </div>
            <div className="icon-2">
              {janeDoe.linkedIn && (
              <a href={janeDoe.linkedInUrl} className="linkedin-icon" target="_blank" rel="noopener noreferrer">in</a>
              )}
            </div>
          </div>
          <hr />
          <div className="member-info-2">
            <p> 7+ years of experience in project <br />
             management and team leadership. <br />
              Strong organizational and <br />
              communication skills.

            </p>
          </div>
        </div>

        <div className="team-member-3">
          <div className="content">
            <img src={michaelBrown.image} alt={michaelBrown.name} className="profile-pic" />
            <div className="title-3">
            <div className="cont">
            Michael Brown <br />
            Senior SEO Specialist
            </div>
            </div>
            <div className="icon-3">
              {michaelBrown.linkedIn && (
                <a href={michaelBrown.linkedInUrl} className="linkedin-icon" target="_blank" rel="noopener noreferrer">in</a>
              )}
            </div>
          </div>
          <hr />
          <div className="member-info-3">
            <p>5+ years of experience in SEO and <br />
             content creation. Proficient in <br />
              keyword research and on-page <br />
              optimization.
            </p>
          </div>
        </div>

      </div>
    </div>


    <div className="phase-2">
      <div className="team-member-4">
        <div className="content">
          <img src={emilyJohnson.image} alt={emilyJohnson.name} className="profile-pic" />
          <div className="title-4">
            <div className="cont">
              Emily Johnson <br />
              PPC Manager
            </div>
          </div>
          <div className="icon-4">
            {emilyJohnson.linkedIn && (
              <a href={emilyJohnson.linkedInUrl} className="linkedin-icon" target="_blank" rel="noopener noreferrer">in</a>
            )}
          </div>
        </div>
        <hr />
        <div className="member-info-4">
          <p>3+ years of experience in paid <br />
           search advertising. Skilled in <br />
            campaign management and <br />
            performance analysis.
          </p>
        </div>
      </div>

      <div className="team-member-5">
        <div className="content">
          <img src={brianWilliams.image} alt={brianWilliams.name} className="profile-pic" />
          <div className="title-5">
            <div className="cont">
              Brian Williams <br />
              Social Media Specialist
            </div>
          </div>
          <div className="icon-5">
            {brianWilliams.linkedIn && (
              <a href={brianWilliams.linkedInUrl} className="linkedin-icon" target="_blank" rel="noopener noreferrer">in</a>
            )}
          </div>
        </div>
        <hr />
        <div className="member-info-5">
          <p>4+ years of experience in social <br />
           media marketing. Proficient in <br />
            creating and scheduling content,<br />
            analyzing metrics, and building <br />
            engagement.
          </p>
        </div>
      </div>

      <div className="team-member-6">
        <div className="content">
          <img src={sarahKim.image} alt={sarahKim.name} className="profile-pic" />
          <div className="title-6">
            <div className="cont">
              Sarah Kim <br />
            Content Creator
            </div>
          </div>
          <div className="icon-6">
            {sarahKim.linkedIn && (
              <a href={sarahKim.linkedInUrl} className="linkedin-icon" target="_blank" rel="noopener noreferrer">in</a>
            )}
          </div>
        </div>
        <hr />
        <div className="member-info-6">
          <p>2+ years of experience in writing <br />
           and editing. <br />
            Skilled in creating compelling, SEO- <br />
            optimized content for various <br />
            industries.
          </p>
        </div>
      </div>
    </div>
    <div className="ton">
      <button className="see-all-button">See all team</button>
    </div>
  </div>
);

export default Team;
