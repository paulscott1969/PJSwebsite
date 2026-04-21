import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, X, ZoomIn } from 'lucide-react';
import SEO from '@/components/SEO';

const galleryCategories = [
  {
    id: 'boilers',
    title: 'Boiler & Heating Work',
    description: 'Expert boiler installations, replacements, and central heating system upgrades.',
    images: [
      { src: '/images/gallery/boiler-flue-installation-roof-external-view.webp', alt: 'Boiler flue installation on roof by PJS Plumbing Liverpool' },
      { src: '/images/gallery/boiler-installation-and-pipework-system.webp', alt: 'Boiler installation and pipework system by PJS Plumbing' },
      { src: '/images/gallery/boiler-installation-loft-central-heating-system.webp', alt: 'Loft boiler installation central heating by PJS Plumbing Liverpool' },
      { src: '/images/gallery/boiler-installation-utility-room-heating-system.webp', alt: 'Utility room boiler installation by PJS Plumbing Knowsley' },
      { src: '/images/gallery/boiler-internal-repair-gas-heating-system-service.webp', alt: 'Gas boiler internal repair and service by PJS Plumbing Liverpool' },
      { src: '/images/gallery/boiler-system-pump-installation-central-heating-setup.webp', alt: 'Central heating pump installation by PJS Plumbing Liverpool' },
      { src: '/images/gallery/radiator-installation-central-heating-home-service.webp', alt: 'Radiator installation central heating Liverpool by PJS Plumbing' },
    ]
  },
  {
    id: 'bathrooms',
    title: 'Bathroom Installations',
    description: 'Full bathroom renovations covering everything from under-floor pipework to premium finishing details.',
    images: [
      { src: '/images/gallery/bathroom-renovation-bathtub-sink-installation-work.webp', alt: 'Full bathroom renovation bathtub and sink installation Liverpool' },
      { src: '/images/gallery/bathroom-renovation-near-completion.webp', alt: 'Bathroom renovation near completion by PJS Plumbing Liverpool' },
      { src: '/images/gallery/bathroom-toilet-installation-modern-renovation-flooring.webp', alt: 'Modern bathroom toilet installation and renovation Liverpool' },
      { src: '/images/gallery/black-framed-bath-screen-installation-modern-bathroom.webp', alt: 'Black framed bath screen installation modern bathroom Liverpool' },
      { src: '/images/gallery/black-stone-vessel-sink-installation-modern-bathroom-uk.webp', alt: 'Black stone vessel sink installation modern bathroom UK' },
      { src: '/images/gallery/glass-shower-enclosure-installation-modern-bathroom.webp', alt: 'Glass shower enclosure installation modern bathroom Liverpool' },
      { src: '/images/gallery/walk-in-shower-tray-installation-glass-screen-bathroom-renovation-uk.webp', alt: 'Walk-in shower tray and glass screen installation Liverpool' },
      { src: '/images/gallery/modern-bathroom-vanity-radiator-installation-design.webp', alt: 'Modern bathroom vanity and radiator installation Liverpool' },
      { src: '/images/gallery/concealed-toilet-cistern-installation-hidden-plumbing-uk.webp', alt: 'Concealed toilet cistern installation Liverpool by PJS Plumbing' },
      { src: '/images/gallery/wall-hung-toilet-installation-concealed-cistern-plumbing.webp', alt: 'Wall hung toilet concealed cistern installation Liverpool' },
      { src: '/images/gallery/toilet-and-sink-installation-bathroom-renovation.webp', alt: 'Toilet and sink installation bathroom renovation Liverpool' },
      { src: '/images/gallery/toilet-and-sink-installation-bathroom-renovation(1).webp', alt: 'Bathroom renovation toilet and sink installation Knowsley' },
      { src: '/images/gallery/toilet-installation-bathroom-renovation-floor-prep.webp', alt: 'Toilet installation bathroom renovation Liverpool' },
      { src: '/images/gallery/toilet-installation-bathroom-renovation-plumbing-work.webp', alt: 'Toilet installation plumbing work Liverpool by PJS Plumbing' },
      { src: '/images/gallery/toilet-installation-bathroom-renovation-work-in-progress.webp', alt: 'Bathroom renovation work in progress Liverpool' },
    ]
  },
  {
    id: 'pipework',
    title: 'Pipework & Repairs',
    description: 'Tracing hidden leaks, replacing water-damaged pipes, and carrying out reliable drainage repairs.',
    images: [
      { src: '/images/gallery/bathroom-drain-pipe-repair-water-damage-floor.webp', alt: 'Bathroom drain pipe repair water damage Liverpool' },
      { src: '/images/gallery/bathroom-plumbing-pipe-installation-floor-renovation.webp', alt: 'Bathroom plumbing pipe installation floor renovation Liverpool' },
      { src: '/images/gallery/bathroom-sink-drain-installation-plumbing-tools.webp', alt: 'Bathroom sink drain installation Liverpool by PJS Plumbing' },
      { src: '/images/gallery/hidden-pipe-leak-wall-damage-repair-plumbing.webp', alt: 'Hidden pipe leak wall damage repair Liverpool' },
      { src: '/images/gallery/hidden-water-pipe-leak-repair-wall-damage.webp', alt: 'Hidden water pipe leak repair wall damage Liverpool' },
      { src: '/images/gallery/shower-drain-repair-parts-installation-bathroom.webp', alt: 'Shower drain repair and installation Liverpool' },
      { src: '/images/gallery/shower-mixer-valve-installation-closeup.webp', alt: 'Shower mixer valve installation Liverpool by PJS Plumbing' },
      { src: '/images/gallery/sink-drain-pipe-installation-under-cabinet.webp', alt: 'Sink drain pipe installation under cabinet Liverpool' },
      { src: '/images/gallery/soil-pipe-measurement-bathroom-plumbing-installation-uk.webp', alt: 'Soil pipe measurement bathroom plumbing installation UK' },
      { src: '/images/gallery/toilet-cistern-repair-float-valve-fix.webp', alt: 'Toilet cistern repair float valve fix Liverpool' },
      { src: '/images/gallery/waste-pipe-replacement-outdoor-drainage-plumbing-repair-uk.webp', alt: 'Outdoor waste pipe replacement drainage repair Liverpool' },
    ]
  },
  {
    id: 'kitchens',
    title: 'Kitchen & Gas Work',
    description: 'Safe, certified gas hob installations and precision cabinet appliance fittings.',
    images: [
      { src: '/images/gallery/gas-hob-installation-kitchen-cabinet-work.webp', alt: 'Gas hob installation kitchen cabinet work Liverpool' },
      { src: '/images/gallery/gas-hob-installation-kitchen-cooker-repair.webp', alt: 'Gas hob installation and cooker repair Liverpool' },
      { src: '/images/gallery/kitchen-oven-installation-cabinet-fitting-work.webp', alt: 'Kitchen oven installation cabinet fitting Liverpool' },
      { src: '/images/gallery/kitchen-sink-tap-installation-stainless-steel-sink-uk.webp', alt: 'Kitchen sink and tap installation stainless steel Liverpool' },
    ]
  }
];

export default function Gallery() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Close lightbox on escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <SEO 
        title="Plumbing & Heating Work Gallery | Liverpool & Knowsley | PJS Plumbing"
        description="Photos of Paul's plumbing and heating work across Liverpool and Knowsley — boiler installations, bathroom fits, pipe repairs and more. Every job done by Paul personally."
        keywords="plumbing gallery liverpool, boiler installation photos, bathroom renovation liverpool, plumbing work knowsley, heating engineer photos merseyside"
        canonical="https://liverpoolsplumber.co.uk/gallery"
      />

      {/* Hero Header */}
      <div className="bg-gray-50 pt-24 pb-16">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-5xl font-black tracking-tight text-gray-900 sm:text-6xl"
          >
            Plumbing &amp; Heating Work Across Liverpool &amp; Knowsley
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-xl text-gray-600"
          >
            Every job on this page was done by Paul personally — no subcontractors, no shortcuts. Based in Liverpool and Knowsley, serving Merseyside for 40 years.
          </motion.p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-6">
          {galleryCategories.map((category) => (
            <div key={category.id} className="mb-20">
              <div className="mb-10 text-center sm:text-left">
                <h2 className="mb-2 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
                  {category.title}
                </h2>
                <p className="text-gray-600 sm:text-lg max-w-3xl">
                  {category.description}
                </p>
                <div className="mt-4 h-1 w-20 bg-blue-600 sm:mx-0 mx-auto rounded-full"></div>
              </div>
              
              {/* Responsive Grid Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.images.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: (i % 4) * 0.05 }}
                    onClick={() => setLightboxImage(img.src)}
                    className="group relative cursor-pointer overflow-hidden rounded-2xl bg-gray-100 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 hover:z-10 aspect-[4/3]"
                  >
                    <img 
                      src={img.src} 
                      alt={img.alt} 
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.opacity = '0';
                      }}
                    />
                    
                    {/* Hover Zoom Icon */}
                    <div className="absolute inset-0 bg-blue-900/0 transition-colors duration-300 group-hover:bg-blue-900/10 flex items-center justify-center p-6">
                      <div className="bg-white/80 p-3 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gray-900 shadow-lg scale-90 group-hover:scale-100 transform">
                         <ZoomIn className="h-5 w-5 text-blue-600" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-blue-600 py-24 text-white hover:bg-blue-700 transition-colors duration-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-8 text-4xl font-black tracking-tight sm:text-5xl">Like what you see? Give Paul a call.</h2>
          <a
            href="tel:01514402614"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-10 py-5 text-xl font-black text-blue-600 transition-transform hover:scale-105 hover:shadow-xl active:scale-95"
          >
            <Phone className="h-6 w-6 fill-current" />
            Call Paul — 0151 440 2614
          </a>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-6 backdrop-blur-md"
            onClick={() => setLightboxImage(null)}
          >
            <button 
              className="absolute top-6 right-6 p-3 text-white/70 hover:text-white bg-white/10 rounded-full backdrop-blur-md transition-colors z-[110]"
              onClick={() => setLightboxImage(null)}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={lightboxImage}
              alt="Expanded view"
              className="max-h-full max-w-full object-contain rounded-xl shadow-2xl ring-1 ring-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
