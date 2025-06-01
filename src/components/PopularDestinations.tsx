import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const schedules = [
  {
    route: "Тюмень - Петропавловск (ежедневно)",
    departures: [
      {
        time: "06:00",
        location: 'ДК "Строитель", ул. Республики 179',
        arrival: "Прибытие в Петропавловск до ж/д вокзала в 12:00-13:00",
      },
      {
        time: "14:00",
        location: 'ДК "Строитель", ул. Республики 179',
        arrival: "Прибытие в Петропавловск до ж/д вокзала в 20:00-21:00",
      },
    ],
  },
  {
    route: "Петропавловск - Тюмень (ежедневно)",
    departures: [
      {
        time: "06:00",
        location: 'ж/д вокзал, маг. "Магнум"',
        arrival:
          'Прибытие в Тюмень до ДК "Строитель", ул. Республики 179, в 12:00-13:00',
      },
      {
        time: "14:00",
        location: 'ж/д вокзал, маг. "Магнум"',
        arrival:
          'Прибытие в Тюмень до ДК "Строитель", ул. Республики 179, в 20:00',
      },
      {
        time: "16:00",
        location: 'ж/д вокзал, маг. "Магнум"',
        arrival:
          'Прибытие в Тюмень до ДК "Строитель", ул. Республики 179, в 20:00',
      },
    ],
  },
];

const PopularDestinations = () => {
  return (
    <section className="bg-yellow-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Направления</h2>
        </div>

        <div className="space-y-8">
          {schedules.map((schedule, scheduleIndex) => (
            <div key={scheduleIndex} className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                {schedule.route}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {schedule.departures.map((departure, index) => (
                  <Card key={index} className="bg-gray-800 border-none">
                    <CardContent className="p-6">
                      <div className="text-center">
                        <div className="text-xl font-bold text-white mb-4">
                          Выезд в {departure.time}
                        </div>

                        <div className="text-sm text-yellow-400 mb-2">
                          Место выезда: {departure.location}
                        </div>

                        <div className="text-sm text-gray-300 mb-6 leading-relaxed">
                          {departure.arrival}
                        </div>

                        <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 rounded-lg border-2 border-yellow-600">
                          Забронировать поездку
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
