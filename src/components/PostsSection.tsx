import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface Post {
  id: number;
  title: string;
  preview: string;
  fullText: string;
}

interface PostsSectionProps {
  onPostClick: (post: Post) => void;
}

export const PostsSection: React.FC<PostsSectionProps> = ({ onPostClick }) => {
  const posts: Post[] = [
    {
      id: 1,
      title: "Post 1",
      preview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet...",
      fullText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Praesent convallis. Donec bibendum, libero at vehicula consequat, orci lacus viverra nunc, et egestas augue est sed urna. Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur blandit mollis lacus. Nam adipiscing. Vestibulum eu odio."
    },
    {
      id: 2,
      title: "Post 2",
      preview: "Bu ikinci yazının tam metni biraz daha uzun. Burada kullanıcı rahat rahat okuyabilmeli...",
      fullText: "Bu ikinci yazının tam metni biraz daha uzun. Burada kullanıcı rahat rahat okuyabilmeli. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et diam a erat sollicitudin suscipit. Nulla facilisi. Sed faucibus purus a lacus laoreet, a cursus lacus bibendum. Donec vehicula augue eu neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris ut leo. Cras viverra metus rhoncus sem."
    },
    {
      id: 3,
      title: "Post 3",
      preview: "Yapay zekâ ve uzay teknolojilerinin gelecekte hayatımızı nasıl değiştireceğine dair düşüncelerim...",
      fullText: "Yapay zekâ ve uzay teknolojilerinin gelecekte hayatımızı nasıl değiştireceğine dair düşüncelerim. Teknolojinin hızla ilerlemesi ile birlikte, insanlık yeni bir çağa adım atmaya hazırlanıyor. Mars kolonizasyonu projelerinden, kuantum bilgisayarlara kadar birçok alanda yaşanan gelişmeler, gelecek nesillerin bambaşka bir dünyada yaşayacağının işareti. Bu değişimlere hazır olmalı ve teknolojiyi doğru şekilde kullanmayı öğrenmeliyiz."
    }
  ];

  return (
    <section
      id="posts"
      className="min-h-screen bg-muted pt-20 px-6 flex flex-col justify-center scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-primary mb-16 tracking-wide">
          Posts
        </h1>

        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-card-glass backdrop-blur-glass rounded-2xl p-8 shadow-glass hover:shadow-glass-hover hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              onClick={() => onPostClick(post)}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                {post.title}
              </h2>
              <p className="text-card-foreground text-lg leading-relaxed mb-6 line-clamp-3">
                {post.preview}
              </p>
              <button className="flex items-center gap-2 text-primary hover:text-primary-hover font-bold text-lg transition-all duration-300 group">
                <span>Devamını Oku</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};