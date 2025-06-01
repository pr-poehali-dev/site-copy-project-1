import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section
      className="relative bg-gray-900 text-white py-20 min-h-[600px]"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://cdn.poehali.dev/files/7da9bdc9-86ea-4371-a2bf-07e715b9214e.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Brand and Route */}
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-yellow-400 mb-4">
              Земляки
            </h1>
            <p className="text-xl text-gray-300 mb-2">
              Тюмень ↔ Петропавловск
            </p>
          </div>

          {/* Main Title */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Междугородное
              <br />
              такси
            </h2>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4 mb-16">
            <Button className="w-full max-w-sm bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-4 text-lg rounded-full">
              ЗАБРОНИРОВАТЬ ПОЕЗДКУ
            </Button>
            <Button
              variant="outline"
              className="w-full max-w-sm border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold py-4 text-lg rounded-full"
            >
              ОТПРАВИТЬ ПОСЫЛКУ
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
