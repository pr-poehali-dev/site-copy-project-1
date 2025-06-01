import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const steps = [
  {
    step: 1,
    title: "Выберите направление",
    description: "Выберите нужный маршрут и время отправления",
    icon: "MapPin",
  },
  {
    step: 2,
    title: "Забронируйте место",
    description: "Позвоните или оставьте заявку онлайн",
    icon: "Phone",
  },
  {
    step: 3,
    title: "Подтвердите бронь",
    description: "Получите подтверждение и детали поездки",
    icon: "CheckCircle",
  },
  {
    step: 4,
    title: "Поезжайте комфортно",
    description: "Наслаждайтесь быстрой и безопасной поездкой",
    icon: "Car",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Как заказать такси
          </h2>
          <p className="text-xl text-gray-400">
            Простой процесс бронирования поездки
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <Card
              key={step.step}
              className="bg-gray-800 border-gray-700 text-center"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={step.icon} className="h-8 w-8 text-gray-900" />
                  </div>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
