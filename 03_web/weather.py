import sys
import requests
from urllib.parse import urlencode

API_URL = "https://api.openweathermap.org/data/2.5/weather"
API_KEY = "d3606dad4f3cb4e5b81018dbd6ee2445"


def get_weather_data(city):
    query = urlencode({"q": city, "appid": API_KEY})
    url = f'{API_URL}?{query}'

    response = requests.get(url)
    if response.status_code != 200:
        print("Error in request! Please make sure the input "
              "is correct and try again.")
        return None

    return response.json()


def print_data(data):
    print(f'{data["name"]}, {data["sys"]["country"]}')
    print(f'Current weather: {data["weather"][0]["main"]}')
    print(f'Temperature is {(data["main"]["temp"] - 273.15):.1f}'
          + u'\N{DEGREE SIGN}' + 'C')
    print(f'Atmospheric pressure is {data["main"]["pressure"]} hPa')
    print(f'Humidity is {data["main"]["humidity"]}%')


def main():
    if len(sys.argv) < 2:
        raise IOError("Expected location as first argument")

    city = sys.argv[1]
    data = get_weather_data(city)
    if data is not None:
        print_data(data)


if __name__ == "__main__":
    main()
