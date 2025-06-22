"use client";

import React from "react";

const AirtableEmbed = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <iframe
        className="w-full h-[1000px] rounded-xl shadow-lg"
        src="https://airtable.com/embed/app7yfRGMj1W9pHRg/pagZuBtqyniCzOf2s/form"
        frameBorder="0"
      />
    </div>
  );
};

export default AirtableEmbed;
