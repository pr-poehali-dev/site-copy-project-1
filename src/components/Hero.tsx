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
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Найди попутчика
            <br />
            <span className="text-blue-600">для путешествий</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Путешествуй с единомышленниками, экономь деньги и заводи новые
            знакомства
          </p>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Откуда
              </label>
              <div className="relative">
                <Icon
                  name="MapPin"
                  className="absolute left-3 top-3 h-5 w-5 text-gray-400"
                />
                <Input placeholder="Москва" className="pl-10" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Куда</label>
              <div className="relative">
                <Icon
                  name="MapPin"
                  className="absolute left-3 top-3 h-5 w-5 text-gray-400"
                />
                <Input placeholder="Санкт-Петербург" className="pl-10" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Дата</label>
              <div className="relative">
                <Icon
                  name="Calendar"
                  className="absolute left-3 top-3 h-5 w-5 text-gray-400"
                />
                <Input type="date" className="pl-10" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Пассажиры
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="1 человек" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 человек</SelectItem>
                  <SelectItem value="2">2 человека</SelectItem>
                  <SelectItem value="3">3 человека</SelectItem>
                  <SelectItem value="4">4 человека</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="flex-1 bg-blue-600 hover:bg-blue-700">
              <Icon name="Search" className="mr-2 h-5 w-5" />
              Найти попутчика
            </Button>
            <Button size="lg" variant="outline" className="flex-1">
              <Icon name="Plus" className="mr-2 h-5 w-5" />
              Предложить поездку
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600">25,000+</div>
            <div className="text-gray-600">Активных пользователей</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">150+</div>
            <div className="text-gray-600">Городов</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">5,000+</div>
            <div className="text-gray-600">Поездок в месяц</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">4.8</div>
            <div className="text-gray-600">Средний рейтинг</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
