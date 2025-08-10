"use client";

  const clients = [
     {
    image: '/image/home/client/1.png',
    name: 'Bajeko Sekuwa',
    text: 'Aloft Kathmandu Thamel offers a unique blend of modern hospitality and authentic Nepali culture with a focus on art, music, and technology. Enjoy our vibrant social spaces, and warm hospitality with us during your stay in Kathmandu.',
    link: 'https://www.bajekosekuwa.com/',
  },
  {
    image: '/image/home/client/2.png',
    name: 'British Embassy Kathmandu',
    text: 'Aloft Kathmandu Thamel offers a unique blend of modern hospitality and authentic Nepali culture with a focus on art, music, and technology. Enjoy our vibrant social spaces, and warm hospitality with us during your stay in Kathmandu.',
    link: 'https://www.gov.uk/world/organisations/british-embassy-kathmandu',
  },
  {
    image: '/image/home/client/3.png',
    name: 'Aloft',
    text: 'Aloft Kathmandu Thamel offers a unique blend of modern hospitality and authentic Nepali culture with a focus on art, music, and technology. Enjoy our vibrant social spaces, and warm hospitality with us during your stay in Kathmandu.',
    link: 'https://www.marriott.com/en-us/hotels/ktmal-aloft-kathmandu-thamel/overview/?nst=paid&cid=PAI_GLB0004YFY_GLE000BHOR_GLF000OCGE&nst=paid&gclsrc=aw.ds&gad_source=1&gad_campaignid=22178666619&gbraid=0AAAAADilnidqVZJVxY377ZINfb9DlsduA&gclid=CjwKCAjw49vEBhAVEiwADnMbbB2ExULZAhvCxIRIOMKWNlEMTC0Sg2F8FSSBwc4FAzV_04N6yDk9qxoCpUIQAvD_BwE',
  },
  ];
export default function App() { 
    return(
        <div className="flex flex-col items-center justify-center h-full px-4 py-8 text-center">
    {/* Breadcrumb navigation */}
    <div className="mb-4 text-sm w-full">
      <span className="text-light">
        Home &gt;
        <span className="text-primary">Our Parteners</span>
      </span>
    </div>

    {/* Section title */}
    <h1 className="mb-4 text-5xl font-bold text-primary md:text-6xl">
      Our Parteners
    </h1>
    <p className="max-w-3xl mx-auto mt-4 text-dark px-4">At Garden Sewa, we partner with like-minded individuals and organizations to make green living simple and accessible. Together, we bring plants, people, and peace closer than ever.</p>
  </div>
    );
};