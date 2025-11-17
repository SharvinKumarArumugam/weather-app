# Weather Application React.js

<img width="1357" height="730" alt="image" src="https://github.com/user-attachments/assets/905ce9e5-57d2-488c-8168-c9f713ed344b" />

In this Weather App project, I developed a web-based application that allows users to access real-time and 7-day weather forecast information for locations in Malaysia. The weather data was obtained from the Malaysia Government Open Data API via the following endpoint **🔗 GET https://api.data.gov.my/weather/forecast.** This API provides weather details such as general forecasts, rain predictions, and live weather warnings, while earthquake alerts are handled through a separate endpoint due to their unique data format. All information is powered by **MET Malaysia (Malaysian Meteorological Department)**, the official national source for weather and atmospheric conditions. During the development process, I integrated the API into the application by implementing HTTP requests to fetch forecast data and display it dynamically based on user input. I designed the interface to be **fully responsive**, ensuring that users can conveniently check weather conditions across multiple devices including desktop browsers and mobile screens. The main use case of this system is to help users plan their daily and weekly activities, travel arrangements, and outdoor schedules more efficiently by providing accurate and up-to-date weather insights. Overall, this Weather App demonstrates my ability to work with government open data sources, process API responses, and deliver an interactive and user-responsive application.

For future improvement, I plan to add more weather attributes so users can view more detailed information. Upcoming enhancements may include:

🌦 **Hourly forecast**

🌧 **Rainfall level**

🌬 **Wind direction & speed**

🌫 **Air quality & visibility**

🌞 **Sunrise & sunset time**

I also want to improve the UI by adding a more interactive layout with icons, better color themes, and clearer data presentation. For now, the app is still limited to basic forecast details, but future updates will make it more complete and useful for all users.

**Limitations**

Currently, the weather information provided by the API is mostly available in Bahasa Melayu, which creates challenges when displaying the data to users who may prefer English or other languages. This requires additional steps such as translation, text mapping, and label conversion.

Another limitation is that some weather details require further data extraction and classification, especially for values such as rain intensity, wind speed/direction, and temperature variations. More advanced processing is needed to interpret and present this data in a clearer and more user-friendly format. Due to these factors, the current version of the app is limited to basic forecast output, and deeper weather analytics will be enhanced in future versions.

- Item 1
- Item 2
  - Sub-item
* Item 3

1. First step
2. Second step
   1. Sub-step
[GitHub](https://github.com)
[OpenWeatherMap API](https://openweathermap.org)

![Alt Text](image_url_or_path)


| Feature       | Status     |
|---------------|-----------|
| Real-time API | ✅ Working |
| 7-day forecast| ✅ Working |
| Air quality   | ⚠️ Future |


:warning: :rocket: :sunny: :cloud_rain:

- [x] API integration
- [ ] Add hourly forecast
- [ ] Improve UI responsiveness



