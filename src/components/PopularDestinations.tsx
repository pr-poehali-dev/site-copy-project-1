import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const routes = [
  {
    route: "Тюмень - Петропавловск (ежедневно)",
    departure: "Выезд в 06:00",
    price: "от 1500 ₽",
    duration: "4 часа",
  },
  {
    route: "Петропавловск - Тюмень (ежедневно)",
    departure: "Выезд в 06:00",
    price: "от 1500 ₽",
    duration: "4 часа",
  },
];

const PopularDestinations = () => {
  return (
    <section className="bg-yellow-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Направления</h2>
          <p className="text-xl text-gray-700">
            Регулярные рейсы между городами
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {routes.map((route, index) => (
            <Card key={index} className="bg-gray-800 border-none">
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-4">
                    {route.route}
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-center space-x-2 text-gray-300">
                      <Icon name="Clock" className="h-5 w-5" />
                      <span>{route.departure}</span>
                    </div>

                    <div className="flex items-center justify-center space-x-2 text-gray-300">
                      <Icon name="Timer" className="h-5 w-5" />
                      <span>Время в пути: {route.duration}</span>
                    </div>

                    <div className="text-2xl font-bold text-yellow-400">
                      {route.price}
                    </div>
                  </div>

                  <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-full">
                    Забронировать
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
