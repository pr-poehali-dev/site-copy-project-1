import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const steps = [
  {
    step: 1,
    title: "Найди поездку",
    description: "Введи откуда и куда хочешь поехать, выбери удобную дату",
    icon: "Search",
  },
  {
    step: 2,
    title: "Выбери попутчика",
    description:
      "Посмотри профили водителей, отзывы и рейтинги других пассажиров",
    icon: "Users",
  },
  {
    step: 3,
    title: "Забронируй место",
    description: "Свяжись с водителем и договорись о деталях поездки",
    icon: "MessageSquare",
  },
  {
    step: 4,
    title: "Путешествуй",
    description: "Наслаждайся комфортной поездкой и новыми знакомствами",
    icon: "Car",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Как это работает
          </h2>
          <p className="text-xl text-gray-600">
            Простые шаги к комфортному путешествию
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon
                    name={step.icon as any}
                    className="h-8 w-8 text-white"
                  />
                </div>
                <div className="mb-4">
                  <span className="text-sm font-medium text-blue-600">
                    Шаг {step.step}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mt-2">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Готов начать путешествие?
            </h3>
            <p className="text-blue-100 mb-6">
              Присоединяйся к тысячам путешественников, которые уже экономят на
              поездках
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Найти поездку
              </button>
              <button className="border border-blue-400 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Предложить свою
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
