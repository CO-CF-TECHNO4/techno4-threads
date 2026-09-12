# TECHNO4 Threads Studio (`techno4-threads`)

<div align="center">

**Середовище візуального проєктування мікросервісів та апаратних потоків для TECHNO4 FRAMEWORK2**  
*Visual workflow and hardware stream design studio for TECHNO4 FRAMEWORK2*

[![License: LGPL-3.0-or-later](https://img.shields.io/badge/License-LGPL--3.0--or--later-blue.svg)](LICENSE)
[![Organization](https://img.shields.io/badge/Organization-CO%20%C2%ABCF%20TECHNO4%C2%BB-green.svg)](https://techno4.online)

---

### [uk_UA](#uk_ua) &nbsp;|&nbsp; [en_GB](#en_gb)

---

</div>

<br>

---

## uk_UA

### 🎯 Мета проєкту
> **Вільна ініціатива розвитку сучасних інструментів розробника за підтримки благодійної організації «БЛАГОДІЙНИЙ ФОНД ТЕХНО4» (CO «CF TECHNO4»).**

`techno4-threads` — це потужне середовище візуального програмування (low-code visual workflow editor) для проектування логіки мікросервісів, автоматизації потоків даних (**ThreadsStream**) та взаємодії з апаратними пристроями (Serial COM, Web Audio, MIDI, IoT-датчики) у режимі реального часу.

Побудоване на базі рушія `techno4-total` і призначене для автономної роботи або інтеграції у складніші архітектури (включно з вбудовуванням через iframe у клієнтські застосунки TECHNO4).

### ⚡ Ключові можливості

- **Візуальний редактор потоків**: drag-and-drop конструювання ланцюжків обробки даних безпосередньо у браузері.
- **Підтримка понад 140 компонентів**: повна сумісність із бібліотекою вузлів `techno4-threads-components` (REST, WebSockets, MQTT, Serial, NoSQL, AI/Ollama, Crontab).
- **Потокова телеметрія та налагодження**: візуальне відстеження повідомлень між вузлами в реальному часі з показниками затримок та черг.
- **Апаратні мости (Hardware Bridging)**: пряме читання та запис у UART/COM-порти, генерація аудіопотоків, MIDI-тригери.
- **Кластеризація та надійність**: підтримка ізольованих робочих процесів (worker threads) та автоматичного перезапуску при збоях.

### 📦 Встановлення та запуск

#### 1. Глобальне встановлення (CLI):

```bash
npm install -g techno4-threads
```

Запуск студії (за замовчуванням порт `8008` або `8000`):
```bash
techno4-threads 8008
# або скорочено:
t4-threads 8008
```

#### 2. Запуск через npx без встановлення:

```bash
npx techno4-threads 8008
```

#### 3. Запуск із вихідного коду (всередині монорепозиторію):

```bash
cd packages/techno4-framework2-threads
npm install
node index.js 8008 --release
```

Після запуску відкрийте браузер за адресою:  
👉 **`http://localhost:8008`**

### 🧩 Додаткові компоненти

Для розширення набору вузлів встановіть бібліотеку компонентів:
```bash
npm install techno4-threads-components
```

### 📚 Офіційна документація
Докладна документація та посібники з розробки:  
👉 **[https://techno4.online/надбання/фреймворк](https://techno4.online/%D0%BD%D0%B0%D0%B4%D0%B1%D0%B0%D0%BD%D0%BD%D1%8F/%D1%84%D1%80%D0%B5%D0%B9%D0%BC%D0%B2%D0%BE%D1%80%D0%BA)**

### ⚖️ Ліцензія та права
Вихідний код розповсюджується за ліцензією **LGPL-3.0-or-later**.  
Підтримується: **благодійна організація «БЛАГОДІЙНИЙ ФОНД ТЕХНО4»** (`CO «CF TECHNO4»`).  
Автор: **Mykola Zghurskyi** (`mykola@techno4.online`).  
Містить адаптовані компоненти із проєкту Total.js Threads (MIT License).

<br>

---

## en_GB

### 🎯 Project Mission
> **A free initiative fostering modern developer tools, supported by the charitable organization "CO «CF TECHNO4»" (благодійна організація «БЛАГОДІЙНИЙ ФОНД ТЕХНО4»).**

`techno4-threads` is an advanced low-code visual workflow and stream programming environment for **TECHNO4 FRAMEWORK2**. Designed to visually design microservices, data processing pipelines (**ThreadsStream**), and real-time hardware automation (Serial COM, Web Audio, MIDI, IoT sensors).

Engineered on top of the `techno4-total` backend runtime, it runs as a standalone daemon or embedded inside TECHNO4 client applications via iframe.

### ⚡ Key Features

- **Visual Pipeline Designer**: Interactive drag-and-drop workflow canvas running directly in the browser.
- **Over 140 Ready Nodes**: Native support for `techno4-threads-components` (REST endpoints, WebSockets, MQTT brokers, Serial COM, NoSQL, AI/Ollama, Cron schedules).
- **Real-Time Telemetry & Debugging**: Visual packet tracing between nodes with latency monitors and queue metrics.
- **Hardware Bridging**: Direct bidirectional communication with UART/COM serial ports, audio stream processing, and MIDI events.
- **Process Isolation & Resilience**: Clustered execution with worker thread isolation and automated crash recovery.

### 📦 Installation & Quick Start

#### 1. Global Installation (CLI):

```bash
npm install -g techno4-threads
```

Launch Threads Studio (default port `8008` or `8000`):
```bash
techno4-threads 8008
# or using short alias:
t4-threads 8008
```

#### 2. Run Instantly via npx:

```bash
npx techno4-threads 8008
```

#### 3. Run from Source (Monorepo):

```bash
cd packages/techno4-framework2-threads
npm install
node index.js 8008 --release
```

After starting, navigate in your browser to:  
👉 **`http://localhost:8008`**

### 🧩 Extended Component Library

To expand available canvas nodes, install the official component catalog:
```bash
npm install techno4-threads-components
```

### 📚 Official Documentation
Complete documentation and developer guides:  
👉 **[https://techno4.online/надбання/фреймворк](https://techno4.online/%D0%BD%D0%B0%D0%B4%D0%B1%D0%B0%D0%BD%D0%BD%D1%8F/%D1%84%D1%80%D0%B5%D0%B9%D0%BC%D0%B2%D0%BE%D1%80%D0%BA)**

### ⚖️ License & Attribution
Distributed under the **LGPL-3.0-or-later** license.  
Published and supported by **CO «CF TECHNO4»** (`благодійна організація «БЛАГОДІЙНИЙ ФОНД ТЕХНО4»`).  
Author: **Mykola Zghurskyi** (`mykola@techno4.online`).  
Contains derivatives of Total.js Threads (MIT License).
