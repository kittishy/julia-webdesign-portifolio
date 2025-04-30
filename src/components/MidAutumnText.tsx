import React from 'react';

const MidAutumnText: React.FC = () => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-8xl font-script text-cream text-center">
                Happy Mid Autumn Festival
            </h1>
            <p className="text-cream text-base mt-4 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
            </p>
            <button className="mt-8 bg-accent-red text-cream px-6 py-3 rounded-md self-center">
                Read More
            </button>
        </div>
    );
};

export default MidAutumnText;