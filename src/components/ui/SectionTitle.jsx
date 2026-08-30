import React from 'react';

const SectionTitle = ({ subtitle, title, description, align = 'center' }) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {subtitle && (
        <span className="text-sm font-semibold tracking-wider text-emerald-600 uppercase">
          {subtitle}
        </span>
      )}
      {title && (
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h2>
      )}
      {description && (
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;