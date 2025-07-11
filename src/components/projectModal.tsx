import React, { useEffect, useState } from 'react';
import { type PortfolioItem } from '../data/portfolioData';

interface ProjectModalProps {
  item: PortfolioItem; 
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ item, onClose }) => {

    const [showModalContent, setShowModalContent] = useState(false);

  
  useEffect(() => {
    
    const timer = setTimeout(() => {
      setShowModalContent(true); 
    }, 50);
    return () => clearTimeout(timer); 
  }, []); 

  
  const handleClose = () => {
    setShowModalContent(false); 
    
    setTimeout(() => {
      onClose(); 
    }, 400); 
  };
    useEffect(() => {
        document.body.style.overflow = 'hidden'; 
    return () => {
        document.body.style.overflow = 'unset'; 
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-black/69 z-50 flex items-center justify-center p-4 transition-opacity duration-400 ease-out ${showModalContent ? 'opacity-100' : 'opacity-0'} `}
      onClick={handleClose} 
    >
      <div
        className="relative bg-[#A3A0DA] border-solid rounded-4xl border-[#7B7CD3] border-[12px] shadow-2xl shadow-[#7B7CD3] text-white p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto "
        onClick={(e) => e.stopPropagation()} 
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        
        <h2 className="text-5xl font-bebas-neue text-black mb-4 pr-10 hover:scale-99 transition duration-1000 ease-in-out">
          {item.name}
        </h2>
        <div className="h-10"></div>
        <div className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {item.screenshots.map((src, index) => (
              <img
                key={index} 
                src={src}
                alt={`${item.name} Screenshot ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>

        {item.techStack && item.techStack.length > 0 && (
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {item.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="bg-[#a885f3] text-white text-sm px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
        <div className="h-6"></div>
       
        <div className="flex flex-wrap gap-4 mt-6">
          {item.livelink && (
            <a
              href={item.livelink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-[#6264b9]  hover:bg-[#575aac] text-white rounded-md transition duration-200 ease-in-out flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 0 0 1-2-2V8a2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
              Link
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
