import React from 'react';

const LogoCarousel: React.FC = () => {
  const platforms = [
    {
      name: 'OpenAI',
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg"
          alt="OpenAI"
          width="32"
          height="32"
          loading="lazy"
          className="h-8 w-auto object-contain filter invert opacity-90"
        />
      ),
    },
    {
      name: 'Anthropic',
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg"
          alt="Anthropic"
          width="32"
          height="32"
          loading="lazy"
          className="h-8 w-auto object-contain filter invert opacity-90"
        />
      ),
    },
    {
      name: 'Google Gemini',
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg"
          alt="Google Gemini"
          width="32"
          height="32"
          loading="lazy"
          className="h-8 w-auto object-contain opacity-90"
        />
      ),
    },
    {
      name: 'Google Cloud',
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg"
          alt="Google Cloud"
          width="32"
          height="32"
          loading="lazy"
          className="h-8 w-auto object-contain opacity-90"
        />
      ),
    },
    {
      name: 'AWS',
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
          alt="AWS"
          width="32"
          height="32"
          loading="lazy"
          className="h-8 w-auto object-contain filter invert opacity-90"
        />
      ),
    },
    {
      name: 'Microsoft Azure',
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg"
          alt="Microsoft Azure"
          width="32"
          height="32"
          loading="lazy"
          className="h-8 w-auto object-contain opacity-90"
        />
      ),
    },
    {
      name: 'Make',
      icon: (
        <img
          src="https://unpkg.com/@lobehub/icons-static-svg@latest/icons/make.svg"
          alt="Make"
          width="32"
          height="32"
          loading="lazy"
          className="h-8 w-auto object-contain filter invert opacity-90"
        />
      ),
    },
    {
      name: 'Zapier',
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Zapier_logo.svg"
          alt="Zapier"
          width="32"
          height="32"
          loading="lazy"
          className="h-8 w-auto object-contain opacity-90"
        />
      ),
    },
    {
      name: 'n8n',
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/N8n-logo-new.svg"
          alt="n8n"
          width="24"
          height="24"
          loading="lazy"
          className="h-6 w-auto object-contain filter invert opacity-90"
        />
      ),
    },
    {
      name: 'Notion',
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg"
          alt="Notion"
          width="32"
          height="32"
          loading="lazy"
          className="h-8 w-auto object-contain filter invert opacity-90"
        />
      ),
    },
    {
      name: 'Webflow',
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Webflow_logo_2023.svg"
          alt="Webflow"
          width="20"
          height="20"
          loading="lazy"
          className="h-5 w-auto object-contain filter invert opacity-90"
        />
      ),
    },
    {
      name: 'Gmail',
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
          alt="Gmail"
          width="32"
          height="32"
          loading="lazy"
          className="h-8 w-auto object-contain opacity-90"
        />
      ),
    },
    {
      name: 'Outlook',
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/45/Microsoft_Office_Outlook_%282018%E2%80%932024%29.svg"
          alt="Microsoft Outlook"
          width="32"
          height="32"
          loading="lazy"
          className="h-8 w-auto object-contain opacity-90"
        />
      ),
    },
    {
      name: 'GitHub',
      icon: (
        <img
          src="/logos/github-logo-white.png"
          alt="GitHub"
          width="32"
          height="32"
          loading="lazy"
          className="h-8 w-auto object-contain opacity-90"
        />
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-hidden mask-linear-fade">
      <div className="flex animate-infinite-scroll space-x-12 items-center w-max hover:pause">
        {[...platforms, ...platforms].map((platform, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300 w-24 group select-none"
          >
            <div className="flex items-center justify-center" title={platform.name}>
              {platform.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Gradient Fades */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>
    </div>
  );
};

export default LogoCarousel;
