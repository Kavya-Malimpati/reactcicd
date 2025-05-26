import React from 'react';

type SpotlightProps = {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
  imageAlt?: string;
  tag?: string;
};

const Spotlight: React.FC<SpotlightProps> = ({
  title,
  description,
  buttonText,
  imageUrl,
  imageAlt = '',
  tag = '',
}) => {
  return (
    <section className="font-['Helvetica_Neue',_Arial,_sans-serif] py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row rounded-md shadow-md overflow-hidden">
        {/* Text Block */}
        <div className="flex-1 flex flex-col justify-center px-5 md:px-10 lg:px-[52px] py-10 lg:py-[60px]">
          <div className="space-y-6 max-w-[600px]">
            {tag && (
              <span className="text-xs font-semibold tracking-[0.5px] text-[#333]">
                {tag}
              </span>
            )}

            <h1 className="text-[#767676] text-2xl md:text-[36px] font-light leading-snug">
              {title}
            </h1>

            <p className="text-[#333] text-sm md:text-base leading-relaxed">
              {description}
            </p>

            <button className="bg-[#008577] hover:bg-[#006d61] text-white text-sm font-semibold tracking-wider py-4 px-6 rounded transition-colors w-fit">
              {buttonText}
            </button>
          </div>
        </div>

        {/* Image Block */}
        <div className="flex-1 h-[300px] lg:h-auto">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Spotlight;