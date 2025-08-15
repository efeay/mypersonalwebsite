import { useTheme } from '@/contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  onNavigate: (section: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onNavigate }) => {
  const { isDark, toggleTheme } = useTheme();
  const [isMailHovered, setIsMailHovered] = useState(false);

  const handleMailClick = () => {
    window.open('mailto:efeay15@outlook.com', '_blank'); // Zarf tıklandığında açılacak site
  };

  return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-nav-glass backdrop-blur-nav border-b border-nav-border">
        <div className="flex justify-between items-center px-6 py-4 relative">
          <div className="flex items-center gap-4">
            {/* Zarf */}
            <div
                className="w-10 h-10 cursor-pointer relative"
                onMouseEnter={() => setIsMailHovered(true)}
                onMouseLeave={() => setIsMailHovered(false)}
                onClick={handleMailClick}
            >
              <div className={`letter-image ${isMailHovered ? 'open' : ''}`}>
                <div className="animated-mail">
                  <div className="back-fold"></div>
                  <div className="letter">
                    <div className="letter-border"></div>
                    <div className="letter-title"></div>
                    <div className="letter-context"></div>
                    <div className="letter-stamp">
                      <div className="letter-stamp-inner"></div>
                    </div>
                  </div>
                  <div className="top-fold"></div>
                  <div className="body"></div>
                  <div className="left-fold"></div>
                </div>
                <div className="shadow"></div>
              </div>
            </div>

            <div className="text-2xl font-bold text-primary">
              Efe Ay
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button
                onClick={() => onNavigate('about')}
                className="text-primary hover:text-primary-hover font-semibold transition-colors duration-300"
            >
              About Me
            </button>
            <button
                onClick={() => onNavigate('videos')}
                className="text-primary hover:text-primary-hover font-semibold transition-colors duration-300"
            >
              Videos
            </button>
            <button
                onClick={() => onNavigate('posts')}
                className="text-primary hover:text-primary-hover font-semibold transition-colors duration-300"
            >
              Posts
            </button>

            <button
                onClick={toggleTheme}
                className="p-2 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center"
            >
              {isDark ? (
                  <Sun className="w-5 h-5" />
              ) : (
                  <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* CSS */}
        <style> {`
          .letter-image {
            position: relative;
            width: 40px;
            height: 40px;
          }

          .animated-mail {
            position: absolute;
            height: 30px;
            width: 40px;
            transition: 0.4s;
          }

          .body {
            position: absolute;
            bottom: 0;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 0 0 30px 40px;
            border-color: transparent transparent #e95f55 transparent;
            z-index: 2;
          }

          .top-fold {
            position: absolute;
            top: 10px;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 15px 20px 0 20px;
            transform-origin: 50% 0%;
            border-color: #cf4a43 transparent transparent transparent;
            z-index: 2;
            transition: transform 0.4s;
          }

          .letter {
            left: 4px;
            bottom: 0px;
            position: absolute;
            width: 32px;
            height: 15px;
            background: white;
            z-index: 1;
            overflow: hidden;
            transition: height 0.4s 0.2s;
          }

          .letter-border {
            height: 3px;
            width: 100%;
            background: repeating-linear-gradient(
                -45deg,
                #cb5a5e,
                #cb5a5e 2px,
                transparent 2px,
                transparent 4px
            );
          }

          .letter-title {
            margin-top: 2px;
            margin-left: 1px;
            height: 3px;
            width: 40%;
            background: #cb5a5e;
          }

          .letter-context {
            margin-top: 2px;
            margin-left: 1px;
            height: 3px;
            width: 20%;
            background: #cb5a5e;
          }

          .letter-stamp {
            margin-top: 10px;
            margin-left: 24px;
            border-radius: 100%;
            height: 6px;
            width: 6px;
            background: #cb5a5e;
            opacity: 0.3;
          }

          .shadow {
            position: absolute;
            bottom: -10px;
            left: 50%;
            width: 50px;
            height: 5px;
            border-radius: 100%;
            background: radial-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0));
            transform: translateX(-50%);
            transition: width 0.4s;
          }

          .letter-image.open .animated-mail {
            transform: translateY(20px);
          }

          .letter-image.open .top-fold {
            transform: rotateX(180deg);
          }

          .letter-image.open .letter {
            height: 50px;
          }

          .letter-image.open .shadow {
            width: 60px;
          }
        `}</style>
      </nav>
  );
};
