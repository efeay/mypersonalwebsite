import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { VideosSection } from '@/components/VideosSection';
import { PostsSection } from '@/components/PostsSection';
import { SidePanel } from '@/components/SidePanel';

interface Post {
  id: number;
  title: string;
  preview: string;
  fullText: string;
}

const Index = () => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handlePostClick = (post: Post) => {
    setSelectedPost(post);
    setIsPanelOpen(true);
  };

  const handleClosePanel = () => {
    setIsPanelOpen(false);
    setTimeout(() => setSelectedPost(null), 300);
  };

  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation onNavigate={handleNavigate} />
      <HeroSection />
      <VideosSection />
      <PostsSection onPostClick={handlePostClick} />
      <SidePanel 
        isOpen={isPanelOpen}
        post={selectedPost}
        onClose={handleClosePanel}
      />
    </div>
  );
};

export default Index;
