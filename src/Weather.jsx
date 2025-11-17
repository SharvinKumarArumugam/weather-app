import { useEffect, useState } from "react";
import { Spinner, Carousel } from "react-bootstrap";

export default function Weather() {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const states = [
    "Kedah", "Perlis", "Kelantan", "Terengganu", "Pahang",
    "Pulau Pinang", "Perak", "Melaka", "Negeri Sembilan",
    "Kuala Lumpur", "Johor", "Sabah", "Sarawak"
  ];

  useEffect(() => {
    async function fetchWeather() {
      try {
        const res = await fetch("https://api.data.gov.my/weather/forecast");
        if (!res.ok) throw new Error("Failed to fetch weather data");
        const data = await res.json();
        setWeatherData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchWeather();
  }, []);

  if (loading)
    return (
      <div className="text-center py-5">
        <Spinner animation="border" variant="primary" />
        <p className="mt-3">Loading weather data...</p>
      </div>
    );

  if (error)
    return <div className="alert alert-danger text-center mt-5">{error}</div>;

  // Separate state and city
  const bandarList = weatherData
    .map((item) => item.location.location_name)
    .filter(
      (name) => !states.includes(name) // exclude state names
    );

  // Filter by state and city
  const filteredData = weatherData.filter((item) => {
    const loc = item.location.location_name;
    if (selectedState && loc !== selectedState && !bandarList.includes(loc)) return false;
    if (selectedCity && loc !== selectedCity) return false;
    return true;
  });

  return (
    <div className="container py-5" style={{ background: "linear-gradient(180deg, #dff9fb, #fef5e7)" }}>
      <h1 className="text-center text-primary mb-4 fw-bold">
        🌤 Malaysia Weather Forecast
      </h1>

      {/* Filters */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-4 mb-2">
          <select
            className="form-select shadow-sm"
            value={selectedState}
            onChange={(e) => {
              setSelectedState(e.target.value);
              setSelectedCity("");
            }}
          >
            <option value="">Select Negeri</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-4 mb-2">
          <select
            className="form-select shadow-sm"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            disabled={!selectedState}
          >
            <option value="">Select Bandar</option>
            {bandarList.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Carousel for 7-day forecast */}
      <Carousel interval={null} indicators={false}>
        {filteredData
          .sort((a, b) => new Date(a.date) - new Date(b.date))
          .slice(0, 7)
          .map((item, i) => (
            <Carousel.Item key={i}>
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <div className="card shadow-lg border-0 rounded-4">
                    <div className="card-body text-center">
                      <h4 className="card-title text-primary fw-bold mb-2">
                        {item.location.location_name}
                      </h4>
                      <h6 className="text-muted mb-3">
                        {new Date(item.date).toLocaleDateString()}
                      </h6>

                      <div className="mb-3">
                        <p>🌅 <strong>Pagi:</strong> {item.morning_forecast}</p>
                        <p>🌇 <strong>Petang:</strong> {item.afternoon_forecast}</p>
                        <p>🌃 <strong>Malam:</strong> {item.night_forecast}</p>
                      </div>

                      <p className="fs-5 fw-semibold text-info mb-1">
                        🌡 {item.min_temp}°C - {item.max_temp}°C
                      </p>
                      <p className="text-warning fw-bold">
                        {item.summary_forecast} ({item.summary_when})
                      </p>
                    </div>
                    <div className="card-footer bg-transparent border-0 text-center small text-muted">
                      <em>Data from data.gov.my</em>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
      </Carousel>

      <footer className="text-center mt-5 text-muted small">
        Made with ❤️ using React + Bootstrap
      </footer>
    </div>
  );
}
