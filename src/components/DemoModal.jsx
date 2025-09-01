// components/DemoModal.jsx
import { motion } from "framer-motion";
import { ExternalLink, AlertCircle } from "lucide-react";
import { useState } from "react";

const DemoModal = ({ project, onClose }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleIframeLoad = () => setLoading(false);
  const handleIframeError = () => {
    setLoading(false);
    setError(
      "Failed to load the demo. The project might not be deployed or the URL might be incorrect."
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-gray-800 rounded-xl w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <div>
            <h3 className="text-2xl font-semibold text-white">
              {project.name}
            </h3>
            <p className="text-gray-400 text-sm mt-1">Live Demo Preview</p>
          </div>
          <div className="flex items-center space-x-4">
            <motion.a
              href={project.demo || project.deployedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={16} />
              <span>Open in New Tab</span>
            </motion.a>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors p-2"
            >
              <ExternalLink size={24} className="rotate-45" />
            </button>
          </div>
        </div>

        <div className="relative" style={{ height: "70vh" }}>
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full"
              />
              <span className="ml-3 text-white">Loading demo...</span>
            </div>
          )}

          {error && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <AlertCircle className="text-red-500 mb-4" size={48} />
              <p className="text-red-400 text-lg mb-4">{error}</p>
              <motion.a
                href={project.demo || project.deployedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Open in New Tab
              </motion.a>
            </div>
          )}

          <iframe
            src={project.demo || project.deployedUrl}
            title={`${project.name} Demo`}
            className={`w-full h-full border-0 ${
              loading || error ? "hidden" : ""
            }`}
            onLoad={handleIframeLoad}
            onError={handleIframeError}
            allowFullScreen
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DemoModal;
