import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "ЦЕНА ПОЕЗДКИ 2500 РУБ",
      description: [
        "Расчет в любой валюте",
        "Оплата наличными либо переводом на карту Kaspi, Сбербанк, Тинькофф, ВТБ",
      ],
      buttonText: "ЗАБРОНИРОВАТЬ ПОЕЗДКУ",
      image:
        "https://cdn.poehali.dev/files/f4e93efa-40b8-4f6d-932b-938e1859b849.png",
    },
    {
      title: "ДОСТАВКА ПОСЫЛОК",
      description: [
        "С нами Вы можете надежно отправить посылку в Тюмень или в Петропавловск. Стоимость посылки зависит от размера.",
      ],
      buttonText: "ОТПРАВИТЬ ПОСЫЛКУ",
      image:
        "https://cdn.poehali.dev/files/f4e93efa-40b8-4f6d-932b-938e1859b849.png",
    },
    {
      title: "ВСТРЕЧА И ТРАНСФЕР",
      description: [
        "Вы можете забронировать индивидуальный трансфер и встречу с ж/д вокзала или аэропорта за дополнительную плату.",
      ],
      buttonText: "УЗНАТЬ ЦЕНУ",
      image:
        "https://cdn.poehali.dev/files/f4e93efa-40b8-4f6d-932b-938e1859b849.png",
    },
  ];

  return (
    <section className="bg-yellow-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white shadow-lg overflow-hidden">
              <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <div className="w-32 h-32 bg-yellow-300 rounded-lg flex items-center justify-center">
                  {index === 0 && (
                    <div className="text-center">
                      <div className="text-2xl mb-2">🚖</div>
                      <div className="text-xs font-bold">TAXI</div>
                    </div>
                  )}
                  {index === 1 && (
                    <div className="text-center">
                      <div className="text-2xl mb-2">📱</div>
                      <div className="text-xs font-bold">TAXI</div>
                    </div>
                  )}
                  {index === 2 && (
                    <div className="text-center">
                      <div className="text-2xl mb-2">🧢</div>
                      <div className="text-xs font-bold">TAXI</div>
                    </div>
                  )}
                </div>
              </div>
              <CardContent className="bg-yellow-400 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">
                  {service.title}
                </h3>
                <div className="space-y-2 mb-6">
                  {service.description.map((item, itemIndex) => (
                    <p key={itemIndex} className="text-sm text-gray-800">
                      {item.startsWith("С нами") ||
                      item.startsWith("Расчет") ||
                      item.startsWith("Оплата") ||
                      item.startsWith("Вы можете")
                        ? item
                        : `• ${item}`}
                    </p>
                  ))}
                </div>
                <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 rounded-full">
                  {service.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
