Курсовой проект
Используйте это (в зависимости от того, в какой группе вы находитесь):
.NET: C#, Blazor или MVC (выбираете вы)
или
JavaScript: JavaScript или TypeScript (выбираете вы), React (спросите, хотите ли вы заменить React на Angular)

Вы можете использовать любую базу данных и любые другие библиотеки, компоненты или даже фреймворки (но не заменять указанные выше).

Нет ограничений в области архитектуры или используемых сервисов (вам даже не нужно разделять front и back; это не рекомендация, но вы можете пойти этим путем). Также вы можете заменить Bootstrap любым CSS-фреймворком и/или библиотекой пользовательского интерфейса, которые вам нравятся.

Вы должны реализовать веб-приложение для настраиваемых форм (викторины, тесты, анкеты, опросы и т. д.). Что-то похожее на Google Forms. Пользователи определяют «шаблоны» (набор вопросов, их названия и описания и т. д.), а другие пользователи заполняют «формы» (свои конкретные ответы) с помощью этих шаблонов (например, вводят или выбирают значения в полях).

Например, я создаю шаблон с одним целочисленным вопросом «Сколько яблок вы съедаете в день?» Пользователи заполняют соответствующие формы, и я могу анализировать ответы.
Неаутентифицированные пользователи не могут создавать шаблоны, оставлять комментарии и лайки или заполнять формы. Но они могут использовать поиск и просматривать шаблоны в режиме только для чтения.

Страница администратора позволяет управлять пользователями — просматривать; блокировать; разблокировать; удалять; добавлять в администраторы; удалять из администраторов. АДМИН МОЖЕТ ОТКАЗАТЬ СЕБЯ ОТ АДМИНИСТРАТИВНОГО ДОСТУПА; это важно.

Администратор видит все страницы как их автора (например, администратор может открыть шаблон другого пользователя и добавить в него вопрос или открыть форму для пользователя и отредактировать ответ; таким образом, администратор фактически является владельцем каждого шаблона и каждой формы).

Заполненные формы (ответы) могут видеть автор, а также создатель шаблона ответа и администраторы. Шаблоны доступны для просмотра всем.

Только администратор или создатель шаблона может управлять им (добавлять/удалять/редактировать вопросы).

Только администратор или создатель формы может управлять им (удалять или редактировать ответы).

Пользователи могут регистрироваться и проходить аутентификацию через формы сайта.

Каждая страница (в верхнем заголовке) предоставляет доступ к полнотекстовому поиску. Результаты поиска всегда являются шаблонами (например, если текст найден в описании вопроса или комментариях к шаблону, результат поиска ссылается на сам шаблон, а не на вопрос или комментарий).
У каждого пользователя есть своя личная страница, где он может управлять сортируемой таблицей шаблонов (создавать новые, удалять или редактировать) и сортируемой таблицей заполненных форм (вероятно, на двух отдельных вкладках).

Каждый шаблон в таблице — это ссылка на страницу шаблона, которая содержит несколько вкладок:
общие настройки, такие как заголовок, описание и т. д. (см. ниже), а также настройки доступа (все аутентифицированные пользователи или только указанный пользователь),
редактируемый набор вопросов,
"результаты", т. е. все заполненные формы на основе данного шаблона (со ссылками на формы, конечно),
агрегация результатов/ответов (например, среднее значение для числового поля, чаще всего ответ для строкового поля и т. д.).

Автор шаблона может щелкнуть любую форму в списке на странице шаблона и открыть форму, заполненную другим пользователем, в режиме только для чтения.

Когда шаблон показан другому пользователю, он может быть заполнен (сохранен как «форма»), если этот пользователь аутентифицирован, и настройки доступа позволяют этому пользователю заполнять форму.
Настройки шаблона следующие:
название,
описание (с поддержкой форматирования markdown),
тема (одно значение из предопределенного списка, например, «Образование», «Тест» и, конечно же, «Другое» — новые значения в этот список добавляются через базу данных; нет необходимости в пользовательском интерфейсе),
необязательное изображение/иллюстрация (загружаются пользователями в облако),
теги (пользователь может ввести несколько тегов; необходимо поддерживать автодополнение — когда пользователь начинает вводить текст, необходимо отобразить раскрывающийся список с тегами, начинающимися с введенной буквы, уже сохраненной в базе данных).

Каждый шаблон может быть помечен как «публичный» (может быть заполнен любым аутентифицированным пользователем), или пользователь выбирает набор пользователей, зарегистрированных на сайте. Элемент управления для выбора пользователей должен обеспечивать автодополнение для имен и адресов электронной почты. Добавленных пользователей можно удалить. Предоставить некоторую сортировку выбранного пользователя (пользователь может переключаться между именем и адресом электронной почты).
p.lebedev — Сегодня, в 11:47
Конечно, шаблон позволяет указывать пользовательские вопросы («поля»). Есть фиксированные поля: пользователь (заполняется автоматически) и дата (заполняется автоматически).

Также можно добавить несколько вопросов следующих типов:
до 4 однострочных строк,
до 4 многострочных текстов,
до 4 положительных целых чисел,
до 4 флажков.

Каждый вопрос имеет заголовок, описание и логическое значение, которое определяет, будет ли вопрос отображаться в таблице заполненных форм (на вкладке шаблона).

Можно изменить порядок вопросов с помощью drag'n'drop.

Например, я хочу создать анкету для кандидатов на вакансии. Я добавляю следующие вопросы:
Однострочный вопрос «Должность» («На какую должность вы претендуете?»),
Целое число-value вопрос «Опыт» («Работа над коммерческими проектами или фриланс (в годах)»),
Однострочный вопрос «Контакты» («Номер телефона или Skype»),
Текстовый вопрос «Дополнительная информация»/(«Напишите что-нибудь в поле ниже»).

Главная страница приложения содержит:
галерею последних шаблонов (имя, описание или изображение, автор),
таблицу 5 самых популярных шаблонов (с наибольшим количеством заполненных форм);
облако тегов (когда пользователь нажимает на тег, вы отображаете список шаблонов — в общем случае для этого следует использовать «страницу результатов поиска»).

При открытии шаблона (автором или другим пользователем, имеющим доступ), внизу отображается список комментариев. Комментарии линейные, добавляются только в конец (невозможно вставить комментарий после предыдущего). Комментарии должны обновляться автоматически — когда открывается страница шаблона и кто-то добавляет к ней комментарий, он должен добавляться автоматически (возможна задержка в 2–5 секунд).

Каждый шаблон также имеет «лайки» (не более одного от одного пользователя на один элемент).
Приложение должно поддерживать два языка: английский и любой другой — польский, испанский, узбекский, грузинский и т. д. (пользователь выбирает один, и выбор сохраняется). Переводится только пользовательский интерфейс, а не пользовательский контент.

Приложение должно поддерживать две визуальные темы (скины): светлую и темную (пользователь выбирает один, и выбор сохраняется).

Требуется:
использовать CSS-фреймворк, например, Bootstrap (но вы можете использовать любой другой CSS-фреймворк и любой набор элементов управления),
поддерживать различные разрешения экрана (включая мобильные телефоны), быть адаптивным,
использовать ORM для доступа к данным (sequelize, prism, typeorm, EF — все, что вам нравится),
1 использовать полнотекстовую поисковую систему (либо внешнюю библиотеку, либо с использованием собственных функций базы данных).

НЕТ:
не используйте полное сканирование базы данных с SELECT,
не загружайте изображения на свой веб-сервер,
не выполняйте запросы к базе данных в цикле.

Можно ли использовать библиотеку X? Да, да всем, запомните мой выбор.

Необязательные требования (для отдельной оценки, только если все остальные требования реализованы):
аутентификация через социальные сети,
добавление вопросов с типом «один из указанного списка» с возможностью указания списка доступных вариантов (например, шаблон auther создаст вопрос «Должность» с вариантами «Разработчик»/«DevOps»/«Тестировщик»),
добавление любого количества вопросов любого типа (не 0 или 1 или 2 или 3 или 4, а любое их количество),
добавление флажка «Отправить мне копию моих ответов по электронной почте» в форму.

ВАЖНОЕ ПРИМЕЧАНИЕ. Не копируйте код из куч кода. НАМНОГО ЛУЧШЕ ДЕЛАТЬ МЕНЬШЕ, НО ПОЛНОСТЬЮ ПОНИМАТЬ, ЧТО ВЫ ПИШЕТЕ ТОЧНО. Я абсолютно серьезен — мы попросим вас изменить свой код на лету, что-то добавить или изменить, зададим вам вопросы и проверим вашу способность работать с кодом вашего проекта. Это важнее, чем количество реализованных требований. Ваш руководитель видел много похожих проектов и, вероятно, знает большую часть доступного материала по этой теме в Интернете. Не копируйте. Используйте библиотеки как можно чаще. Но не копируйте.

Вам нужно использовать готовые компоненты, библиотеки и элементы управления. Например, используйте готовый элемент управления для рендеринга markdown или готовый элемент управления для загрузки изображений с помощью drag'n'drop или готовый элемент управления для ввода тегов или готовый элемент управления для рендеринга облака тегов и т. д. Чем меньше пользовательского кода содержит ваше приложение, тем лучше.

И САМОЕ ГЛАВНОЕ: Начните работу с развертывания статической страницы «Hello, world» и всегда имейте готовую к развертыванию версию.

И ЕЩЕ ВАЖНЕЕ: Защищайте свой проект, даже если вы сделали лишь малую его часть.
🧰
p.lebedev — Сегодня, в 11:58
Пожалуйста, даже не думайте использовать JSON для сериализации форм. Это плохая идея. Вам нужно будет редактировать шаблоны, а ответы должны каким-то образом сохраняться. Например, можно изменить заголовок вопроса. Или удалить вопрос. Конечно, не стоит пытаться редактировать заполненные формы на лету.

Подумайте об этой проблеме так: все формы для заданного шаблона должны быть «совместимыми», и вам нужно вычислить для них агрегированные значения.

Кроме того, даже не думайте о генерации таблиц в базе данных на лету. Это плохая идея по нескольким причинам.

Вам нужно всего до 4 вопросов каждого типа. Это значит, что вы можете считать вопросы фиксированными и управлять только тем, будут ли они показаны и какие заголовки будут отображены. Реляционная база данных идеально подходит для этой задачи. Она будет работать быстро, и у вас не возникнет проблем с «Я не знаю, как агрегировать данные из документов с разными полями».

Пожалуйста, даже не думайте использовать JSON для сериализации форм. Это плохая идея. Вам нужно будет редактировать шаблоны, а ответы должны быть каким-то образом сохранены. Например, можно изменить заголовок вопроса. Или удалить вопрос. Конечно, вам не следует пытаться редактировать заполненные формы на лету.

Подумайте об этой проблеме таким образом: все формы для данного шаблона должны быть «совместимыми», и вам нужно вычислить для них агрегированные значения.

Кроме того, даже не думайте о создании таблиц в базе данных на лету. Это плохая идея по нескольким причинам.

Вам нужно всего до 4 вопросов каждого типа. Это означает, что вы можете считать вопросы фиксированными и управлять только тем, отображаются ли они и какие заголовки отображаются. Реляционная база данных идеально подходит для этой задачи. Она будет работать быстро, и у вас не возникнет проблем с «Я не знаю, как агрегировать данные из документов с разными полями»

//////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////.

Создание шаблонов форм:

Добавьте возможность пользователям (только аутентифицированным) создавать шаблоны с вопросами.
Реализуйте форму для создания нового шаблона, где пользователь сможет задать заголовок, описание, тему, вопросы и теги.
Сохранение шаблонов в базу данных.
Отображение и редактирование шаблонов:

Создайте страницу для отображения списка всех шаблонов с возможностью редактирования.
Реализуйте функционал редактирования/удаления шаблонов для авторов и администраторов.
Заполнение шаблонов:

Позвольте аутентифицированным пользователям заполнять формы, используя созданные шаблоны.
Сохранение данных заполненных форм в базу данных.
Поиск и сортировка шаблонов:

Добавьте полнотекстовый поиск по шаблонам и реализуйте сортировку по тегам и дате создания.
