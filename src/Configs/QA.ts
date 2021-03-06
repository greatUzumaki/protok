export type Iqa = {
  title: string;
  answers: string[];
  type: 'number' | 'field' | 'radio';
  label?: string;
};

export const questionAnswer: Iqa[] = [
  {
    title: 'Выберите тип КТП из предложенных…',
    answers: ['Тупиковая', 'Проходная'],
    type: 'radio',
  },
  {
    title: 'Выберите тип утепления КТП…',
    answers: ['Киосковая', 'Утепленная типа "сэндвич"'],
    type: 'radio',
  },
  {
    title: 'Укажите тип трансформатора для КТП…',
    answers: ['ТМ', 'ТМГ', 'Сухой'],
    type: 'radio',
  },
  {
    title: 'Выберите мощность силового трансформатора…',
    answers: ['25', '630'],
    type: 'number',
    label: 'кВА',
  },
  {
    title: 'Выберите схему и группу соединений силового трансформатора…',
    answers: ['Y/Y', 'Δ/Y'],
    type: 'radio',
  },
  {
    title: 'Выберите класс напряжения, по стороне высшего напряжения…',
    answers: ['6 кВ', '10 кВ'],
    type: 'radio',
  },
  {
    title:
      'Какой коммутационный аппарат планируете разместить на вводе высшего напряжения?',
    answers: [
      'ВНА',
      'РВЗ',
      'BB/TEL (вакуумный выключатель)',
      'РЛНД',
      'Будет отсутствовать',
    ],
    type: 'radio',
  },
  {
    title: 'Планируете ли секционирование по стороне высшего напряжения?',
    answers: ['Да', 'Нет'],
    type: 'radio',
  },
  {
    title: 'Будет ли наличие разрядников или ОПН, РУВН?',
    answers: ['РВО', 'ОПН', 'Нет'],
    type: 'radio',
  },
  {
    title: 'Каким планируется исполнение вводов РУВН?',
    answers: ['Воздух', 'Кабель'],
    type: 'radio',
  },
  {
    title: 'Каким планируется исполнение вводов РУНН?',
    answers: ['Воздух', 'Кабель'],
    type: 'radio',
  },
  {
    title: 'Какой планируете коммутационный аппарата на вводе НН?',
    answers: ['ВР', 'РЕ', 'ВА'],
    type: 'radio',
  },
  {
    title:
      'Просим Вас выбрать марку коммутационных аппаратов отходящих линий НН',
    answers: [''],
    type: 'field',
  },
  {
    title: 'Укажите токи фидеров',
    answers: ['25', '1600'],
    type: 'number',
    label: 'А',
  },
  {
    title: 'Укажите количество отходящих линий',
    answers: ['1', '100'],
    type: 'number',
    label: 'шт.',
  },
  {
    title: 'Будет ли Вами у нас заказано уличное освещение?',
    answers: ['Да', 'Нет'],
    type: 'radio',
  },
  {
    title: 'Будет ли наличие разрядников, РУНН?',
    answers: ['РВН', 'ОПН', 'Будет отсутствовать'],
    type: 'radio',
  },
  {
    title: 'Предусмотрено ли проектом наличие коридора обслуживания?',
    answers: ['По РУВН', 'По РУНН', 'Будет отсутствовать'],
    type: 'radio',
  },
  {
    title: 'Где разместить приборы контроля напряжения и тока?',
    answers: ['На вводе НН', 'На отходящих линиях', 'Будет отсутствовать'],
    type: 'radio',
  },
  {
    title: 'Из какого материала сделать ошиновку по ВН и НН?',
    answers: ['Медь', 'Алюминий'],
    type: 'radio',
  },
  {
    title: 'Будут ли дополнительные требования?',
    answers: ['Да', 'Нет'],
    type: 'radio',
  },
];
