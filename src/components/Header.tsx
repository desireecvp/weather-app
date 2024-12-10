import weatherLogo from "../assets/weather-forecast.png";

export function Header() {
  return (
    <div>
      <header className="flex gap-3 items-center">
        <img src={weatherLogo} alt="weather Logo" className="h-18 w-20" />
        <h1 className="text-primary text-xl">Weather App</h1>
      </header>
    </div>
  );
}
