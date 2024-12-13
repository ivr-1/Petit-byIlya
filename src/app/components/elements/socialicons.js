'use client'

import React, { useState } from 'react';
import { SlSocialFacebook, SlSocialInstagram, SlSocialTwitter } from "react-icons/sl";

const SocialIcon = ({ href, Icon, label, iconSize, onMouseEnter, onMouseLeave, isHovered }) => (
  <a
    target="_blank"
    href={href}
    rel="noopener noreferrer"
    style={{ display: 'inline-block' }}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <Icon
      aria-label={label}
      size={iconSize}
      style={{
        transition: 'filter 0.3s ease',
        filter: isHovered ? 'brightness(1.5)' : 'brightness(1)',
      }}
    />
  </a>
);

function Social({ iconGap, iconSize }) {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const socialIcons = [
    { href: "https://twitter.com", Icon: SlSocialTwitter, label: "Twitter", name: "twitter" },
    { href: "https://facebook.com", Icon: SlSocialFacebook, label: "Facebook", name: "facebook" },
    { href: "https://instagram.com", Icon: SlSocialInstagram, label: "Instagram", name: "instagram" },
  ];

  return (
    <div
      aria-label="Social media links"
      style={{ display: "flex", gap: iconGap, justifyContent: "center" }}
    >
      {socialIcons.map(({ href, Icon, label, name }) => (
        <SocialIcon
          key={name}
          href={href}
          Icon={Icon}
          label={label}
          iconSize={iconSize}
          onMouseEnter={() => setHoveredIcon(name)}
          onMouseLeave={() => setHoveredIcon(null)}
          isHovered={hoveredIcon === name}
        />
      ))}
    </div>
  );
}

export default Social;