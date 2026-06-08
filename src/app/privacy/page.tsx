import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Политика конфиденциальности — Hattatsu Group',
  description:
    'Политика обработки персональных данных Hattatsu Group в соответствии с ФЗ №152.',
}

interface PolicySection {
  title: string
  body: readonly string[]
}

const SECTIONS: readonly PolicySection[] = [
  {
    title: '1. Общие положения',
    body: [
      'ООО «Академия развития производственных предприятий» (далее — «Компания») обрабатывает персональные данные пользователей сайта в соответствии с Федеральным законом №152-ФЗ «О персональных данных».',
      'Используя сайт и отправляя данные через формы, вы соглашаетесь с условиями настоящей политики.',
    ],
  },
  {
    title: '2. Какие данные собираем',
    body: [
      'Через формы на сайте мы можем собирать имя, адрес электронной почты, номер телефона и название компании.',
      'Данные предоставляются пользователем добровольно при заполнении форм обратной связи и заявок.',
    ],
  },
  {
    title: '3. Как используем данные',
    body: [
      'Персональные данные используются для обработки заявок, отправки ответов на обращения и улучшения качества сервиса.',
      'Мы не используем данные для целей, не указанных в настоящей политике.',
    ],
  },
  {
    title: '4. Хранение данных',
    body: [
      'Данные хранятся на защищённых серверах с применением организационных и технических мер защиты.',
      'Мы не передаём персональные данные третьим лицам без согласия пользователя, за исключением случаев, предусмотренных законом.',
    ],
  },
  {
    title: '5. Права пользователей',
    body: [
      'Вы вправе запросить информацию об обработке ваших данных, потребовать их изменения или удаления.',
      'Для реализации своих прав направьте запрос на адрес info@hattatsu.pro.',
    ],
  },
  {
    title: '6. Контакты',
    body: [
      'По вопросам обработки персональных данных обращайтесь по электронной почте info@hattatsu.pro.',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <section className="bg-light-gray">
      <div className="container section-padding">
        <div className="mx-auto max-w-3xl">
          <h1 className="h1 text-graphite">Политика конфиденциальности</h1>
          <p className="mt-4 text-sm text-gray-text">
            Последнее обновление: 01 января 2025
          </p>

          <div className="mt-12 space-y-10">
            {SECTIONS.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold text-graphite">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-base leading-relaxed text-gray-text"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
