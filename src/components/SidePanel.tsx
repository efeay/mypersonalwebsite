import { X } from 'lucide-react';
import { useEffect } from 'react';

interface Post {
  id: number;
  title: string;
  preview: string;
  fullText: string;
}

interface SidePanelProps {
  isOpen: boolean;
  post: Post | null;
  onClose: () => void;
}

export const SidePanel: React.FC<SidePanelProps> = ({ isOpen, post, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!post) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/35 z-60 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-full max-w-2xl bg-card-glass backdrop-blur-[16px] shadow-glass-hover z-70 p-8 overflow-y-auto transform transition-transform duration-400 rounded-r-2xl ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-primary hover:text-primary-hover text-3xl font-bold transition-colors duration-300"
        >
          <X className="w-8 h-8" />
        </button>

        <h2 className="text-3xl font-bold text-primary mb-6 pr-12">
          {post.title}
        </h2>

        <div className="text-card-foreground text-lg leading-relaxed whitespace-pre-line">
          {post.fullText}
        </div>
      </div>
    </>
  );
};