Тестовое задание для трудоустройства в Fractal Web
Результаты выполнения тестового задания следует опубликовать на GitHub и захостить на любой открытой платформе (например, Github Pages или Vercel) и отправить в телеграм https://t.me/sheinid или https://t.me/temamint.

Срок выполнения: 3 дня с момента отправки сообщения с тестовым заданием.

Разработка формы описания профиля:
Требуется разработать форму отправки данных по готовому макету.

Технические требования:
Для разработки приложения использовать макет

В рамках дизайна формы реализовано 3 отдельных таба (шага) формы, которые можно переключать между собой. При переходе от таба к табу (в том числе возвращаясь на предыдущий) информация должна сохранятся.

На первом экране необходимо добавить информацию о себе и по нажатию на кнопку "Начать" будет происходить переход на форму. При переходе должен меняться роут.

На каждом этапе формы нужно валидировать значения конкретного шага.

После отправки формы показывать модальное окно с success или error. Модалку нужно будет разработать самому, не используя сторонние библиотеки или ui-компоненты.

Подготовить promise для отправки формы через api (fetch или axios) со всеми собранными данными (без привязки к api, просто подготовить). Сам запрос сымитировать через setTimeout.

Адаптивная версия обязательна, способ реализации по твоему выбору.

Валидация и описание полей:
nickname - строковое значение, максимальная длина 30 символов, могут быть просто буквы и цифры (спец символы запрещены)
name - строковое значение, максимальная длина 50 символов, только буквы
sername - строковое значение, максимальная длина 50 символов, только буквы
phone - строковое значение, форма записи +7 (900) 000-00-00 - реализовать маску ввода, +7, (), -, уже подставленные символы, валидация - цифры
email - строковое значение, валидация на email стандартная @ и .домен
sex - enum 'man' | 'woman' реализовать как select
advantages - массив строк, основной критерий - массив строк. По нажатию на “Плюс” должно добавляться новое поле и так же валидироваться.
radio - number блок, в дизайне должна быть группа элементов RadioGroup
checkbox - массив number, в дизайне должна быть группа элементов CheckboxGroup
about - textarea блок максимальная длина 200 символов, в правом нижнем углу добавить счётчик символов без пробелов
Рекомендуемый стек:
React
Typescript
Redux или Redux-Toolkit, RTK Query (A proposal for bundling reducers, action types and actions when using Redux)
SCSS modules | CSS modules
Formik | react final form | react hook form
Yup