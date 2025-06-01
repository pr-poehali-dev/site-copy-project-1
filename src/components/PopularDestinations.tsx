import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const destinations = [
  {
    city: "Санкт-Петербург",
    rides: 124,
    price: "от 800 ₽",
    image:
      "https://images.unsplash.com/photo-1520637836862-4d197d17c26a?w=400&h=300&fit=crop",
  },
  {
    city: "Сочи",
    rides: 89,
    price: "от 1200 ₽",
    image:
      "https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=400&h=300&fit=crop",
  },
  {
    city: "Казань",
    rides: 67,
    price: "от 600 ₽",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
  },
  {
    city: "Екатеринбург",
    rides: 56,
    price: "от 900 ₽",
    image:
      "https://images.unsplash.com/photo-1580709413408-4b5ad6e21e0c?w=400&h=300&fit=crop",
  },
  {
    city: "Нижний Новгород",
    rides: 45,
    price: "от 500 ₽",
    image:
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop",
  },
  {
    city: "Новосибирск",
    rides: 38,
    price: "от 1500 ₽",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
  },
];

const PopularDestinations = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Популярные направления
          </h2>
          <p className="text-xl text-gray-600">
            Самые востребованные маршруты от наших пользователей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.city}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-sm font-medium">
                  {destination.price}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {destination.city}
                </h3>
                <div className="flex items-center text-gray-600">
                  <Icon name="Car" className="h-4 w-4 mr-2" />
                  <span>{destination.rides} поездок в неделю</span>
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
