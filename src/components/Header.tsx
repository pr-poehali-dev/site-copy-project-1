import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Icon name="Car" className="h-8 w-8 text-yellow-400 mr-2" />
            <span className="text-xl font-bold">Земляки</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              Заказать такси
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              Направления
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              Тарифы
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              Контакты
            </a>
          </nav>

          {/* Phone and Menu */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <Icon name="Phone" className="h-4 w-4 text-yellow-400" />
              <span className="text-sm font-medium">+7 (800) 123-45-67</span>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name="Menu" className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-300 hover:text-yellow-400">
                Заказать такси
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400">
                Направления
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400">
                Тарифы
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400">
                Контакты
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
