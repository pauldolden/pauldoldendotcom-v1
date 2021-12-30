import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { flexCenter } from '../styles/globals';
import { FiTwitter, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { GradientIcon } from './GradientIcon';

const BASE_DELAY = 0.2;

const social = [
  {
    name: 'twitter',
    icon: <FiTwitter size={30} />,
    link: 'https://twitter.com/pauldolden',
    delay: BASE_DELAY + 1.5,
  },
  {
    name: 'github',
    icon: <FiGithub size={30} />,
    link: 'https://github.com/pauldolden',
    delay: BASE_DELAY + 1,
  },
  {
    name: 'linkedin',
    icon: <FiLinkedin size={30} />,
    link: 'https://linkedin.com/in/pauldolden',
    delay: BASE_DELAY + 0.5,
  },
  // {
  //   name: "email",
  //   icon: <FiMail size={35} />,
  //   link: "mailto:paul@dolden.dev",
  //   delay: BASE_DELAY,
  // },
];

const PageStyles = styled.section`
  header {
    ${flexCenter};
    justify-content: space-between;
    padding: 3rem 15%;
    color: var(--pink-base);

    @media (max-width: 1200px) {
      padding: 3rem 5%;
    }

    @media (max-width: 900px) {
      flex-direction: column;
    }

    h1 {
      font-family: 'Fathur';
      font-weight: 700;
      font-size: 4rem;

      @media (max-width: 900px) {
        padding-bottom: 2rem;
      }

      @media (max-width: 479px) {
        font-size: 3.6rem;
      }
    }
    nav {
      ${flexCenter};

      a {
        padding-right: 1rem;
        @media (max-width: 900px) {
          font-size: 2.4rem;
        }

        @media (max-width: 650px) {
          font-size: 2.2rem;
        }

        @media (max-width: 479px) {
          font-size: 2rem;
        }

        @media (max-width: 400px) {
          font-size: 1.6rem;
        }
      }
      a:hover {
        color: var(--cyan-base);
        font-weight: 700;

        span {
          color: var(--pink-base);
        }
      }
    }
  }
`;

const Header = () => {
  return (
    <PageStyles>
      <header>
        <h1>
          dolden<span className="yellow">.</span>
          <span className="cyan">dev</span>
        </h1>
        <nav>
          <Link to="/">home</Link>
          <Link to="/about">about</Link>
          <Link to="/work">work</Link>
          <Link to="/writing">writing</Link>
        </nav>
        <div>
          {social.map((item) => (
            <a href={item.link} key={item.link} target="_blank">
              <motion.div
                animate={{ x: [-200, 0], opacity: [0, 1] }}
                transition={{
                  delay: item.delay,
                  default: { duration: 0.2 },
                }}
              >
                <GradientIcon
                  name={item.name}
                  icon={item.icon}
                  from="#D70277"
                  to="#55FFFF"
                />
              </motion.div>
            </a>
          ))}
        </div>
      </header>
    </PageStyles>
  );
};

export default Header;
